describe("home de www.freerangetesters.com", () => {
  beforeEach(() => {
    cy.visit("https://www.freerangetesters.com/");
  });
  it("The title should include free range testers", () => {
    cy.title().should("include", "Free Range Testers");
  });
});
