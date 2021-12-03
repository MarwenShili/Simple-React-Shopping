import React from 'react';



import classes from './ErrorModal.module.css';
import Modal from './Modal';

const ErrorModal = (props) => {
  return (
    <div>
      <Modal onClick={props.onConfirm} >
      <div>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <h4>{props.message}</h4>
        </div>
        <footer className={classes.actions}>
          <button className="btn btn-dark" onClick={props.onConfirm}>Okay</button>
        </footer>
      </div>
      </Modal>
    </div>
  );
};

export default ErrorModal;
