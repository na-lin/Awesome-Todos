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
    order: [[Date, "date"], "id"],
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

  res.status(201).json({
    status: "success",
    task: {
      id: task.id,
      title: task.title,
      state: task.state,
      priority: task.priority,
      date: taskDate?.date,
    },
  });
});

// @desc: update detail of task
// @route: PUT /api/task/:taskId/detail
// @access: Private
const updateDetail = asyncHandler(async (req, res, next) => {
  const existedTaskDetail = await Detail.findOne({
    where: {
      taskId: req.params.taskId,
    },
  });

  if (!existedTaskDetail) {
    const taskDetail = await Detail.create({ detail: req.body.detail });
    taskDetail.taskId = req.params.taskId;
    await taskDetail.save();
    return res.status(201).json({
      status: "success",
      date: {
        detail: taskDetail,
      },
    });
  }

  const [_, updatedTaskDetail] = await Detail.update(
    { detail: req.body.detail },
    {
      where: {
        taskId: req.params.taskId,
      },
      returning: true,
    }
  );

  res.status(200).json({
    status: "success",
    date: {
      detail: updatedTaskDetail[0],
    },
  });
});

module.exports = { getAllTasks, createNewTask, updateDetail };
