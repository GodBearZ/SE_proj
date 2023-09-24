const express = require('express');
const router = express.Router();
const {findSubjectOne,  createSubject, updateSubjectOne, removeSubjectOne, listSubjects} = require('../Controllers/Scheduler');

router.get('/api/subject', listSubjects)

router.get('/api/subject/:id', findSubjectOne)

router.post('/api/subject', createSubject)

router.put('/api/subject/:id', updateSubjectOne)

router.delete('/api/subject/:id', removeSubjectOne)



module.exports = router