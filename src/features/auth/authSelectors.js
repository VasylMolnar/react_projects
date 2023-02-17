import { createSelector } from '@reduxjs/toolkit';
import { postsAdapter, initialState, authSlice } from './authSlice';

// Creates memoized selector
const selectPostsData = createSelector(
  authSlice.endpoints.getPosts.select(), // returns the query result object
  postsResult => postsResult.data // normalized state object with ids & entities
);

export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUsersIds,
  // Pass in a selector that returns the posts slice of state
} = postsAdapter.getSelectors(state => selectPostsData(state) ?? initialState);

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
