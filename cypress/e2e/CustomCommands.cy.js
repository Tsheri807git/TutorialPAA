describe('Custom commands', () => {
    it ('handling links', () => {
        cy.visit('https://demo.nopcommerce.com/')

        cy.clickLink('Apple MacBook Pro 13-inch')
        cy.get("div[class='product-name'] h1").should('have.text', 'Apple MacBook Pro 13-inch')
    })

    it.only('over write existing commands', () => {
        cy.visit('/')

        cy.clickLink('APPLE MACBOOK PRO 13-INCH')
        cy.get("div[class='product-name'] h1").should('have.text', 'Apple MacBook Pro 13-inch')
    })

    it('login with custom commands', () => {
        cy.visit('/')
        cy.clickLink('Log in')
        cy.loginApp('test@gmail.com', 'test123')
        cy.get("div[class='topic-block-title'] h2").should('have.text', 'Welcome to our store')
    })
})