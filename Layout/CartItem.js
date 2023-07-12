import React, { Fragment, useContext } from "react";
import classes from './CartItem.module.css'
import CartContext from "../Store/Cart-Context";

const CartItem = (props) => {
const cartCtx = useContext(CartContext);

  const removeFromCart = (event) => {
    event.preventDefault();
    cartCtx.removeItem(props.id)
  }
    return (

<Fragment>

       
        <img src={props.image} className={classes.img}/>
        <span className={classes.title}> {props.title}</span>
        <span className={classes.price}>{props.price}</span>
        <span className={classes.quantity}>{props.quantity}</span>
       <button className={classes.Removebtn} onClick={removeFromCart}>Remove</button>
     
      </Fragment>
     
    )
}

export default CartItem;