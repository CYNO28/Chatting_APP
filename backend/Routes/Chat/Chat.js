const { Router } = require("express");
const ChatRouter = Router();
require("dotenv").config();
const jwt = require("jsonwebtoken");

const userModel = require("../../Model/userModel.js");

ChatRouter.get("/friendslist", async (req, res) => {
  let token = req.headers.token;
  let decoded = jwt.verify(token, process.env.SECRET_KEY);
let data =await userModel.find({_id:decoded.id}) 
const {friendlist}=data
  res.send(friendlist||[]);
});
module.exports = ChatRouter;
