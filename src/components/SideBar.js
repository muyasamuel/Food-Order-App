import React, { useContext } from "react";
import "./SideBar.css";
import { FaTimes } from "react-icons/fa";
import { AppContext } from "../store/App-context";
import { SideBarData } from "./SideBarData";

function SideBar() {
  const { closeSidebar } = useContext(AppContext);
  return (
    <div className='sidebar'>
      <h1>MnetiMeals</h1>
      <FaTimes className='closeicon'onClick={closeSidebar} />
      <div className='listDiv'>
        <ul className='sidebarList'>
          {SideBarData.map((item, index) => {
            const { icon, title, link } = item;
            return (
              <li
                className='row'
                id={window.location.pathname === link ? 'active' : ''}
                onClick={() => (window.location.pathname = link)}
                key={index}
              >
                {" "}
                <div className='icons'>{icon} </div>
                <span className='title'>{title}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
