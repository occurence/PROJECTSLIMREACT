import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filter/filterSelector';

export const selectProducts = state => state.products.items;
export const selectIsLoadingProducts = state => state.products.isLoading;
export const selectIsErrorProducts = state => state.products.isError;

export const selectFilteredProducts = createSelector(
    [selectProducts, selectFilter],
    (products, filter) => {
        return products.filter(({ title }) => 
            title?.toLowerCase().includes(filter?.toLowerCase())
        );
    }
);