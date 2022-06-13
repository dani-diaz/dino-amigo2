const express = require('express');
const router = express.Router();
const decksCtrl = require('../../controllers/api/decks');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


router.post('/', ensureLoggedIn, decksCtrl.createDeck);
router.get('/', ensureLoggedIn, decksCtrl.getAll);
router.delete('/:id', ensureLoggedIn, decksCtrl.deleteDeck);
router.post('/:id/flashcard', ensureLoggedIn, decksCtrl.addFlashcard);

module.exports = router;