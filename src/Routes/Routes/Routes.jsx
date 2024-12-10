import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../../RootLayout/Main";
import Home from "../../Homepage/Home/Home";
import AllTests from "../../Pages/AllTests/AllTests";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/allTests",
          element: <AllTests></AllTests>
        },
        {
          path: "/logIn",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
      ]
    },
  ]);