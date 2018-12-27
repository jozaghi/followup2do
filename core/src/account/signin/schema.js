const Joi = require("joi");

module.exports = {
  email: Joi.string().required().email(),
  password: Joi.string().required()
};
