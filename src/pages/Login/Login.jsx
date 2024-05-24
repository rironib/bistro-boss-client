import {Link} from "react-router-dom";
import {RiFacebookFill, RiGithubFill, RiGoogleFill} from "react-icons/ri";
import bgImg from '/assets/others/authentication.png';
import coverImg from '/assets/others/authentication2.png';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import {useEffect} from "react";

const Login = () => {
    const handleLogin = (e) => {
        e.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const captcha = form.captcha.value;

        if (validateCaptcha(captcha) === true) {
            return alert("Okk Boss")
        }
    }

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    return (
        <main style={{backgroundImage: `url(${bgImg})`}} className='h-screen w-full flex justify-center items-center bg-cover bg-no-repeat'>
            <div className='h-auto w-10/12 grid grid-cols-5 gap-6 border-4 shadow-2xl p-12'>
                <div className='col-span-3 flex justify-center items-center'>
                    <img src={coverImg} alt='Login' />
                </div>
                <div className='col-span-2 w-full flex flex-col justify-between items-center px-8'>
                    <h2 className='font-bold text-3xl'>Login</h2>
                    <form onSubmit={handleLogin} className='w-full flex flex-col gap-4 mb-6'>
                        <label className="space-y-2">
                            <div className="font-semibold">Email</div>
                            <input name='email' type="text" placeholder="Enter your email"
                                   className="w-full p-3 px-4 outline-none rounded" />
                        </label>
                        <label className="space-y-2">
                            <div className="font-semibold">Password</div>
                            <input name='password' type="password" placeholder="Enter your password"
                                   className="w-full p-3 px-4 outline-none rounded" />
                        </label>
                        <label className="grid grid-cols-2 space-y-2">
                            <LoadCanvasTemplate />
                            <input name='captcha' type="text" placeholder="Enter captcha here"
                                   className="w-full p-2 outline-none rounded" />
                        </label>
                        <button className='py-2 bg-[#D1A054B3] text-white font-semibold rounded'>Sign In</button>
                    </form>
                    <div className='text-center'>
                        <div className='text-[#D1A054] mb-4'>New here? <Link to='/register' className='font-medium'>Create
                            a New Account</Link></div>
                        <div className='mb-4'>Or sign in with</div>
                        <div className='flex justify-center gap-6 text-xl text-gray-700'>
                            <button className='p-1 border-gray-700 border-2 rounded-full'>
                                <RiFacebookFill/>
                            </button>
                            <button className='p-1 border-gray-700 border-2 rounded-full'>
                                <RiGoogleFill/>
                            </button>
                            <button className='p-1 border-gray-700 border-2 rounded-full'>
                                <RiGithubFill/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Login;
