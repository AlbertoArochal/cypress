describe("API testing with cypress", () => {
    it("should make an API call", () => {
        cy.request("https://pokeapi.co/api/v2/pokemon/25").then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property("name", "pikachu");
            expect(response.body).to.have.property("weight", 60);
        });
    });
    it("should make a post call", () => {
        cy.request("POST", "https://jsonplaceholder.typicode.com/posts", {
            userId: 1,
            title: "Cypress API testing",
            id: 101,
            body: "Cypress API testing is fun",
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property(
                "title",
                "Cypress API testing"
            );
        });
    });
});
