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

const lectureSchema = new Schema({
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

lectureSchema.virtual('lectureTotal').get(function() {
  return this.lineLessons.reduce((total, lesson) => total + lesson.extQuiz, 0);
});

lectureSchema.virtual('totalQty').get(function() {
  return this.lineLessons.reduce((total, lesson) => total + lesson.qty, 0);
});

lectureSchema.virtual('lectureId').get(function() {
  return this.id.slice(-6).toUpperCase();
});


lectureSchema.statics.getBinder = function(userId) {
  return this.findOneAndUpdate(
    { user: userId, isDone: false },
    { user: userId },
    { upsert: true, new: true }
  );
};


lectureSchema.methods.addItemToBinder = async function(lessonId) {
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

lectureSchema.methods.setLessonQty = function(lessonId, newQty) {
  const binder = this;
  const lineLesson = binder.lineLessons.find(lineLesson => lineLesson.lesson._id.equals(lessonId));
  if (lineLesson && newQty <= 0) {
    lineLesson.remove();
  } else if (lineLesson) {
    lineLesson.qty = newQty;
  }

  return binder.save();
};

module.exports = mongoose.model('Lecture', lectureSchema);