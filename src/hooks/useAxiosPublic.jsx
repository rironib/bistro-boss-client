import axios from "axios";

export const axiosPublic = axios.create({
    baseURL: 'https://bistro-boss-bd.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;
