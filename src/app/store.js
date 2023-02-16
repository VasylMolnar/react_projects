import { configureStore } from '@reduxjs/toolkit';
import contactSlice from '../features/contact/contactSlice';
import { apiSlice } from '../features/api/apiSlice';

const store = configureStore({
  reducer: {
    contact: contactSlice,
    [apiSlice.reducerPath]: apiSlice.reducer, //api:apiSlice.reducer (reducerPath: 'api'),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
//    [apiSlice.reducerPath]: apiSlice.reducer, //api:apiSlice.reducer (reducerPath: 'api'),
