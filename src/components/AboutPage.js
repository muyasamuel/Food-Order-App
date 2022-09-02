import React from "react";
import { FaPizzaSlice } from "react-icons/fa";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="aboutDiv">
      <FaPizzaSlice className="icon" id="firstIcon" />
      <div className="line"></div>
      <div className="content">
        <h1><span>ABOUT</span> US</h1>
        <p>
          Italian cuisine is highly regionalized. Dishes served commonly in one
          area may not even be known in another. But overall, there is a
          tendency to use fewer ingredients, but use ones of the highest quality
          that can be sourced locally. The dishes are very simple,
          unpretentious, but always seasonal and local. Butter and meat in the
          North and olive oil and vegetables in the South. Seafood along the
          coasts. Italian cuisine in Italy bears almost no resemblance to
          Italian cuisine in other countries.Italian cuisine is highly regionalized. Dishes served commonly in one
          area may not even be known in another. But overall, there is a
          tendency to use fewer ingredients, but use ones of the highest quality
          that can be sourced locally. The dishes are very simple,
          unpretentious, but always seasonal and local. Butter and meat in the
          North and olive oil and vegetables in the South. Seafood along the
          coasts. Italian cuisine in Italy bears almost no resemblance to
          Italian cuisine in other countries.
        </p>
      </div>

      <FaPizzaSlice className="icon" id="secondIcon" />
    </div>
  );
}

export default AboutPage;
