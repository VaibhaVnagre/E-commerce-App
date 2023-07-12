import React, { useReducer, useState } from "react";
import CartContext from "./Cart-Context";



const CartProvider = (props) => {

  const [data, setData] = useState([])

  const addItemHandeler = (item) => {

    let hasItem = false;

    const newArry = [...data];

    newArry.forEach((val)=>{
     if (val.title===item.title){
      hasItem = true;
     };
    
    });

    if(hasItem === true){
      alert("this item is already added to the cart")
    }
   
    else{
      setData([...data, item])
    }
    
  
  };

  const removeItemHandeler = (id) => {
   
    const RemovableData =  data.map((val)=>{
      return val.id === id;
    })
    
    const DATA = [...data]

    DATA.splice(RemovableData,1)

    setData(DATA)
   
  };

  const cartContext = {
    items: data,
    totalAmount: 0,
    addItem: addItemHandeler,
    removeItem: removeItemHandeler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
