const asyncRouter = require("express-async-router").AsyncRouter;
const router = asyncRouter();
const validate = require("express-validation");
const schema = require("./schema");
const { getSignupDecision } = require("./controller");

router.use(validate({ body: schema }));
router.post("", async (req, res) => {
  const signinRequest = req.body;
  const signupDecision = await getSignupDecision(signinRequest);
  return res.status(200).json(signupDecision);
});

module.exports = router;
