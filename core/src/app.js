const express = require("express");
const app = express();
const jsonParser = require("body-parser").json();
const errorHandler = require("./lib/middleware/error-handler");
const toCamelCase = require("./lib/middleware/to-camel-case");
app.use(jsonParser);
app.use(toCamelCase);

//modules
const account = require("./account");
app.use("/account", account);

app.use(errorHandler());
module.exports = app;
