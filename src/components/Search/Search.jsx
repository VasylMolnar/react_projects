import React from 'react';

const Search = ({ setSearch }) => {
  return (
    <input
      type="text"
      className="form-control"
      placeholder="Film"
      aria-label="Film"
      onChange={e => setSearch(e.target.value)}
    />
  );
};

export default Search;
