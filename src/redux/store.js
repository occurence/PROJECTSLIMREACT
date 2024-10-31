import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { userReducer } from './user/userSlice';
import { productsReducer } from '../redux/product/productsSlice';
import { todaysReducer } from '../redux/today/todaysSlice';
import { filterReducer } from '../redux/filter/filterSlice';
import { calendarReducer } from '../redux/calendar/calendarSlice';


const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['accessToken','refreshToken','isLoggedIn','user'],
};

export const store = configureStore({
  reducer: {
    user: persistReducer(userPersistConfig, userReducer),
    products: productsReducer,
    todays: todaysReducer,
    filter: filterReducer,
    calendar: calendarReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);