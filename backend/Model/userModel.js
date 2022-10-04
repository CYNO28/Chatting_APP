const { Schema, model, Model } = require("mongoose");
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role:{
    type: String,
    required: true
  }
});
const User = new model("ChatApp_User", UserSchema);
module.exports = User;
