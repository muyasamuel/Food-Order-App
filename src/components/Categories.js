import React, { useContext } from 'react';
import { AppContext } from '../store/App-context';


function Filter() {
 const { filterItems, showAll } =  useContext(AppContext);
  return (
    <div>
      <button onClick={() => showAll()}>All</button>
      <button onClick={() => filterItems('breakfast')}>Breakfast</button>
      <button onClick={() => filterItems('lunch')}>Lunch</button>
      <button onClick={() => filterItems('dinner')}>Dinner</button>

    </div>
  )
}

export default Filter