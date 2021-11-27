const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const usersSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
});

/* //verify that email doesn't exist
usersSchema.path("email").validate(async (value) => {
  const emailCount = await mongoose.models.Users.countDocuments({
    email: value,
  });
  return !emailCount;
}, "Email already exists");
//Verify that username doesn't exist
usersSchema.path("username").validate(async (value) => {
  const usernameCount = await mongoose.models.Users.countDocuments({
    username: value,
  });
  return !usernameCount;
}, "Email already exists"); */
module.exports = mongoose.model("Users", usersSchema);
