
import {
    createBrowserRouter,
  } from "react-router-dom";
import Header from "../Header";
import Home from "../Components/Home";
import Banner from "../Components/Banner";
import Brands from "../Pages/Brands";
import Register from "../Pages/Register";
import Login from "../Pages/Login";

    
    const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children: [
        {
          path: "/",
          element: <Banner></Banner>
        },
        {
          path: "/brands",
          element: <Brands></Brands>,
          loader: () => fetch("coupon.json")
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/login",
          element: <Login></Login>
        }
      ]
    },
  ]);

  


export default router;