const asyncRouter = require("express-async-router").AsyncRouter;
const router = asyncRouter();
const singin = require("./signin/routes");

router.use("/signin", singin);

module.exports = router;
