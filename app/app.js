'use strict';

const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

// router
const home = require('./src/routes/home');

// app setting
app.set('views', __dirname + '/src/views');
app.set('view engine', 'ejs');

// middleware
app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', home);

module.exports = app;
