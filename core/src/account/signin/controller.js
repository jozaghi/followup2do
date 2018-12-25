const { getUserByEmail } = require("../persistance");
const makeSignupDecision = require("./service");
const { token } = require("../../lib/security");

module.exports.getSignupDecision = async ({ email, password }) => {
  const user = await getUserByEmail(email);
  const decision = makeSignupDecision(user, password);

  if (decision.accepted) {
    decision.token = token.sign({
      id: user.id,
      email: user.email
    });
  }
  return decision;
};
