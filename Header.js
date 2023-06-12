import React, { Fragment } from "react";
//import {Navbar } from "react-bootstrap";
import Heading from "./Heading";
import CartButton from "../Cart/CartButton";

const Header = () => {
  return (
    <Fragment>
      <div
        style={{
          width: "100%",
          height: "3rem",
          backgroundColor: "black",
          color: "white",
          margin: "2px",
          padding : '10px'
        }}
      >
        <span style={{ padding: "2rem" }}>HOME</span>
        <span style={{ padding: "2rem" }}>STORE</span>
        <span style={{ padding: "2rem" }}>ABOUT</span>

        <CartButton />
      </div>

      <Heading />
    </Fragment>
  );
};
export default Header;

//className="d-flex justify-content-center align-items-center"
