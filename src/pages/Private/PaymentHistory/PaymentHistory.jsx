import {Helmet} from "react-helmet-async";
import SectionTitle from "../../../components/Shared/SectionTitle.jsx";
import useAxiosSecure from "../../../hooks/useAxiosSecure.jsx";
import useAuth from "../../../hooks/useAuth.jsx";
import {useQuery} from "@tanstack/react-query";

const PaymentHistory = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data: payments = []} = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`);
            return res.data;
        }
    })

    return (
        <>
            <Helmet>
                <title>Payment History | Bistro Boss</title>
            </Helmet>
            <div className='w-full min-h-screen bg-[#F6F6F6] py-8 px-20'>
                <SectionTitle heading={'PAYMENT HISTORY'} subheading={'---At a Glance!---'}/>

                <div className='bg-white p-6'>
                    <div className='flex justify-between items-center mb-5 text-xl font-semibold uppercase'>
                        <div>Total Payments: {payments.length}</div>
                    </div>
                    <div className="w-full overflow-x-auto rounded-xl">
                        <table className="table">
                            <thead className='bg-[#D1A054] text-base text-white uppercase'>
                            <tr>
                                <th>#</th>
                                <th>Transaction ID</th>
                                <th>TOTAL PRICE</th>
                                <th>STATUS</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                payments.map((payment, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{payment.transactionId}</td>
                                        <td>${payment.price}</td>
                                        <td>{payment.status}</td>
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

export default PaymentHistory;
