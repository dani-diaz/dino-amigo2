const Deck = require('../../models/deck');

module.exports = { 
    createDeck, 
    getAll,
    deleteDeck,
    addFlashcard,
};

async function createDeck(req, res) {
    req.body.user = req.user._id;
    const deck = await Deck.create(req.body);
  res.json(deck);
}

async function getAll(req, res) {
   const decks = await Deck.find({});
   console.log(decks);
   res.json(decks);
}

async function deleteDeck(req, res) {
  const deck= await Deck.findByIdAndDelete(req.params.id);
  res.json(deck);

}

async function addFlashcard(req, res) {
  console.log(req.params.id);
  const deck = await Deck.findOne({_id: req.params.id});
  deck.flashcards.push(req.body);
  await deck.save();
  // res.json(deck);
  console.log(deck);
}

