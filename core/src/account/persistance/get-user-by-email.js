const models = require("@db").models;

module.exports = async email => await models.user.findOne({ where: { email } });
