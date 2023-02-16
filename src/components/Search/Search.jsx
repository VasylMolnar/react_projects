import React from 'react';
import { useDispatch } from 'react-redux';
import { addSearch } from '../../features/contact/contactSlice';
import { debounce } from 'lodash';

const Search = () => {
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      className="form-control"
      placeholder="Username"
      aria-label="Username"
      onChange={debounce(e => dispatch(addSearch(e.target.value)), 300)}
    />
  );
};

export default Search;
