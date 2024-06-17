import React, {useEffect, useState} from 'react';
import {Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/modal";
import InputStyle from "../../Components/Products/InputStyle";
import NoBackgroundButton from "../../Components/Global/NoBackgroundButton";
import {updateProduct} from "../../Api/Product";
import {toast} from "react-toastify";
import {toastsettings} from "../../Configs/toastSettings";

function EditModal({isOpen, setOpen, EditData, fetchProducts}) {
    const [NewDAta, setNewDAta] = useState(EditData)
    const [Loading, setLoading] = useState(false)
    useEffect(() => {
        setNewDAta(EditData)
    }, [EditData]);
    async  function updateData() {
        try{
            setLoading(true)
            await updateProduct(NewDAta, EditData.id)
            toast.success("Product Updated Successfully", toastsettings)
            setOpen(false)
            fetchProducts()
        }catch (e) {
            console.log(e)
            toast.error(e.response.data.message, toastsettings)
        } finally {
            setLoading(false)
        }
    }
    return (
        <Modal isOpen={isOpen}  onClose={()=>{
            setOpen(false)
        }}>
            <ModalContent>
                {() => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">Edit Product</ModalHeader>
                        <ModalBody>
                            <InputStyle heading={"Name"} hint={"Product Name"} value={NewDAta.name} onChange={(e)=>{
                                setNewDAta({...NewDAta, name: e})
                            }}/>
                            <InputStyle heading={"Category"} hint={"Product Category"} value={NewDAta.category} onChange={(e)=>{
                                setNewDAta({...NewDAta, category: e.toLowerCase()})
                            }}/>
                            <InputStyle heading={"Price"} hint={"Product Price"} type={'number'} value={NewDAta.price} onChange={(e)=>{
                                setNewDAta({...NewDAta, price: e})
                            }}/>
                            <InputStyle heading={"Discount"} hint={"Product Discount"} type={'number'} value={NewDAta.discount} onChange={(e)=>{
                                setNewDAta({...NewDAta, discount: e})
                            }}/>
                            <InputStyle heading={"Stock"} hint={"Product Stock"} type={'number'} value={NewDAta.stock} onChange={(e)=>{
                                setNewDAta({...NewDAta, stock: e})
                            }}/>
                            <div className="relative flex-1">
                                <p> Description </p>
                                <textarea
                                    onChange={(e) => {
                                        // onChange(e.target.value)
                                        setNewDAta({...NewDAta, description: e.target.value})
                                    }}
                                    value={NewDAta.description}
                                    rows={5}
                                    id="Search"
                                    name={"Search"}
                                    placeholder={"Product Description"}
                                    className="w-full rounded-md bg-gray-100 py-2.5 pe-10 shadow-sm sm:text-sm p-4"
                                />
                            </div>
                            <InputStyle heading={"Keywords"} hint={"Product Keywords"} value={NewDAta.keywords} onChange={(e)=>{
                              setNewDAta({...NewDAta, keywords: e.toLowerCase()})
                            }}/>
                        </ModalBody>
                        <ModalFooter>
                            <button className={"bg-red-500 text-white p-2 rounded mx-2"} onClick={() => {
                                setOpen(false)
                            }}>
                                Close
                            </button>
                            <NoBackgroundButton text={"Update"} isLoading={Loading} onPress={async ()=>{
                                if(!Loading){
                                    await updateData()
                                }
                            }}/>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}

export default EditModal;
