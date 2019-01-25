const Sequelize = require("sequelize");

module.exports = db =>
  db.define("user", {
    email: {
      type: Sequelize.STRING,
      isEmail: true,
      unique: true,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    fistName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    registerOn: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  });
