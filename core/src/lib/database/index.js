module.exports = require("./database");

/*
const mysql = require("mysql");
const config = require("../../../config");

const createConnection = config =>
  mysql.createConnection({
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database
  });

const connectionBuilder = async () =>
  new Promise((resolve, reject) => {
    var connection = createConnection(config);
    connection.connect(err => {
      if (err) reject(err);
      resolve(connection);
    });
  });

module.exports = {
  connect: connectionBuilder
};
*/
