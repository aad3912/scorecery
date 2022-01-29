import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const LeagueSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name of league as name"],
  },
  _id: {
    type: Number,
    required: [true, "Please provide id of league as '_id'."],
  },
});

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: [true, "This email already exists in our database"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please provide a valid email",
    ],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: [8, "Password must have atleast 8 characters"],
    select: false,
  },
  leagues: {
    type: [LeagueSchema],
    default: [{ name: "Premier League", _id: 39 }],
  },
});

// Important to NOT use an arrow function here
UserSchema.pre("save", async function (next) {
  // Only hash password if modified (e.g. reset-password)
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

// Important to NOT use an arrow function here
UserSchema.methods.matchPasswords = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Important to NOT use an arrow function here
UserSchema.methods.getSignedToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

UserSchema.methods.addLeagues = function (leagues) {
  this.leagues = this.leagues.concat(leagues);
};

UserSchema.methods.removeLeague = function (leagueId) {
  this.leagues = this.leagues.filter((league) => league._id !== leagueId);
};

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
