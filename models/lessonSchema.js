const Schema = require('mongoose').Schema;

const lessonSchema = new Schema({
  name: { type: String, required: true },
  emoji: String,
  level: { type: Schema.Types.ObjectId, ref: 'Level' },
  quiz: { type: Schema.Types.Array, required: true }
}, {
  timestamps: true
});

module.exports = lessonSchema;
