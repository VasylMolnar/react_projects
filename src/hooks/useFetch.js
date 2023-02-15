import { useEffect, useState } from 'react';
import fetchCards from '../services/fetchCards';

const useFetch = (search, page, setIsLoading) => {
  const [items, setItems] = useState([]);
  const [totalHits, setTotalHits] = useState(0);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetchCards(search, page);
        page >= 2
          ? setItems([...items, ...response.hits])
          : setItems(response.hits);

        setTotalHits(response.totalHits);
        setFetchError(null);
      } catch (e) {
        setFetchError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchItems();
  }, [search, page, setIsLoading]);

  return { items, fetchError, totalHits };
};

export default useFetch;
