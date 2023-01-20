const express = require('express');

const morgan = require('morgan');
const cookieParser = require('cookie-parser');
// const session = require('express-session');
// const sessionConfig = require('../sessions');
const ssr = require('../middleware/ssr');

const serverConfig = (app) => {
  app.use(morgan('dev'));
  app.use(express.json());
  app.use(ssr);
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static('public'));
  app.use(cookieParser());
  // app.use(session(sessionConfig));
};

module.exports = serverConfig;
