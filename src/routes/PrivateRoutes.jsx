import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';


const PrivateRoutes = ({ children }) => {
    const user = useContext(AuthContext);

    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to='/login' replace></Navigate>;

}

export default PrivateRoutes;