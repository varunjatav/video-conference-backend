const express = require("express");
const forgotPassword = require("../controllers/forgotPassword");

const router = express.Router();

router.post("/forgot-password/:userId", forgotPassword);

module.exports = router;