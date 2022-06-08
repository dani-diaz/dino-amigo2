import React, { useState } from 'react';
import "./QuizForm.css";

export default function QuizForm() {
	const questions = [
		{
			questionText: 'How do you say Hello in Spanish?',
			answerOptions: [
				{ answerText: 'Ola', isCorrect: false },
				{ answerText: 'Adios', isCorrect: false },
				{ answerText: 'Hola', isCorrect: true },
				{ answerText: 'Bueno', isCorrect: false },
			],
		},
		{
			questionText: 'How do you say "Red" in Spanish?',
			answerOptions: [
				{ answerText: 'Azul', isCorrect: false },
				{ answerText: 'Rojo', isCorrect: true },
				{ answerText: 'Amarillo', isCorrect: false },
				{ answerText: 'Blanco', isCorrect: false },
			],
		},
		{
			questionText: 'How do you say "5" in Spanish?',
			answerOptions: [
				{ answerText: 'Cinco', isCorrect: true },
				{ answerText: 'Cuatro', isCorrect: false },
				{ answerText: 'Ocho', isCorrect: false },
				{ answerText: 'Dos', isCorrect: false },
			],
		},
		{
			questionText: 'How do you say "Dog" in Spanish?',
			answerOptions: [
				{ answerText: 'Oso', isCorrect: false },
				{ answerText: 'Zorro', isCorrect: false },
				{ answerText: 'Gato', isCorrect: false },
				{ answerText: 'Perro', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<body className='quiz-body'>
			
		
		<div className='quiz'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className='quiz-button' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
		{/* <button className='Submitquiz' type='Submit' onClick={nextLesson}></button> */}
		</body>
	);
}
