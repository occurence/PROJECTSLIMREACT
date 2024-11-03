import { createSlice } from '@reduxjs/toolkit';
import { logOut } from '../../redux/user/userOperations';

const date = new Date();
const dateString = new Date(date).toLocaleDateString('en-CA').split('T')[0];
const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    defaultDate: `${dateString}`,
    month: `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`,
    year: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
    day: `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
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