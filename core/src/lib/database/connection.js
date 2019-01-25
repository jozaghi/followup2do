const config = require("../../../config").db;
const Sequelize = require("sequelize");

const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: "mysql",
  port: 3306,
  operatorsAliases: false
});

module.exports = sequelize;
