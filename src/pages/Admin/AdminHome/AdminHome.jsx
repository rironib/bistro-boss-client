import {Helmet} from "react-helmet-async";
import {RiBowlFill, RiCaravanFill, RiTeamFill, RiWallet3Fill} from "react-icons/ri";
import useAxiosSecure from "../../../hooks/useAxiosSecure.jsx";
import {useQuery} from "@tanstack/react-query";

const AdminHome = () => {
    const axiosSecure = useAxiosSecure();

    const {data: stats} = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/api/admin/stats');
            return res.data;
        }
    })

    console.log(stats)

    return (
        <>
            <Helmet>
                <title>Admin Dashboard | Bistro Boss</title>
            </Helmet>
            <main className='w-full bg-[#F6F6F6] p-6 space-y-6'>
                <div className='font-cinzel font-semibold text-3xl'>Hi, Welcome Back!</div>
                <div className='grid grid-cols-4 gap-12'>
                    <div
                        className='flex justify-evenly items-center gap-4 py-6 px-8 bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] text-white rounded-lg'>
                        <RiWallet3Fill className='text-6xl'/>
                        <div className='space-y-1'>
                            <h3 className='font-semibold text-2xl'>${stats?.revenue}</h3>
                            <p>Revenue</p>
                        </div>
                    </div>
                    <div
                        className='flex justify-evenly items-center gap-4 py-6 px-8 bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] text-white rounded-lg'>
                        <RiTeamFill className='text-6xl'/>
                        <div className='space-y-1'>
                            <h3 className='font-semibold text-2xl'>{stats?.users}</h3>
                            <p>Customers</p>
                        </div>
                    </div>
                    <div
                        className='flex justify-evenly items-center gap-4 py-6 px-8 bg-gradient-to-r from-[#FE4880] to-[#FECDE9] text-white rounded-lg'>
                        <RiBowlFill className='text-6xl'/>
                        <div className='space-y-1'>
                            <h3 className='font-semibold text-2xl'>{stats?.items}</h3>
                            <p>Products</p>
                        </div>
                    </div>
                    <div
                        className='flex justify-evenly items-center gap-4 py-6 px-8 bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] text-white rounded-lg'>
                        <RiCaravanFill className='text-6xl'/>
                        <div className='space-y-1'>
                            <h3 className='font-semibold text-2xl'>{stats?.orders}</h3>
                            <p>Orders</p>
                        </div>
                    </div>
                </div>
                <div className='bg-white p-8 grid grid-cols-2 gap-12'>
                    <div></div>
                    <div></div>
                </div>
            </main>
        </>
    );
};

export default AdminHome;
