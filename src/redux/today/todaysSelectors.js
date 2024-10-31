import { createSelector } from '@reduxjs/toolkit';
import { selectCalendar, selectMonth, selectYear, selectDay } from '../calendar/calendarSelector';

export const selectTodays = state => state.todays.items;
export const selectIsLoadingTodays = state => state.todays.isLoading;
export const selectIsErrorTodays = state => state.todays.isError;
export const selectMMDDYYYY = state => state.calendar.mmddyyyy;
export const selectYYYYMMDD = state => state.calendar.yyyymmdd;
export const selectDDMMYYYY = state => state.calendar.ddmmyyyy;

const date = new Date(selectCalendar);
// export const selectMMDDYYYY = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
// export const selectYYYYMMDD = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
// export const selectDDMMYYYY = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
// const mmddyyyy = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
// const yyyymmdd = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
// const ddmmyyyy = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;


// export const selectMMDDYYYY = createSelector([selectCalendar], (date) => {
//     return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`});
// export const selectYYYYMMDD = createSelector([selectCalendar], (date) => {
//     return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`});
// export const selectDDMMYYYY = createSelector([selectCalendar], (date) => {
//     return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`});
// export const selectMMDDYYYY = createSelector([selectCalendar], (date) => {
//     return mmddyyyy});
// export const selectYYYYMMDD = createSelector([selectCalendar], (date) => {
//     return yyyymmdd});
// export const selectDDMMYYYY = createSelector([selectCalendar], (date) => {
//     return ddmmyyyy});
// export const selectMMDDYYYY = createSelector([selectCalendar], (calendar) => {
//     return calendar});
// export const selectYYYYMMDD = createSelector([selectCalendar], (calendar) => {
//     return calendar});
// export const selectDDMMYYYY = createSelector([selectCalendar], (calendar) => {
//     return calendar});
// export const selectMMDDYYYY = createSelector([selectMonth], (calendar) => {
//     return calendar});
// export const selectYYYYMMDD = createSelector([selectYear], (calendar) => {
//     return calendar});
// export const selectDDMMYYYY = createSelector([selectDay], (calendar) => {
//     return calendar});

// export const selectMMDDYYYY = createSelector([selectMonth], (mmddyyyy) => {
//     return mmddyyyy});
// export const selectYYYYMMDD = createSelector([selectYear], (yyyymmdd) => {
//     return yyyymmdd});
// export const selectDDMMYYYY = createSelector([selectDay], (ddmmyyyy) => {
//     return ddmmyyyy});

export const selectFilteredToday = createSelector(
    [selectTodays, selectCalendar],
    (todays, calendar) => {
        return todays.filter(({ date }) => 
            date.includes(calendar)
        );
    }
);