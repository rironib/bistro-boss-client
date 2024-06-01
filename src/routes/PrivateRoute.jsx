import {Navigate, useLocation} from "react-router-dom";
import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth.jsx";
import useAdmin from "../hooks/useAdmin.jsx";

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();
    const [isAdmin] = useAdmin();

    if (loading) {
        return (
            <div className='h-screen w-full flex justify-center items-center'>
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    if (user && !isAdmin) {
        return children;
    }

    if (isAdmin) {
        return <Navigate to='/admin' state={{from: location}} replace />
    }

    return <Navigate to="/login" state={{from: location}} replace />;
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
}

export default PrivateRoute;