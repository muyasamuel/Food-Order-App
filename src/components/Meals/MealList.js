import React, { useContext } from 'react';
import classes from './MealList.module.css';
import Meal from './Meal'
import { AppContext } from '../../store/App-context';


function MealList() {
  const { mealsAvailable } =  useContext(AppContext);
  return (
    <div className={classes.meals}>
        {mealsAvailable.map(meal =>  
        <Meal name={meal.name} description={meal.description} price={meal.price} id={meal.id} key={meal.id}/>
           
        )}

    </div>
  )
}

export default MealList