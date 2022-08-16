import React from 'react';
import classes from './MealList.module.css';
import Meal from './Meal'

const mealsAvailable = [
    {
        id: 'm1',
        name: 'catlesi',
        description: 'tasty yummy potata-like flesh',
        price: 250 
    },
    {
        id: 'm2',
        name: 'Mahamri',
        description: 'tasty yummy potata-like flesh',
        price:  350 
    },
    {
        id: 'm3',
        name: 'Kaimati',
        description: 'tasty yummy potata-like flesh',
        price:  200 
    },
    {
        id: 'm4',
        name: 'Vitumbua',
        description: 'tasty yummy potata-like flesh',
        price:  150 
    },
]

function MealList() {
  return (
    <div className={classes.meals}>
        {mealsAvailable.map(meal =>  
        <Meal name={meal.name} description={meal.description} price={meal.price} id={meal.id} key={meal.id}/>
           
        )}

    </div>
  )
}

export default MealList