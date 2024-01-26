const { getAllJokes, postJoke } = require('../controller/jokeController.js');

const express = require('express');

const router = express.Router();

router.route('/').get(getAllJokes);

router.route('/').post(postJoke);

module.exports = router;
