describe("handling iframes", () => {
    it.skip('approach 1', () => {
        cy.visit('')
        const iframes= cy.get('')
            .its('0.contenDocument.body')
            .should('be.visible')
            .then(cy.wrap);
            
            iframes.clear().type("welcome {Ctrl+a}");

            cy.get('').click()
    })

    it('approach2-using custom commands', () => {
        cy.visit('')
        cy.getIframe('').clear().type("welcome {Ctrl+a}");
        cy.get('').click()
    })

    it('approach3 - using cypress ifframe plugins', () => {
        cy.visit('')
        cy.frameLoaded('')
        cy.iframes.clear().type("welcome {Ctrl+a}");
        cy.get('').click()
    })
})