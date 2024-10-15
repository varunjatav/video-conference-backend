const express = require('express');
const deleteUser = require('../controllers/deleteUser');

const router = express.Router();

router.delete("/delete/:id", deleteUser);


module.exports = router;