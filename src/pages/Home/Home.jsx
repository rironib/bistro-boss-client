import Slider from "./Slider.jsx";
import Order from "./Order.jsx";
import Menu from "./Menu.jsx";
import Featured from "./Featured.jsx";

const Home = () => {
    return (
        <div>
            <Slider/>
            <div className='w-11/12 lg:w-10/12 max-w-[1275px] mx-auto'>
                <Order/>
                <Menu/>
            </div>
            <Featured/>
        </div>
    );
};

export default Home;
