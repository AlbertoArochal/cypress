describe("dynamic tables", () => {
    it("should be able to get the value of a cell", () => {
        cy.visit("https://chercher.tech/practice/table");
        cy.contains("td", "facebook.com").next().should("be.visible");
    });
});
