const db = require("./database");

const User = require("./models/userModel");
const Task = require("./models/taskModel");
const Detail = require("./models/detailModel");
const Date = require("./models/dateModel");

// Here to define associate between models
User.hasMany(Task);
Task.belongsTo(User);

Task.hasOne(Detail, { foreignKeyConstraint: true, onDelete: "CASCADE" });
Detail.belongsTo(Task, { foreignKeyConstraint: true, onDelete: "CASCADE" });

Task.hasOne(Date, { foreignKeyConstraint: true, onDelete: "CASCADE" });
Date.belongsTo(Task, { foreignKeyConstraint: true, onDelete: "CASCADE" });

module.exports = {
  db,
  User,
  Task,
  Detail,
  Date,
};
