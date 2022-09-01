import React, { useContext } from 'react';
import classes from './Categories.module.css';
import { AppContext } from '../store/App-context';


function Filter() {
 const { filterItems, categories } =  useContext(AppContext);
  return (
    <div className={classes.btnDiv}>
      {
        categories.map((category, index) => {
          return <button key={index} onClick={() => filterItems(category)} className={classes.button}>{category}</button>
        })
      }

    </div>
  )
}

export default Filter