const asyncHandler = require("express-async-handler");
const AppError = require("../utils/appError");
const { Task, Date, Detail } = require("../db");

// @desc: Get all tasks of this user include date
// @route: GET /api/task/
// @access: Private
const getAllTasks = asyncHandler(async (req, res, next) => {
  const allTasks = await Task.findAll({
    where: {
      userId: req.user.id,
    },
    attributes: ["id", "title", "state", "priority"],
    include: [
      {
        model: Date,
        attributes: ["date"],
      },
    ],
    order: ["id"],
  });

  res.status(200).json({
    status: "success",
    results: allTasks.length,
    data: allTasks,
  });
});

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

module.exports = { getAllTasks, createNewTask };
