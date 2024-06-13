import mongoose, { Mongoose, Schema } from "mongoose";
import bcryptjs from "bcryptjs";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  favourites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Todo",
    },
  ],
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcryptjs.genSalt(10);
    this.password = await bcryptjs.hash(this.password, salt);
    console.log("hello");
    next();
  } catch (err) {
    next(err);
  }
});

userSchema.statics.signup = async function (data) {
  console.log(data);
  const { username, email, password } = data;

  if (!username || !password || !email) {
    throw new Error("Enter all the fields");
  }

  const user = await this.findOne({ username });

  if (user) {
    throw new Error("username already present");
  }

  return this.create(data);
};

userSchema.statics.login = async function (data) {
  const { username, password } = data;

  if (!username || !password) {
    throw new Error("Enter all the fields");
  }
  const user = await this.findOne({ username });
  if (!user) {
    throw new Error("Enter the correct username");
  }

  const isRightPassword = await bcryptjs.compare(password, user.password);
  if (!isRightPassword) {
    throw new Error("Enter the correct password");
  }

  return user;
};

const User = mongoose.model("User", userSchema);

export default User;
