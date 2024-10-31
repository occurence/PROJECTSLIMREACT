import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

export const getProducts = createAsyncThunk(
  'products/fetchProductsAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/products');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getProductById = createAsyncThunk(
  'products/fetchProductById',
  async (productId, thunkAPI) => {
    try {
      const res = await axios.get(`/products/${productId}`);
      toast.success(`Success ${res?.status}: \n${res?.data.message}`, {style:{backgroundColor:"var(--success)"}});
      return res.data;
    } catch (error) {
      toast.error(`Error ${error.response?.status}: \n${error.response?.data?.message}`, {style:{backgroundColor:"var(--error)"}});
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addProduct = createAsyncThunk(
  'products/addProduct',
  async ({ categories, weight, title, calories, groupBloodNotAllowed }, thunkAPI) => {
    try {
      const res = await axios.post('/products', { categories, weight, title, calories, groupBloodNotAllowed });
      // toast.success(`Success ${res?.status}: \n${res?.data.message}`, {style:{backgroundColor:"var(--success)"}});
      return res.data;
    } catch (error) {
      toast.error(`Error ${error.response?.status}: \n${error.response?.data?.message}`, {style:{backgroundColor:"var(--error)"}});
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (productId, thunkAPI) => {
    try {
      const res = await axios.delete(`/products/${productId}`);
      toast.success(`Success ${res?.status}: \n${res?.data.message}`, {style:{backgroundColor:"var(--success)"}});
      return res.data;
    } catch (error) {
      toast.error(`Error ${error.response?.status}: \n${error.response?.data?.message}`, {style:{backgroundColor:"var(--error)"}});
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editProduct = createAsyncThunk(
  'products/editProduct',
  async({ productId, categories, weight, title, calories, groupBloodNotAllowed }, thunkAPI) => {
      try{
          const res = await axios.patch(`/products/${productId}`, { productId, categories, weight, title, calories, groupBloodNotAllowed });
          toast.success(`Success ${res?.status}: \n${res?.data.message}`, {style:{backgroundColor:"var(--success)"}});
          return res.data;
        } catch (error) {
          toast.error(`Error ${error.response?.status}: \n${error.response?.data?.message}`, {style:{backgroundColor:"var(--error)"}});
          return thunkAPI.rejectWithValue(error.message);
        }
  }
);