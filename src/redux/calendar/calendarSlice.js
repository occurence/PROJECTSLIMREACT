import { createSlice } from '@reduxjs/toolkit';
import { logOut } from '../../redux/user/userOperations';

const date = new Date();
// const dateString = `${date}T00:00:00Z`; // Ensures it's treated as UTC
// const dateObject = new Date(dateString);
// const date = new Date('10/28/2024');
const dateString = `${date}`;
const dateObject = new Date(dateString); // Create a Date object
const isoString = dateObject.toISOString().split('T')[0]; 
const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    // default: `${date}T00:00:00Z`,
    // default: `${dateObject}`,
    // default: `${date}`,
    default: `${dateString}`,
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