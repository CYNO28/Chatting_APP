import { Schema ,model,models } from "mongoose";

const userSchema = new Schema({
    name: String,
    email:{
        type: String,
        required: true,
        unique: true,
    },
    age:Number


})
const User =models.User|| model('User',userSchema)
export default User;