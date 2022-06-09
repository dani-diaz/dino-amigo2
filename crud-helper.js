// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Home = require('./models/home');
const AboutUs = require('./models/about');
const NewLecture = require('./models/classes');
const ContactUs = require('./models/contact');
const Testimonies = require('./models/testimonies');
const MyClassroom = require('./models/MyClassroom');
const TeachersList = require('./models/OurTeachers');
const TeacherBio = require('./models/ImTeacher');
const Quiz = require('./models/quiz');
const Lesson = require('./models/lesson');
// Local variables will come in handy for holding retrieved documents
let user, home, about, contact, testimony, Myclassroom, OurTeachers, ImTeacher, quiz, lesson;
let users, contacts, testimonies, classes, MyClassrooms, quizzes, lessons;