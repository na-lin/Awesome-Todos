const db = require("./database");

const User = require("./models/userModel");

// Here to define associate between models

module.exports = {
  db,
  User,
};
