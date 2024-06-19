import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editTodo, removeTodo, toggleTodo } from '../../Features/Todos/TodoSlice';

const TodoComp = ({ todo }) => {
  const today = new Date();

  // Mendapatkan tahun, bulan, dan tanggal dari tanggal hari ini
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // Bulan dimulai dari 0 (Januari) hingga 11 (Desember)
  const day = today.getDate();

  // Format tanggal menjadi string "YYYY-MM-DD"
  const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

  // Pemanggilan DISPACT REMOVE dan TOGGLE
  const dispatch = useDispatch();

  const handleToogle = (todoId) => {
    dispatch(toggleTodo(todoId));
  };

  const handleRemove = (todoId) => {
    dispatch(removeTodo(todoId));
  };

  // ************************************ EDIT ************************************

  const handleUpdateTask = (todoId, category) => {
    dispatch(editTodo({ todoId, category }));
  };
  // ************************************ EDIT ************************************

  return (
    <div className="">
      <div className="card w-full h-64  shadow-xl border border-secondary text-white my-2">
        <div className="card-body ">
          <span className={`${todo.category === 'completed' ? 'line-through' : 'none'}`}>{todo.task}</span>
        </div>

        <div className="flex justify-between items-center text-sm mx-2 my-2">
          {/* LABEL */}
          <div className="border border-secondary px-2 py-1 rounded-lg">
            <div className="">{todo.category}</div>
          </div>

          {/* SELECT OPTION */}
          <div className="border border-secondary px-2 py-1 rounded-lg">
            <select defaultValue={todo.category} onChange={(e) => handleUpdateTask(todo.id, e.target.value)}>
              <option value="list_task">List Task</option>
              <option value="progress">Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          {/* CHECK BOX */}
          {/* <div className="flex gap-2 justify-center items-center">
            <p>complete</p>
            <input type="checkbox" checked={todo.complete} onChange={() => handleToogle(todo.id)} />
          </div> */}

          {/* BUTTON DELETE */}
          <button onClick={() => handleRemove(todo.id)} className="border border-secondary px-2 py-1 rounded-lg hover:bg-accent">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoComp;
