import React from 'react'
import classes from './Header.module.css'
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <div className={classes.header}>
        <h1>Mneti Meals</h1>
        <div>
       <button className={classes.button}> 
            <span><FaShoppingCart size='1.5rem' /></span>
            <span className={classes.text}>Your Cart</span>
            <span className={classes.badge}>5</span>
        </button>
       </div>
        
    </div>
  )
}

export default Header