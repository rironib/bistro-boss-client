import {Helmet} from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle.jsx";
import {Elements} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm.jsx";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const Payment = () => {
    return (
        <>
            <Helmet>
                <title>Payment | Bistro Boss</title>
            </Helmet>
            <div className='w-full min-h-screen bg-[#F6F6F6] py-8 px-20'>
                <SectionTitle heading={'PAYMENT'} subheading={''}/>

                <div className='bg-white p-6'>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm/>
                    </Elements>
                </div>
            </div>
        </>
    );
};

export default Payment;
