import { createSlice } from '@reduxjs/toolkit';
import { logOut } from '../../redux/user/userOperations';

const date = new Date();

const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    mmddyyyy: `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`,
    yyyymmdd: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
    ddmmyyyy: `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`,
  },
  reducers: {
    setCalendar: (_state, action) => {
      return action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(logOut.fulfilled, (_state) => {
      return '';
    });
  },
});

export const { setCalendar } = calendarSlice.actions;
export const calendarReducer = calendarSlice.reducer;