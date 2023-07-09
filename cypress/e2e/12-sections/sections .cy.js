const testData = require("../../fixtures/testData.json");

testData.forEach((testData) => {
    describe("The title is correct for each subpage", () => {
        it("The title is correct", () => {
            cy.intercept("GET", {
                status: 500,
                body: {
                    name: "Internal Server Error",
                },
            });
        });
        cy.visit(testdata.Location);
        cy.title().should("include", testData.Title);
    });
});
