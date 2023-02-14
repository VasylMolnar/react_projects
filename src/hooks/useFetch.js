import { useEffect, useState } from 'react';
import fetchCards from '../services/fetchCards';

const useFetch = (search, page) => {
  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetchCards(search, page);
        setItems(response.hits);
        setFetchError(null);
      } catch (e) {
        setFetchError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    setTimeout(() => {
      fetchItems();
    }, 1300);
  }, [search, page]);

  return { items, fetchError, isLoading };
};

export default useFetch;
