import React from 'react';

const Search = ({ setSearch }) => {
  return (
    <input
      type="text"
      className="form-control"
      placeholder="Username"
      aria-label="Username"
      onChange={e => setSearch(e.target.value)}
    />
  );
};

export default Search;
