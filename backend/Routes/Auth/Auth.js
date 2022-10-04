const { Router } = require("express");
const userRouter = Router();
require("dotenv").config();
const jwt = require("jsonwebtoken");
const userModel = require("../../Model/userModel.js");
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email: email });
  if (!user) {
    res.send({ error: true, message: "Invalid email address" });
  } else {
    let pass = jwt.verify(user.password, process.env.SECRET_KEY);
    if (password == pass) {
      let token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.SECRET_KEY
      );
      res.json({ error: false, token: token });
    } else {
      res.send({ error: true, message: "incorrect password" });
    }
  }
});

userRouter.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  let pass = jwt.sign(password, process.env.SECRET_KEY);

  let new_user = { name, email, password: pass };
  let fuser = await userModel.findOne({ email });
  if (fuser) {
    return res.send({ exits: true });
  } else {
    let user = await userModel.create({ ...new_user, role: "user" });

    user.save();
    let token = jwt.sign({ id: user._id, role: user }, process.env.SECRET_KEY);
    res.send({ token, exits: false });
  }
});
userRouter.post("/resetpassword", async (req, res) => {});
module.exports = userRouter;
