import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../Store/Cart-Context";


const cartElements = [
  {
    title: "Album1",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 2,
  },

  {
    title: "Album2 ",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

    quantity: 3,
  },

  {
    title: "Album3",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

    quantity: 1,
  },

  {
    title: "Album 4",

    price: 80,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",

    quantity: 1,
  }
];

const Cart = (props) => {

const cartctx = useContext(CartContext)
let totalAmount = 0

cartctx.items.forEach ((items)=>{
     totalAmount = totalAmount + items.price;
})

  const cartItem = (
    <div>
      {cartctx.items.map((val) => {
        return (
          <CartItem
            key={Math.random()}
            _id = {val._id}
            image={val.imageUrl}
            title={val.title}
            price={val.price}
            quantity={val.quantity}
            id = {Math.random()}
          />
        );
      })}
    </div>
  );

  return (
    <Modal onClose={props.onClose}>
     

      {cartItem}

      <div className={classes.ammount}>
        <span className={classes.total}>Total Ammount :-</span>
        <span>{totalAmount}</span>
      </div>

      <button className={classes.purchaseBtn}>Purchase</button>
    </Modal>
  );
};
export default Cart;
