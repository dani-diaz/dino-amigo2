import React, { useState, useEffect } from 'react';
import "./QuizForm.css";
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";



export default function QuizForm() {

	const location = useLocation();
	const [quiz, setQuiz] = useState()
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

useEffect(() => {
	setQuiz(location.state);
})

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < quiz.questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return ( 
		<body className='quiz-body'>
		{quiz && <div className='quiz'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {quiz.questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{quiz.questions.length}
						</div>
						<div className='question-text'>{quiz.questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{quiz.questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className='quiz-button' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>}
		<Link to="/lessons"><img className="goback-button" src="https://i.imgur.com/tVxl3eC.png" alt="" /> </Link>
		</body>
	);
}
