import React, {useState} from 'react';
import TopNavBar from "../../Components/Global/TopNavBar/main";
import {TbPlaylistX} from "react-icons/tb";
import {AiFillFileAdd} from "react-icons/ai";
import ManageProduct from "./Manage";
import CreateNewProduct from "./CreateNewProduct";

function Product() {
    const [Active, setActive] = useState(0)
    const NavItems = [
        {
            icon: <TbPlaylistX size={22}/>,
            text: "Manage"
        },
        {
            icon: <AiFillFileAdd size={22}/>,
            text: "Add"
        }
    ]
    const Screens = [
        <ManageProduct/>,
        <CreateNewProduct/>
    ]
    return (
        <div>
            <TopNavBar NavItems={NavItems} active={Active} SetActive={setActive}/>
            {Screens[Active]}
        </div>
    );
}

export default Product;
