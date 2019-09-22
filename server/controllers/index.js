const express = require('express');

const router = express.Router();


const plan = require('./plan');
const report = require('./report');
const generalization = require('./generalization');
const activitiesOut = require('./activityOut');
const activitiesIn = require('./activityIn')
const projects = require('./projects.js');
const advertising = require('./advertising');
const pudjet = require('./pudjet');
const file = require('./file');
const radioSubject = require('./radio');
const radioName = require('./radioName');


router.post('/api/plan', plan.post);
router.get('/api/plan', plan.get);
router.post('/api/report',report.post);
router.get('/api/report',report.get);
router.post('/api/generalization',generalization.post);
router.get('/api/generalization',generalization.get);
router.post('/api/activityOut',activitiesOut.post);
router.get('/api/activityOut', activitiesOut.get);
router.post('/api/activityIn', activitiesIn.post);
router.get('/api/activityIn', activitiesIn.get);
router.post('/api/projects', projects.post);
router.get('/api/projects', projects.get);
router.post('/api/advertising', advertising.post);
router.get('/api/advertising', advertising.get);
router.post('/api/pudjet', pudjet.post);
router.get('/api/pudjet', pudjet.get);
router.post('/api/file', file.post);
router.post('/api/radioSubject', radioSubject.post);
router.get('/api/radioSubject', radioSubject.get);
router.post('/api/radioName',radioName.post);
router.get('/api/radioName',radioName.get)


module.exports = router;
