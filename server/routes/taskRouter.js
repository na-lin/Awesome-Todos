const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createNewTask,
  updateDetail,
  getTaskDetail,
} = require("../controllers/taskController");

// route start with /api/task
router.route("/").get(getAllTasks).post(createNewTask);

router.route("/:taskId/detail").put(updateDetail).get(getTaskDetail);

module.exports = router;
