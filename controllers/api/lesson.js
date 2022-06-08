const Lesson = require('../../models/lesson');

module.exports = {
  index,
  show
};

async function index(req, res) {
  const lessons = await Lesson.find({}).sort('name').populate('level').exec();

  lessons.sort((a, b) => a.level.sortOrder - b.level.sortOrder);
  res.json(lessons);
}

async function show(req, res) {
  const lesson = await Lesson.findById(req.params.id);
  res.json(lesson);
}
