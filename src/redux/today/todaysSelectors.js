import { createSelector } from '@reduxjs/toolkit';
import { selectYear } from '../calendar/calendarSelectors';


export const selectTodays = state => state.todays.items;
export const selectIsLoadingTodays = state => state.todays.isLoading;
export const selectIsErrorTodays = state => state.todays.isError;

export const selectFilteredTodays = createSelector(
    [selectTodays, selectYear],
    (todays, year) => {
        return todays
        .filter(({ date }) => date === year).flatMap(({ products }) => products);
    }
);