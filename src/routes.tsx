import { createBrowserRouter } from "react-router-dom";
import Editor from "./pages/editor";
import Root from "./pages/root";
import Home from "./pages/home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/editor",
        element: <Editor />,
      },
    ],
  },
]);

export default routes;
