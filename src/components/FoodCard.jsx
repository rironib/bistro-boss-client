import PropTypes from "prop-types";
import {useLocation, useNavigate} from "react-router-dom";
import useAuth from "../hooks/useAuth.jsx";
import {toast} from "react-toastify";
import Swal from "sweetalert2";
import {axiosSecure} from "../hooks/useAxiosSecure.jsx";
import useCart from "../hooks/useCart.jsx";

const FoodCard = ({item}) => {
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useCart();
    const {_id, name, image, recipe, price} = item;

    const handleAddToCart = () => {
        if (user && user.email) {
            // Get item data
            const cartItem = {
                menuId: _id,
                email: user.email.toLowerCase(),
                name, image, price
            }
            // Post item data to server
            axiosSecure.post('/carts', cartItem)
                .then((res) => {
                    if (res.data.insertedId) {
                        refetch();
                        toast.success(`${name} added to cart.`);
                    }
                })
                .catch(err => toast.error(err.message));
        } else {
            Swal.fire({
                title: "You are not logged in!",
                text: "Please login to add to the cart.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                } else {
                    toast.error('Log in to add items.');
                }
            });
        }
    }

    return (
        <div className='grid grid-rows-2 bg-[#F3F3F3]'>
            <img src={image} alt={name} className='w-full'/>
            <div className='grid justify-items-center items-center text-center px-10 py-8'>
                <h3 className='font-semibold text-xl'>{name}</h3>
                <p className='mb-4'>{recipe}</p>
                <button onClick={() => handleAddToCart(_id)}
                        className='w-max py-3 px-6 bg-[#E8E8E8] hover:bg-[#1F2937] text-yellow-600 font-semibold border-b-2 border-yellow-600 hover:border-[#1F2937] uppercase rounded-lg'>
                    Add to cart
                </button>
            </div>
        </div>
    );
};

FoodCard.propTypes = {
    item: PropTypes.object.isRequired
}

export default FoodCard;
