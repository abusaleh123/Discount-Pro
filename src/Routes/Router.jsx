
import {
    createBrowserRouter,
  } from "react-router-dom";
import Header from "../Header";
import Home from "../Components/Home";
import Banner from "../Components/Banner";
import Brands from "../Pages/Brands";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import PrivateRoute from "../PrivateRoute";
import BrandDetails from "../Pages/BrandDetails";
import MyProfile from "../Pages/MyProfile";
import UpdateInformation from "../Pages/UpdateInformation";

    
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
        },
        {
          path: "/brand/:id",
          element: <PrivateRoute>
            <BrandDetails></BrandDetails>
          </PrivateRoute>,
          loader: ({params}) => fetch(`/coupon.json`).then((res) => res.json())
        },
        {
          path: "/my-profile",
          element: <MyProfile></MyProfile>
        },
        {
          path: "/update",
          element: <UpdateInformation></UpdateInformation>
        }
      ]
    },
  ]);

  


export default router;