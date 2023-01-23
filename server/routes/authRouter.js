const express = require("express");
const {
  signup,
  login,
  getMe,
  protect,
  logout,
} = require("../controllers/authController");
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

router.get("/getme", protect, getMe);

router.get("/logout", protect, logout);

module.exports = router;
