import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import AboutUsPage from '../AboutUsPage/AboutUsPage';
import ContactUsPage from '../ContactUsPage/ContactUsPage';
import TestimoniesPage from '../TestimoniesPage/TestimoniesPage';
import ClassesPage from '../ClassesPage/ClassesPage';
import MyClassroomPage from '../MyClassroomPage/MyClassroomPage';
import NavBar from '../../components/NavBar/NavBar';
import ContactForm from '../../components/ContactForm/ContactForm';
import TeachersListPage from '../TeachersListPage/TeachersListPage';
import TeacherBioPage from '../TeacherBioPage/TeacherBioPage';
import './App.css';
import { teachers } from "../../teacherData.js";

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/classes" element={<ClassesPage />} />
            <Route path="/testimonies" element={<TestimoniesPage />} />
            <Route path="/classroom" element={<MyClassroomPage />} />
            <Route path="/classroom" element={<ContactForm />} />   
            <Route path="/ourteachers" element={<TeachersListPage teachers={teachers} />} /> 
            <Route path="/ImTeacher/:teacherName" element={<TeacherBioPage teachers={teachers} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
