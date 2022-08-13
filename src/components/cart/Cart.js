import React from 'react';
import classes from './Cart.module.css';

function cart() {

    const cartItems = (
        <ul className={classes['cart-items']} >
          {[{
        id: 'm3',
        name: 'Kaimati',
        description: 'tasty yummy potata-like flesh',
        price: 'ksh'+ 200 
    },].map((item) => (
            <li>{item.name}</li>
          ))}
        </ul>
      );
  return (
    <div>
    {cartItems}
    <div className={classes.total}>
      <span>Total Amount</span>
      <span>35.62</span>
    </div>
    <div className={classes.actions}>
      <button className={classes['button--alt']}>Close</button>
      <button className={classes.button}>Order</button>
    </div>
  </div>
  )
}

export default cart