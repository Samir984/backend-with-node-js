const { config } = require('dotenv');
const mongoose = require('mongoose');

const jokeSchema = mongoose.Schema({
  type: 'string',
  setup: 'string',
  punchline: 'string',
});

const Joke = mongoose.model('Joke', jokeSchema);

module.exports = Joke;
