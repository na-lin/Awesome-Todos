const db = require("./database");

const User = require("./models/userModel");
const Task = require("./models/taskModel");
const Detail = require("./models/detailModel");
const Date = require("./models/dateModel");

// Here to define associate between models
User.hasMany(Task);
Task.belongsTo(User);

Task.hasOne(Detail);
Detail.belongsTo(Task);

Task.hasOne(Date);
Date.belongsTo(Task);

module.exports = {
  db,
  User,
  Task,
  Detail,
  Date,
};
