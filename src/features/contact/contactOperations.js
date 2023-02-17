import { createAsyncThunk } from '@reduxjs/toolkit';
import { Report } from 'notiflix';
import { fetchItems } from '../../hooks/fetchItem';
import { fetchCRUD } from '../../hooks/fetchCRUD';

export const fetchContact = createAsyncThunk(
  'contacts/fetchContact',
  async url => {
    try {
      const request = await fetchItems(url);
      return request;
    } catch (e) {
      Report.failure(`Error: ${e.message}`);
    }
  }
);

export const apiRequest = createAsyncThunk(
  'contacts/apiRequest',
  async options => {
    try {
      const request = await fetchCRUD(options);
      Report.success(`Post ${options.name} successfully`, '');
      return request;
    } catch (e) {
      Report.failure(`Error Post not ${options.name}`, `Error: ${e.message}`);
    }
  }
);
