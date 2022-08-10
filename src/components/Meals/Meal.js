import React from 'react'
import classes from './Meal.module.css'

function Meal({name , description, price}) {
  return (
    <div className={classes.meal}>
     <div>
        <h2>{name}</h2>
        <p>{description}</p>
    </div>
    <div className={classes.price}>
        <h3>Price ;<span>{price}</span></h3>
        
    </div>
    </div>
   
  )
}

export default Meal