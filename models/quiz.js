const Quiz = require('../../models/lesson');

module.exports = {
  index,
  show
};

async function index(req, res) {
  const quizzes = await Quiz.find({}).sort('name').populate('level').exec();
  quizzes.sort((a, b) => a.level.sortOrder - b.level.sortOrder);
  res.json(quizzes);
}

async function show(req, res) {
  const lesson = await Quiz.findById(req.params.id);
  res.json(lesson);
}
