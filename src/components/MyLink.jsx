import React from 'react';
import { NavLink } from 'react-router';

const MyLink = ({to,className,children}) => {
    return (
        <NavLink to={to}
           className={({isActive})=>(isActive? "text-yellow-300 font-bold":`${className} font-bold`)}
        >
           {children}
        </NavLink>
    );
};

export default MyLink;