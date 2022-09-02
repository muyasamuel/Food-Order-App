import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./SideBar.module.css";
import { FaTimes } from "react-icons/fa";
import { AppContext } from "../store/App-context";

function SideBar() {
  const { closeSidebar } = useContext(AppContext);
  return (
    <div className={classes.sidebar}>
      <h1>MnetiMeals</h1>
      <FaTimes className={classes.icon} onClick={closeSidebar} />

      <div className={classes.listDiv} >
        <ul className={classes.list} >
          <li className={classes.listItems}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/about" className={classes.link}>
              About
            </Link>
            <Link to="/contact" className={classes.link}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
