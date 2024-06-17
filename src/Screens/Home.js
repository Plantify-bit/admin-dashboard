import React, {useEffect, useState} from 'react';
import TopSalesDescription from "../Components/Home/TopSalesDescription";
import Heading from "../Components/Global/Heading";
import MainStatics from "../Components/Home/Statstics/MainStatics";
import {SyncLoader} from "react-spinners";
import fetchGraphData from "../Api/fetchGraphData";

function Home() {
    const [Loading, setLoading] = useState(false)
    const [Data, setData] = useState({})
    async function fetchData() {
        setLoading(true)
        try{
            const response = await fetchGraphData();
            console.log(response.data)
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
    return (
        <>
            {!Loading && <div>
                <Heading heading={'Dashboard'}/>
                <TopSalesDescription totalOrders={Data?.totalOrders ?? 0} totalCompleted={Data?.totalCompletedOrders ?? 0}/>
                <Heading heading={'Statistics'}/>
                <MainStatics inStock={Data?.totalStocks ?? 0} outOfStock={Data?.totalOutofStocks ?? 0} labelData={Data?.data ?? []} labels={Data?.labels ?? []}/>
            </div>}
            {Loading && <div className={"flex h-[100vh] w-full items-center justify-center"}>
                <SyncLoader color={"#3263ef"} size={15} loading={true}/>
            </div>}
        </>
    );
}

export default Home;
