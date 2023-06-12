import React, { useState } from "react";
import { Button, Image, Col, Container } from "react-bootstrap";
import classes from "./Product.module.css";

const productsArr = [
  {
    title: "Album 1",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Album 2",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Album 3",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Album 4",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Product = (props) => {
  const addItem = () => {};

  return (
    <div>
        <div style={{padding:'10px'}}>
      <h3 style={{ fontFamily: "Cursive", fontWeight: "bold" }}>MUSIC</h3>
      </div>

      {productsArr.map((item, index) => (
        <div className={classes.row}>
          <div key={index} className={classes.row}>

            <h3 style={{ fontWeight: "bold" }}>{item.title}</h3>
            <Image src={item.imageUrl} rounded />
            <p>{item.price}</p>
            <button style={{ backgroundColor: "skyblue" }}>Add Cart</button>
            
          </div>
        </div>
      ))}

    </div>
  );
};
export default Product;
