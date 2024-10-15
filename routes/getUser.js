const express = require('express');
const getUsers = require('../controllers/getUser');
const router = express.Router();

router.get("/all-users", getUsers);

module.exports = router;
