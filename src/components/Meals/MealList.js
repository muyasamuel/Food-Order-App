import React from 'react';
import classes from './MealList.module.css';

const mealsAvailable = [
    {
        id: 'm1',
        name: 'catlesi',
        description: 'tasty yummy potata-like flesh',
        price: 'ksh'+ 250 
    },
    {
        id: 'm2',
        name: 'Mahamri',
        description: 'tasty yummy potata-like flesh',
        price: 'ksh'+ 250 
    },
    {
        id: 'm3',
        name: 'Kaimati',
        description: 'tasty yummy potata-like flesh',
        price: 'ksh'+ 250 
    },
    {
        id: 'm4',
        name: 'Vitumbua',
        description: 'tasty yummy potata-like flesh',
        price: 'ksh'+ 250 
    },
]

function MealList() {
  return (
    <div className={classes.meals}>
        {mealsAvailable.map(meal =>  
            <li>{meal.name}</li>
        )}

    </div>
  )
}

export default MealList