import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes";

export const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
