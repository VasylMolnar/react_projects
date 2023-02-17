import { useMemo, React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCount,
  selectContactsIds,
  getSearchValue,
} from '../../features/contact/contactSelectors.js';
import { addCount } from '../../features/contact/contactSlice.js';

import CardElement from './CardElement';
import useSort from '../../hooks/useSort';

const ContactList = () => {
  const dispatch = useDispatch();
  const count = useSelector(getCount);
  const orderedContactsIds = useSelector(selectContactsIds);
  const search = useSelector(getSearchValue);
  const sortList = useSort(orderedContactsIds, search);

  return (
    <>
      <div
        style={{
          marginTop: '30px',
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <button
          className="btn btn-primary"
          onClick={() => dispatch(addCount())}
        >
          {count}
        </button>
      </div>

      <ul>
        {sortList.map(contact => (
          <CardElement contactId={contact.id} key={contact.id} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
