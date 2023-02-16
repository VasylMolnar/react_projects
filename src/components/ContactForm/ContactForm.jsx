import React from 'react';
import { useDispatch } from 'react-redux';
import { apiRequest } from '../../features/contact/contactSlice';
import { nanoid } from 'nanoid';

const ContactForm = () => {
  const dispatch = useDispatch();

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          const contact = {
            id: nanoid(),
            name: e.currentTarget.elements.name.value,
            phone: e.currentTarget.elements.phone.value,
          };

          const option = {
            url: `/contact`,
            method: 'post',
            name: 'create',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(contact),
          };

          dispatch(apiRequest(option));
          e.currentTarget.reset();
        }}
      >
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Name"
            name="name"
          />
        </div>
        <div className="form-group" style={{ margin: '30px 0px' }}>
          <label htmlFor="exampleInputPassword1">Phone Number</label>
          <input
            type="number"
            className="form-control"
            placeholder="Phone Number"
            name="phone"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default ContactForm;
