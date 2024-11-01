import { createSelector } from '@reduxjs/toolkit';
import { selectMonth, selectYear } from '../calendar/calendarSelectors';


export const selectTodays = state => state.todays.items;
export const selectIsLoadingTodays = state => state.todays.isLoading;
export const selectIsErrorTodays = state => state.todays.isError;

// export const selectFilteredTodays = createSelector(
//     [selectTodays, selectMonth],
//     (todays, month) => {
//         return todays.filter(({ date }) =>
//             date.includes(month)
//         );
//     }
// );


// export const selectFilteredTodays = createSelector(
//     [selectTodays, selectMonth],
//     (todays, month) => {
//         // Extract month and year from the month value
//         const [selectedMonth, selectedDay, selectedYear] = month.split('/').map(Number);
        
//         // Filter based on month and year
//         return todays.filter(({ date }) => {
//             const [year, monthFromDate] = date.split('-'); // Split the date to get year and month
//             return Number(year) === selectedYear && Number(monthFromDate) === selectedMonth;
//         });
//     }
// );



// export const selectFilteredTodays = createSelector(
//     [selectTodays, selectMonth, selectYear],
//     (todays, month, year) => {
//         const filteredTodays = todays
//         .filter(({ date, products }) =>
//             {
//                 return date === year
//                 // if(date === year)
//                 // return products
//             }
//         )
//         const productsArray = filteredTodays.map(({ products }) => products).flat();

//         return {
//             filteredTodays,
//             productsArray
//         };
//         // .flatMap(({ products }) => {return products})
//     }
// );


// export const selectFilteredTodays = createSelector(
//     [selectTodays, selectYear],
//     (todays, year) => {
//         const filteredTodays = todays
//         .filter(({ date }) => date === year)
//         const productsArray = filteredTodays.map(({ products }) => products).flat();
//         return {productsArray};
//     }
// );


export const selectFilteredTodays = createSelector(
    [selectTodays, selectYear],
    (todays, year) => {
        return todays
        .filter(({ date }) => date === year).flatMap(({ products }) => products);
    }
);