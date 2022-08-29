import React, { useContext } from 'react';
import classes from './SideBar.module.css';
import { FaTimes } from "react-icons/fa";
import { AppContext } from '../store/App-context';

function SideBar() {
  const { closeSidebar }= useContext(AppContext)
  return (
    <div className={classes.sidebar}>
        <h1>ReactMeals</h1>
        <FaTimes className={classes.icon} onClick={closeSidebar}  />

        

    </div>
  )
}

export default SideBar;