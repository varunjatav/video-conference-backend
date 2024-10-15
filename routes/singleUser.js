const express = require('express');
const getSingleUser = require('../controllers/singleUser');
const router = express.Router();

router.get('/single-user/:_id', getSingleUser);

module.exports = router;