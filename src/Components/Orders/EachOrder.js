import React, {useState} from 'react';
import {CgClose} from "react-icons/cg";
import {BiDetail, BiMenu, BiShoppingBag} from "react-icons/bi";
import "../Products/animate.css"
import {BsScooter} from "react-icons/bs";
import {MdOutlineDownloading} from "react-icons/md";
import {IoClose} from "react-icons/io5";
import {SyncLoader} from "react-spinners";
import {updateOrders} from "../../Api/Orders";
import {toast} from "react-toastify";
import {toastsettings} from "../../Configs/toastSettings";
function EachOrder({name, status, date, quantity, phone, address, id,orders,setOrderedItems, setIsOpen, fetchData}) {
    const [OpenMenu, setOpenMenu] = useState(false)
    const [Loading, setLoading] = useState(false)
    async function updateStatus(status){
        try{
            setLoading(true)
            await updateOrders(status, id)
            toast.success("Order Updated Successfully", toastsettings)
            fetchData()
        }catch (e) {
            console.log(e)
            toast.error(e.response.data.message, toastsettings)
        }finally {
            setLoading(false)
        }
    }
    return (
        <tr style={{
            backgroundColor: status === "cancelled" ? "#fce6e6" : status === "delivered" ? "#e0f8d2" : "white",
        }}>
            <td className="whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900">
                {name}
            </td>
            <td className="whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900">{status}</td>
            <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">
                {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(new Date(date))}
            </td>
            <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">{quantity}</td>
            <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">{phone}</td>
            <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">{address}</td>
            <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700 flex items-center justify-center">
                <div className="inline-flex items-center overflow-hidden rounded-md border bg-white">
                    <div
                        onClick={() => {
                            if(!Loading){
                                setOpenMenu(!OpenMenu)
                            }
                        }}
                        className="px-4 py-2 text-sm/none text-gray-600 hover:bg-gray-200 hover:text-gray-700 cursor-pointer"
                    >
                        {Loading &&  <SyncLoader color={"#3263ef"} size={7} loading={true}/>}
                        {!Loading && <>
                            <BiMenu/>
                            {OpenMenu &&
                                <Menu orders={orders} setOrderedItems={setOrderedItems} setIsOpen={setIsOpen} updateStatus={updateStatus}/>}
                        </>}
                    </div>

                </div>
            </td>

        </tr>
    );
}

function Menu({setOrderedItems, orders, setIsOpen, updateStatus}) {
    const NavItems = [
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
    return <>
        <div
            className="absolute end-0 z-10 mt-2 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg"
            role="menu"
            id={"AnimatedMenu"}
        >
            <div className="p-2">
                <strong className="block p-2 text-xs font-medium uppercase text-gray-400"> Update </strong>

            </div>
            {NavItems.map((e, index)=>{
                return <EachButton key={index} title={e.text} icon={e.icon} onClick={async (title)=>{
                    updateStatus(title.toLowerCase().trim())
                } }/>
            })}
            <div className="p-2">
                <strong className="block p-2 text-xs font-medium uppercase text-gray-400"> Danger Zone </strong>
                <button
                    onClick={() => {
                        // deleteData(id)
                        setOrderedItems(orders)
                        setIsOpen(true)
                    }}
                    type="submit"
                    className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                    role="menuitem"
                >
                  <BiDetail/>
                   View Details
                </button>
                <button
                    type="submit"
                    className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                    role="menuitem"
                >
                    <CgClose/>
                    Close
                </button>
            </div>
        </div>
    </>
}

function EachButton({title, onClick, icon}) {
    return <button onClick={() => {
        onClick(title)
    }}
    className="rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-700 flex items-center gap-2 w-full"
    role="menuitem"
    >
        {icon}
        {title}
    </button>
}

export default EachOrder;
