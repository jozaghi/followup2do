const connection = require("./connection");

const models = {};

const init = modelFactories => {
  modelFactories.forEach(factory => {
    model = factory(connection);
    models[model.name] = model;
  });
  return new Promise((resolve, reject) => {
    connection
      .sync()
      .then(resolve)
      .catch(reject);
  });
};

module.exports = {
  init,
  models
};
