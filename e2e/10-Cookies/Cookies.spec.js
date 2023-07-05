describe("setting cookies", () => {
    it("should set a cookie", () => {
        cy.visit("https://the-internet.herokuapp.com/login");
        cy.get("#username").type("tomsmith");
        cy.get("#password").type("SuperSecretPassword!");
        cy.get("form").contains("Login").click();
        cy.url().should("contain", "/secure");
        cy.setCookie("CrazyCookie", "Oreo");
        cy.getCookie("CrazyCookie").should("not.exist");
        cy.getCookie("CrazyCookie").should("have.property", "value", "Oreo");
    });
});
