import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
  'products',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/products');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addProduct = createAsyncThunk(
  'products/addProduct',
  async ({ categories, weight, title, calories, groupBloodNotAllowed }, thunkAPI) => {
    try {
      const response = await axios.post('/products', { categories, weight, title, calories, groupBloodNotAllowed });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (productId, thunkAPI) => {
    try {
      const response = await axios.delete(`/products/${productId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editProduct = createAsyncThunk(
  'products/editProduct',
  async({ productId, categories, weight, title, calories, groupBloodNotAllowed }, thunkAPI) => {
      try{
          const res = await axios.patch(`/products/${productId}`, { productId, categories, weight, title, calories, groupBloodNotAllowed });
          return res.data;
      }catch(error){return thunkAPI.rejectWithValue(error.message);}
  }
);