const db = require("./database");

const User = require("./models/userModel");
const Task = require("./models/taskModel");

// Here to define associate between models
User.hasMany(Task);
Task.belongsTo(User);

module.exports = {
  db,
  User,
  Task,
};
