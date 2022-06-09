const Lecture = require('../../models/lecture');
const Lesson = require('../../models/lesson');

module.exports = {
  binder,
  addToBinder,
  setLessonQtyInBinder,
  save,
  forUser
};

async function forUser(req, res) {
  const lectures = await Lecture.find({user: req.user._id, isDone: true}).sort('-updatedAt');
  res.json(lectures);
}

async function binder(req, res) {
  const binder = await Lecture.getBinder(req.user._id);
  res.json(binder);
}

async function addToBinder(req, res) {
  const binder = await Lecture.getBinder(req.user._id);
  await binder.addLessonToBinder(req.params.id);
  res.json(binder);
}

async function setLessonQtyInBinder(req, res) {
  const binder = await Lecture.getBinder(req.user._id);
  await binder.setLessonQty(req.body.LessonId, req.body.newQty);
  res.json(binder);
}

async function save(req, res) {
  const binder = await Lecture.getBinder(req.user._id);
  binder.isDone = true;
  await binder.save();
  res.json(binder);
}
