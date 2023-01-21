const express = require("express");
const router = express.Router();
const { protect } = require("../controllers/authController");
const { createNewTask } = require("../controllers/taskController");

// route start with /api/task
router.route("/").post(protect, createNewTask);

module.exports = router;
