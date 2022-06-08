const express = require('express');
const router = express.Router();
const lessonsCtrl = require('../../controllers/api/lessons');

// GET /api/lessons
router.get('/', lessonsCtrl.index);
// GET /api/lessons/:id
router.get('/:id', lessonsCtrl.show);

module.exports = router;
