import React, {useEffect} from 'react';
import {Outlet, Route, useNavigate,} from "react-router-dom";
import UserLoggedIn from "../Wrapper/Auth/UserLoggedIn";
import Sidebar from "../Components/Navigation/Sidebar";
import BigSidebar from "../Components/Navigation/BigSidebar";
import Home from "../Screens/Home";
import Product from "../Screens/Products/main";
import Orders from "../Screens/Orders/main";
import Community from "../Screens/Community/main";
import Support from "../Screens/Support/main";
function DashboardRoute() {
    return (
        <Route path="admin" element={<UserLoggedIn><Dashboard /></UserLoggedIn>}>
            <Route path="home" element={<UserLoggedIn><Home /></UserLoggedIn>} />
            <Route path="products" element={<UserLoggedIn><Product /></UserLoggedIn>} />
            <Route path="orders" element={<UserLoggedIn><Orders /></UserLoggedIn>} />
            <Route path="community" element={<UserLoggedIn><Community /></UserLoggedIn>} />
            <Route path="support" element={<UserLoggedIn><Support /></UserLoggedIn>} />
        </Route>
    );
}
function Dashboard() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/admin/home")
    }, []);
    return (
        <div>
            <Sidebar/>
            <BigSidebar/>
            <div className={"sm:pl-52 pl-20"}>
                <Outlet />
            </div>
        </div>
    );
}

export default DashboardRoute;
