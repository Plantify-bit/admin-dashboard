import React from 'react';
import {Navigate, useLocation} from "react-router-dom";
import {getAuth} from "../../LocalStorage/Auth";

function UserNotLoggedIn({children}) {
    const location = useLocation();
    const {isAuth} = getAuth();
    const data = {
        isAuth: isAuth,
    }
    if (data.isAuth) {
        return <Navigate to="/admin/home" replace state={{ from: location }} />;
    }
    return children;
}

export default UserNotLoggedIn;
