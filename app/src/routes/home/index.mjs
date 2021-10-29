'use strict';

import express from 'express';
import * as ctrl from './home.ctrl.mjs';

const router = express.Router();

// route
router.get('/', ctrl.output.home);
router.get('/login', ctrl.output.login);
router.get('/register', ctrl.output.register);

router.post('/login', ctrl.process.login);
router.post('/register', ctrl.process.register);

export default router;
