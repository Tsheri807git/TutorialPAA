describe('CSSLocator', () =>{
    it('csslocator', () => {
        cy.visit("https://magento.softwaretestingboard.com/")

        cy.get(".input-text[name='q']").type("Pants")
        cy.get("[title='Search']").click()
        cy.get(".base").contains("Search results for: 'Pants'")
    })
})