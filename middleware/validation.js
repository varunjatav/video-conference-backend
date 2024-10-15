const { body } = require("express-validator");

 const signUpValidation = [
     body("name").isLength({min:5}).withMessage("Name should be At least 5 characters long").notEmpty().withMessage("Please Enter your Name"),
     body("email").isEmail().withMessage("Please enter a valid email address").notEmpty().withMessage("Please Enter your Email address"),
     body("password").isLength({min:5}).withMessage("Your password should be 5 character long"),
];

const loginValidation = [
    body("email").isEmail().withMessage("Please enter a valid email address").notEmpty().withMessage("Please Enter your Email address"),
    body("password").isLength({min:5}).withMessage("Your password should be 5 character long"),
]
module.exports = {signUpValidation, loginValidation };