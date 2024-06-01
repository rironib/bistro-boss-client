import {createBrowserRouter} from "react-router-dom";
import PrivateRoute from "./PrivateRoute.jsx";
import AdminRoute from "./AdminRoute.jsx";
import Root from "../layout/Root.jsx";
import Error from "../pages/Public/Error/Error.jsx";
import PublicLayout from "../layout/PublicLayout.jsx";
import Home from "../pages/Public/Home/Home.jsx";
import Login from "../pages/Public/Auth/Login/Login.jsx";
import Register from "../pages/Public/Auth/Register/Register.jsx";
import Contact from "../pages/Public/Contact/Contact.jsx";
import Menu from "../pages/Public/Menu/Menu.jsx";
import Shop from "../pages/Public/Shop/Shop.jsx";
import PrivateLayout from "../layout/PrivateLayout.jsx";
import DBHome from "../pages/Private/DBHome/DBHome.jsx";
import Reservation from "../pages/Private/Reservation/Reservation.jsx";
import PaymentHistory from "../pages/Private/PaymentHistory/PaymentHistory.jsx";
import Cart from "../pages/Private/Cart/Cart.jsx";
import Review from "../pages/Private/Review/Review.jsx";
import Booking from "../pages/Private/Booking/Booking.jsx";
import ALlUsers from "../pages/Admin/AllUsers/AllUsers.jsx";
import AddItems from "../pages/Admin/AddItems/AddItems.jsx";
import ManageItems from "../pages/Admin/ManageItems/ManageItems.jsx";
import UpdateItem from "../pages/Admin/UpdateItem/UpdateItem.jsx";
import Payment from "../pages/Private/Payment/Payment.jsx";
import AdminLayout from "../layout/AdminLayout.jsx";
import AdminHome from "../pages/Admin/AdminHome/AdminHome.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element: <PublicLayout/>,
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

            // Private Routes
            {
                path: '/dashboard',
                element: <PrivateRoute><PrivateLayout/></PrivateRoute>,
                children: [
                    {
                        path: '/dashboard',
                        element: <DBHome/>
                    },
                    {
                        path: '/dashboard/payment',
                        element: <Payment/>
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
                ]
            },

            // Admin Routes
            {
                path: '/admin',
                element: <AdminRoute><AdminLayout/></AdminRoute>,
                children: [
                    {
                        path: '/admin',
                        element: <AdminHome/>
                    },
                    {
                        path: '/admin/add-items',
                        element: <AddItems/>
                    },
                    {
                        path: '/admin/manage-items',
                        element: <ManageItems/>
                    },
                    {
                        path: '/admin/manage-bookings',
                        element: <DBHome/>
                    },
                    {
                        path: '/admin/all-users',
                        element: <ALlUsers/>
                    },
                    {
                        path: '/admin/update/:id',
                        element: <UpdateItem/>,
                        loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
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
        ]
    },
]);

export default router;