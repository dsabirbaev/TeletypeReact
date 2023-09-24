
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { useSelector } from "react-redux";

const CardModal = ({ isOpen }) => {


    const { modalWindow } = useSelector((data) => data);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };



    return (
        <>

            <Modal 
                title="Basic Modal" 
                open={modalWindow} 
                onOk={handleOk} 
                okButtonProps={{ style: { display: "none" } }}
                cancelButtonProps={{ style: { display: "none" } }}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    );
};
export default CardModal;