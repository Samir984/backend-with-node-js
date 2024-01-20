const {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
  createUser
} = require('./../controller/userController.js');
const express = require('express');

const app = express();
const router = express.Router();

router.route('/').get(getAllUsers).post(createUser);

router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
