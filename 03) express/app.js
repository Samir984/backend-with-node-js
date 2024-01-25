const express = require('express');
const rootRoute = require('./route/rootRoute.js');
const app = express();

app.use(express.json());
app.use((req, res, next) => {
  console.log('hello form middleware');
  next();
});

app.use('/', rootRoute);
console.log('app');
module.exports = app;
