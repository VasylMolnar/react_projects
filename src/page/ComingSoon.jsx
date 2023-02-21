import { useState, React, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import MoviesList from '../components/MoviesList/MoviesList';

export const ComingSoon = () => {
  const { movies, isLoading, fetchError } = useFetch('comingSoon');

  if (movies) {
    return <MoviesList movies={movies} />;
  }
};
