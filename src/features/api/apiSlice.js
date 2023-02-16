import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1234' }),
  tagTypes: ['User'], //to save data cache
  endpoints: builder => ({}), //is empty because we create functions in authSlice.js
});
