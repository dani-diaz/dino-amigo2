// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Home = require('./models/home');
const AboutUs = require('./models/about');
const LessonPage = require('./models/MyLesson');
const LessonsPage = require('./models/lessons');
const ContactUs = require('./models/contact');
const FlashCard = require('./models/flashcards');
const FlashCardHome = require('./models/flashcardsHome');
const MyClassroom = require('./models/MyClassroom');
const TeachersList = require('./models/OurTeachers');
const TeacherBio = require('./models/ImTeacher');
const Classes = require('./models/classes');
const Quiz = require('./models/quiz');
const MyDecks = require('./models/MyDecks');
// Local variables will come in handy for holding retrieved documents
let user, home, about, contact, testimony, MyClassroom, OurTeachers, ImTeacher, quiz, MyLesson, level, MyClasses, flashcards, flashcardsHome, MyDecks;
let users, contacts, testimonies, classes, MyClassrooms, quizzes, MyLessons, levels;