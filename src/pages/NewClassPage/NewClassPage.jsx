import { useState, useEffect, useRef } from 'react';
import * as lessonsAPI from '../../utilities/lessons-api';
import * as classesAPI from '../../utilities/classes-api';
import './NewClassPage.css';
import { Link, useNavigate } from 'react-router-dom';
import ClassList from '../../components/ClassList/ClassList';
import LevelList from '../../components/LevelList/LevelList';
import ClassDetail from '../../components/ClassDetail/ClassDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import QuizForm from '../../components/QuizForm/QuizForm';
import React, { useState } from 'react';



export default function NewClassPage({ user, setUser }) {

  const [classLessons, setClassLesson] = useState([]);
  const [activeLev, setActiveLev] = useState('');
  const [binder, setBinder] = useState(null);
  const levelsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(function() {
    async function getLessons() {
      const lessons = await lessonsAPI.getAll();
      levelsRef.current = [...new Set(lessons.map(lesson => lesson.level.name))];
      setClassLesson(lessons);
      setActiveLev(levelsRef.current[0]);
    }
    getLessons();
    async function getBinder() {
      const binder = await classesAPI.getBinder();
      setBinder(binder);
    }
    getBinder();
  }, []);

  async function handleAddToClass(lessonId) {
    const binder = await classesAPI.addLessonToBinder(lessonId);
    setBinder(binder);

  async function handleChangeQty(lessonId, newQty) {
    const updatedBinder = await classesAPI.setLessonQtyInBinder(lessonId, newQty);
    setBinder(updatedBinder);
  }

  async function handleSave() {
    await classesAPI.save();
    navigate('/classes');
  }

  return (
    <main className="NewClassPage">
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
        <Link to="/classes" className="button btn-sm">PREVIOUS CLASSES</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <ClassList
        classLessons={classLessons.filter(lesson => lesson.level.name === activeLev)}
        handleAddToClass={handleAddToClass}
      />
      <ClassDetail
        class={binder}
        handleChangeQty={handleChangeQty}
        handleCheckout={handleSave}
      />
    </main>
  );
}
}