import useAuth from "../../hooks/useAuth.jsx";
import {RiFacebookFill, RiGithubFill, RiGoogleFill} from "react-icons/ri";
import {axiosPublic} from "../../hooks/useAxiosPublic.jsx";
import {useLocation, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

const SocialLogin = () => {
    const {signInWithGoogle} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(res => {
                const userInfo = {
                    email: res.user?.email,
                    name: res.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                .then(() => {
                    toast.success('Successfully logged in!');
                    navigate(from, { replace: true });
                })
            })
    }

    return (
        <div className='flex justify-center gap-6 text-xl text-gray-700'>
            <button className='p-1 border-gray-700 border-2 rounded-full'>
                <RiFacebookFill/>
            </button>
            <button onClick={handleGoogleSignIn} className='p-1 border-gray-700 border-2 rounded-full'>
                <RiGoogleFill/>
            </button>
            <button className='p-1 border-gray-700 border-2 rounded-full'>
                <RiGithubFill/>
            </button>
        </div>
    );
};

export default SocialLogin;
