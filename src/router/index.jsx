

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";

import Layout from "../pages/Layout/Layout";
import Home from "../pages/Home";
import SingleBlog from "../pages/SingleBlog";
import CreateBlog from "../pages/CreateBlog";
import NotFound from "../pages/NotFound";

import Auth from "../pages/Auth";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "blog/:id",
                element: <SingleBlog/>
            },
            {
                path: "/createblog",
                element: <CreateBlog/>
            }
        ]
    },
    {
        path: "/auth",
        element: <Auth/>,
        children: [
            {
                path: "login",
                element: <Login/>,
               
            },
            {
                path: "registration",
                element: <Registration/>,
            }
        ]
    },
    
   
]);

export default router;