import {Outlet} from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const Main = () => {
    return (
        <>
            <div className='min-h-screen flex flex-col justify-between'>
                <Header/>

                <main className='w-11/12 lg:w-10/12 max-w-[1275px] mx-auto flex-grow'>
                    <Outlet/>
                </main>

                <Footer/>
            </div>
        </>
    );
};

export default Main;