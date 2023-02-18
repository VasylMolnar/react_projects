import { createSelector } from '@reduxjs/toolkit';
import { authSlice, postsAdapter, initialState } from './authSlice';

// Creates memoized selector
const selectPostsData = createSelector(
  authSlice.endpoints.getUsers.select(), // returns the query result object

  postsResult => {
    //console.log('postsResult', postsResult);
    return postsResult.data;
  } // normalized state object with ids & entities
);

export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUsersIds,
  // Pass in a selector that returns the posts slice of state
} = postsAdapter.getSelectors(state => selectPostsData(state) ?? initialState);
