defmodule Hmc5883lDemo.PageController do
  use Hmc5883lDemo.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
