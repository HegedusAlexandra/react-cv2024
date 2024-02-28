import Main from "./Main";
import Projects from "./screens/Projects";
import {createBrowserRouter} from "react-router-dom"

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
    },
    {
      path: "/:slug",
      element: <Main/>,
    },
    {
      path: "/projects",
      element: <Projects/>,
    },    
  ]);