import React from 'react';
import {Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/modal";

function ModalOrders({isOpen, setOpen, orders}) {
    return (
        <Modal isOpen={isOpen} size={"5xl"} onClose={()=>{
            setOpen(false)
        }}>
            <ModalContent>
                {() => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">Ordered Items</ModalHeader>
                        <ModalBody>
                            <div className="overflow-x-auto rounded-lg border border-gray-200 mt-4">
                                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                                    <thead className="ltr:text-left rtl:text-right">
                                    <tr>
                                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Image</th>
                                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
                                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Price</th>
                                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Discount</th>
                                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Quantity</th>
                                    </tr>
                                    </thead>

                                    <tbody className="divide-y divide-gray-200">
                                    {orders.map((item, index) => {
                                        return <EachItem key={index} image={item.product_image} name={item.product_name} price={item.price} discount={item.discount} quantity={item.quantity}/>
                                    })}

                                    </tbody>
                                </table>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <button className={"bg-red-500 text-white p-2 rounded mx-2"} onClick={() => {
                                setOpen(false)
                            }}>
                                Close
                            </button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}

function EachItem({image, name, price, discount, quantity}) {
    return <tr>
        <td className="whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900 flex items-center justify-center">
            <img style={{
                height: "40px",
                width: "40px",
                borderRadius: "100%",
                objectFit: "cover"
            }} src={image} alt={"Plant"}/>
        </td>
        <td className="whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900">{name}</td>
        <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">
            {"₹" + price}
        </td>
        <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">{discount}</td>
        <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">{quantity}</td>

    </tr>
}

export default ModalOrders;
