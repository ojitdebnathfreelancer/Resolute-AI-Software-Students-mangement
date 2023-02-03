import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ContextStudent } from '../ContextProvider/ContextProvider';

const PrivetRoute = ({ children }) => {
    const { user } = useContext(ContextStudent);
    const location = useLocation();
    if (!user) {
        return <p>Loading...</p>
    }
    if (user) {
        return children
    }

    return <Navigate to='/' state={{ form: location }} replace></Navigate>
};

export default PrivetRoute;