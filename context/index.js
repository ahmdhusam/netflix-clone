import { createContext, useState } from "react";

const ctxInit = { modalModify: {}, openModal: (data) => {} };

const ctx = createContext(ctxInit);

export function ContextProveder({ children }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalData, setModalData] = useState({});

    const modalModify = { modalData, modalIsOpen, setModalIsOpen };

    function openModal(data) {
        setModalData(data);
        setModalIsOpen(true);
    }

    return (
        <ctx.Provider value={{ modalModify, openModal }}>
            {children}
        </ctx.Provider>
    );
}

export default ctx;
