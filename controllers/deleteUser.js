const User = require("../models/User");

const deleteUser = async(req, res) => {
    try {
        const userId = req.params._id
        console.log("deleted user id: " + userId);
        const deleteUserData = await User.findOneAndDelete(userId);
        console.log(deleteUserData);
        // newUser.save();
        if(!deleteUserData){
            return res.status(404).send({message: "User not found"});
        }
        res.status(200).json({message: "User deleted successfully!!"})
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

module.exports = deleteUser;