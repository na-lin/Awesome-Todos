const db = require("../database");
const Sequelize = require("sequelize");

const Date = db.define("date", {
  date: {
    type: Sequelize.DATE,
  },
});

module.exports = Date;
