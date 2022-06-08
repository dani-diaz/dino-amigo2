const Level = require('../../models/lesson');

module.exports = {
  index,
  show
};

async function index(req, res) {
  const lessons = await Level.find({}).sort('name').populate('level').exec();
  // re-sort based upon the sortOrder of the categories
  lessons.sort((a, b) => a.level.sortOrder - b.level.sortOrder);
  res.json(lessons);
}

async function show(req, res) {
  const lesson = await Level.findById(req.params.id);
  res.json(lesson);
}
