import { createSelector } from '@reduxjs/toolkit';
import { selectCalendar } from '../calendar/calendarSelectors';

export const selectTodays = state => state.todays.items;
export const selectIsLoadingTodays = state => state.todays.isLoading;
export const selectIsErrorTodays = state => state.todays.isError;

export const selectFilteredToday = createSelector(
    [selectTodays, selectCalendar],
    (todays, calendar) => {
        return todays.filter(({ date }) => 
            date.includes(calendar)
        );
    }
);