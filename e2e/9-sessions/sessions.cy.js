describe("sessions and cookies", () => {
    it("wihout session", () => {
        cy.visit("https://the-internet.herokuapp.com/login");
        cy.get("#username").type("tomsmith");
        cy.get("#password").type("SuperSecretPassword!");
        cy.get("form").contains("Login").click();
        cy.url().should("contain", "/secure");
    });
    it("within a session", () => {
        cy.session("Tom", () => {
            cy.visit("https://the-internet.herokuapp.com/login");
            cy.get("#username").type("tomsmith");
            cy.get("#password").type("SuperSecretPassword!");
            cy.get("form").contains("Login").click();
            cy.url().should("contain", "/secure");
            cy.getCookies()
                .should("have.length", 1)
                .then((cookies) => {
                    expect(cookies[0]).to.have.property("name", "rack.session");
                });
            cy.clearCookies();
            cy.getCookies().should("have.length", 0);
        });
    });
});
