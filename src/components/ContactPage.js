import React from "react";
import "./ContactPage.css";
import { FaPhone,  } from "react-icons/fa";
import { MdEmail  } from "react-icons/md";


function ContactPage() {
  return (
    <div className="background">
      <div className="wrapper">
        <h1>
        <span>Contact</span> us
      </h1>
      <p>
        Feel free to contact us anytime. We will get back to you soon as we can{" "}
      </p> 


  <div className="contactDiv">
        <div>
          <h1> Lets Talk</h1>
          <p>Ask as anything...</p>

          <p><span> <FaPhone /></span> 0704078268</p>
          <p><span> <MdEmail /></span> iamsamuel6535@gmail.com</p>
        </div>

        <div className="inputs">
          <input type="text" placeholder="Name" />
          <input type="emai" placeholder="Email" />
          <input type="text" placeholder="Meassage" />

          <button className="btn"> SEND</button>
        </div>
      </div>

      </div>
     
      
    
    </div>
  );
}

export default ContactPage;
