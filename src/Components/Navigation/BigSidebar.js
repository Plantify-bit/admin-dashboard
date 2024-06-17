import React, {useState} from 'react';
import {RecruiterData} from "../../Data/NavigationRouteData";
import EachSideBar from "./EachSideBar";
import {useNavigate} from "react-router-dom";
import {removeAuth} from "../../LocalStorage/Auth";

function BigSidebar() {
    const [active, setActive] = useState('Dashboard')
    const navigate = useNavigate()
    return (
        <div
            className="md:flex hidden  h-screen flex-col justify-between border-r-2 border-r-grey-200 bg-white fixed left-0 top-0 w-48">
            <div className="px-3 py-6">
                <span className="grid h-10 w-46 place-content-start  text-xl font-bold text-grey-600">
                 <span className={"text-blue-600"}>Welcome</span> back, Admin
                </span>
                <ul className={"flex flex-col gap-3 mt-8"}>
                    {RecruiterData.map((link, index) => (
                        <EachSideBar key={index} name={link.name} active={active === link.name} onClick={() => {
                            setActive(link.name)
                            navigate(link.link)
                        }} icon={link.icon}/>
                    ))}
                </ul>
            </div>

            <div className="sticky inset-x-0 bottom-0 border-t border-grey-100">
                <button
                    onClick={() => {
                        removeAuth()
                        navigate("/")
                    }}
                    className="group w-full relative inline-block overflow-hidden border border-danger px-6 py-2 focus:outline-none focus:ring outline-none min-h-[40px]"
                >
                  <span
                      className="absolute inset-y-0 left-0 w-[2px] bg-red-500 transition-all group-hover:w-full "
                  ></span>

                    <span
                        className="relative text-sm font-medium text-danger transition-colors group-hover:text-white"
                    >
                        Logout
              </span>
                </button>
            </div>
        </div>
    );
}

export default BigSidebar;
