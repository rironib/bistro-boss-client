import {Link, NavLink, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import useCart from "../../hooks/useCart.jsx";
import useAuth from "../../hooks/useAuth.jsx";

const Header = () => {
    const {user, logOut} = useAuth();
    const [cart] = useCart();
    const navigate = useNavigate();

    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success("Logout successfully");
                navigate('/login');
            })
            .catch((err) => toast.error(err));
    }

    const navMenu = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/dashboard'>Dashboard</NavLink>
        <NavLink to='/menu'>Our Menu</NavLink>
        <NavLink to='/shop'>Our Shop</NavLink>
        <NavLink to='/contact'>Contact us</NavLink>
    </>

    const userMenu = user ? (
            <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={user.photoURL} alt={user.displayName} />
                        </div>
                    </div>
                    <ul tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] gap-2 p-4 shadow bg-base-100 text-black rounded-box w-52">
                        <li>{user.displayName}</li>
                        <li><button onClick={handleLogout} className='btn btn-active'>Logout</button></li>
                    </ul>
                </div>
        ) : (
            <>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            </>
    )

    return (
        <header className='w-full bg-slate-900 bg-opacity-50 text-white fixed z-20'>
            <div className="w-11/12 lg:w-10/12 max-w-[1275px] mx-auto py-2">
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-3'>
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M4 6h16M4 12h8m-8 6h16"/>
                                </svg>
                            </div>
                            <ul tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded border w-max space-y-2">
                                {navMenu}
                            </ul>
                        </div>
                        <div className="font-cinzel">
                            <Link to='/' className='font-bold text-xl lg:text-3xl'>BISTRO BOSS</Link>
                        </div>
                    </div>

                    <div className='hidden lg:flex gap-4 font-semibold font-inter uppercase'>
                        {navMenu}
                    </div>
                    <div className="flex items-center gap-4">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <Link to='/dashboard/cart' className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                     viewBox="0 0 24 24"
                                     stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                                </svg>
                                <span className="badge badge-sm indicator-item">{cart.length}</span>
                            </Link>
                        </div>
                        <div className='hidden lg:flex gap-4 font-semibold font-inter uppercase'>
                            {userMenu}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
