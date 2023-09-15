describe("handling tabs", () => {
    it('approach 1', () => {
        cy.visit('') //parent tab
        cy.get('').invoke('removeAttr', 'target').click() // remove attribute target
        cy.url().should('include', '')

        cy.wait(5000);

        cy.go('back'); // go back to parent tab
    })

    it('approach 2', () => {
        cy.visit('') //parent tab
        
        cy.get('').then((e) => {
            let url=e.prop('href');
            cy.visit(url)
        })
        cy.url().should('include', '')

        cy.wait(5000);

        cy.go('back'); // go back to parent tab
    })
})