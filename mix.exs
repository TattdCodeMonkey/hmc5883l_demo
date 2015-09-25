defmodule Hmc5883lDemo.Mixfile do
  use Mix.Project

  def project do
    [app: :hmc5883l_demo,
     version: "0.0.1",
     elixir: "~> 1.0",
     elixirc_paths: elixirc_paths(Mix.env),
     compilers: [:phoenix] ++ Mix.compilers,
     build_embedded: Mix.env == :prod,
     start_permanent: Mix.env == :prod,
     deps: deps ++ deps(operating_system)]
  end

  def application do
    [mod: {Hmc5883lDemo, []},
     applications: [:phoenix, :phoenix_html, :cowboy, :logger,
                    :phoenix_ecto, :postgrex] ++ otp_apps(operating_system)]
  end

  def otp_apps("Linux"), do: [:hmc5883l]
  def otp_apps(_), do: []

  defp elixirc_paths(:test), do: ["lib", "web", "test/support"]
  defp elixirc_paths(_),     do: ["lib", "web"]

  defp deps do
    [
      {:phoenix, "~> 1.0.0"},
      {:phoenix_ecto, "~> 1.1"},
      {:postgrex, ">= 0.0.0"},
      {:phoenix_html, "~> 2.1"},
      {:phoenix_live_reload, "~> 1.0", only: :dev},
      {:cowboy, "~> 1.0"}
    ]
  end

  defp deps("Linux") do
    [
      {:mon_handler, "~>1.0"},
      {:hmc5883l, github: "tattdcodemonkey/hmc5883l"}
    ]
  end

  defp deps(_) do
    []
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
