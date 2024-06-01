import {Helmet} from "react-helmet-async";
import { RiBowlFill, RiCalendar2Fill, RiPhoneFill, RiShoppingCart2Fill, RiStarFill, RiStore2Fill, RiWallet2Fill } from "react-icons/ri";
import useAuth from "../../../hooks/useAuth.jsx";

const PrivateHome = () => {
    const {user} = useAuth();

    return (
        <>
            <Helmet>
                <title>Dashboard | Bistro Boss</title>
            </Helmet>
            <main className='w-full bg-[#F6F6F6] p-6 space-y-6'>
                <div className='font-cinzel font-semibold text-3xl'>Hi, Welcome Back!</div>
                <div className='grid grid-cols-3 gap-12'>
                    <div
                        className='flex justify-center items-center gap-8 py-6 px-8 bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] text-white rounded-lg'>
                        <RiBowlFill className='text-6xl'/>
                        <div className='space-y-2'>
                            <h3 className='font-semibold text-2xl'>1000</h3>
                            <p>Menu</p>
                        </div>
                    </div>
                    <div
                        className='flex justify-center items-center gap-8 py-6 px-8 bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] text-white rounded-lg'>
                        <RiStore2Fill className='text-6xl'/>
                        <div className='space-y-2'>
                            <h3 className='font-semibold text-2xl'>1000</h3>
                            <p>Shop</p>
                        </div>
                    </div>
                    <div
                        className='flex justify-center items-center gap-8 py-6 px-8 bg-gradient-to-r from-[#FE4880] to-[#FECDE9] text-white rounded-lg'>
                        <RiPhoneFill className='text-6xl'/>
                        <div className='space-y-2'>
                            <h3 className='font-semibold text-2xl'>1000</h3>
                            <p>Contact</p>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2'>
                    <div className='bg-[#FFEDD5] grid justify-items-center items-center p-20 space-y-6'>
                        <img src={user.photoURL} alt={user.displayName} className='w-40 h-40 bg-white border-2 border-[#D3A256] rounded-full'/>
                        <div className='font-cinzel font-semibold text-2xl'>
                            {user.displayName}
                        </div>
                    </div>
                    <div className='bg-[#FEF9C3] p-20 font-cinzel space-y-6'>
                        <div className='font-semibold text-3xl'>Your Activities</div>
                        <div className='space-y-1 text-lg font-semibold'>
                            <div className='flex items-center gap-2 text-[#0088FE]'>
                                <RiShoppingCart2Fill/> Orders: 6
                            </div>
                            <div className='flex items-center gap-2 text-[#00C4A1]'>
                                <RiStarFill/> Reviews: 2
                            </div>
                            <div className='flex items-center gap-2 text-[#FFBB28]'>
                                <RiCalendar2Fill/> Bookings: 1
                            </div>
                            <div className='flex items-center gap-2 text-[#FF8042]'>
                                <RiWallet2Fill/> Payment:3
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default PrivateHome;
