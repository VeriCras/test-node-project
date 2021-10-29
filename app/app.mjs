'use strict';

import express from 'express';

import appRootPath from 'app-root-path';
import home from './src/routes/home/index.mjs';

const app = express();

// const morgan = require('morgan');
// const logger = require('./src/config/logger');

// app setting
app.set('views', `${appRootPath.path}/src/views`);
app.set('view engine', 'ejs');

// middleware
app.use(express.static(`${appRootPath.path}/src/public`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(morgan('tiny', { stream: logger.stream }));
// app.use(morgan('dev'));

app.use('/', home);

export default app;
