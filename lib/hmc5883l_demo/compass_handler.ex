defmodule Hmc5883lDemo.CompassHandler do
  use GenEvent

  def init(_) do
    {:ok, %{raw: %{}, scaled: %{}, heading: 0.0}}
  end

  def handle_event({:raw_reading, msg}, state) do
    {x, y, z} = msg
    raw_data = %{x: x, y: y, z: z}
    new_state = %{state| raw: raw_data}

    broadcast_update("raw", raw_data)

    {:ok, new_state}
  end

  def handle_event({:scaled_reading, msg}, state) do
    {x, y, z} = msg
    scaled_data = %{x: x, y: y, z: z}
    new_state = %{state| scaled: scaled_data}

    broadcast_update("scaled", scaled_data)

    {:ok, new_state}
  end

  def handle_event({:heading, msg}, state) do
    new_state = %{state| heading: msg}

    broadcast_update("heading", %{heading: msg})

    {:ok, new_state}
  end

  def handle_event(_, state), do: {:ok, state}

  def broadcast_update(topic, data) do
    Hmc5883lDemo.Utilities.broadcast_compass_data(topic, data)
  end
end
