const Class = require('../../models/class');
const Lesson = require('../../models/lesson');

module.exports = {
  binder,
  addToBinder,
  setLessonQtyInBinder,
  save,
  forUser
};

async function forUser(req, res) {
  // get classes for the logged in user
  const classes = await Class.find({user: req.user._id, isDone: true}).sort('-updatedAt');
  res.json(classes);
}

// A binder is the no done class for a user
async function binder(req, res) {
  const binder = await Class.getBinder(req.user._id);
  res.json(binder);
}

// Add an item to the binder
async function addToBinder(req, res) {
  const binder = await Class.getBinder(req.user._id);
  await binder.addLessonToBinder(req.params.id);
  res.json(binder);
}

// Updates an item's qty in the binder
async function setLessonQtyInBinder(req, res) {
  const binder = await Class.getBinder(req.user._id);
  await binder.setLessonQty(req.body.LessonId, req.body.newQty);
  res.json(binder);
}

// Update the binder's isDone property to true
async function save(req, res) {
  const binder = await Class.getBinder(req.user._id);
  binder.isDone = true;
  await binder.save();
  res.json(binder);
}
