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
            cy.getCookies().should("have.length", 5);
        });
    });
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
