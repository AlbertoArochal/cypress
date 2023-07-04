// describe("debugging utilities with cypress", () => {
//     it("cy.log", () => {
//         cy.visit("https://the-internet.herokuapp.com/login");
//         cy.log("I am in the login page");
//         cy.get("#username").type("tomsmith").pause();
//         cy.log("I typed the username");
//         cy.get("#password").type("SuperSecretPassword!").pause();
//         cy.log("Click in the login button");
//         cy.get("form").contains("Login").click();
//         cy.url().should("contain", "/secure");
//     });
// });

it("debugging utilities with cypress", () => {
    cy.visit("https://the-internet.herokuapp.com/login");
    cy.get("#username").type("tomsmith");
    cy.get("#password").debug().type("SuperSecretPassword!");
});
