const express = require('express');

const router = express.Router();


const plan = require('./plan');
const report = require('./report');
const generalization = require('./generalization');
const activities = require('./activities');
const projects = require('./projects.js');
const advertising = require('./advertising');
const pudjet = require('./pudjet');
const file = require('./file')


router.post('/api/plan', plan.post);
router.post('/api/report',report.post);
router.post('/api/generalization',generalization.post);
router.post('/api/activities', activities.post);
router.post('/api/projects', projects.post);
router.post('/api/advertising', advertising.post);
router.post('/api/pudjet', pudjet.post);
router.post('/api/file', file.post);


module.exports = router;
