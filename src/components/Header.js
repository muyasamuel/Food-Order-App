import React, { Fragment } from 'react'
import classes from './Header.module.css'
import { FaShoppingCart } from "react-icons/fa";


function Header(props) {
  return (
    <Fragment>

        <div className={classes.header}>
        <h1>Mneti Meals</h1>
        
            <button className={classes.button} onClick={props.onShowCart}> 
                    <span><FaShoppingCart size='1.5rem' /></span>
                    <span className={classes.text}>Your Cart</span>
                    <span className={classes.badge}>5</span>
                </button>
            </div>
        
    
        
    </Fragment>
    
  )
}

export default Header