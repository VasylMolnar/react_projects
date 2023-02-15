import React from 'react';
import css from './Modal.module.css';

const Modal = ({ visible, setVisible, previewURL, title }) => {
  return (
    <section
      className={visible ? `${css.backdrop}` : `${css.backdrop.isHidden}`}
      onClick={() => setVisible(false)}
    >
      <div
        style={{ visibility: visible ? 'visible' : 'hidden' }}
        className={css.modal}
      >
        <div className="card" style={{ width: '18rem' }}>
          <img src={previewURL} className="card-img-top" alt="Card image cap" />
          <div className="card-body">
            <p className="card-text">{title}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;
