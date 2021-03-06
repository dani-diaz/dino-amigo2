const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

require('dotenv').config();
require('./config/database');

const app = express();

app.use(logger('dev'));

app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use(require('./config/checkToken'));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/decks', require('./routes/api/decks'));
app.use('/api/flashcards', require('./routes/api/flashcards'));

// const ensureLoggedIn = require('./config/ensureLoggedIn');
// app.use('/api/lessons', ensureLoggedIn, require('./routes/api/lessons'));


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
