import React, { useContext } from 'react';
import classes from './Cart.module.css';
import Modal from '../Modal/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem'

function Cart(props) {
 const cartCtx =  useContext(CartContext);
 const totalAmount = ` Ksh ${cartCtx.totalAmount} ` ;
 const cartHasItems = cartCtx.items.length > 0 ;

 const addToCart = (item) => {
  cartCtx.addItem(item)

 }

 const removeCartHandler = (id) => {

 }


    const cartItems = (
        <ul className={classes['cart-items']} >
          {cartCtx.items.map((item) => (
            <CartItem name={item.name} price={item.price}  amount={item.amount}  onAdd={addToCart} onRemove={removeCartHandler}/>
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
      {cartHasItems && <button className={classes.button}>Order</button>}
    </div>
    </Modal>
  )
}

export default Cart