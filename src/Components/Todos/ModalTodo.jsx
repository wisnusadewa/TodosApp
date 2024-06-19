import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../Features/Todos/TodoSlice';

const ModalTodo = ({ closeModal }) => {
  const [task, setTask] = useState('');

  // USE DISPATCH UNTUK PEMAGGILAN REDUCER
  const dispatch = useDispatch();

  // HANDLE SUBMIT DATA
  const handleAddTask = (e) => {
    e.preventDefault();
    if (task !== '' && task.length <= 50) {
      dispatch(
        addTodo({
          id: Date.now(),
          task,
          category: 'list_task',
          completed: false,
        })
      );
      setTask('');
      console.log('task', task);
      // window.location.reload();
    } else {
      alert('task tidak boleh kosong dan melebihi 50 karakter');
    }
  };

  return (
    <div>
      <form onSubmit={handleAddTask} action="">
        <div>
          {/* INPUT TEXT */}
          <input name="task" value={task} onChange={(e) => setTask(e.target.value)} type="text" placeholder="Add New Todos.." className="input input-bordered input-accent w-full" />
        </div>

        <div className="flex mt-2 gap-4">
          <button className="btn btn-outline btn-secondary Submit" type="submit">
            Submit
          </button>
          <button className="btn btn-outline btn-warning" onClick={closeModal}>
            Close
          </button>
        </div>
      </form>
    </div>
  );
};
export default ModalTodo;
