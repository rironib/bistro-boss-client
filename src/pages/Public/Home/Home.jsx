import Slider from "./Slider.jsx";
import Order from "./Order.jsx";
import Menu from "./Menu.jsx";
import Featured from "./Featured.jsx";
import Testimonials from "./Testimonials.jsx";
import Contact from "./Contact.jsx";
import Banner from "./Banner.jsx";
import Recommend from "./Recommend.jsx";
import {Helmet} from "react-helmet-async";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home | Bistro Boss</title>
            </Helmet>
            <div>
                <Slider/>
                <div className='w-11/12 lg:w-10/12 max-w-[1275px] mx-auto'>
                    <Order/>
                    <Banner/>
                    <Menu/>
                    <Contact/>
                    <Recommend/>
                </div>
                <Featured/>
                <div className='w-11/12 lg:w-10/12 max-w-[1275px] mx-auto'>
                    <Testimonials/>
                </div>
            </div>
        </>
    );
};

export default Home;
