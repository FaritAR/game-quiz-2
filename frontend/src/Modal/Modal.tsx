import React from 'react';
import './modal.css';

const Modal = ({ active, setActive, children }): JSX.Element => {
  return (
    <div
      className={active ? 'modal active' : 'modal'}
      onClick={(): void => setActive(false)}
    >
      <div
        className={active ? 'modal_content active' : 'modal_content'}
        onClick={(e): void => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
