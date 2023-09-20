import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    min: 5,
    max: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 20,
  },
  picturePath: {
    type: String,
    default: "",
    },
    friends: {
        type: Array,
        default: []
    },
    location: String, 
    education: String,
    occupation: String,
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);
export default User;