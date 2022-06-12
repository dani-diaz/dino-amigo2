import './AboutUsPage.css';
import React from "react";
import { Link } from "react-router-dom";



export default function AboutUsPage() {
  return (
    <>
    <body className='about-body'>
      <div className="about-container1">   
        <img className="dinopic1" src="https://i.imgur.com/RSbw8yU.png" alt="" />
          <p className="text1" >
            We are a passionate team of teachers and computer programmers all with many years of experience in our fields.
            Our Mission is to make learning Spanish fun and easy for kids around the world.     
          </p>          
      </div>
      <div className="teacher-card">
      <Link to="/ourteachers"><h1 className='teach-tittle'>Meet the our amazing Teachers!</h1></Link>
      </div>
    </body>
    </>
  );
}

