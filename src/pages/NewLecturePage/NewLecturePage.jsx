import { useState, useEffect, useRef } from 'react';
import * as lessonsAPI from '../../utilities/lessons-api';
import * as lecturesAPI from '../../utilities/lectures-api';
import './NewLecturePage.css';
import { Link, useNavigate } from 'react-router-dom';
import LibraryList from '../../components/LibraryList/LibraryList';
import LevelList from '../../components/LevelList/LevelList';
import LectureDetail from '../../components/LectureDetail/LectureDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import QuizForm from '../../components/QuizForm/QuizForm';



export default function NewLecturePage({ user, setUser }) {

  const [libraryLessons, setLibraryLesson] = useState([]);
  const [activeLev, setActiveLev] = useState('');
  const [binder, setBinder] = useState(null);
  const levelsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(function() {
    async function getLessons() {
      const lessons = await lessonsAPI.getAll();
      levelsRef.current = [...new Set(lessons.map(lesson => lesson.level.name))];
      setLibraryLesson(lessons);
      setActiveLev(levelsRef.current[0]);
    }
    getLessons();
    async function getBinder() {
      const binder = await lecturesAPI.getBinder();
      setBinder(binder);
    }
    getBinder();
  }, []);

  async function handleAddToLecture(lessonId) {
    const binder = await lecturesAPI.addLessonToBinder(lessonId);
    setBinder(binder);
  }

  async function handleChangeQty(lessonId, newQty) {
    const updatedBinder = await lecturesAPI.setLessonQtyInBinder(lessonId, newQty);
    setBinder(updatedBinder);
  }

  async function handleSave() {
    await lecturesAPI.save();
    navigate('/lectures');
  }

  return (
    <main className="NewLecturePage">
        <h1>Lessons</h1>
        <p> Why cartoons and music?    
            Kids love cartoons and music so why not mix them to create a powerful learning tool?    
            Beyond the fun, there is also a strong educational basis:     
            Research has shown that music is one of the best ways to learn a foreign language.    
        </p>
        <QuizForm />
      <aside>
        <LevelList
          levels={levelsRef.current}
          activeLev={activeLev}
          setActiveLev={setActiveLev}
        />
        <Link to="/lectures" className="button btn-sm">PREVIOUS CLASSES</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <LibraryList
        libraryLessons={libraryLessons.filter(lesson => lesson.level.name === activeLev)}
        handleAddToLecture={handleAddToLecture}
      />
      <LectureDetail
        lecture={binder}
        handleChangeQty={handleChangeQty}
        handleCheckout={handleSave}
      />
    </main>
  );
}
