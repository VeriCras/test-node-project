'use strict';

const express = require('express');
const router = express();
const ctrl = require('./home.ctrl');

// route
router.get('/', ctrl.home);
router.get('/login', ctrl.login);

module.exports = router;
