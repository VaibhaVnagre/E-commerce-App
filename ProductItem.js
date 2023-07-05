import React, { Fragment } from "react";
import classes from './ProductItem.module.css'
const ProductItem = (props) =>{
    return (
        <Fragment>
            <div className={classes.content}>
            <span> {props.id} </span>
            <h3 className={classes.title}> {props.title} </h3>
            <img src={props.image} className={classes["main-image"]}/>
            <div>Rs. {props.price}</div>
            <button>Add To Cart</button>
            </div>
        </Fragment>
    )
}
export default ProductItem;