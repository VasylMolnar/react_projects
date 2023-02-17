import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectContactById } from '../features/contact/contactSelectors';

const useSort = (contactIds, searchValue) => {
  const items = useSelector(state => {
    return contactIds.map(postId => selectContactById(state, postId));
  });

  const sort = useMemo(() => {
    return items.filter(post => {
      return post.name.toLowerCase().includes(searchValue.toLowerCase());
    });
  }, [items, searchValue]);

  return sort;
};

export default useSort;
