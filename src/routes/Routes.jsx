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
import AddItems from "../pages/Admin/AddItems/AddItems.jsx";
import AdminRoute from "./AdminRoute.jsx";
import ManageItems from "../pages/Admin/ManageItems/ManageItems.jsx";
import UpdateItem from "../pages/Admin/UpdateItem/UpdateItem.jsx";
import Payment from "../pages/Private/Payment/Payment.jsx";

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

                    // Admin Routes
                    {
                        path: '/dashboard/admin',
                        element: <AdminRoute><DBHome/></AdminRoute>
                    },
                    {
                        path: '/dashboard/add-items',
                        element: <AdminRoute><AddItems/></AdminRoute>
                    },
                    {
                        path: '/dashboard/manage-items',
                        element: <AdminRoute><ManageItems/></AdminRoute>
                    },
                    {
                        path: '/dashboard/manage-bookings',
                        element: <AdminRoute><DBHome/></AdminRoute>
                    },
                    {
                        path: '/dashboard/all-users',
                        element: <AdminRoute><ALlUsers/></AdminRoute>
                    },
                    {
                        path: '/dashboard/update/:id',
                        element: <AdminRoute><UpdateItem/></AdminRoute>,
                        loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
                    }
                ]
            }
        ]
    },
]);

export default router;