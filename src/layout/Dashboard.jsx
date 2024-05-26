import Sidebar from "../components/Dashboard/Sidebar.jsx";
import {Outlet} from "react-router-dom";

const Dashboard = () => {
    return (
        <>
            <div className='w-full min-h-screen flex'>
                <Sidebar/>
                <Outlet/>
            </div>
        </>
    );
};

export default Dashboard;
