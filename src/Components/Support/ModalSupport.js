import React from 'react';
import {Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/modal";

function ModalSupport({isOpen, setOpen, data}) {
    return (
        <Modal isOpen={isOpen} size={"2xl"} onClose={()=>{
            setOpen(false)
        }}>
            <ModalContent>
                {() => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">
                            {data.name}
                            <h5>{data.email}</h5>
                            <h5>{data.phone}</h5>
                        </ModalHeader>
                        <ModalBody>
                            <h1 className={"text-lg font-bold"}>{data.title}</h1>
                            <p>{data.message}</p>
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

export default ModalSupport;
