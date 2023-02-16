import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCount, addCount } from '../../features/contact/contactSlice';
import CardElement from './CardElement';

const ContactList = ({ sortList }) => {
  const dispatch = useDispatch();
  const count = useSelector(getCount);

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
        {sortList.map(el => (
          <CardElement id={el.id} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
