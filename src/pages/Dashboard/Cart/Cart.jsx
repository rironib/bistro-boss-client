import useCart from "../../../hooks/useCart.jsx";
import {RiDeleteBinFill} from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure.jsx";
import {toast} from "react-toastify";

const Cart = () => {
    const axiosSecure = useAxiosSecure();
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

    const handleDelete = (id) => {
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
                axiosSecure.delete(`/carts/${id}`)
                    .then((res) => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            toast.success("Successfully removed!");
                        }
                    })
                    .catch(err => toast.error(err.message));
            }
        });
    }

    return (
        <div className='w-full min-h-screen bg-[#F6F6F6] py-8 px-20'>
            <div className='grid justify-center gap-2 mb-6 text-center font-inter'>
                <h5 className='text-[#D99904] italic'>---My Cart---</h5>
                <div className='w-max py-2 px-6 font-bold text-3xl border-y-2'>
                    WANNA ADD MORE?
                </div>
            </div>
            <div className='bg-white p-6'>
                <div className='flex justify-between items-center mb-5 text-xl font-semibold uppercase'>
                    <div>Total Orders: {cart.length}</div>
                    <div>Total Price: ${totalPrice}</div>
                    <button className='btn bg-[#D1A054] text-white uppercase'>Pay</button>
                </div>
                <div className="w-full overflow-x-auto rounded-xl">
                    <table className="table">
                        <thead className='bg-[#D1A054] text-base text-white uppercase'>
                        <tr>
                            <th>#</th>
                            <th>ITEM IMAGE</th>
                            <th>ITEM NAME</th>
                            <th>PRICE</th>
                            <th>ACTION</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            cart.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="w-20 h-auto">
                                            <img src={item.image} alt={item.name}/>
                                        </div>
                                    </td>
                                    <td>{item.name}</td>
                                    <td>${item.price}</td>
                                    <th>
                                        <button onClick={() => handleDelete(item._id)} className="btn bg-[#B91C1C] text-white text-lg">
                                            <RiDeleteBinFill/>
                                        </button>
                                    </th>
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

export default Cart;
