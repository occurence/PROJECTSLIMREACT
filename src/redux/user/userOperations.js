import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

axios.defaults.baseURL = 'http://localhost:3001/api';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;}

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';}

export const signUp = createAsyncThunk(
  '/users/signup',
  async ({ name, email, password }, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', { name, email, password });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  '/users/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', { email, password });
      Cookies.set('access', res.data.accessToken);
      Cookies.set('refresh', res.data.refreshToken);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const current = createAsyncThunk(
  '/users/current',
  async (_, thunkAPI) => {
    try {
      const res = await axios.post('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  '/users/logout',
  async (_, thunkAPI) => {
    try {
      await axios.get('/users/logout');
      Cookies.remove('access');
      Cookies.remove('refresh');
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
});

export const refreshUser = createAsyncThunk(
  '/users/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = Cookies.get('access');
    const persistedRefreshToken = Cookies.get('refresh');

    if (!persistedToken) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedRefreshToken);
      const res = await axios.post('/users/refresh', {sid: state.auth.sid});
      setAuthHeader(res.data.accessToken);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);