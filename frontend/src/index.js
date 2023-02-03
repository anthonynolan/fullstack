import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AddGoal from "./routes/AddGoal";
import Goal from "./routes/Goal";
import App, { loader as rootLoader } from "./routes/App";
import { loader as goalLoader } from "./routes/Goal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: rootLoader,
    children: [
      {
        path: "addGoal",
        element: <AddGoal />,
      },
      {
        path: "goalDetail/:goalId",
        element: <Goal />,
        loader: goalLoader,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
