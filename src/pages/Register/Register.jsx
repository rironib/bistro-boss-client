import {Link, useNavigate} from "react-router-dom";
import bgImg from '/assets/others/authentication.png';
import coverImg from '/assets/others/authentication2.png';
import {Helmet} from "react-helmet-async";
import {useForm} from "react-hook-form";
import {useContext} from "react";
import {AuthContext} from "../../provider/AuthProvider.jsx";
import {toast} from "react-toastify";

const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then((res) => {
                const loggedUser = res.user;
                console.log(loggedUser);
                updateUser (data.name, data.photoURL)
                    .then(() => {
                        console.log("User info updated");
                        reset();
                        toast.success("Registration successful!!");
                        navigate('/');
                    })
            })
            .catch(err => console.log(err));
    }

    return (
        <>
            <Helmet>
                <title>Register | Bistro Boss</title>
            </Helmet>

            <main style={{backgroundImage: `url(${bgImg})`}}
                  className='min-h-screen w-full flex justify-center items-center bg-cover bg-no-repeat py-6'>
                <div className='h-auto w-10/12 grid grid-cols-5 gap-6 border-4 shadow-2xl p-12 py-8'>
                    <div className='col-span-2 w-full flex flex-col justify-between items-center px-8'>
                        <h2 className='font-bold text-3xl'>Sign Up</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col gap-4 mb-6'>
                            <label className="space-y-2">
                                <div className="font-semibold">Name</div>
                                <input name='name' {...register("name", { required: true })} type="text" placeholder="Enter your name" className="w-full p-3 px-4 outline-none rounded"/>
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </label>
                            <label className="space-y-2">
                                <div className="font-semibold">PhotoURL</div>
                                <input name='photoURL' {...register("photoURL", { required: true })} type="text" placeholder="Enter your photo link" className="w-full p-3 px-4 outline-none rounded"/>
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </label>
                            <label className="space-y-2">
                                <div className="font-semibold">Email</div>
                                <input name='email' {...register("email", { required: true })} type="text" placeholder="Enter your email" className="w-full p-3 px-4 outline-none rounded"/>
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </label>
                            <label className="space-y-2">
                                <div className="font-semibold">Password</div>
                                <input name='password' {...register("password", {required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/})} type="password" placeholder="Enter your password" className="w-full p-3 px-4 outline-none rounded"/>
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                            </label>
                            <button className='py-2 bg-[#D1A054B3] text-white font-semibold rounded'>
                                Sign up
                            </button>
                        </form>
                        <div className='text-center'>
                            <div className='text-[#D1A054] mb-4'>Already registered? <Link to='/login' className='font-medium'>Go to
                                log in</Link></div>
                        </div>
                    </div>
                    <div className='col-span-3 flex justify-center items-center'>
                        <img src={coverImg} alt='Login'/>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Register;
