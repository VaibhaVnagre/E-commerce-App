import React, { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const Modaloverlay = (props) => {
  return (
    <div className={classes.modal}>
      <button className={classes.crossBtn} onClick={props.onClose}> x </button>
      <h2 className={classes.heading}> cart </h2>
      <span className={classes.item}>ITEM</span>
      <span className={classes.price}>PRICE</span>
      <span className={classes.quantity}>QUANTITY</span>
      <div>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlay");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}

      {ReactDOM.createPortal(
        <Modaloverlay onClose={props.onClose}>{props.children}</Modaloverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
