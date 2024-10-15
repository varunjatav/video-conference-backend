const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  newPassword: { type: String },
  profilePic: { type: String, default: "" },
  token: { type: String, default: "" },
});

module.exports = model("User", UserSchema);
