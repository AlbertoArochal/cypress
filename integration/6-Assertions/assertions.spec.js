const { beforeEach } = require("mocha");

describe("explicits and implicits validations", () => {
    beforeEach(() => {
        cy.visit("https://the-internet.herokuapp.com/login");
    });
    it("implicit validations", () => {
        cy.contains("Inputs").click();
    });
    it("explicit validations", () => {
        cy.contains("Inputs").click();
    });
});
