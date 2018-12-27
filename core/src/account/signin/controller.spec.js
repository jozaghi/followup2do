jest.mock("../persistance");
const model = require("../persistance");
const {getSignupDecision} = require("./controller");
const getUserByEmailMock=jest.fn();
model.getUserByEmail=getUserByEmailMock;

const savedUser={
    id:1,
    email:"a@b.com",
    password:"sha1$0338dc42$1$84c89a51c312cccc85535dfebafbb9644586e425"
}
const validToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NDU5MTk3OTgsImRhdGEiOnsiaWQiOjEsImVtYWlsIjoiYUBiLmNvbSJ9LCJpYXQiOjE1NDU5MTYxOTh9.4kZNrUmY9sIJqWDjhWmVbllVWF9Zt_LSpcfGeHHG4_M";
const requestUser={
    email:"a@b.com",
    password:"1234"
}


describe("account->signup->controller",()=>{
    beforeEach(()=>{
        jest.resetModules();
    });

    it("getSignupDecision_validEmailAndPasswor_returnAcceptedResultAndToken",async  done=>{
        getUserByEmailMock.mockReturnValueOnce(
            new Promise(resolve=> resolve(savedUser))
        );
        const decision=await getSignupDecision(requestUser);

        expect(getUserByEmailMock).toHaveBeenCalledWith(requestUser.email);
        expect(decision.accepted).toBe(true);
        expect(decision.token).not.toBe("");
        done();
    });


});



