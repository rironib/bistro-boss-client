import {createBrowserRouter} from "react-router-dom";
import Root from "../layout/Root.jsx";
import ErrorPage from "../pages/ErrorPage/ErrorPage.jsx";
import Main from "../layout/Main.jsx";
import Home from "../pages/Home/Home.jsx";
import Login from "../pages/Login/Login.jsx";
import Register from "../pages/Register/Register.jsx";
import Contact from "../pages/Contact/Contact.jsx";
import Menu from "../pages/Menu/Menu.jsx";
import Shop from "../pages/Shop/Shop.jsx";
import Dashboard from "../pages/Dashboard/Dashboard.jsx";
import PrivateRoute from "./PrivateRoute.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Main/>,
                children: [
                    {
                        path: '/',
                        element: <Home/>
                    },
                    {
                        path: '/contact',
                        element: <Contact/>
                    },
                    {
                        path: '/menu',
                        element: <Menu/>
                    },
                    {
                        path: '/shop',
                        element: <Shop/>
                    },
                    {
                        path: '/shop/:category',
                        element: <Shop/>
                    },
                    {
                        path: '/dashboard',
                        element: <PrivateRoute><Dashboard/></PrivateRoute>
                    }
                ]
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            }
        ]
    },
]);

export default router;