defmodule Hmc5883lDemo.PageControllerTest do
  use Hmc5883lDemo.ConnCase

  test "GET /" do
    conn = get conn(), "/"
    assert html_response(conn, 200) =~ "Welcome to Phoenix!"
  end
end
