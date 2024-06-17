import React, {useEffect, useState} from 'react';
import PostTable from "../../Components/Community/PostTable";
import {SyncLoader} from "react-spinners";
import {getPosts} from "../../Api/Community";
import OrdersModal from "../../Components/Community/OrdersModal";

function ManagePost() {
    const [open, setOpen] = useState(false)
    const [data, setData] = useState([])
    const [editData, setEditData] = useState({
        title: "",
        description: "",
        image: "",
        createdAt: "",
        id: ""
    })
    const [loading, setLoading] = useState(false)
    async function fetchData() {
        try{
            setLoading(true)
            const data = await getPosts()
            setData(data.data)
        }catch (e) {
            console.log(e)
        }finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
            {!loading && <div className={"mt-3"}>
                <PostTable fetchData={fetchData} setEditData={setEditData} setOpen={setOpen} data={data}/>
            </div>}
            {loading && <div className={"flex h-[80vh] w-full items-center justify-center"}>
            <SyncLoader color={"#3263ef"} size={15} loading={true}/>
        </div>}
            <OrdersModal isOpen={open} setOpen={setOpen} EditData={editData} fetchProducts={fetchData}/>
        </div>
    );
}

export default ManagePost;
