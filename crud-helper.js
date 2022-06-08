// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Home = require('./models/home');
const AboutUs = require('./models/about');
const NewClass = require('./models/classes');
const ContactUs = require('./models/contact');
const Testimonies = require('./models/testimonies');
const MyClassroom = require('./models/class');
const TeachersList = require('./models/ourteachers');
const TeacherBio = require('./models/ImTeacher');
const Quiz = require('./models/quiz');
const Lesson = require('./models/lesson');
// Local variables will come in handy for holding retrieved documents
let user, home, about, contact, classes, testimony, classroom, ourteachers, ImTeacher, quiz, lesson;
let users, contacts, testimonies, classrooms, quizzes, lessons;