import {useQuery} from "@tanstack/react-query";
import {axiosSecure} from "../../../hooks/useAxiosSecure.jsx";
import {RiDeleteBinFill, RiTeamFill} from "react-icons/ri";
import Swal from "sweetalert2";

const ALlUsers = () => {
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const handleUserRole = (user) => {
        console.log(user);
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
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div className='w-full min-h-screen bg-[#F6F6F6] py-8 px-20'>
            <div className='grid justify-center gap-2 mb-6 text-center font-inter'>
                <h5 className='text-[#D99904] italic'>---How many??---</h5>
                <div className='w-max py-2 px-6 font-bold text-3xl border-y-2'>
                    MANAGE ALL USERS
                </div>
            </div>
            <div className='bg-white p-6'>
                <div className='flex justify-between items-center mb-5 text-xl font-semibold uppercase'>
                    <div>Total users: 9</div>
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
                                        <button onClick={() => handleUserRole(user)}
                                                className="btn bg-[#D1A054] text-white text-lg">
                                            <RiTeamFill/>
                                        </button>
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
    );
};

export default ALlUsers;
