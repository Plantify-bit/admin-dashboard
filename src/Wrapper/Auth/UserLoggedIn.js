import React from 'react';
import {Navigate, useLocation} from "react-router-dom";
import {getAuth} from "../../LocalStorage/Auth";

function UserLoggedIn({children}) {
    const location = useLocation();
    const {isAuth} = getAuth();
    const data = {
        isAuth: isAuth,
    }
    if (!data.isAuth) {
        return <Navigate to="/" replace state={{ from: location }} />;
    }
    return children;
}

export default UserLoggedIn;
