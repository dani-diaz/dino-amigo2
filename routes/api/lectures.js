const express = require('express');
const router = express.Router();
const lecturesCtrl = require('../../controllers/api/lectures');


router.get('/binder', lecturesCtrl.binder);

router.get('/user', lecturesCtrl.forUser);

router.post('/binder/lessons/:id', lecturesCtrl.addToBinder);

router.post('/binder/save', lecturesCtrl.save);

router.put('/binder/qty', lecturesCtrl.setLessonQtyInBinder);

module.exports = router;
