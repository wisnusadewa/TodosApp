// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';

// const EditTodo = ({ closeModal, todo }) => {
//   // MEM-PERBARUI NILAI TODOS.VALUE.SELECT DENGAN OPTION
//   // 1. membuat state = untuk menampung nilai option

//   const [changeValue, setChangeValue] = useState({
//     task: '',
//     select: '',
//   });

//   const dispatch = useDispatch();

//   const changeTodosValue = (todoId) => {
//     // dispatch(EditTodo({

//     // }))
//     console.log(todoId);
//     console.log('changeValue', changeValue);
//   };

//   return (
//     <div>
//       <form onSubmit={changeTodosValue(todo.id)}>
//         {/* EDIT TODO */}
//         <input name="task" value={changeValue.task} onChange={(e) => setChangeValue({ ...changeValue, task: e.target.value })} type="text" placeholder="Edit todos" className="input input-bordered input-accent w-full" />
//         {/* SELECT */}
//         <div className="border border-secondary px-2 py-1 rounded-lg">
//           <select defaultValue={todo.value.select} onChange={(e) => setChangeValue({ ...changeValue, select: e.target.value })}>
//             <option value="task">Task</option>
//             <option value="progress">Progress</option>
//             <option value="complete">Complete</option>
//           </select>
//         </div>
//         <button>Submit</button>
//         <button onClick={closeModal}>Close</button>
//       </form>
//     </div>
//   );
// };

// export default EditTodo;
