import React, {useEffect, useState} from 'react';
import {Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/modal";

function OrdersModal({isOpen, setOpen, EditData}) {
    const [NewDAta, setNewDAta] = useState(EditData)
    useEffect(() => {
        setNewDAta(EditData)
    }, [EditData]);
    return (
        <Modal size={"3xl"} isOpen={isOpen} onClose={() => {
            setOpen(false)
        }}>
            <ModalContent>
                {() => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">Edit Product</ModalHeader>
                        <ModalBody>
                            <img src={NewDAta.image} alt={"post"} className={"rounded h-96 w-full"}/>
                            <h1 className={"font-bold text-lg"}>{NewDAta.title}</h1>
                            <p>
                                {NewDAta.description}
                            </p>
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

export default OrdersModal;
