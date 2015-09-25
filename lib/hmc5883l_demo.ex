defmodule Hmc5883lDemo do
  use Application

  # See http://elixir-lang.org/docs/stable/elixir/Application.html
  # for more information on OTP Applications
  def start(_type, _args) do
    import Supervisor.Spec, warn: false

    children = [
      # Start the endpoint when the application starts
      supervisor(Hmc5883lDemo.Endpoint, []),
      # Start the Ecto repository
      worker(Hmc5883lDemo.Repo, [])
    ] #++ Hmc5883lDemo.Utilities.operating_system |> compass

    compass_child = Hmc5883lDemo.Utilities.operating_system |> compass
    opts = [strategy: :one_for_one, name: Hmc5883lDemo.Supervisor]
    Supervisor.start_link(children ++ compass_child, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  def config_change(changed, _new, removed) do
    Hmc5883lDemo.Endpoint.config_change(changed, removed)
    :ok
  end

  def compass("Linux"), do: Hmc5883lDemo.Utilities.compass_handler_worker
  def compass(_), do: Hmc5883lDemo.Utilities.mock_compass_worker

end
