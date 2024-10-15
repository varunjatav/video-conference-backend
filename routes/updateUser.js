const UserSchema = require("../models/User");
const express = require("express");
const router = express.Router();
const updateUser = require("../controllers/UpdateUser");
const upload = require("../middleware/multer");


router.patch("/update", upload.single("profilePic"), updateUser);

module.exports = router;
// app.use('/api/user);
