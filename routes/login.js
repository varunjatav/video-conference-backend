const express = require('express');
const loginController = require('../controllers/login');
const router = express.Router();
const { loginValidation }  = require("../middleware/validation")

router.post("/login", loginValidation, loginController);

module.exports = router;    