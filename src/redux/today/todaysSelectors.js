import { createSelector } from '@reduxjs/toolkit';
import { selectDefault } from '../calendar/calendarSelectors';


export const selectTodays = state => state.todays.items;
export const selectIsLoadingTodays = state => state.todays.isLoading;
export const selectIsErrorTodays = state => state.todays.isError;

export const selectFilteredTodays = createSelector(
    [selectTodays, selectDefault],
    (todays, defaultDate) => {
        return todays
        .filter(({ date }) => date === defaultDate).flatMap(({ products }) => products);
    }
);