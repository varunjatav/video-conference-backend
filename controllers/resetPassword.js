const User = require("../models/User");
const bcrypt = require("bcrypt");

const resetPassword = async (req, res) => {
  try {
    // console.log("reques query: " , req.query);
    const token = req.query.token || req.params.token;
    console.log("token: ", token);
    const tokenData = await User.findOne({ token: token });
    console.log("token data: ", tokenData);
    if (tokenData) {
      console.log("request body after token data",req.body);
      const password = req.body.password;
      console.log("password: ", password);
      const newPassword = await bcrypt.hash(password, 10);
      console.log("new password: ", newPassword);
      const userData = await User.findByIdAndUpdate(
        { _id: tokenData._id },
        { $set: { password: newPassword, token: "" } },
        { new: true }
      );
    //   console.log("user data: ", userData);
      res
        .status(200)
        .json({ message: "Paswword has been reset", data: userData });
    } else {
      res.status(404).json({ error: "Link has been expired" });
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
module.exports = resetPassword;
