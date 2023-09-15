describe("Checking UI elements", () => {
    it("checking radio buttons", () => {
        cy.visit("https://demo.nopcommerce.com/")

        cy.get("a.ico-register").click()
        cy.get("div[class='page-title'] h1").should("have.text", "Register")

        cy.get("#gender-male").should("be.visible")
        cy.get("#gender-female").should("be.visible")

        cy.get("#gender-male").check().should("be.checked")
        cy.get("#gender-female").should("not.be.checked")

        cy.get("#gender-female").check().should("be.checked")
        cy.get("#gender-male").should("not.be.checked")
        
    })
})