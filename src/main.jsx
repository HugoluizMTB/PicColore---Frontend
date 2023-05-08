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
import { AuthProvider } from "./Contexts/auth";
import useAuth from "./hooks/useAuth";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <LoginPage />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Private Item={<Root />} />,
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
  {
    path: "signup",
    element: <SignUpPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>
);
