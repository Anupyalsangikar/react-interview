const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const home = async (req, res) => {
  try {
    res.status(200).json({ message: "Home Page" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * User Registration
 * @param {*} req
 * @param {*} res
 * @returns
 */
const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exist" });
    }
    // const saltRound = 10;
    // const hash_password = await bcrypt.hash(password, saltRound);
    const saveUser = await User.create({
      username,
      email,
      phone,
      password,
    });
    res.status(201).json({
      message: "Registration successful",
      token: await saveUser.generateToken(),
      userId: saveUser._id.toString(),
    });
  } catch (error) {
    // res.status(500).json({ message: "Internal server error" });
    next(error);
  }
};

/**
 * User Login logic
 */
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ message: "Invalid Cradentials" });
    }
    // const user = await bcrypt.compare(password, userExist.password);
    const user = await userExist.comparePassword(password);

    if (user) {
      res.status(200).json({
        message: "Login successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  home,
  register,
  login,
};
