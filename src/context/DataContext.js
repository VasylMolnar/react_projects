import { createContext, useState } from 'react';
import { useFetch } from '../hooks/useFetch';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const { movies, isLoading, fetchError } = useFetch('films');

  const commingSoon = movies.filter(movie => {
    return movie.ComingSoon === true;
  });

  const movieReady = movies
    .filter(movie => {
      return movie.ComingSoon !== true;
    })
    .sort((a, b) => Number(b.imdbRating) - Number(a.imdbRating));

  return (
    <DataContext.Provider
      value={{
        movies,
        commingSoon,
        movieReady,
        isLoading,
        fetchError,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
