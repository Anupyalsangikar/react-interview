//Defining schema
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },  
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

//Bcrypt Hashing password
userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) {
    next();
  }
  try {
    const saltRound = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(user.password, saltRound);
    user.password = hash_password;
  } catch (error) {
    next(error);
  }
});

//JWT Token
userSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
      process.env.JWT_SECRATE_KEY,
      { expiresIn: "30d" }
    );
  } catch (error) {
    console.log("ERROR !!", error);
  }
};


//Compare password for Login
userSchema.methods.comparePassword = async function (password){
  try {
    return bcrypt.compare(password, this.password);
  } catch (error) {
    console.log("ERROR !!", error)
  }
}


const User = new mongoose.model("User", userSchema);

module.exports = User;
