import React, { use } from 'react';
import { AuthContext } from '../components/context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import { BarLoader } from 'react-spinners';

const PrivateRouter = ({children}) => {
    
    const {user,loading}=use(AuthContext);

    const location =useLocation();


    if(loading){
     return(
     <div className='h-[97vh] flex items-center justify-center'><BarLoader color="#e74c3c"/></div>
    );
    }

    if(!user){
        return <Navigate to="/login" state={location.pathname}/>
    }

    return children
};

export default PrivateRouter;