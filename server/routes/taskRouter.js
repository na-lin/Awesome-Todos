const express = require("express");
const router = express.Router();
const { getAllTask } = require("../controllers/taskController");
const { protect } = require("../controllers/authController");

// route start with /api/task

router.route("/").get(protect, getAllTask);

module.exports = router;
