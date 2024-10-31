import { createSlice } from '@reduxjs/toolkit';
import { logOut } from '../../redux/user/userOperations';
import { getProducts, getProductById, addProduct, deleteProduct, editProduct } from './productsOperations';

const handlePending = state => {
  state.isLoading = true;
  state.isError = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.isError = action.payload;
};

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    isLoading: false,
    isError: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getProducts.pending, handlePending)
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.items = action.payload;
      })
      .addCase(getProducts.rejected, handleRejected)
      .addCase(getProductById.pending, handlePending)
      .addCase(getProductById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.items = action.payload;
      })
      .addCase(getProductById.rejected, handleRejected)
      .addCase(addProduct.pending, handlePending)
      .addCase(addProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.items.push(action.payload);
      })
      .addCase(addProduct.rejected, handleRejected)
      .addCase(deleteProduct.pending, handlePending)
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        const index = state.items.findIndex(
          product => product.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteProduct.rejected, handleRejected)
      .addCase(editProduct.pending, handlePending)
      .addCase(editProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        const updatedProduct = action.payload;
        state.items = state.items.map(item => 
            item.id === updatedProduct.id ? updatedProduct : item);
      })
      .addCase(editProduct.rejected, handleRejected)
      .addCase(logOut.fulfilled, state => {
        state.items = [];
        state.isError = null;
        state.isLoading = false;
      });
  },
});

export const productsReducer = productsSlice.reducer;
