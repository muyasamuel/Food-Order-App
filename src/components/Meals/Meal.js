import React, { useContext } from 'react'
import CartContext from '../../store/cart-context';
import classes from './Meal.module.css';
import MealForm from './MealForm';

function Meal({name , description, price, id}) {
  const cartCtx = useContext(CartContext)
  const addToCart = (amount) => {
    cartCtx.addItem({
      name: name,
      price: price,
      amount: amount,
      id: id

    });


  }
  return (
    <div className={classes.meal}>
     <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <h3>Ksh<span>{price}</span></h3>
    </div>
    <div className={classes.mealform}>
      <MealForm onAddToCart={addToCart} />
   
    </div>
    </div>
   
  )
}

export default Meal