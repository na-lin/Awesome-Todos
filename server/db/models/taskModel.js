const db = require("../database");
const Sequelize = require("sequelize");

const Task = db.define("task", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Task;
