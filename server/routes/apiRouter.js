const express = require("express");
const { protect } = require("../controllers/authController");
const router = express.Router();

// Test middleware
router.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Sub-router
router.use("/auth", require("./authRouter"));
router.use("/task", protect, require("./taskRouter"));

module.exports = router;
