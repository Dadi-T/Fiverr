const { body } = require("express-validator");
function usernameCheck() {
  return body("username")
    .trim()
    .escape()
    .isLength({ min: 4, max: 25 })
    .withMessage("username must be from 4 to 25 characters");
}
function emailCheck() {
  return body("email")
    .trim()
    .escape()
    .isEmail()
    .withMessage("email does not follow the email rules");
}
function passwordCheck() {
  return body("password")
    .trim()
    .escape()
    .isLength({ min: 8, max: 60 })
    .withMessage("password must be from 8 to 60 characters");
}

module.exports = { usernameCheck, emailCheck, passwordCheck };
