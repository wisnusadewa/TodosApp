import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  text: '',
};

const SearchSlice = createSlice({
  name: 'searchValue',
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      return {
        ...state,
        text: action.payload,
      };
    },
  },
});

export const { setSearchValue } = SearchSlice.actions;

export default SearchSlice.reducer;
