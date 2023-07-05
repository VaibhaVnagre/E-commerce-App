import React, {useState,Fragment} from "react";
//import Cart from "./Cart";
import classes from "./HeaderCartbutton.module.css";
 
const CartButton = (props) => {
  

  const showItem = () => {
  
  };

  return (
   
    <Fragment>
      <button onClick={props.onClick} className={classes.button}>
       <span>Cart</span>
        <span className={classes.badge}>{0}</span>
    
      </button>

      </Fragment>
      

    

  );
};
export default CartButton;
