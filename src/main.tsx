import { init } from "@/lib/db";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provides";
import "./globals.css";
import routes from "./routes";

init();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={routes} />
    </ThemeProvider>
  </React.StrictMode>
);
