import { createBrowserRouter } from "react-router-dom";
import Editor from "./pages/editor";
import Root from "./pages/Root";
import Home from "./pages/home";

const routes = createBrowserRouter([
  {
    path:"/",
    element: <Root />,
  },
  {
    path:"/editor",
    element:<Editor />,
  },
  {
    path:"/home",
    element: <Home />,
  }
])

export default routes;