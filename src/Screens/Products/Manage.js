import React, {useEffect, useState} from 'react';
import Table from "../../Components/Products/Table";
import InputStyle from "../../Components/Products/InputStyle";
import {SyncLoader} from "react-spinners";
import {deleteProducts, getProducts} from "../../Api/Product";
import {useDebouncedCallback} from "use-debounce";
import {toast} from "react-toastify";
import {toastsettings} from "../../Configs/toastSettings";
import EditModal from "./EditModal";

function ManageProduct() {
    const [Search, setSearch] = useState("")
    const [Category, setCategory] = useState("")
    const [Loading, setLoading] = useState(false)
    const [Data, setData] = useState([])
    const [Open, setOpen] = useState(false)
    const [EditData, setEditData] = useState({
        name: "",
        category: "",
        price: "",
        discount: "",
        stock: "",
        description: "",
        keywords: "",
        id: "",
    })
    const debouncedSearch = useDebouncedCallback(
        // function
        (value) => {
            setSearch(value);
        },
        // delay in ms
        500
    );

    const debouncedCategoy = useDebouncedCallback(
        // function
        (value) => {
            setCategory(value);
        },
        // delay in ms
        500
    );

    async function fetchData() {
        try{
            setLoading(true)
            const data = await getProducts(Search, Category)
            setData(data.data)
        }catch (e) {
            console.log(e)
        }finally {
            setLoading(false)
        }
    }

    async function deleteData(id) {
        try{
            setLoading(true)
            await deleteProducts(id)
            toast.success("Product Deleted Successfully", toastsettings)
            fetchData()
        }catch (e) {
            toast.error(e.response.data.message, toastsettings)
        }finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [Search, Category]);

    return (
        <div>
            <div className={"flex gap-6 m-2"}>
                <InputStyle value={Search} onChange={(e)=>{
                    debouncedSearch(e)
                }} hint={"Search Item"} heading={"Search"}/>
                <InputStyle value={Category} onChange={(e)=>{
                    debouncedCategoy(e)
                }} hint={"Search Category"} heading={"Category"}/>
            </div>
            {!Loading &&  <Table data={Data} deleteData={deleteData} setOpen={setOpen} setEditData={setEditData}/>}
            {Loading && <div className={"flex h-[80vh] w-full items-center justify-center"}>
                <SyncLoader color={"#3263ef"} size={15} loading={true}/>
            </div>}
            <EditModal isOpen={Open} setOpen={setOpen} EditData={EditData} fetchProducts={fetchData}/>
        </div>
    );
}

export default ManageProduct;
