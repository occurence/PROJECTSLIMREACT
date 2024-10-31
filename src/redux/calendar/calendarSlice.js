import { createSlice } from '@reduxjs/toolkit';
import { logOut } from '../../redux/user/userOperations';

const date = new Date();

const calendarSlice = createSlice({
  name: 'calendar',
  // initialState: '',
  // initialState: `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`,
  initialState: {
  //   month: `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`,
  //   year: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
  //   day: `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`,
  // },
  // calendar: {
    month: `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`,
    year: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
    day: `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
  // },
},
  reducers: {
    setCalendar: (_state, action) => {
      // return action.payload;
      // state = action.payload;
      // state.calendar = action.payload;
      // state.month = action.payload.month;
      // state.year = action.payload.year;
      // state.day = action.payload.day;
      // state.calendar.month = action.payload.month;
      // state.calendar.year = action.payload.year;
      // state.calendar.day = action.payload.day;
      // state.calendar = action.payload;
      return action.payload;
    },
    // setMonth: (state, action) => {
    //   state.month = action.payload.month;
    // },
    // setYear: (state, action) => {
    //   state.year = action.payload.year;
    // },
    // setDay: (state, action) => {
    //   state.day = action.payload.day;
    // },



    // setYear: (state, action) => {
    //   state.yyyymmdd = action.payload.yyyymmdd;
    // },
    // setFormat: (state, action) => {
    //   const y = action.payload;
    //   const m = new Date(state.yyyymmdd).getMonth() + 1;
    //   const d = new Date(state.yyyymmdd).getDate();
    //   state.month = `${m}/${d}/${y}`;
    //   state.year = `${y}-${m}-${d}`;
    //   state.day = `${d}.${m}.${y}`;
    // },
  },
  extraReducers: builder => {
    builder.addCase(logOut.fulfilled, (_state) => {
      return '';
    });
  },
});

// export const { setCalendar, setMonth, setYear, setDay } = calendarSlice.actions;
export const { setCalendar } = calendarSlice.actions;
export const calendarReducer = calendarSlice.reducer;