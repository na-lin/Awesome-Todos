const db = require("./database");

const User = require("./models/userModel");
const Task = require("./models/taskModel");
const Detail = require("./models/detailModel");

// Here to define associate between models
User.hasMany(Task);
Task.belongsTo(User);

Task.hasOne(Detail);
Detail.belongsTo(Task);

module.exports = {
  db,
  User,
  Task,
  Detail,
};
