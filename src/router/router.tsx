

import App from "@/App";
import { createBrowserRouter } from "react-router";
import { lazy, Suspense } from "react";
import { LoadingFallback } from "@/Pages/LoadingFallBack";

// Lazy loaded components
const DashBoardHome = lazy(() => import("@/components/Layout/Dashboard/DashBoardHome"));
const Home = lazy(() => import("@/components/modules/TaskManagement/Home"));
const Login = lazy(() => import("@/Pages/Login"));
const Blogs = lazy(() => import("@/Pages/Blogs"));
const About = lazy(() => import("@/Pages/About"));
import { AuthGuard } from "@/Pages/AuthGuard";


export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        Component: Home
      },
      {
        path: "/login",
        Component: Login
      },
      {
        path: "/blogs",
        Component: Blogs
      },
      {
        path: "/about",
        Component: About
      },
      {
        path: "/dashboard",
        element: (
          <AuthGuard>
            <DashBoardHome />
          </AuthGuard>
        )
      },
    ]
  },
  {
    children: [
      {
        path: "/dashboard",
        element: (
          <AuthGuard>
            <DashBoardHome />
          </AuthGuard>
        )
      },
    ]
  }
])