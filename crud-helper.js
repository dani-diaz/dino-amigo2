// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Home = require('./models/home');
const AboutUs = require('./models/about');
const Classroom = require('./models/classroom');
const ContactUs = require('./models/contact');
const Testimony = require('./models/testimonies')

// Local variables will come in handy for holding retrieved documents
let user, home, order, about, contact, classroom, testimony;
let users, items, lessons, orders, testimonies;