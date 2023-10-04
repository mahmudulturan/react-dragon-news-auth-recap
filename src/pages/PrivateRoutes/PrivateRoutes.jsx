import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { useContext } from 'react'
import {Navigate, useLocation} from 'react-router-dom'
const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    console.log(location);
    if(loading){
        return <h1>Loading please wait.....</h1>;
    }
    if(user){
        return children;
    }
    return (
        <Navigate state={location.pathname} to='/login'></Navigate>
    );
};

export default PrivateRoutes;