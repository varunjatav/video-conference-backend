const express = require("express");
const path = require("path");
const cors = require("cors");
const socketIO = require("socket.io");
const http = require("http");
const database = require("./db");

const meatingRouter = require("./routes/meeting.js");
const SignUpRouter = require("./routes/User.js");
const LoginRouter = require("./routes/login.js");
const DeleteUserRouter = require("./routes/deleteUser.js");
const GetUserRouter = require("./routes/getUser.js");
const GetSingleUserRouter = require("./routes/singleUser.js");
const updateRouter = require("./routes/updateUser");
const forgotPassword = require("./routes/forgotPassword.js");
const resetPassword = require("./routes/resetPassword.js");


const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors());

const server = http.createServer(app);
const io = socketIO(server, {
  cors: { origin: "http://127.0.0.1/:5173" },
});
// console.log(io.on());

database();

io.on("connection", (socket) => {
  console.log("Connection established");

  socket.on("message", (message) => {
    socket.broadcast.emit("message", message); 
  })
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

function error(err, req, res, next) {
  // log it
  if (!test) console.error(err.stack);

  // respond with 500 "Internal Server Error".
  res.status(500);
  res.send("Internal Server Error");
}

app.use(error);



app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use("/api/user",updateRouter);
app.use("/api/meetings", meatingRouter);
app.use("/api/user", SignUpRouter);
app.use("/api/user", LoginRouter);
app.use("/api/user", DeleteUserRouter);
app.use("/api/user", GetUserRouter);
app.use("/api/user", GetSingleUserRouter);
app.use("/api/user",forgotPassword);
app.use("/api/user",resetPassword);

app.listen(PORT, () => {
  console.log("listening on PORT " + PORT);
});
