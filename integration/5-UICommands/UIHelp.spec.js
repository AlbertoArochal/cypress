describe("UI tests", () => {
    beforeEach(() => {
        cy.visit("https://the-internet.herokuapp.com/");
    });
    it("wait example", () => {
        cy.wait(1000);
        cy.contains("Challenging DOM").click();
    });
    it("should open a new window and validate the content", () => {
        cy.contains("Multiple Windows").click();
        cy.contains("Opening a new window");
        cy.get(".example > a").invoke("removeAttr", "target").click();
        cy.contains("New Window");
    });
    it("Shadow DOM", () => {
        cy.contains("Shadow DOM").click();
        cy.get("#content > :nth-child(2)")
            .shadow()
            .should("have.text", "In a List");
    });
    it("should find first and last element", () => {
        cy.contains("Dynamic Content").click();
        cy.get("img").first().should("be.visible");
        cy.get("img").last().should("be.visible");
        cy.get("img").eq(2).should("be.visible");
    });
    it("parents and children", () => {
        cy.contains("Dynamic Content").click();
        cy.get(":nth-child(4) > .large-2 > img").parent();
        cy.get("example > :nth-child(7)").children();
    });
    it("Invoke command", () => {
        cy.contains("Dynamic Content")
            .should("be.hidden")
            .invoke("show")
            .should("be.visible");
    });
});
