// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Home = require('./models/home');
const AboutUs = require('./models/about');
const Classes = require('./models/classes');
const ContactUs = require('./models/contact');
const Testimonies = require('./models/testimonies');
const MyClassroom = require('./models/classroom');

// Local variables will come in handy for holding retrieved documents
let user, home, order, about, contact, classes, testimonies, classroom;