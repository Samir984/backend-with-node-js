const express = require('express');
const jokeRoute = require('./route/jokeRoute.js');
const app = express();

app.use(express.json());
app.use((req, res, next) => {
  console.log('hello form middleware');
  next();
});

app.use('/', jokeRoute);
console.log('app');
module.exports = app;
