import React, { use } from 'react';
import { AuthContext } from '../components/context/AuthContext';
import { Navigate } from 'react-router';

const PrivateRouter = ({children}) => {
    
    const {user,loading}=use(AuthContext);

    if(!user){
        return <Navigate to="/login"/>
    }

    return children
};

export default PrivateRouter;