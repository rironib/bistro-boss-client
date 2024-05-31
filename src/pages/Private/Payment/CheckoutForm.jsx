import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import {toast} from "react-toastify";
import {useEffect, useState} from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure.jsx";
import useCart from "../../../hooks/useCart.jsx";
import useAuth from "../../../hooks/useAuth.jsx";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";

const CheckoutForm = () => {
    // const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    // const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const [cart, refetch] = useCart();
    const navigate = useNavigate();

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card', card
        })

        if (error) {
            toast.error(error.message);
            console.log('ERROR: ', error)
        } else {
            console.log('SUCCESS: ', paymentMethod);
        }

        // Confirm payment
        const {paymentIntent, error : confirmError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'Unknown',
                    name: user?.displayName || 'Anonymous'
                }
            }
        })

        if (confirmError) {
            console.log(confirmError)
        } else {
            console.log('Payment Intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(), // utc date convert. use moment js to
                    cartIds: cart.map(item => item._id),
                    menuItemIds: cart.map(item => item.menuId),
                    status: 'pending'
                }

                const res = await axiosSecure.post('/payments', payment);
                refetch();
                if (res.data?.paymentResult?.insertedId) {
                    Swal.fire({
                        title: "Payment successful",
                        text: `We've processed your charge for $${totalPrice}`,
                        icon: "success",
                        showConfirmButton: false,
                        timer: 3000
                    });
                    navigate('/dashboard/payment-history')
                }
            }
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='font-semibold text-xl text-center'>Total Price: {totalPrice}</div>
            <div className='p-6 text-center space-y-8'>
                <CardElement className='w-[480px] mx-auto p-6 border'
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button disabled={!stripe || !clientSecret || totalPrice === 0} type='submit' className='w-56 p-2 bg-[#570DF8] text-white'>
                    Pay
                </button>
            </div>
        </form>
    );
};

export default CheckoutForm;
