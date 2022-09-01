import React, { useContext } from 'react';
import classes from './Categories.module.css';
import { AppContext } from '../store/App-context';


function Filter() {
 const { filterItems } =  useContext(AppContext);
  return (
    <div className={classes.btnDiv}>
      <button className={classes.button}  onClick={() => filterItems()}>All</button>
      <button className={classes.button}  onClick={() => filterItems('breakfast')}>Breakfast</button>
      <button className={classes.button}  onClick={() => filterItems('lunch')}>Lunch</button>
      <button className={classes.button}  onClick={() => filterItems('dinner')}>Dinner</button>

    </div>
  )
}

export default Filter