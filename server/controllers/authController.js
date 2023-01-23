const asyncHandler = require("express-async-handler");
const AppError = require("../utils/appError");
const { User } = require("../db");

// @desc: get logged in user data
// @route: GET /api/auth/getme
// @access: Private
const getMe = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    user: req.user.excludePasswordField(),
  });
});

// @desc: Create new user
// @route: POST /api/auth/signup
// @access: Private
const signup = asyncHandler(async (req, res, next) => {
  const { name, email, password, passwordConfirm } = req.body;
  if (!name || !email || !password || !passwordConfirm) {
    throw new AppError(
      "Name, email, password, passwordConfirm  are required.",
      400
    );
  }

  const existUser = await User.findOne({ where: { email } });
  if (existUser) {
    throw new AppError("User already exists.", 401);
  }

  const newUser = await User.create({
    name,
    email,
    password,
    passwordConfirm,
  });

  newUser.passwordConfirm = "";
  await newUser.save({ validate: false });

  const token = newUser.generateToken();

  newUser.excludePasswordField();

  res.status(201).json({
    status: "success",
    token,
    data: {
      user: newUser,
    },
  });
});

// @desc: Login user
// @route: POST /api/auth/login
// @access: Private
const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new AppError("Please provide email and password!", 400);
  }

  const user = await User.findOne({
    where: {
      email,
    },
  });

  if (!user || !(await user.correctPassword(password))) {
    throw new AppError("Incorrect email or password", 401);
  }

  const token = user.generateToken();
  user.excludePasswordField();
  res.status(200).json({
    status: "success",
    token,
    data: { user },
  });
});

// @desc: Check user is login before accessing private resources
// @route: -
// @access: Private
const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    throw new AppError(
      "You are not logged in! Please log in to get access.",
      401
    );
  }

  const decode = await User.verfiyToken(token);

  const currentUser = await User.findByPk(decode.id);

  if (!currentUser) {
    throw new AppError(
      "The user belonging to this token does no longer exist.",
      401
    );
  }

  if (currentUser.changedPasswordAfter(decode.iat)) {
    throw new AppError(
      "User recently changed password! Please log in again",
      401
    );
  }

  req.user = currentUser;
  next();
});

module.exports = { getMe, signup, login, protect };
