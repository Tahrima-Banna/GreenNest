import React from 'react';

const MyContainer = ({className,children}) => {
    return (
        <div className={`${className} w-11/12 mx-auto px-10`}>
            {children}
        </div>
    );
};

export default MyContainer;