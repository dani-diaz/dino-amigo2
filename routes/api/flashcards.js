const express = require('express');
const router = express.Router();
const flashcardsCtrl = require('../../controllers/api/flashcards');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


router.post('/', ensureLoggedIn, flashcardsCtrl.createFlashcard);


module.exports = router;