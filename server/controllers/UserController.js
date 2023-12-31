import User from "../schema/UserSchema.js";

export const Register = async (req, res) => {
  try {
    const number = req.body.number;
  
    const existingUser = await User.findOne({ number });
    if (existingUser) {
      res.status(401).send({ message: "Mobile Number already registered" });
    }
    // const passwordEncryption = await bcrypt.hash(password, 10);

    await User({
      email
    }).save();

    res.status(201).send({ message: "Register Successfull" });
  } catch (error) {
    res.status(400).send(error);
  }
};

