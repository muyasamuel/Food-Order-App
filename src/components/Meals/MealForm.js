import React from 'react';
import Input from '../UI/Input';
import classes from './MealForm.module.css'


function MealForm() {
  return (
    <div className={classes.form}>
        <Input label='amount' input={{
            type: 'number',
            id: 'amount',
            min: '1',
            max:'5',
            step: '1',
            defaultValue: '1',
        }}/>
        <button>Add</button>
    </div>
  )
}

export default MealForm