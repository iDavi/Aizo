const express = require('express');
const router = express.Router();
const controllers = require('./controllers');
const config = require('../../config.json');

router.get('/', controllers.index);

module.exports = router;

