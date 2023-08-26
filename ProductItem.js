import React, { Fragment, useContext } from "react";
import classes from './ProductItem.module.css'
import CartContext from "../../Store/Cart-Context";
import { Link } from "react-router-dom/cjs/react-router-dom";

const ProductItem = (props) =>{
    
    const cartctx = useContext(CartContext); 
        
         const AddItemCart = (event) =>{
        
            event.preventDefault();
console.log(props.id)
            cartctx.addItem({
                 id : props.id,
                 title : props.title,
                 imageUrl : props.image,
                 price : props.price,
                quantity : props.quantity
               
            })
    }

    return (
        <Fragment>
            <div className={classes.content}>
           
            <h3 className={classes.title}> {props.title} </h3>

            <Link to={`/products/${props.id}`} className={classes.link}>
            <img src={props.image} className={classes["main-image"]}/>
            <div className={classes.price}>Rs. {props.price}</div>
            <button onClick={AddItemCart} className={classes.btn}>Add To Cart</button>
            </Link>
         
            </div>
        </Fragment>
    )
}
export default ProductItem;