const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const lessonSchema = require('./lessonSchema');

const lineLessonSchema = new Schema({
  qty: { type: Number, default: 1 },
  lesson: lessonSchema
}, {
  toJSON: { virtuals: true }
});

lineLessonSchema.virtual('extQuiz').get(function() {
  return this.qty * this.lesson.quiz;
});

const classSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  lineLessons: [lineLessonSchema],
  isDone: { type: Boolean, default: false }
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

classSchema.virtual('classTotal').get(function() {
  return this.lineLessons.reduce((total, lesson) => total + lesson.extQuiz, 0);
});

classSchema.virtual('totalQty').get(function() {
  return this.lineLessons.reduce((total, lesson) => total + lesson.qty, 0);
});

classSchema.virtual('classId').get(function() {
  return this.id.slice(-6).toUpperCase();
});


classSchema.statics.getBinder = function(userId) {
  return this.findOneAndUpdate(
    { user: userId, isDone: false },
    { user: userId },
    { upsert: true, new: true }
  );
};


classSchema.methods.addItemToBinder = async function(lessonId) {
  const binder = this;

  const lineLesson = binder.lineLessons.find(lineLesson => lineLesson.lesson._id.equals(lessonId));
  if (lineLesson) {
    lineLesson.qty += 1;
  } else {
    const lesson = await mongoose.model('Lesson').findById(lessonId);
    binder.lineLessons.push({ lesson });
  }

  return binder.save();
}

classSchema.methods.setLessonQty = function(lessonId, newQty) {
  const binder = this;
  const lineLesson = binder.lineLessons.find(lineLesson => lineLesson.lesson._id.equals(lessonId));
  if (lineLesson && newQty <= 0) {
    lineLesson.remove();
  } else if (lineLesson) {
    lineLesson.qty = newQty;
  }

  return binder.save();
};

module.exports = mongoose.model('Class', classSchema);