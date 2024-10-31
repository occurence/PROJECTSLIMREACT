import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = 'http://localhost:3001/api';

export const setAuthHeader = accessToken => {
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;}

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';}

export const signUp = createAsyncThunk(
  '/users/signup',
  async ({ name, email, password }, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', { name, email, password });
      toast.success(`Success ${res?.status}: \n${res?.data.message}`, {style:{backgroundColor:"var(--success)"}});
      return res.data;
    } catch (error) {
      toast.error(`Error ${error.response?.status}: \n${error.response?.data?.message}`, {style:{backgroundColor:"var(--error)"}});
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
      setAuthHeader(res.data.accessToken);
      toast.success(`Success ${res?.status}: \n${res?.data.message}`, {style:{backgroundColor:"var(--success)"}});
      return res.data;
    } catch (error) {
      toast.error(`Error ${error.response?.status}: \n${error.response?.data?.message}`, {style:{backgroundColor:"var(--error)"}});
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const current = createAsyncThunk(
  '/users/current',
  async (_, thunkAPI) => {
    try {
      const res = await axios.post('/users/current');
      toast.success(`Success ${res?.status}: \n${res?.data.message}`, {style:{backgroundColor:"var(--success)"}});
      return res.data;
    } catch (error) {
      toast.error(`Error ${error.response?.status}: \n${error.response?.data?.message}`, {style:{backgroundColor:"var(--error)"}});
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  '/users/logout',
  async (_, thunkAPI) => {
    try {
      if(!Cookies.get('access')){Cookies.set('access', localStorage.getItem('accessToken'))}
      if(!Cookies.get('refresh')){Cookies.set('access', localStorage.getItem('refreshToken'))}
      const res = await axios.get('/users/logout');
      toast.success(`Success ${res?.status}: \nLogout successful`, {style:{backgroundColor:"var(--success)"}});
      Cookies.set('access', null);
      // Cookies.remove('access');
      // Cookies.remove('refresh');
      clearAuthHeader();
      return res.data;
    } catch (error) {
      toast.error(`Error ${error.response?.status}: \n${error.response?.data?.message}`, {style:{backgroundColor:"var(--error)"}});
      return thunkAPI.rejectWithValue(error.message);
    }
});

export const update = createAsyncThunk(
  '/users/update',
  async ({ name, email }, thunkAPI) => {
    try {
      const res = await axios.patch('/users/update', { name, email });
      toast.success(`Success ${res?.status}: \n${res?.data.message}`, {style:{backgroundColor:"var(--success)"}});
      return res.data;
    } catch (error) {
      toast.error(`Error ${error.response?.status}: \n${error.response?.data?.message}`, {style:{backgroundColor:"var(--error)"}});
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  '/users/refresh',
  async (_, thunkAPI) => {
    const persistedToken = Cookies.get('access');
    const persistedRefreshToken = Cookies.get('refresh');

    if (!persistedToken) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      const res = await axios.post('/users/refresh');
      toast.success(`Success ${res?.status}: \n${res?.data.message}`, {style:{backgroundColor:"var(--success)"}});
      setAuthHeader(persistedRefreshToken);
      return res.data;
    } catch (error) {
      toast.error(`Error ${error.response?.status}: \n${error.response?.data?.message}`, {style:{backgroundColor:"var(--error)"}});
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);