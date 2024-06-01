import error from '/assets/404.gif'
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet-async";

const Error = () => {
    return (
        <>
            <Helmet>
                <title>404 Page Not Found</title>
            </Helmet>
            <div className='w-screen h-screen p-12 bg-white flex justify-evenly items-center flex-col gap-8'>
                <img src={error} className='max-h-[80%] w-auto'/>
                <Link to='/' className='px-8 py-3 bg-slate-900 font-semibold text-white rounded'>Home</Link>
            </div>
        </>
    );
};

export default Error;