describe("Handling mouse events", () => {
    it('mousehover', () => {
        cy.visit('https://demo.opencart.com/')

        cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)")
        .should('not.be.visible')

        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()

        cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)")
        .should('be.visible')
    })

    it('right click mouse', () => {
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
        // approach 1
        // cy.get(".context-menu-one.btn.btn-neutral").trigger('contextmenu')

        // cy.get('.context-menu-icon-copy > span').should('be.visible')

        // appraoch 2
        cy.get(".context-menu-one.btn.btn-neutral").rightclick()
        cy.get('.context-menu-icon-copy > span').should('be.visible')

    })

    it('double click', () => {
        cy.visit('')
        cy.frameLoaded('')

        cy.iframe('').find('').trigger('dblclick')
        cy.iframe('').should('have.value', '')
    })

    it.only('scrolling with mouse', () => {
        cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html')

        cy.get(':nth-child(1) > tbody > :nth-child(22) > :nth-child(1) > img').scrollIntoView({duration:2000})
        cy.get(':nth-child(1) > tbody > :nth-child(22) > :nth-child(1) > img').should('be.visible')
    })
})