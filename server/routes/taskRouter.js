const express = require("express");
const router = express.Router();
const { getAllTask, createTask } = require("../controllers/taskController");
const { protect } = require("../controllers/authController");

// route start with /api/task

router.route("/").get(protect, getAllTask).post(protect, createTask);

module.exports = router;
