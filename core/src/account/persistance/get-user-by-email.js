const connectionBuilder = require("../../lib/database");

const queryString = "SELECT * FROM `account.user` WHERE email=?";

const exec = async email =>
  new Promise((resolve, reject) => {
    connectionBuilder
      .connect()
      .then(db =>
        db.query(queryString, [email], (err, rows) => {
          if (err) reject(err);
          let user = rows.length > 0 ? rows[0] : null;
          resolve(user);
        })
      )
      .catch(err => reject(err));
  });

module.exports = exec;
