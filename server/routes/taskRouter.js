const express = require("express");
const router = express.Router();
const { protect } = require("../controllers/authController");
const {
  getAllTasks,
  createNewTask,
  updateDetail,
  getTaskDetail,
} = require("../controllers/taskController");

// route start with /api/task
router.route("/").get(protect, getAllTasks).post(protect, createNewTask);

router
  .route("/:taskId/detail")
  .put(protect, updateDetail)
  .get(protect, getTaskDetail);

module.exports = router;
