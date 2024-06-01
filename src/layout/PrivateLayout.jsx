import {Link, Outlet, useNavigate} from "react-router-dom";
import { RiCalendar2Fill, RiCalendarScheduleFill, RiHome2Fill, RiHome3Fill, RiMailAddFill, RiMenuFill, RiMessage3Fill, RiShoppingBag4Fill, RiShoppingCart2Fill, RiWallet3Fill } from "react-icons/ri";
import useAdmin from "../hooks/useAdmin.jsx";

const PrivateLayout = () => {
    const [isAdmin] = useAdmin();
    const navigate = useNavigate();

    if (isAdmin) {
        navigate('/admin');
    }

    return (
        <>
            <div className='w-full min-h-screen flex'>
                <div className='min-h-screen min-w-[280px] w-max bg-[#D1A054] sticky top-0'>
                    <div className='p-6 font-cinzel space-y-2'>
                        <h1 className='font-bold text-3xl'>BISTRO BOSS</h1>
                        <h5 className='font-semibold text-2xl'>Restaurant</h5>
                    </div>
                    <div className='p-6 space-y-6 text-lg font-medium uppercase'>
                        <div className='grid gap-4 *:flex *:gap-2 *:items-center'>
                            <Link to='/dashboard'><RiHome3Fill/> User Home</Link>
                            <Link to='/dashboard/reservation'><RiCalendar2Fill/> Reservation</Link>
                            <Link to='/dashboard/payment-history'><RiWallet3Fill/> Payment History</Link>
                            <Link to='/dashboard/cart'><RiShoppingCart2Fill/> My Cart</Link>
                            <Link to='/dashboard/review'><RiMessage3Fill/> Add Review</Link>
                            <Link to='/dashboard/booking'><RiCalendarScheduleFill/> My Booking</Link>
                        </div>
                        <div className="divider"></div>
                        <div className='grid gap-4 *:flex *:gap-2 *:items-center'>
                            <Link to='/'><RiHome2Fill/> Home</Link>
                            <Link to='/menu'><RiMenuFill/> Menu</Link>
                            <Link to='/shop'><RiShoppingBag4Fill/> Shop</Link>
                            <Link to='/contact'><RiMailAddFill/> Contact</Link>
                        </div>
                    </div>
                </div>

                <Outlet/>
            </div>
        </>
    );
};

export default PrivateLayout;
