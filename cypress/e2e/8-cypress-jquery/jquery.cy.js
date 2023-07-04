describe("cypress + jquery", () => {

    it("making an operation with jquery synchronous and asynchronous calls", () => {
        const element = $('selector');

        if(element.length > 0) {
            element.click();
        }

        cy.get('selector').then(element => {
            if(element.length > 0) {
                element.click();
            }
        };
    });
});

