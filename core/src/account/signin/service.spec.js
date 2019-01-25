const makeSignupDecision = require("./service");

describe("account->signin->service", () => {
  it("makeSignupDecision_currectPassword_singupAccepted ", () => {
    const password = "1234";
    const hashedPassword =
      "sha1$0338dc42$1$84c89a51c312cccc85535dfebafbb9644586e425";
    const decision = makeSignupDecision({ password: hashedPassword }, password);
    expect(decision.accepted).toBe(true);
  });

  it("makeSignupDecision_wrongPassword_singupRejected ", () => {
    const password = "1234";
    const hashedPassword = "SDFGHJKL:TYUIOPVBHJNKML<:>YHUIJKMFVGHBJ";
    const decision = makeSignupDecision({ password: hashedPassword }, password);
    expect(decision.accepted).toBe(false);
  });
});
