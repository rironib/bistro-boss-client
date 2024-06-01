import useMenu from "../../../hooks/useMenu.jsx";
import {Helmet} from "react-helmet-async";
import {RiDeleteBinFill, RiEditBoxLine} from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure.jsx";
import {toast} from "react-toastify";
import {Link} from "react-router-dom";

const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const axiosSecure = useAxiosSecure();

    const handleDelete = (item) => {
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
                axiosSecure.delete(`/menu/${item._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            toast.success('Item has been deleted.')
                        }
                    })
            }
        });
    }

    return (
        <>
            <Helmet>
                <title>Manage Items | Bistro Boss</title>
            </Helmet>
            <div className='w-full min-h-screen bg-[#F6F6F6] py-8 px-20'>
                <div className='grid justify-center gap-2 mb-6 text-center font-inter'>
                    <h5 className='text-[#D99904] italic'>---Hurry Up!---</h5>
                    <div className='w-max py-2 px-6 font-bold text-3xl border-y-2'>
                        MANAGE ALL ITEMS
                    </div>
                </div>
                <div className='bg-white p-6'>
                    <div className='flex justify-between items-center mb-5 text-xl font-semibold uppercase'>
                        <div>Total items: {menu?.length}</div>
                    </div>
                    <div className="w-full overflow-x-auto rounded-xl">
                        <table className="table">
                            <thead className='bg-[#D1A054] text-base text-white uppercase'>
                            <tr>
                                <th>#</th>
                                <th>ITEM IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>UPDATE</th>
                                <th>DELETE</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                menu.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <div className="w-20 h-auto">
                                                <img src={item.image} alt={item.name}/>
                                            </div>
                                        </td>
                                        <td>{item.name}</td>
                                        <td>${item.price}</td>
                                        <td>
                                            <Link to={`/admin/update/${item._id}`} className="btn bg-[#D1A054] text-white text-lg">
                                                <RiEditBoxLine/>
                                            </Link>
                                        </td>
                                        <td>
                                            <button onClick={() => handleDelete(item)}
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

export default ManageItems;
