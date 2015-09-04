defmodule Hmc5883lDemo.CompassChannel do
  use Phoenix.Channel

  def join("compass:data", _auth_msg, socket) do

    {:ok, socket}
  end

  def join("compass:" <> topic_id, _auth_msg, _socket) do
    {:error, %{reason: "unsupported topic #{topic_id}"}}
  end
end
