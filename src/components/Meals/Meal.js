import React from 'react'
import classes from './Meal.module.css';
import MealForm from './MealForm';

function Meal({name , description, price}) {
  return (
    <div className={classes.meal}>
     <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <h3>Price ;<span>{price}</span></h3>
    </div>
    <div className={classes.mealform}>
      <MealForm />
   
    </div>
    </div>
   
  )
}

export default Meal