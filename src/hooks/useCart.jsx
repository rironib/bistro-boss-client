import useAuth from "./useAuth.jsx";
import {useQuery} from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure.jsx";

const useCart = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const { refetch, data: cart= [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user.email}`);
            return res.data;
        }
    })
    return [cart, refetch]
};

export default useCart;
