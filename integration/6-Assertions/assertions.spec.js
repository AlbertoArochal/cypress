const { expect } = require("chai");
const { beforeEach } = require("mocha");

describe("explicits and implicits validations", () => {
    beforeEach(() => {
        cy.visit("https://the-internet.herokuapp.com/login");
    });
    it("implicit validations", () => {
        cy.contains("Inputs").click();
        cy.get("h3").should("have.text", "Inputs");
        cy.get(".example").should("have.class", "example").and("be.visible");
    });
    it("explicit validations", () => {
        cy.contains("Inputs").click();
        cy.get("h3");
        expect("Inputs").to.equal("Inputs");
    });
    it("wait for promises to resolve", () => {
        function waitOneSecond() {
            return new cypress.Promise((resolve, reject) => {
                setTimeout(() => {
                    waited = true;
                    resolve("foo");
                }, 1000);
            });
        }
        cy.wrap(null).then(() => {
            return waitOneSecond().then((str) => {
                expect(str).to.eq("foo");
                expect(waited).to.be.true;
            });
        });
    });
});
