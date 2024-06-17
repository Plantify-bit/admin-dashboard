import React, {useState} from 'react';
import {RecruiterData} from "../../Data/NavigationRouteData";
import EachSidebarSmall from "./EachSmallSideBar";
import {removeAuth} from "../../LocalStorage/Auth";
import {useNavigate} from "react-router-dom";

function Sidebar() {
    const [active, setActive] = useState('Create')
    const navigate = useNavigate()
    return (
        <div className="md:hidden flex h-screen w-16 flex-col justify-between border-r-2 border-r-grey-200 bg-white fixed top-0">
            <div>
                <div className="inline-flex size-16 items-center justify-center">
                  <span className="grid size-10 place-content-center rounded bg-grey-300 text-xs text-grey-600">
                    A
                  </span>
                </div>

                <div className="border-t-2 border-t-grey-200 border-gray-100">
                    <div className="px-2">
                        <ul className="space-y-1 border-t-2 border-t-grey-200 border-gray-100 pt-4 flex flex-col gap-2">
                            {RecruiterData.map((link, index) => (
                                <EachSidebarSmall name={link.name} icon={link.icon} active={link.name === active} onClick={()=>{
                                    setActive(link.name)
                                }}/>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="sticky inset-x-0 bottom-0 border-t-2 border-t-grey-200 border-gray-100 bg-white p-2">
                <button
                    onClick={()=>{
                        removeAuth()
                        navigate("/")
                    }}
                    type="submit"
                    className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 opacity-75"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                    </svg>

                    <span
                        className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-grey-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                    >
                          Logout
                        </span>
                </button>
            </div>
        </div>
    );
}

export default Sidebar;
