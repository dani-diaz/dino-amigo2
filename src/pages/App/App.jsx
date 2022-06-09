import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import AboutUsPage from '../AboutUsPage/AboutUsPage';
import ContactUsPage from '../ContactUsPage/ContactUsPage';
import TestimoniesPage from '../TestimoniesPage/TestimoniesPage';
import MyClassroomPage from '../MyClassroomPage/MyClassroomPage';
import NavBar from '../../components/NavBar/NavBar';
import ContactForm from '../../components/ContactForm/ContactForm';
import QuizForm from '../../components/QuizForm/QuizForm';
import TeachersListPage from '../TeachersListPage/TeachersListPage';
import TeacherBioPage from '../TeacherBioPage/TeacherBioPage';
import LectureHistoryPage from '../LectureHistoryPage/LectureHistoryPage';
import NewLecturePage from '../NewLecturePage/NewLecturePage';
import './App.css';
import { teachers } from "../../teacherData.js";
import { questions } from "../../quiz.js";

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
            <Route path="/testimonies" element={<TestimoniesPage />} />
            <Route path="/MyClassroom" element={<MyClassroomPage />} />
            <Route path="/ContactForm" element={<ContactForm />} />   
            <Route path="/lesson/:quiz" element={<QuizForm questions={questions} />} /> 
            <Route path="/OurTeachers" element={<TeachersListPage teachers={teachers} />} /> 
            <Route path="/ImTeacher/:teacherName" element={<TeacherBioPage teachers={teachers} />} />
            <Route path="/classes/new" element={<NewLecturePage user={user} setUser={setUser} questions={questions}/>} />
            <Route path="/classes" element={<LectureHistoryPage user={user} setUser={setUser} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
