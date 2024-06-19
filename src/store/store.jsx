import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../Features/Todos/TodoSlice';
import searchReducer from '../Features/Search/SearchSlice';
import filterReducer from '../Features/Filter/FilterSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    searchValue: searchReducer,
    filterValue: filterReducer,
  },
});
