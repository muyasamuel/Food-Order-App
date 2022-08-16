import React, { useContext } from 'react';
import classes from './Cart.module.css';
import Modal from '../Modal/Modal';
import CartContext from '../../store/cart-context';

function Cart(props) {
 const cartCtx =  useContext(CartContext);
 const totalAmount = ` Ksh ${cartCtx.totalAmount} ` ;


    const cartItems = (
        <ul className={classes['cart-items']} >
          {cartCtx.items.map((item) => (
            <li>{item.name}</li>
          ))}
        </ul>
      );
  return (
    <Modal>
    {cartItems}
    <div className={classes.total}>
      <span>Total Amount</span>
      <span>{totalAmount}</span>
    </div>
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
      <button className={classes.button}>Order</button>
    </div>
    </Modal>
  )
}

export default Cart