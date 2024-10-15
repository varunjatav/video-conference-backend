const UserSchema = require("../models/User");

const updateUser = async (req, res) => {
  try {
    console.log("request file multer:", req.file);
    console.log("request body :", req.body);
    // const profilePic = req.file.filename;
    // const requestBody = { ...req.body };
    // const name = req.body.name;
    // const email = req.body.email;
    // console.log("name:", name);

    const userId = req.body.userId;
    console.log(userId);

    const updateData = {};
    if (req.file && req.file.filename) {
      updateData.profilePic = req.file.filename;
    }
    if (req.body.name) {
      updateData.name = req.body.name;
    }
    if (req.body.email) {
      updateData.email = req.body.email;
    }

    if (Object.keys(updateData).length === 0) {
      return res.status(404).json({ error: "No feilds to update !!" });
    }

    const updateUser = await UserSchema.findByIdAndUpdate(userId, updateData, {
      new: true,
    });

    if (!updateUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({message:"updated successfully!!", data: updateData});
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = updateUser;
