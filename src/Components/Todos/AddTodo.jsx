import { useState } from 'react';
import ModalTodo from './ModalTodo';

const AddTodo = () => {
  const [isModal, setisModal] = useState(false);

  const openModal = () => {
    setisModal(true);
  };

  const closeModal = () => {
    setisModal(false);
  };

  return (
    <div>
      {isModal ? (
        <ModalTodo closeModal={closeModal} />
      ) : (
        <button className="btn btn-outline btn-secondary" onClick={openModal}>
          Add Task
        </button>
      )}
    </div>
  );
};

export default AddTodo;
