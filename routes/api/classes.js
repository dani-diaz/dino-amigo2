const express = require('express');
const router = express.Router();
const classesCtrl = require('../../controllers/api/classes');

// GET /api/classes/binder
router.get('/binder', classesCtrl.binder);
// GET /api/classes/user
router.get('/user', classesCtrl.forUser);
// POST /api/classes/binder/lessons/:id
router.post('/binder/lessons/:id', classesCtrl.addToBinder);
// POST /api/classes/binder/save
router.post('/binder/save', classesCtrl.save);
// POST /api/classes/binder/qty
router.put('/binder/qty', classesCtrl.setLessonQtyInBinder);

module.exports = router;
