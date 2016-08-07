'use strict';

var DEBUG = true;

var express = require('express');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

require('dotenv').config();
const env = process.env;

var routes = require(path.join(__dirname, 'routes/routes'));

var app = express();

var MONGODB_URI;
if (DEBUG)
	MONGODB_URI = env.MONGO_HOST_DEV;
else
	MONGODB_URI = env.MONGO_HOST_LIVE;

console.info(`Connecting to MongoDB using: ${MONGODB_URI}`);
mongoose.connect(MONGODB_URI);

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

module.exports = app;