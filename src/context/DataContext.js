import { createContext, useState } from 'react';
import { useFetch } from '../hooks/useFetch';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const { movies, isLoading, fetchError } = useFetch('films');
  movies.sort((a, b) => Number(b.imdbRating) - Number(a.imdbRating));

  return (
    <DataContext.Provider
      value={{
        movies,
        isLoading,
        fetchError,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
