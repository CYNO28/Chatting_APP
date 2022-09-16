const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
dotenv = require("dotenv").config();
const cors = require("cors");
const userRouter =require("./Routes/Auth/Auth.js");
const connection = require("./db");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("dotenv").config();
app.use('/Auth',userRouter)
app.use(cors())
app.listen(3000)
