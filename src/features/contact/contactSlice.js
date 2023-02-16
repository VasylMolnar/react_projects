import {
  createSlice,
  createAsyncThunk,
  createSelector,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import { Notify, Report } from 'notiflix';
import { fetchItems } from '../../hooks/fetchItem';
import { fetchCRUD } from '../../hooks/fetchCRUD';

const postsAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const initialState = postsAdapter.getInitialState({
  // We not write contacts: [] because postsAdapter have Default []
  status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  fetchError: null,
  search: '',
  count: 0,
});

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

//getSelectors creates these selectors and we rename them with aliases using destructuring (img)
// postsAdapter.getSelectors have  own methods (selectAll,selectById,selectIds ...) we just changed the name.
/*
entities: 
    2: {id: 2, title: 'qui est esse', content: 'hey there', userId: 1, date: '2022-04-13T23:02:19.248Z', …}
    3: {id: 3, title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut', content: 'hey there!', userId: 1, date: '2022-05-02T20:41:05.437Z', …}
    5: {id: 5, title: 'nesciunt quas odio', content: 'Hello there!', userId: 1, date: '2022-04-14T17:46:43.450Z', …}
ids: 
  Array(3)
    0: 3
    1: 5
    2: 2
length: 3
*/
export const {
  selectAll: getAllContact,
  selectById: selectContactById,
  selectIds: selectContactsIds,
  // Pass in a selector that returns the posts slice of state
} = postsAdapter.getSelectors(state => state.contact);

//export const getAllContact = state => state.contact.contacts;
export const getSearchValue = state => state.contact.search;
export const getStatus = state => state.contact.status;
export const getFetchError = state => state.contact.fetchError;
export const getCount = state => state.contact.count;

export const { addSearch, addCount } = contactSlice.actions;
export default contactSlice.reducer;
