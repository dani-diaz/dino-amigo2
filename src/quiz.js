require('dotenv').config();
require('./config/database');

const Level = require('./models/level');
const Lesson = require('./models/lesson');


(async function() {

  await Level.deleteMany({});
  const levels = await Level.create([
    {name: '📕 Level 1', sortOrder: 10},
    {name: '📗 Level 2', sortOrder: 20},
    {name: '📘 Level 3', sortOrder: 30},
    {name: '📙 Level 4', sortOrder: 40},
    {name: '🎼 Songs', sortOrder: 50},
    {name: '📝 Printouts', sortOrder: 60},
    {name: 'Level 7', sortOrder: 70},
  ]);

  await Lesson.deleteMany({});
  const lessons = await Lesson.create([
	  {name: 'Los Colores', 
	  emoji: '🖍', 
	  level: levels[0]
  } 
	]);
	

	console.log(lessons)
	
	process.exit();
	
})();


export const questions = [
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