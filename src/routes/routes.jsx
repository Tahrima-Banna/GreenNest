import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import PlantsPage from './../pages/PlantsPage';
import MyProfile from "../pages/MyProfile";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateRouter from "../privaterouter/PrivateRouter";
import ErrorPage from "../pages/ErrorPage";


export const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                index:true,
                element:<HomePage></HomePage>
            },
            {
                path:"/plants",
                element:<PlantsPage></PlantsPage>
            },
            {
                path:"/profile",
                element:(<PrivateRouter><MyProfile></MyProfile></PrivateRouter>)
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
        ]
       
    },
     
])