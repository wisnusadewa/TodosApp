import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const filterSlice = createSlice({
  name: 'filterValue',
  initialState,
  reducers: {
    setFilterValue: (state, action) => {
      return {
        ...state,
        filterValue: action.payload,
      };
    },
  },
});

export const { setFilterValue } = filterSlice.actions;

export default filterSlice.reducer;
