import {useQuery} from "@tanstack/react-query";
import {RiDeleteBinFill, RiTeamFill} from "react-icons/ri";
import Swal from "sweetalert2";
import {toast} from "react-toastify";
import useAxiosSecure from "../../../hooks/useAxiosSecure.jsx";
import {Helmet} from "react-helmet-async";
import SectionTitle from "../../../components/Shared/SectionTitle.jsx";

const ALlUsers = () => {
    const axiosSecure = useAxiosSecure();

    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const handleUserRole = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                    toast.success("Successfully promoted!");
                }
            })
    }

    const handleDelete = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((res) => {
            if (res.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            toast.success('User has been deleted.')
                        }
                    })
            }
        });
    }

    return (
        <>
            <Helmet>
                <title>All Users | Bistro Boss</title>
            </Helmet>
            <div className='w-full min-h-screen bg-[#F6F6F6] py-8 px-20'>
                <SectionTitle heading={'MANAGE ALL USERS'} subheading={'---How many??---'}/>

                <div className='bg-white p-6'>
                    <div className='flex justify-between items-center mb-5 text-xl font-semibold uppercase'>
                        <div>Total users: {users?.length}</div>
                    </div>
                    <div className="w-full overflow-x-auto rounded-xl">
                        <table className="table">
                            <thead className='bg-[#D1A054] text-base text-white uppercase'>
                            <tr>
                                <th>#</th>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>ROLE</th>
                                <th>ACTION</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                users.map((user, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            {user.role === 'admin' ? 'Admin' : (
                                                <button onClick={() => handleUserRole(user)}
                                                        className="btn bg-[#D1A054] text-white text-lg">
                                                    <RiTeamFill/>
                                                </button>
                                            )}
                                        </td>
                                        <td>
                                            <button onClick={() => handleDelete(user)}
                                                    className="btn bg-[#B91C1C] text-white text-lg">
                                                <RiDeleteBinFill/>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ALlUsers;
