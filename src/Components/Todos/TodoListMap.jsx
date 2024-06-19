import TodoComp from './TodoComp';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const TodoListMap = () => {
  const searchValue = useSelector((state) => state.searchValue);
  const todos = useSelector((state) => state.todos);
  const filterValue = useSelector((state) => state.filterValue);

  // FILTER YANG MECARI BERDASARKAN NILAI SELECT YANG DIAMBIL DARI STORE FILTER
  const filterTodo = todos
    .filter((todo) =>
      filterValue.filterValue === 'alltask'
        ? true
        : filterValue.filterValue === 'progress'
        ? todo.category === 'progress'
        : filterValue.filterValue === 'list_task'
        ? todo.category === 'list_task'
        : filterValue.filterValue === 'completed'
        ? todo.category === 'completed'
        : todo
    )
    .filter((todo) => (searchValue.text === '' ? todo : todo.task.toLowerCase().includes(searchValue.text)));

  console.log('filterValue?', filterValue.filterValue);

  return (
    <div className="grid grid-cols-1 gap-10 ">
      {/* menampilkan todolist dengan filter dari nilai input search */}
      {filterTodo.map((todo) => {
        console.log('todo??', todo);
        return <TodoComp key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

// KETIKA LABEL INFO AKU KLIK , MAKA LABEL AKAN BERUBAH
// NILAI SELECT HARUS DI RUBAH DALAM LOCAL STORAGE

// localStorage.setItem('todos')

export default TodoListMap;
