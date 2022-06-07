import QuizForm from '../../components/QuizForm/QuizForm';
import React, { useState } from 'react';

export default function ClassesPage() {
  return (
    <>
    <h1>Lessons</h1>
    <p> Why cartoons and music?    
              Kids love cartoons and music so why not mix them to create a powerful learning tool?    
              Beyond the fun, there is also a strong educational basis:     
              Research has shown that music is one of the best ways to learn a foreign language.    </p>
    <QuizForm />
    </>
  );
}