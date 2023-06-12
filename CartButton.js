import React, { Fragment } from "react";
const CartButton = () => {
  const addName = () => {
    console.log("gotu");
  };
  return (
    <div style={{ textAlign: "end" }}>
      <button
        style={{
          borderWidth: "3px",
          borderRadius: "10px",
          width: "40px",
          borderColor: "skyblue",
          
        }}
        onClick={addName}
      >
        cart
      </button>
      <span style={{ color: "skyblue", padding: "7px 5px" }}>{0}</span>
    </div>
  );
};
export default CartButton;
