import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

export const getTodays = createAsyncThunk(
  'todays/fetchTodaysAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/todays');
      // toast.success(`Success ${res?.status}: \n${res?.data.message}`, {style:{backgroundColor:"var(--success)"}});
      return res.data;
    } catch (error) {
      toast.error(`Error ${error.response?.status}: \n${error.response?.data?.message}`, {style:{backgroundColor:"var(--error)"}});
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getTodayById = createAsyncThunk(
    'products/fetchTodayById',
    async (todayId, thunkAPI) => {
      try {
        const res = await axios.get(`/todays/${todayId}`);
        toast.success(`Success ${res?.status}: \n${res?.data.message}`, {style:{backgroundColor:"var(--success)"}});
        return res.data;
      } catch (error) {
        toast.error(`Error ${error.response?.status}: \n${error.response?.data?.message}`, {style:{backgroundColor:"var(--error)"}});
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

export const addToday = createAsyncThunk(
  'todays/addToday',
  async ({ user, date, height, age, weight, weightDesired, blood, dailyRate }, thunkAPI) => {
    try {
      const res = await axios.post('/todays', { user, date, height, age, weight, weightDesired, blood, dailyRate });
      toast.success(`Success ${res?.status}: \nIntake for ${date}`, {style:{backgroundColor:"var(--success)"}});
      return res.data;
    } catch (error) {
      toast.error(`Error ${error.response?.status}: \n${error.response?.data?.message}`, {style:{backgroundColor:"var(--error)"}});
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteToday = createAsyncThunk(
  'todays/deleteToday',
  async (todayId, thunkAPI) => {
    try {
      const res = await axios.delete(`/todays/${todayId}`);
      toast.success(`Success ${res?.status}: \n${res?.data.message}`, {style:{backgroundColor:"var(--success)"}});
      return res.data;
    } catch (error) {
      toast.error(`Error ${error.response?.status}: \n${error.response?.data?.message}`, {style:{backgroundColor:"var(--error)"}});
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const consumeProduct = createAsyncThunk(
  'todays/editConsume',
  async(todayId, { productId, grams }, thunkAPI) => {
      try{
          const res = await axios.patch(`/todays/${todayId}`, { productId, grams });
          toast.success(`Success ${res?.status}: \n${res?.data.message}`, {style:{backgroundColor:"var(--success)"}});
          return res.data;
        } catch (error) {
          toast.error(`Error ${error.response?.status}: \n${error.response?.data?.message}`, {style:{backgroundColor:"var(--error)"}});
          return thunkAPI.rejectWithValue(error.message);
        }
  }
);

export const deleteProduct = createAsyncThunk(
    'todays/deleteConsume',
    async(todayId, productId, thunkAPI) => {
        try{
            const res = await axios.delete(`/todays/${todayId}/${productId}`);
            toast.success(`Success ${res?.status}: \n${res?.data.message}`, {style:{backgroundColor:"var(--success)"}});
            return res.data;
          } catch (error) {
            toast.error(`Error ${error.response?.status}: \n${error.response?.data?.message}`, {style:{backgroundColor:"var(--error)"}});
            return thunkAPI.rejectWithValue(error.message);
          }
    }
);