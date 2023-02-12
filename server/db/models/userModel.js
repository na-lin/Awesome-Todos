const db = require("../database");
const Sequelize = require("sequelize");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/dev");
const AppError = require("../../utils/appError");

const User = db.define(
  "user",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    passwordChangedAt: {
      type: Sequelize.DATE,
    },
  },
  { timestamp: false }
);

// @desc: hash password only if password is modified
User.addHook("beforeSave", async (user) => {
  if (!user.changed("password")) return;
  user.password = await bcrypt.hash(user.password, 12);
});

// @desc: update passwordChangedAt when update password
User.addHook("beforeSave", (user) => {
  if (!user.changed("password") || user.isNewRecord) return;
  user.passwordChangedAt = Date.now() - 1000;
});

// @desc: exclude password, passwordConfirm field
User.prototype.excludePasswordField = function () {
  this.password = undefined;
  this.passwordConfirm = undefined;
  this.passwordChangedAt = undefined;
  return this;
};

// @desc: generate jwt token
User.prototype.generateToken = function () {
  return jwt.sign({ id: this.id }, keys.JWT_SECRET, {
    expiresIn: keys.JWT_EXPIRES,
  });
};

// @desc: check if user entered password === password in db
User.prototype.correctPassword = async function (candidatePwd) {
  return await bcrypt.compare(candidatePwd, this.password);
};

// @desc: find user by token, if user don't exist, or token is invalid, throw error
User.verfiyToken = async function (token) {
  try {
    const decode = await jwt.verify(token, keys.JWT_SECRET);
    return decode;
  } catch (err) {
    throw new AppError("Invalid Token, Please try to login in again.", 401);
  }
};

// @desc: check if token was issued after password changed
User.prototype.changedPasswordAfter = function (jwtTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return jwtTimestamp < changedTimestamp;
  }
  return false;
};

module.exports = User;
