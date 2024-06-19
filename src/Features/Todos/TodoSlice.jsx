import { createSlice } from '@reduxjs/toolkit';

// MEMBUAT INITIAL STATE
const initialState = JSON.parse(localStorage.getItem('todos')) || [];

// MEMBUAT SLICE

const TodoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('todos', JSON.stringify(state));
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        localStorage.setItem('todos', JSON.stringify(state));
      }
    },
    removeTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
        localStorage.setItem('todos', JSON.stringify(state));
      }
    },
    editTodo: (state, action) => {
      const newState = state.map((todo) => (todo.id === action.payload.todoId ? { ...todo, category: action.payload.category } : todo));
      localStorage.setItem('todos', JSON.stringify(newState));
      return newState;
    },
  },
});

export const { addTodo, toggleTodo, removeTodo, editTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
