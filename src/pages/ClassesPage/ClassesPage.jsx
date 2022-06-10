import React from 'react';
import { Link } from "react-router-dom";

export default function ClassesPage() {
    return (
        <>
        <h1>CLasses</h1>
        <Link to="/lessons"><h1 className='lesson-tittle'>Lessons 👀!</h1></Link>
        <Link to="/quiz"><h1 className='lesson-tittle'>Quiz 👀!</h1></Link>
        </>
    );
  }