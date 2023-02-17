import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { fetchContact, apiRequest } from './contactOperations';

export const postsAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const initialState = postsAdapter.getInitialState({
  // We not write contacts: [] because postsAdapter have Default []
  status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  fetchError: null,
  search: '',
  count: 0,
});

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addSearch(state, action) {
      state.search = action.payload;
    },

    addCount: state => {
      state.count += 1;
    },

    /*or 
    addCount(state) {
      state.count += 1;
    },*/
  },

  extraReducers(builder) {
    builder
      .addCase(fetchContact.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchContact.fulfilled, (state, action) => {
        state.status = 'succeeded';
        //state.contacts = action.payload;
        postsAdapter.upsertMany(state, action.payload); //add to default []
      })
      .addCase(fetchContact.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(apiRequest.fulfilled, (state, action) => {
        //state.status = 'idle';

        switch (action.meta.arg.method) {
          case 'put':
            postsAdapter.upsertOne(state, action.payload);
            break;
          case 'delete':
            const id = action.meta.arg.url.split('/');
            postsAdapter.removeOne(state, id[id.length - 1]);
            break;
          case 'post':
            postsAdapter.addOne(state, action.payload);
            break;
          default:
            state.status = 'idle';
            break;
        }
      });
  },
});

export const { addSearch, addCount } = contactSlice.actions;
export default contactSlice.reducer;
