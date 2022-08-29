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
    {
        id: 'm4',
        name: 'samosa',
        description: 'tasty yummy potata-like flesh',
        price:  150 
    },
    {
        id: 'm5',
        name: 'smokie',
        description: 'tasty yummy potata-like flesh',
        price:  100 
    },
    {
        id: 'm6',
        name: 'pizza',
        description: 'tasty yummy potata-like flesh',
        price:  600 
    },
    {
        id: 'm7',
        name: 'kebab',
        description: 'tasty yummy potata-like flesh',
        price:  150 
    },
    {
        id: 'm8',
        name: 'spagetti',
        description: 'tasty yummy potata-like flesh',
        price: 250 
    },
    {
        id: 'm9',
        name: 'Omena',
        description: 'tasty yummy potata-like flesh',
        price:  450 
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