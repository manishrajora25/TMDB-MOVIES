import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import First from "./First";
import Movie from "./Movie";
import TvShow from "./TvShow";
import  Clickmovies  from "./Clickmovies";
import { Clicktvshow } from "./Clicktvshow";




const router = createBrowserRouter([
  {
    path: "/",
    element: <First />,
    children: [
      { index: true, element: <App /> },
      { path: "/movie/:id", element: <Movie /> },
      {path: "/TvShow/:id", element:<TvShow/>},
      { path: "/Searchmovies", element: <Clickmovies /> },
      { path: "/Searchtvshow", element: <Clicktvshow /> },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
