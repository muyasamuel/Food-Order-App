import React from 'react';

const mealsAvailable = [
    {
        id: 'm1',
        name: 'catlesi',
        description: 'tasty yummy potata-like flesh',
        price: 'ksh'+ 250 
    },
    {
        id: 'm1',
        name: 'Mahamri',
        description: 'tasty yummy potata-like flesh',
        price: 'ksh'+ 250 
    },
    {
        id: 'm1',
        name: 'Kaimati',
        description: 'tasty yummy potata-like flesh',
        price: 'ksh'+ 250 
    },
    {
        id: 'm1',
        name: 'Vitumbua',
        description: 'tasty yummy potata-like flesh',
        price: 'ksh'+ 250 
    }
]

function MealList() {
  return (
    <div>
        {mealsAvailable.map(meal =>  
            <li>{meal.name}</li>
        )}

    </div>
  )
}

export default MealList