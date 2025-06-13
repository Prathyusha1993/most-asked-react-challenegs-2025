import React, { useState } from 'react'
import ModalReuse from './ModalReuse';

function AppModal() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

  return (
    <div>
        <h3>Modal Reuse</h3>
        <button onClick={openModal}>Open Modal</button>
        <ModalReuse isOpen={isModalOpen} onClose={closeModal}>
            <h3>This is modal content</h3>
            <p>Click outside this area to close.</p>
        </ModalReuse>
    </div>
  )
}

export default AppModal;