const express = require('express');
const {
  CreateBuilderToDb,
  findBuildersToDb,
  reviewToDb,
  findSingleBuildersToDb,
} = require('./PC_Controller');

const router = express.Router();

router.route('/create').post(CreateBuilderToDb);
router.route('/').get(findBuildersToDb);
router.route('/review/:id').post(reviewToDb);
router.route('/:id').get(findSingleBuildersToDb);
module.exports = router;
