const { ACCEPTED, REJECTED } = require("./decision");
const { hashPassword } = require("../../lib/security");

const makeSignupDecision = (user, password) => {
  if (user == null) {
    return REJECTED;
  }
  const passwordIsValid = hashPassword.verify(password, user.password);
  if (!passwordIsValid) {
    return REJECTED;
  }
  return ACCEPTED;
};

module.exports = makeSignupDecision;
