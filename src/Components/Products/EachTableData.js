import React, {useState} from 'react';
import {CgClose} from "react-icons/cg";
import {AiFillEdit} from "react-icons/ai";
import "./animate.css"

function EachTableData({name, category, price, discount, stock, image, id, deleteData, description, keywords, setOpen, setEditData}) {
    const [OpenMenu, setOpenMenu] = useState(false)
    return (
        <tr style={{
            backgroundColor: stock <= 0 ? "#fce6e6" : "white",
        }}>
            <td className="whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900 flex items-center justify-center">
                <img style={{
                    height: "40px",
                    width: "40px",
                    borderRadius: "100%",
                    objectFit: "cover"
                }} src={image} alt={"Plant"}/>
            </td>
            <td className="whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900">{name}</td>
            <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">{category}</td>
            <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">{"₹" + price}</td>
            <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">{`${discount}%`}</td>
            <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">{stock}</td>
            <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700 flex items-center justify-center">
                <div className="inline-flex items-center overflow-hidden rounded-md border bg-white">
                    <div
                        onClick={() => {
                            setOpenMenu(!OpenMenu)
                        }}
                        className="px-4 py-2 text-sm/none text-gray-600 hover:bg-gray-200 hover:text-gray-700 cursor-pointer"
                    >
                        Edit
                        {OpenMenu && <Menu name={name} id={id} setEditData={setEditData} setOpen={setOpen} deleteData={deleteData} image={image} category={category} description={description} discount={discount} keywords={keywords} price={price} stock={stock}/>}
                    </div>

                </div>
            </td>

        </tr>
    );
}


function Menu({name, category, price, discount, stock, image, id, deleteData, description, keywords,setOpen,setEditData}) {
    return <>
        <div
            className="absolute end-0 z-10 mt-2 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg"
                role="menu"
                id={"AnimatedMenu"}
            >
                <div className="p-2">
                    <strong className="block p-2 text-xs font-medium uppercase text-gray-400"> General </strong>
                    <button onClick={()=>{
                        const data = {
                            name,
                            category,
                            price,
                            discount,
                            stock,
                            description,
                            keywords,
                            id
                        }
                        setEditData(data)
                        setOpen(true)
                    }}
                        className="rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-700 flex items-center gap-2 w-full"
                        role="menuitem"
                    >
                        <AiFillEdit/>
                        Edit Product
                    </button>
                </div>

                <div className="p-2">
                    <strong className="block p-2 text-xs font-medium uppercase text-gray-400"> Danger Zone </strong>
                    <button
                        onClick={()=>{
                            deleteData(id)
                        }}
                        type="submit"
                        className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                        role="menuitem"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                        </svg>
                        Delete Product
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

export default EachTableData;
