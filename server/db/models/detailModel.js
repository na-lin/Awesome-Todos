const db = require("../database");
const Sequelize = require("sequelize");

const Detail = db.define("detail", {
  detail: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
});

module.exports = Detail;
