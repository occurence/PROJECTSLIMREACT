import { createSlice } from '@reduxjs/toolkit';
import { logOut } from '../../redux/user/userOperations';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (_state, action) => {
      return action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(logOut.fulfilled, (_state) => {
      return '';
    });
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;