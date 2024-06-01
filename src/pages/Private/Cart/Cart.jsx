import useCart from "../../../hooks/useCart.jsx";
import {RiDeleteBinFill} from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure.jsx";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {Helmet} from "react-helmet-async";
import SectionTitle from "../../../components/Shared/SectionTitle.jsx";

const Cart = () => {
    const axiosSecure = useAxiosSecure();
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const navigate = useNavigate();

    const handlePay = () => {
        navigate('/dashboard/payment')
    }

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
        <>
            <Helmet>
                <title>Cart | Bistro Boss</title>
            </Helmet>
            <div className='w-full min-h-screen bg-[#F6F6F6] py-8 px-20'>
                <SectionTitle heading={'WANNA ADD MORE?'} subheading={'---My Cart---'}/>

                <div className='bg-white p-6'>
                    <div className='flex justify-between items-center mb-5 text-xl font-semibold uppercase'>
                        <div>Total Orders: {cart.length}</div>
                        <div>Total Price: ${totalPrice}</div>
                        <button onClick={handlePay} disabled={!cart.length > 0}
                                className='btn bg-[#D1A054] text-white uppercase'>Pay
                        </button>
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
                                            <button onClick={() => handleDelete(item._id)}
                                                    className="btn bg-[#B91C1C] text-white text-lg">
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
        </>
    );
};

export default Cart;
