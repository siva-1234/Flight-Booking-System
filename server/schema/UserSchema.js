import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  email: String,
});

const User = mongoose.model("Flight User", UserSchema);

export default User;
