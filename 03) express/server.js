const dotenv = require('dotenv').config();
const app = require('./app');
const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/random_jokes';

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const port = process.env.port || 4000;
app.listen(port, () => {
  console.log(port, 'server is listening');
});
