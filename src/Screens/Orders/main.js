import React, {useEffect, useState} from 'react';
import {TbPlaylistX} from "react-icons/tb";
import TopNavBar from "../../Components/Global/TopNavBar/main";
import {BsScooter} from "react-icons/bs";
import {BiShoppingBag} from "react-icons/bi";
import {MdOutlineDownloading} from "react-icons/md";
import {IoClose} from "react-icons/io5";
import TablesOrders from "../../Components/Orders/TablesOrders";
import InputStyle from "../../Components/Products/InputStyle";
import {getOrders} from "../../Api/Orders";
import {SyncLoader} from "react-spinners";
import ModalOrders from "../../Components/Orders/ModalOrders";

function Orders() {
    const [CurrentActive, setCurrentActive] = useState('all')
    const [Data, setData] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [Loading, setLoading] = useState(false)
    const [SearchValue, setSearchValue] = useState("")
    const NavItems = [
        {
            icon: <TbPlaylistX size={22}/>,
            text: "All"
        },
        {
            icon: <MdOutlineDownloading size={22}/>,
            text: "Processing"
        },
        {
            icon: <BsScooter size={22}/>,
            text: "Out for Delivery"
        },
        {
            icon: <BiShoppingBag size={22}/>,
            text: "Delivered"
        },
        {
            icon: <IoClose size={22}/>,
            text: "Cancelled"
        }
    ]
    const [Active, setActive] = useState(0)
    const [OrderedItems, setOrderedItems] = useState([])
    function ChangeActiveTab(index) {
        setCurrentActive(NavItems[index].text.toLowerCase())
    }

    async function fetchData() {
        try{
            setLoading(true)
            const data = await getOrders()
            setData(data.data)
        }catch (e) {
            console.log(e)
        }finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        ChangeActiveTab(Active)
    }, [Active]);
    useEffect(() => {
        fetchData()
    }, []);
    return (
        <div>
            <TopNavBar NavItems={NavItems} active={Active} SetActive={setActive}/>
            {!Loading && <>
                <div className={"w-full sm:w-[40vw] m-2"}>
                    <InputStyle value={SearchValue} onChange={(e) => {
                        setSearchValue(e)
                    }} hint={"Search By Customer Name"} heading={"Search"}/>
                </div>
                <TablesOrders data={Data} filter={CurrentActive} SearchQuery={SearchValue} setOrderedItems={setOrderedItems} setIsOpen={setIsOpen} fetchData={fetchData}/>
            </>}
            {Loading && <div className={"flex h-[80vh] w-full items-center justify-center"}>
                <SyncLoader color={"#3263ef"} size={15} loading={true}/>
            </div>}
            <ModalOrders isOpen={isOpen} setOpen={setIsOpen} orders={OrderedItems}/>
        </div>
    );
}

export default Orders;
