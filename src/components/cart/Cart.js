import React from 'react';
import classes from './Cart.module.css';
import Modal from '../Modal/Modal';

function cart(props) {

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
    <Modal>
    {cartItems}
    <div className={classes.total}>
      <span>Total Amount</span>
      <span>35.62</span>
    </div>
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
      <button className={classes.button}>Order</button>
    </div>
    </Modal>
  )
}

export default cart