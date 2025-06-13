import React, { useEffect, useRef } from "react";

function ModalReuse({ isOpen, onClose, children }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
        if(modalRef.current && !modalRef.current.contains(e.target)){
            onClose();
        }
        if(isOpen){
            document.addEventListener('mousedown', handleClickOutside);
        }else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }
  }, [isOpen, onClose]);

  if(!isOpen) return null;

  return (
    <div
      ref={modalRef}
      style={{
        position: "fixed",
        left: "50%",
        trandform: "translate(-50%, -50%)",
        backgroundColor: "white",
        padding: "20px",
        border: "1px solid #ccc",
        zIndex: 1000,
      }}
    >
      {children}
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default ModalReuse;
