import React from "react";
import { useRoutes } from "react-router-dom";
import { RequireAuth } from "./context/RequireAuth";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import LogIn from "./pages/Login";
import NewReg from "./pages/NewReg";
import RregisteredVehicles from "./pages/RregisteredVehicles";

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <RequireAuth>
          <Dashboard />
        </RequireAuth>
      ),
      children: [
        {
          path: "main",
          element: <Home />
        },
        {
          path: "new-registration",
          element: <NewReg />
        },
        {
          path: "registered-vehicles",
          element: <RregisteredVehicles />
        }
      ]
    },
    {
      path: "login",
      element: <LogIn />
    }
  ]);
  return routes;
}
