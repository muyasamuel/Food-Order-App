import React from 'react';
import classes from './SideBar.module.css';
import { FaTimes } from "react-icons/fa";

function SideBar() {
  return (
    <div className={classes.sidebar}>
        <h1>ReactMeals</h1>
        <FaTimes  />

    </div>
  )
}

export default SideBar