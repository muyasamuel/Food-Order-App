import React from 'react';
import { FaPizzaSlice } from "react-icons/fa";
import './AboutPage.css'

function AboutPage() {
  return (
    <div className='aboutDiv'>
        < FaPizzaSlice  className='icon' id='firstIcon'/>
       
        < FaPizzaSlice  className='icon' id='secondIcon'/>
    </div>
  )
}

export default AboutPage;