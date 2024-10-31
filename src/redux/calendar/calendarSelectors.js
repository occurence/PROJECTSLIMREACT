export const selectCalendar = state =>  state.calendar;
// export const selectMonth = state =>  state.calendar.mmddyyyy;
// export const selectYear = state =>  state.calendar.yyyymmdd;
// export const selectDay = state =>  state.calendar.ddmmyyyy;
// export const selectMonth = state =>  state.calendar.month;
// export const selectYear = state =>  state.calendar.year;
// export const selectDay = state =>  state.calendar.day;
// export const selectMonth = state => state.calendar.calendar.month;
// export const selectYear = state => state.calendar.calendar.year;
// export const selectDay = state => state.calendar.calendar.day;

export const selectMonth = state => state.calendar.month;
export const selectYear = state => state.calendar.year;
export const selectDay = state => state.calendar.day;