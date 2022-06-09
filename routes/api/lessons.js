const express = require('express');
const router = express.Router();
const lessonsCtrl = require('../../controllers/api/lessons');

router.get('/', lessonsCtrl.index);

router.get('/:id', lessonsCtrl.show);

module.exports = router;
