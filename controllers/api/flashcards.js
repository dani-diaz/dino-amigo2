const Deck = require('../../models/deck');

module.exports = { 
    createFlashcard, 
};

async function createFlashcard(req, res) {
    req.body.user = req.user._id;
    const flashcard = await Deck.create(req.body);
  res.json(flashcard);
}


