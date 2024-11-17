
import {
    createBrowserRouter,
  } from "react-router-dom";
import Header from "../Header";
import Home from "../Components/Home";
import Banner from "../Components/Banner";

    
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
          element: <h2>Brands</h2>
        }
      ]
    },
  ]);

  


export default router;