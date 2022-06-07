import './AboutUsPage.css';
import React from "react";
import TeacherBioForm from '../../components/TeacherBioForm/TeacherBioForm';



export default function AboutUsPage() {
  return (
    <>
    <h1 className="about-title">Welcome to the magical world of Dino Amigo!</h1>
    <body className='about-body'>
      <div className="about-container1">   
        <img className="dino-pic" src="https://i.imgur.com/RSbw8yU.png" alt="" />
          <p className="text1" >
            We are a passionate team of teachers and computer programmers all with many years of experience in our fields.
            Our Mission is to make learning Spanish fun and easy for kids around the world and to provide teachers with quality teaching materials to use in their classrooms.       
          </p>          
      </div>
      <div className="teacher-card">
      <h1>Meet the Teachers!</h1>
      <TeacherBioForm />
      </div>
    </body>
    </>
  );
}

