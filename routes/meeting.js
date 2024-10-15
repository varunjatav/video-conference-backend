const express = require("express");

const meetingController = require("../controllers/meeting");

const router = express.Router();

router.post("/create", meetingController);

module.exports = router;