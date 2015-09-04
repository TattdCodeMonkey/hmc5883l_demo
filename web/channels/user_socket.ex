defmodule Hmc5883lDemo.UserSocket do
  use Phoenix.Socket

  ## Channels
  channel "compass:*", Hmc5883lDemo.CompassChannel

  ## Transports
  transport :websocket, Phoenix.Transports.WebSocket
  transport :longpoll, Phoenix.Transports.LongPoll

  def connect(_params, socket), do: {:ok, socket}

  def id(_socket), do: nil
end
