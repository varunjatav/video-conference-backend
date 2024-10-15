const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
// console.log(process.env.MONGO_URL);
const database = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log("Connecting to MongoDB", connection.connection.host);
  } catch (error) {
    console.log("failed to connect ro MongoDB" ,error);
  }
};

module.exports = database;