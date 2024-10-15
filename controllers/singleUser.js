const User = require("../models/User")

const getSingleUser = async(req,res) => {
    try {
        const singleUser = await User.findOne({_id: req.params._id});
        if(!singleUser) return res.status(404).json({error: 'User not found'});
        return  res.status(200).json( singleUser);
    } catch (error) {
        return res.status(404).json({error:error.message});
    }
};

module.exports = getSingleUser;