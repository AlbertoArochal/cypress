describe("home de www.freerangetesters.com", () => {
    beforeEach(() => {
        cy.visit("https://www.freerangetesters.com/");
    });
    it("The title should include free range testers", () => {
        cy.title().should("include", "Free Range Testers");
    });
    it("should navigate to other section when I click on it", () => {
        cy.get(
            '#comp-krjarw4p > [data-testid="linkElement"] > .M3I7Z2'
        ).click();
    });
});
