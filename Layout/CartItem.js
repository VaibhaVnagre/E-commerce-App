import React, { Fragment } from "react";
import classes from './CartItem.module.css'


const CartItem = (props) => {

    return ( 
<Fragment>

      <span>
        <img src={props.image} className={classes.img}/>
        <span className={classes.title}> {props.title}</span>
        <span className={classes.price}>{props.price}</span>
        <span className={classes.quantity}>{props.quantity}</span>
        <button className={classes.Removebtn}>Remove</button>
      </span>

      </Fragment>
     
    )
}

export default CartItem;