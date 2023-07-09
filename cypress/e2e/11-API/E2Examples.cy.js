describe("login - Basic Auth and Auth with forms", () => {
    beforeEach(() => {
        cy.task("db:teardown"); // reset the database
        cy.task("db:seeding"); // seed the database
    });
});
