defmodule Hmc5883lDemo.Utilities do
  require Logger

  def broadcast_compass_data(event, data) do
    try do
      Hmc5883lDemo.Endpoint.broadcast!("compass:data", event, data)
    rescue
      x -> Logger.error "Failed to broadcast compass data to channel"
    end
  end

  def mock_compass_worker do
    import Supervisor.Spec, warn: false

    [worker(Hmc5883lDemo.MockCompass, [])]
  end

  def compass_handler_worker do
    import Supervisor.Spec, warn: false

    [worker(MonHandler, [compass_handler_config])]
  end

  def compass_handler_config do
    MonHandler.get_config(HMC5883L.Utilities.event_manager, Hmc5883lDemo.CompassHandler, [])
  end

  def operating_system do
    case Application.get_env(:hmc5883l_demo, :operating_system) do
      nil ->
        Port.open({:spawn, "uname"}, [])

        os = receive do
          {_port, {:data, result}} -> result
          error -> error
        end

        result = os
        |> to_string
        |> String.replace("\n", "")

        :application.set_env(:hmc5883l_demo, :operating_system, result)

        result
      os_value -> os_value
    end
  end
end
