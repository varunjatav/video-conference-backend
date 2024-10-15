const User = require("../models/User");

const getUsers = async(req,res) => {
    try {
        const Users = await User.find({});
        console.log(Users);
        if(!Users){
            return res.status(404).json({error: 'User not found'});
        }
        return res.status(200).json(Users);
    } catch (error) {
        console.log(error);
        return res.status(404).json({error:error.message});
    }
};

module.exports = getUsers;