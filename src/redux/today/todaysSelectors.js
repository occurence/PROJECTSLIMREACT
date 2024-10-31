import { createSelector } from '@reduxjs/toolkit';
import { selectCalendar } from '../calendar/calendarSelector';

export const selectTodays = state => state.todays.items;
export const selectIsLoadingTodays = state => state.todays.isLoading;
export const selectIsErrorTodays = state => state.todays.isError;
export const selectMMDDYYYY = state => state.calendar.mmddyyyy;
export const selectYYYYMMDD = state => state.calendar.yyyymmdd;
export const selectDDMMYYYY = state => state.calendar.ddmmyyyy;

export const selectFilteredToday = createSelector(
    [selectTodays, selectCalendar],
    (todays, calendar) => {
        return todays.filter(({ date }) => 
            date.includes(calendar)
        );
    }
);