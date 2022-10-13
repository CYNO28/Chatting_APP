const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
dotenv = require("dotenv").config();
const cors = require("cors");

const userRouter = require("./Routes/Auth/Auth.js");
const connection = require("./db");

const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("dotenv").config();


app.use("/Auth", userRouter);
app.use(cors());

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('message', (message) => console.log(message,socket.id));
     
  })


server.listen(8080, async () => {
  try {
    await connection;
    console.log("server is running");
  } catch {
    console.log("Connection error: ");
  }
});
