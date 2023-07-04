describe("UI tests", () => {
    beforeEach(() => {
        cy.visit("https://the-internet.herokuapp.com/");
    });
    it("click example", () => {
        cy.contains("Add/Remove Elements").click();
        cy.contains("Add Element").click();
        cy.contains("Delete").click();
    });
    it("writing test", () => {
        cy.contains("Form Authentication").click();
        cy.log("I am in the login page");
        cy.get("#username").type("tomsmith");
        cy.get("#password").type("SuperSecretPassword!");
        cy.get(".fa").click();
        cy.log("unlogin");
        cy.get(".button").click();
    });
    it("checkboxes test", () => {
        cy.contains("Checkboxes").click();
        cy.get("#checkboxes > :nth-child(1)").click();
        cy.get("#checkboxes > :nth-child(3)").click();
        cy.get("#checkboxes > :nth-child(1)").should("be.checked");
        cy.get("#checkboxes > :nth-child(3)").should("not.be.checked");
    });
    it("dropdown test", () => {
        cy.contains("Dropdown").click();
        cy.get("#dropdown").select("Option 1");
        cy.get("#dropdown").select("Option 2");
    });
    it("clear test", () => {
        cy.contains("Inputs").click();
        cy.get("input").type("Hello World");
        cy.get("input").clear();
    });
    it("hover test", () => {
        cy.contains("Hovers").click();
        cy.get(".figure").trigger("mouseover");
        cy.get(".figcaption").should("be.visible");
    });
    it("right click test", () => {
        cy.contains("Context Menu").click();
        cy.get("#hot-spot").rightclick();
        cy.on("window:alert", (alert) => {
            expect(alert).to.equal("You selected a context menu");
        });
        cy.get("#hot-spot").invoke("trigger", "contextmenu");
        cy.on("window:alert", (alert) => {
            expect(alert).to.equal("You selected a context menu");
        });
    });
    it("drag and drop test", () => {
        cy.contains("Drag and Drop").click();
        cy.get("#column-a").drag("#column-b");
        cy.get("#column-a").should("have.text", "B");
        cy.get("#column-b").should("have.text", "A");
    });
    it("iframe test", () => {
        cy.contains("Frames").click();
        cy.get("#mce_0_ifr").type("Hello World");
        cy.get("#mce_0_ifr").clear();
    });
});
