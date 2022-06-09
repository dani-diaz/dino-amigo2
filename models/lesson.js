const mongoose = require('mongoose');

require('./level');

const lessonSchema = require('./lessonSchema');

module.exports = mongoose.model('Lesson', lessonSchema);