import {IoCreateOutline} from "react-icons/io5";
import React from "react";
import {MdOutlineManageSearch} from "react-icons/md";
import {CgCommunity} from "react-icons/cg";
import {BiSupport} from "react-icons/bi";
import {AiOutlineShopping} from "react-icons/ai";

export const RecruiterData = [
    {
        name: "Dashboard",
        icon: <IoCreateOutline size={25}/>,
        link: "/admin/home",
        active: true,
    },
    {
        name: "Products",
        icon: <MdOutlineManageSearch size={25}/>,
        link: "/admin/products",
        active: false,
    },
    {
        name: "Orders",
        icon: <AiOutlineShopping size={25}/>,
        link: "/admin/orders",
        active: false,
    },
    {
        name: "Community",
        icon: <CgCommunity size={25}/>,
        link: "/admin/community",
        active: false,
    },
    {
        name: "Support",
        icon: <BiSupport size={25}/>,
        link: "/admin/support",
        active: false,
    },
]


