import { useState, React, useEffect, useContext } from 'react';
import MoviesList from '../components/MoviesList/MoviesList';
import DataContex from '../context/DataContext';

export const ComingSoon = () => {
  const { commingSoon, isLoading, fetchError } = useContext(DataContex);

  if (commingSoon) {
    return <MoviesList movies={commingSoon} />;
  }
};
