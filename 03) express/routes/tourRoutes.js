const {
  getAllTours,
  createTour,
  deleteTour,
  getTour,
  updateTour,
  checkId,
  cheackBody,
} = require(`./../controller/tourController.js`);

const express = require('express');

const router = express.Router();
router.param('id', checkId);
router.route('/').get(getAllTours).post(cheackBody, createTour);

router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
