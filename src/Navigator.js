import Main from "./Main";
import {createBrowserRouter} from "react-router-dom"

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
    },
    {
      path: "/:slug",
      element: <Main/>,
    }   
  ]);