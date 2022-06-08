const mongoose = require('mongoose');

// Ensure that the Category model is loaded in Mongoose
require('./level');

// We want to re-use the lessonSchema
const lessonSchema = require('./lessonSchema');

module.exports = mongoose.model('Lesson', lessonSchema);