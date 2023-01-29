const asyncHandler = require("express-async-handler");
const AppError = require("../utils/appError");
const { Task, Date, Detail } = require("../db");

// @decs: get all tasks belong to user
// @route: GET /api/tasks/
// @access: private
const getAllTask = asyncHandler(async (req, res, next) => {
  const allTasks = await Task.findAll({
    where: {
      userId: req.user.id,
    },
  });

  res.status(200).json({
    status: "success",
    results: allTasks.length,
    data: {
      tasks: allTasks,
    },
  });
});

// @desc: Create a task
// @route: POST /api/task
// @access: Private
const createTask = asyncHandler(async (req, res, next) => {
  const { title } = req.body;
  const task = await Task.create({ title });
  await req.user.addTask(task);
  res.status(201).json({ data: { task } });
});

// @desc: update todo title
// @route: PUT /api/task/:taskId
// @access: Private
const updateTask = asyncHandler(async (req, res, next) => {
  const { title } = req.body;
  const [_, task] = await Task.update(
    { title },
    {
      where: {
        id: req.params.taskId,
      },
      returning: true,
    }
  );
  res.status(200).json({ data: { task } });
});

module.exports = { getAllTask, createTask, updateTask };
