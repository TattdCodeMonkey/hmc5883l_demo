defmodule Hmc5883lDemo.MockCompass do
  use GenServer

  @send_interval 200
  @inc_int 0.5

  def start_link() do
    {:ok, pid} = GenServer.start_link(__MODULE__, [])

    Process.send_after(pid,:send_data, @send_interval)

    {:ok, pid}
  end

  def init(_), do: {:ok, %{heading: 0.0}}

  def handle_info(:send_data, state) do
    Process.send_after(self(), :send_data, @send_interval)
    {:noreply, send_data(state)}
  end

  def send_data(state) do
    inc_heading = increment_heading(state.heading)
    new_state = %{state| heading: inc_heading}
    Hmc5883lDemo.Endpoint.broadcast!("compass:data", "heading", %{heading: inc_heading})

    new_state
  end

  def increment_heading(360), do: 0
  def increment_heading(heading), do: heading + @inc_int

end
