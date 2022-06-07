const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

require('dotenv').config();
// Connect to db after the dotenv above
require('./config/database');

const app = express();

app.use(logger('dev'));
// Process data in body of request if 
// Content-Type: 'application/json'
// and put that data on req.body
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));

app.use(express.static(path.join(__dirname, 'build')));
// Middleware to verify token and assign user object of payload to req.user.
// Be sure to mount before routes
app.use(require('./config/checkToken'));
// Put all API routes here (before the catch-all)
app.use('/api/users', require('./routes/api/users'));

// "catch-all" route that will match all GET requests
// that don't match an API route defined above
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`);
});

app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(3002, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "msdani.dinoamigo@gmail.com",
    pass: "vymnkyeeoxivoqov",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message; 
  const mail = {
    from: name,
    to: "msdani.dinoamigo@gmail.com",
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});