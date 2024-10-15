const meatingSchema = require("../models/meeting");


const meetingController = async(req, res) => {
    try {
      console.log(req.body);
      const { roomName, createdBy, participants, scheduledTime, createdAt } =
        req.body;
      const roomId = new Date().getTime().toString();
  
      const newMeating = new meatingSchema({
        roomId,
        roomName,
        createdBy,
        participants,
        scheduledTime,
        createdAt,
      });
  
      await newMeating.save();
      res.status(201).json(newMeating);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: "Error", error});
    }
};

module.exports = meetingController;