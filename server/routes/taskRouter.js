const express = require("express");
const router = express.Router();
const { protect } = require("../controllers/authController");
const { getAllTasks, createNewTask } = require("../controllers/taskController");

// route start with /api/task
router.route("/").get(protect, getAllTasks).post(protect, createNewTask);

module.exports = router;
