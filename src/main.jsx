import React from "react";
// import App from './App.jsx'
import Root from "./routes/root";
import "./index.css";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import Details from "./components/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
    path: "/details/:linkId",
    element: <Details/>,
    errorElement: <ErrorPage />,
  },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
