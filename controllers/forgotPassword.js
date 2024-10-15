const { forgotPasswordMail } = require("../mail");
const User = require("../models/User");
// const nodemailer = require("nodemailer");
const randomstring = require("randomstring");

const forgotPassword = async (req, res) => {
  const userId = req.params.userId;
  console.log("userId: " + userId);
  try {
    const userData = await User.findOne({ _id: userId });
    if (!userData) {
      return res.status(404).json({ error: "This email does not exist!!" });
    }

    const randomString = randomstring.generate();
    console.log("random string: ", randomString);
    const user = await User.findOneAndUpdate(
      { _id: userId },
      { $set: { token: randomString } },
      { new: true }
    );
    res.status(200).json({
      message: "Please check you mail inbox. and reset your password",
    });
    console.log("user: ", user);
    forgotPasswordMail(userData.name, userData.email, randomString);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = forgotPassword;
