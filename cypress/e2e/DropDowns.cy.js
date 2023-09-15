describe("handling dropdowns", () => {
    it.skip("dopodown with select", () => {
        cy.visit('/')
        cy.get("a.ico-register").click()
        cy.get("div[class='page-title'] h1").should("have.text", "Register")
        cy.get("select[name='DateOfBirthMonth']").select('December').should('have.value', '12')
    })

    it.skip('dropdown with auto suggestions', () => {
        cy.visit('https://www.wikipedia.org/')
        cy.get('#searchInput').type('Delhi')
        cy.get('.suggestions-dropdown').contains('Delhi University').click()
    })

    it("dynamic dropdown", () => {
        cy.visit("https://www.google.com/")
        cy.get('#APjFqb').type('cypress automation')

        cy.wait(3000)
        cy.get('div.wM6W7d>span').should('have.length', 12)

        cy.get('div.wM6W7d>span').each(($el, index, $list) => {
            if($el.text()=='cypress automation tutorial'){
                cy.wrap($el).click()
            }
        })

        cy.get('#APjFqb').should('have.value', 'cypress automation tutorial')
    })
})