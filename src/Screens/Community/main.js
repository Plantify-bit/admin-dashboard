import React, {useState} from 'react';
import TopNavBar from "../../Components/Global/TopNavBar/main";
import {TbPlaylistX} from "react-icons/tb";
import {AiFillFileAdd} from "react-icons/ai";
import ManagePost from "./ManagePost";
import CreatePost from "./CreatePost";

function Community(props) {
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
        <ManagePost/>,
        <CreatePost/>
    ]
    return (
        <div>
            <TopNavBar NavItems={NavItems} active={Active} SetActive={setActive}/>
            {Screens[Active]}
        </div>
    );
}

export default Community;
