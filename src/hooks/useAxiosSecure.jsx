import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {
    // Intercepting requests to add the authorization header
    axiosSecure.interceptors.request.use((config) => {
        const token = localStorage.getItem("access-token");
        console.log(token);
        if (token) {
            config.headers.authorization = `Bearer ${token}`;
        }
        return config;
    }, (err) => {
        return Promise.reject(err);
    })

    // Intercepts 401 & 403 status
    axiosSecure.interceptors.response.use((res) => {
        return res;
    }, (err) => {
        if (err.response && (err.response.status === 401 || err.response.status === 403)) {
            console.error('Unauthorized or Forbidden');
        }
        return Promise.reject(err);
    })

    return axiosSecure;
};

export default useAxiosSecure;
