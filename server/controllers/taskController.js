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

module.exports = { getAllTask };
