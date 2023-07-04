describe("home de www.freerangetesters.com", () => {
    beforeEach(() => {
        cy.visit("https://www.freerangetesters.com/");
    });
    it("The title should include free range testers", () => {
        cy.title().should("include", "Free Range Testers");
    });
    it("should navigate to other section when I click on it", () => {
        cy.get(
            '#comp-krjarw4p > [data-testid="linkElement"] > .M3I7Z2'
        ).click();
    });
    it("should have a Cursos button that should navigate to the cursos section", () => {
        cy.xpath('//*[@id="comp-l02x1m8d1label"]').click();
        cy.url().should("include", "/cursos");
        cy.contains("Test Engineering");
    });
    it("should have 12 elements in the cursos page", () => {
        cy.xpath('//*[@id="comp-l02x1m8d1label"]').click();
        cy.get('[data-testid="linkElement"] > .M3I7Z2').as("BotonEmpezar");
        cy.get("@BotonEmpezar").should("have.length", 12);
    });
    it("title in Conocenos section should have class color_15 wixui-rich-text__text", () => {
        cy.get("#comp-l02x1m8d5label").click();
        cy.get(
            '[style="font-size:32px;"] > [style="font-family:lulo-clean-w01-one-bold,lulo-clean-w05-one-bold,sans-serif;"] > [style="letter-spacing:normal;"] > .color_15'
        ).should("have.class", "color_15 wixui-rich-text__text");
    });
    it("the search bar in the Podcast section should have the placeholder 'Buscar podcast...'", () => {
        cy.get("#comp-l02x1m8d5label").click();
        cy.xpath('//*[@id="comp-krnkyjdk"]/h2/span/span/span/span', {
            timeout: 6000,
        }).should("have.text", "Los valores de la comunidad");
    });
    it("using find command", () => {
        cy.get("").should("be.checked");
        cy.get("#form").find('[type="checkbox"]').should("be.checked");
    });
});
