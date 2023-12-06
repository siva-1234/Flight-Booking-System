import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  number: String || Number,
});

const User = mongoose.model("Flight User", UserSchema);

export default User;
