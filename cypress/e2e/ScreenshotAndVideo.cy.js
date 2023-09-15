describe('test failure', () => {
    it('capture video and screenshot', () => {
        cy.visit('https://demo.opencart.com/')
        cy.title().should('eq', 'welcome')
    })
})