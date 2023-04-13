import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root, { loader as rootLoader } from "./routes/root";
import ErrorPage from "./routes/error-page";
import Clients from "./routes/Clients";
import Events from "./routes/Events";
import Users from "./routes/Users";
import Reports from "./routes/Reports";


import { ProSidebarProvider } from "react-pro-sidebar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: "clients",
        element: <Clients />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
    ],
  },
  {
    path: "clients",
    element: <Clients />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
