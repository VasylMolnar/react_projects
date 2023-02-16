import { configureStore } from '@reduxjs/toolkit';
import contactSlice from '../features/contact/contactSlice';

const store = configureStore({
  reducer: {
    contact: contactSlice,
  },
});

export default store;
