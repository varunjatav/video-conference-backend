const mongoose = require('mongoose');

const meatingSchema = new mongoose.Schema({
    roomId: {type: String, required: true},
    roomName: {type: String, required: true},
    createdBy: {type: String, required: true},
    participants: [{type: String}],
    scheduledTime: {type: Date},
    createdAt: {type: Date, default: Date.now }
});


module.exports = mongoose.model("Meating",meatingSchema);