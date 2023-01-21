const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  getTask,
  createNewTask,
  updateDetail,
  getTaskDetail,
  deleteTask,
} = require("../controllers/taskController");

// route start with /api/task
router.route("/").get(getAllTasks).post(createNewTask);

router.route("/:taskId/detail").put(updateDetail).get(getTaskDetail);

router.route("/:taskId").get(getTask).delete(deleteTask);

module.exports = router;
