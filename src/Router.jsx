import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import First from "./First";
import Movie from "./Movie";
import  Clickmovies  from "./clickmovies";
import { Clicktvshow } from "./Clicktvshow";




const router = createBrowserRouter([
  {
    path: "/",
    element: <First />,
    children: [
      { index: true, element: <App /> },
      { path: "/movie/:id", element: <Movie /> },
      { path: "/Searchmovies", element: <Clickmovies /> },
      { path: "/Searchtvshow", element: <Clicktvshow /> },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
