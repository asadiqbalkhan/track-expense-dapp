const TrackerTest = artifacts.require("TrackerTest");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("TrackerTest", function (/* accounts */) {
  it("should assert true", async function () {
    await TrackerTest.deployed();
    return assert.isTrue(true);
  });
});
