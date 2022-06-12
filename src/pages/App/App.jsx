import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import AboutUsPage from '../AboutUsPage/AboutUsPage';
import ContactUsPage from '../ContactUsPage/ContactUsPage';
import MyClassroomPage from '../MyClassroomPage/MyClassroomPage';
import NavBar from '../../components/NavBar/NavBar';
import ContactForm from '../../components/ContactForm/ContactForm';
import QuizForm from '../../components/QuizForm/QuizForm';
import LessonsPage from '../LessonsPage/LessonsPage';
import LessonPage from '../LessonPage/LessonPage';
import ClassesPage from '../ClassesPage/ClassesPage';
import TeachersListPage from '../TeachersListPage/TeachersListPage';
import TeacherBioPage from '../TeacherBioPage/TeacherBioPage';
import FlashCardPage from '../FlashCardPage/FlashCardPage';
import './App.css';
import { teachers } from "../../teacherData.js";
import { quizzes } from "../../quizData.js";
import { lessons } from "../../lessonData.js";
import { initialDecks } from "../../initialDecks.js";


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
            <Route path="/ContactForm" element={<ContactForm />} />   
            <Route path="/classes" element={<ClassesPage />} />   
            <Route path="/flashcards" element={<FlashCardPage initialDecks={initialDecks} />} /> 
            <Route path="/quiz" element={<QuizForm quizzes={quizzes}/>} />  
            <Route path="/lessons" element={<LessonsPage lessons={lessons} />} /> 
            <Route path="/MyLesson/:lessonName" element={<LessonPage lessons={lessons} />} /> 
            <Route path="/OurTeachers" element={<TeachersListPage teachers={teachers} />} /> 
            <Route path="/ImTeacher/:teacherName" element={<TeacherBioPage teachers={teachers} />} />
            <Route path="/MyClassroom" element={<MyClassroomPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
