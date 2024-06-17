import React from 'react';
import {ToastContainer} from "react-toastify";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DashBoardRoute from "./DashBoardRoute";
import UserNotLoggedIn from "../Wrapper/Auth/UserNotLoggedIn";
import Login from "../Screens/Login";
import 'react-toastify/dist/ReactToastify.css';

function RootNavigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<UserNotLoggedIn><Login/></UserNotLoggedIn>} />
                {DashBoardRoute()}
            </Routes>
            <ToastContainer />
        </BrowserRouter>
    );
}

export default RootNavigation;
