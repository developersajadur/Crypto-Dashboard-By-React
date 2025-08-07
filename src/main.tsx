import { createRoot } from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import React from "react";
import router from "./routes/router";




createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
