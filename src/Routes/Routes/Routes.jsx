import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../../RootLayout/Main";
import Home from "../../Homepage/Home/Home";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        }
      ]
    },
  ]);