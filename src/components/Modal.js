import React from "react";




const Modal = ({isvisible, onClose, children}) => {
    if (!isvisible) return null

const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose()
}
    return (
        <div className="z-[999] absolute inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center" id="wrapper" onClick={handleClose}>
            <div className="w-[100%] h-[600px] md:w-[50%] top-[20%]">
        <div className="bg-white p-2 rounded">
            {children}
        </div>
            </div>
        </div>
    )
}
export default Modal