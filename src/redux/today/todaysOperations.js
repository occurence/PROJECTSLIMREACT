import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getTodays = createAsyncThunk(
  'todays/fetchTodaysAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/todays');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getTodayById = createAsyncThunk(
    'products/fetchTodayById',
    async (todayId, thunkAPI) => {
      try {
        const res = await axios.get(`/todays/${todayId}`);
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

export const addToday = createAsyncThunk(
  'todays/addToday',
  async ({ user, date, height, age, weight, weightDesired, blood, dailyRate }, thunkAPI) => {
    try {
      const response = await axios.post('/todays', { user, date, height, age, weight, weightDesired, blood, dailyRate });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteToday = createAsyncThunk(
  'todays/deleteToday',
  async (todayId, thunkAPI) => {
    try {
      const response = await axios.delete(`/todays/${todayId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const consumeProduct = createAsyncThunk(
  'todays/editConsume',
  async(todayId, { productId, grams }, thunkAPI) => {
      try{
          const res = await axios.patch(`/todays/${todayId}`, { productId, grams });
          return res.data;
      }catch(error){return thunkAPI.rejectWithValue(error.message);}
  }
);

export const deleteProduct = createAsyncThunk(
    'todays/deleteConsume',
    async(todayId, productId, thunkAPI) => {
        try{
            const res = await axios.delete(`/todays/${todayId}/${productId}`);
            return res.data;
        }catch(error){return thunkAPI.rejectWithValue(error.message);}
    }
);