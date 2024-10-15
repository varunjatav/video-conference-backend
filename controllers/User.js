const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const UserSchema = require("../models/User");
const { RegisterationEmail } = require("../mail");

const UserController = async (req, res) => {
  try {
    // console.log(req.body);
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ message: error });
    }
    const { name, email, password } = req.body;

    const existingUser = await UserSchema.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedpassword = await bcrypt.hash(password, 10);
    const newUser = new UserSchema({
      name: name.toLowerCase(),
      email,
      password: hashedpassword,
    });
    await newUser.save();
    RegisterationEmail(name, email);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = UserController;
