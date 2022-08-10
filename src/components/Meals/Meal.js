import React from 'react'
import classes from './Meal.module.css'

function Meal() {
  return (
    <div className={classes.meal}>
     <div>
        <h2>Cartlesi</h2>
        <p>A tasteful yummy potato-like  snack</p>
    </div>
    <div className={classes.price}>
        <h3>Price ;<span>250</span></h3>
        
    </div>
    </div>
   
  )
}

export default Meal