const asyncHandler = require("express-async-handler");
const AppError = require("../utils/appError");
const { Task, Date, Detail } = require("../db");

// @desc: Create a task
// @route: POST /api/task
// @access: Private
const createNewTask = asyncHandler(async (req, res, next) => {
  const { title, state, priority, date } = req.body;
  const task = await Task.create({ title, state, priority });
  let taskDate;
  if (date) {
    taskDate = await Date.create({ date });
    taskDate.setTask(task);
  }
  task.setUser(req.user);
  task.userId = undefined;

  res.status(201).json({
    status: "success",
    task: {
      ...task.toJSON(),
      date: taskDate?.date,
    },
  });
});

module.exports = { createNewTask };
