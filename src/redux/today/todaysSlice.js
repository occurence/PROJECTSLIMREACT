import { createSlice } from '@reduxjs/toolkit';
import { logOut } from '../../redux/user/userOperations';
import { getTodays, getTodayById, addToday, deleteToday, consumeProduct, deleteProduct } from './todaysOperations';

const handlePending = state => {
  state.isLoading = true;
  state.isError = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.isError = action.payload;
};

const todaysSlice = createSlice({
  name: 'todays',
  initialState: {
    items: [],
    isLoading: false,
    isError: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getTodays.pending, handlePending)
      .addCase(getTodays.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.items = action.payload;
      })
      .addCase(getTodays.rejected, handleRejected)
      .addCase(getTodayById.pending, handlePending)
      .addCase(getTodayById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.items = action.payload;
      })
      .addCase(getTodayById.rejected, handleRejected)
      .addCase(addToday.pending, handlePending)
      .addCase(addToday.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.items.push(action.payload);
      })
      .addCase(addToday.rejected, handleRejected)
      .addCase(deleteToday.pending, handlePending)
      .addCase(deleteToday.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        const index = state.items.findIndex(
          today => today.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteToday.rejected, handleRejected)
      .addCase(consumeProduct.pending, handlePending)
      .addCase(consumeProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        const consumedProduct = action.payload;
        state.items = state.items.map(item => 
            item.id === consumedProduct.id ? consumedProduct : item);
      })
      .addCase(consumeProduct.rejected, handleRejected)
      .addCase(deleteProduct.pending, handlePending)
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        const deletedProduct = action.payload;
        state.items = state.items.map(item => 
            item.id === deletedProduct.id ? deletedProduct : item);
      })
      .addCase(deleteProduct.rejected, handleRejected)
      .addCase(logOut.fulfilled, state => {
        state.items = [];
        state.isError = null;
        state.isLoading = false;
      });
  },
});

export const todaysReducer = todaysSlice.reducer;
