const { validationResult } = require("express-validator");
const UserSchema  = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const loginController = async(req,res) => {
    try {
        // console.log("login: ",req.body);
        const error = validationResult(req);
        if(!error.isEmpty()){
            return res.status(404).json({message: error.message});
        }
        const {email,password} = req.body;
        

        const User = await UserSchema.findOne({email});
        console.log("User from login :", User);
        if(!User){
           return res.status(400).json({message:"user not found.. register first!!"})
        }

        const isPasswordValid = await bcrypt.compare(password, User.password);
        if(!isPasswordValid){
            return res.status(400).json({message: "invalid password"});
        }
        const token = jwt.sign({userId: User._id}, process.env.JWT_SECRET_KEY, {
            expiresIn: "1h",
        });

        const refreshToken = jwt.sign({userId: User._id} ,process.env.JWT_REFRESH_SECRET_KEY,{
            expiresIn: "1d",
        } );

        res.status(200).json({token: token, refreshToken: refreshToken , userId: User._id});
    } catch (error) {
        res.status(500).json({message: error.message}); 
    }
}

module.exports = loginController;