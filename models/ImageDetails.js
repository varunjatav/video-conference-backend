const { default: mongoose } = require("mongoose");

const ImageDetailSchema = new mongoose.Schema({
    profilePic:  String,
});

module.exports = mongoose.model("profilePic", ImageDetailSchema);
