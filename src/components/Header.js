import React, { Fragment, useContext } from 'react'
import classes from './Header.module.css'
import { FaShoppingCart } from "react-icons/fa";
import CartContext from '../store/cart-context';




function Header(props) {
 const context = useContext(CartContext);

 const noOfCartItems = context.items.reduce((latestNumber, item) => {
  return latestNumber + item.amount
 }, 0)


  return (
    <Fragment>

        <div className={classes.header}>
        <h1>Mneti Meals</h1>
        
            <button className={classes.button} onClick={props.onShowCart}> 
                    <span><FaShoppingCart size='1.5rem' /></span>
                    <span className={classes.text}>Your Cart</span>
                    <span className={classes.badge}>{noOfCartItems}</span>
                </button>
            </div>
        
    
        
    </Fragment>
    
  )
}

export default Header