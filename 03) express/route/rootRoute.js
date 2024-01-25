const { getAllJokes } = require('../controller/rootController.js');
const express = require('express');

const router = express.Router();

router.route('/').get(getAllJokes);

module.exports = router;
