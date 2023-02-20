import { useState, useEffect } from 'react';
import axios from 'axios';
const baseURL = 'http://localhost:1234/';

export const useFetch = url => {
  const [movies, setMovies] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('useEffect');
    const fetchItems = async () => {
      try {
        const response = await axios.get(`${baseURL}${url}`);

        setMovies(response.data);
        setFetchError(null);
      } catch (e) {
        setFetchError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    setTimeout(() => {
      fetchItems();
    }, 700);
  }, [url]);

  return { movies, isLoading, fetchError };
};
