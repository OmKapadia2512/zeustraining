import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import Home from './components/Home/Home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
        {
            path:"",
            element:<Home/>
        },{
            path:"login",
            element:<Login/>
        },{
            path:"register",
            element:<Registration/>
        }
    ]
  }
]);

export default router;
