const testData = require("../../fixtures/testData.json");

testData.forEach((testData) => {
    describe("The title is correct for each subpage", () => {
        it("The title is correct", () => {
            cy.intercept("GET", {
                statusCode: 500,
                body: {
                    name: "Internal Server Error",
                },
            });
        });
        cy.visit(testData.Location);
        cy.title().should("include", testData.Title);
    });

    it.only("mocking a get request and returning fake response", () => {
        const mockResponse = [
            {
                userId: 1,
                id: 1,
                title: "I don't want to set the world on fire",
                body: "I just want to start a flame in your heart",
            },
            {
                userId: 2,
                id: 2,
                title: "bingo, bango, bongo",
                body: "I'm so happy in the jungle, I refuse to go",
            },
        ];

        cy.intercept("GET", "https://jsonplaceholder.typicode.com/posts", {
            statusCode: 200,
            body: mockResponse,
        }).as("getPosts");
        cy.visit("https://jsonplaceholder.typicode.com/posts");
        cy.get(
            "body > div > main > table:nth-child(2) > tbody > tr:nth-child(1) > td:nth-child(2)"
        ).click();
        cy.wait("@getPosts");
        cy.get(".post-title").should(
            "contain",
            "I don't want to set the world on fire"
        );
        cy.get(".post-body").should(
            "contain",
            "I just want to start a flame in your heart"
        );
        cy.get(".post-title").should("contain", "bingo, bango, bongo");
        cy.get(".post-body").should(
            "contain",
            "I'm so happy in the jungle, I refuse to go"
        );
    });
});
