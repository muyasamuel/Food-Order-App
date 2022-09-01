import React, { Fragment, useContext } from 'react'
import classes from './Header.module.css'
import { FaShoppingCart, FaBars } from "react-icons/fa";
import CartContext from '../store/cart-context';
import { AppContext } from '../store/App-context';
import { Link } from 'react-router-dom';






function Header(props) {
 const context = useContext(CartContext);
 const {openSidebar } = useContext(AppContext);

 const noOfCartItems = context.items.reduce((curNumber, item) => {
  return curNumber + item.amount
 }, 0)


  return (
    <Fragment>

        <div className={classes.header}>
          
            <FaBars onClick={openSidebar}  className={classes.barIcon} />  
            <h1>Mneti Meals</h1>
            <Link to="/"  className={classes.link}>Home</Link> 
            <Link to="/about" className={classes.link}>About</Link> 
            <Link to="/contact" className={classes.link}>Contact</Link> 
            
          
        
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