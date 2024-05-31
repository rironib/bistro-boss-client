import useAuth from "../hooks/useAuth.jsx";
import useAdmin from "../hooks/useAdmin.jsx";
import {Navigate, useLocation} from "react-router-dom";
import PropTypes from "prop-types";

const AdminRoute = ({children}) => {
   const {user, loading} = useAuth();
   const [isAdmin, isAdminLoading] = useAdmin();
   const location = useLocation();

   if (loading || isAdminLoading) {
       return (
           <div className='h-screen w-full flex justify-center items-center'>
               <span className="loading loading-spinner loading-lg"></span>
           </div>
       )
   }

   if (user && isAdmin) {
       return children;
   }

   return <Navigate to='/login' state={{from: location}} replace />
};

AdminRoute.propTypes = {
    children: PropTypes.node.isRequired
}

export default AdminRoute;
