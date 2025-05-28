import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import First from "./First";
import Movie from "./Movie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <First />,
    children: [
      { index: true, element: <App /> },
      { path: "/movie/:id", element: <Movie /> },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
