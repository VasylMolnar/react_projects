import { useMemo } from 'react';

export const useSort = (items, searchValue) => {
  return useMemo(() => {
    const filteredResults = items.filter(post =>
      post.Title.toLowerCase().includes(searchValue.toLowerCase())
    );
    return filteredResults;
  }, [items, searchValue]);
};
