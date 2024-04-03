import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./components/theme-provides";
import { RouterProvider } from "react-router-dom";
import routes from "./routes"
import "./globals.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={routes} />
    </ThemeProvider>
  </React.StrictMode>
);
