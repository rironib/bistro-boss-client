import {createBrowserRouter} from "react-router-dom";
import PrivateRoute from "./PrivateRoute.jsx";
import Root from "../layout/Root.jsx";
import ErrorPage from "../pages/ErrorPage/ErrorPage.jsx";
import Main from "../layout/Main.jsx";
import Home from "../pages/Home/Home.jsx";
import Login from "../pages/Login/Login.jsx";
import Register from "../pages/Register/Register.jsx";
import Contact from "../pages/Contact/Contact.jsx";
import Menu from "../pages/Menu/Menu.jsx";
import Shop from "../pages/Shop/Shop.jsx";
import Dashboard from "../layout/Dashboard.jsx";
import DBHome from "../pages/Dashboard/DBHome/DBHome.jsx";
import Reservation from "../pages/Dashboard/Reservation/Reservation.jsx";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory.jsx";
import Cart from "../pages/Dashboard/Cart/Cart.jsx";
import Review from "../pages/Dashboard/Review/Review.jsx";
import Booking from "../pages/Dashboard/Booking/Booking.jsx";
import ALlUsers from "../pages/Admin/AllUsers/AllUsers.jsx";

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
            },
            {
                path: '/dashboard',
                element: <PrivateRoute><Dashboard/></PrivateRoute>,
                children: [
                    {
                        path: '/dashboard',
                        element: <DBHome/>
                    },
                    {
                        path: '/dashboard/reservation',
                        element: <Reservation/>
                    },
                    {
                        path: '/dashboard/payment-history',
                        element: <PaymentHistory/>
                    },
                    {
                        path: '/dashboard/cart',
                        element: <Cart/>
                    },
                    {
                        path: '/dashboard/review',
                        element: <Review/>
                    },
                    {
                        path: '/dashboard/booking',
                        element: <Booking/>
                    },

                    // Admin Routes
                    {
                        path: '/dashboard/admin',
                        element: <DBHome/>
                    },
                    {
                        path: '/dashboard/add-items',
                        element: <DBHome/>
                    },
                    {
                        path: '/dashboard/manage-items',
                        element: <DBHome/>
                    },
                    {
                        path: '/dashboard/manage-bookings',
                        element: <DBHome/>
                    },
                    {
                        path: '/dashboard/all-users',
                        element: <ALlUsers/>
                    },
                ]
            }
        ]
    },
]);

export default router;