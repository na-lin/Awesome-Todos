const db = require("../database");
const Sequelize = require("sequelize");

const Task = db.define("task", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  state: {
    type: Sequelize.ENUM("todo", "completed", "won't do"),
    defaultValue: "todo",
  },
});

module.exports = Task;
