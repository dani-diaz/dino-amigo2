import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import AboutUsPage from '../AboutUsPage/AboutUsPage';
import ContactUsPage from '../ContactUsPage/ContactUsPage';
import TestimonyPage from '../TestimonyPage/TestimonyPage';
import ClassroomPage from '../ClassroomPage/ClassroomPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

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
            <Route path="/classroom" element={<ClassroomPage />} />
            <Route path="/testimonies" element={<TestimonyPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
