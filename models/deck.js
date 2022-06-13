const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flashcardSchema = new Schema({
    front: { type: String, required: true },
    back: {type: String, required: true},
    user: { type: Schema.Types.ObjectId, ref:"User" }
  }, {
    timestamps: true,
  });

const deckSchema = new Schema({
  deckTitle: { type: String, required: true },
  flashcards: [ flashcardSchema ],
  user: { type: Schema.Types.ObjectId, ref:"User" }
}, {
  timestamps: true,
});




module.exports = mongoose.model('Deck', deckSchema);