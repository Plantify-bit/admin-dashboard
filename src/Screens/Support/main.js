import React, {useEffect, useState} from 'react';
import {TbPlaylistX} from "react-icons/tb";
import {MdOutlinePending} from "react-icons/md";
import TopNavBar from "../../Components/Global/TopNavBar/main";
import {TiTick} from "react-icons/ti";
import {getSupports} from "../../Api/Support";
import {SyncLoader} from "react-spinners";
import SupportTable from "../../Components/Support/SupportTable";
import ModalSupport from "../../Components/Support/ModalSupport";
import InputStyle from "../../Components/Products/InputStyle";

function Support() {
    //["pending", "resolved"]
    const NavItems = [
        {
            icon: <TbPlaylistX size={22}/>,
            text: "All"
        },
        {
            icon: <MdOutlinePending size={22}/>,
            text: "Pending"
        },
        {
            icon: <TiTick size={22}/>,
            text: "Resolved"
        },
    ]
    const [Loading, setLoading] = useState(false)
    const [SearchValue, setSearchValue] = useState("")
    const [CurrentActive, setCurrentActive] = useState('all')
    const [Active, setActive] = useState(0)
    const [Open, setOpen] = useState(false)
    function ChangeActiveTab(index) {
        setCurrentActive(NavItems[index].text.toLowerCase())
    }

    const [ModalData, setModalData] = useState({
        name: "",
        email: "",
        message: "",
        status: "",
        phone: "",
        title: "",
    })

    const [data, setData] = useState([])

    async function fetchData() {
        try{
            setLoading(true)
            const response = await getSupports()
            setData(response.data)
        }catch (e) {
            console.log(e)
        }finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

    useEffect(()=>{
        ChangeActiveTab(Active)
    },[Active])

    return (
        <div>
            <TopNavBar NavItems={NavItems} active={Active} SetActive={setActive}/>
            {!Loading &&
                <div>
                    <div className={"w-full sm:w-[40vw] m-2"}>
                        <InputStyle value={SearchValue} onChange={(e) => {
                            setSearchValue(e)
                        }} hint={"Search By Customer Name"} heading={"Search"}/>
                    </div>
                    <SupportTable data={data} filterData={CurrentActive} setModalData={setModalData} setOpen={setOpen}
                                  fetchData={fetchData} SearchValue={SearchValue}/>
                </div>}
            {Loading && <div className={"flex h-[80vh] w-full items-center justify-center"}>
                <SyncLoader color={"#3263ef"} size={15} loading={true}/>
            </div>}
            <ModalSupport data={ModalData} isOpen={Open} setOpen={setOpen}/>
        </div>
    );
}

export default Support;
