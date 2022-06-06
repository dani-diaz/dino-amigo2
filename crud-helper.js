// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const AboutUs = require('./models/about');
const Classroom = require('./models/classroom');
// const ContactUs = require('./models/contact');

// Local variables will come in handy for holding retrieved documents
let user, item, order, about, contact, classroom;
let users, items, lessons, orders;