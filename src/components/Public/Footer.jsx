import {Link} from "react-router-dom";
import {RiFacebookFill, RiFacebookLine, RiInstagramLine, RiTwitterLine} from "react-icons/ri";

const Footer = () => {
    return (
        <footer className='w-full'>
            <div className='grid grid-cols-2'>
                <div className='bg-[#1F2937] text-white text-right'>
                    <div className='h-full py-12 flex flex-col items-center justify-center gap-4 text-center'>
                        <h2 className='font-semibold text-2xl uppercase'>CONTACT US</h2>
                        <div className='space-y-1'>
                            <p>123 ABS Street, Uni 21, Bangladesh</p>
                            <p>+88 123456789</p>
                            <p>Mon - Fri: 08:00 - 22:00</p>
                            <p>Sat - Sun: 10:00 - 23:00</p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#111827] text-white text-left'>
                    <div className='h-full py-12 flex flex-col items-center justify-center gap-3 text-center'>
                        <h2 className=' font-semibold text-2xl uppercase'>Follow US</h2>
                        <div>
                        <p>Join us on social media</p>
                            <div className='flex justify-center gap-3 mt-4 text-2xl'>
                                <Link><RiFacebookFill/></Link>
                                <Link><RiInstagramLine/></Link>
                                <Link><RiTwitterLine/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-3 bg-black text-white text-center'>
                <p>Copyright © CulinaryCloud. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
