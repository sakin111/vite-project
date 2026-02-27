

import App from "@/App";
import DashBoardHome from "@/components/Layout/Dashboard/DashBoardHome";
import Home from "@/components/modules/Home";
import Login from "@/Pages/Login";
import Registration from "@/Pages/Registration";

import { createBrowserRouter } from "react-router";


export const router = createBrowserRouter([
    {
        Component: App,
        path:"/",
        children: [
          {
            path:"/",
            Component: Home
          },
          {
            path:"/login",
            Component: Login
          },
          {
            path:"/register",
            Component: Registration
          },
          {
            path:"/dashboard",
            Component: DashBoardHome
          },
        ]
    }
])