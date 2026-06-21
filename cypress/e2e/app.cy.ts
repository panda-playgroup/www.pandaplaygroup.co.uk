describe("app", () => {
    it("renders with a heading", () => {
        cy.visit("/");

        cy.findByRole("banner").findByRole("heading", { name: "Panda Preschool Playgroup" }).should("exist");
    });

    it("renders the homepage content", () => {
        cy.visit("/");

        cy.findByRole("heading", { name: "Our preschool for little Pandas" });
    });
});
