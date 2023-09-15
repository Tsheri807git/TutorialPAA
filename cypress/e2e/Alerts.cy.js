describe("Alert", () => {
    it.skip('Js Alerts', () => { // skip this it block
        cy.visit('/')
        cy.get('').click()

        cy.on('window:alert', (t) => {
            expect(t).to.contains('');
        }) 
        
        cy.get('').should('have.text', '')
    })

    it.only('Js confirmation Alerts', () => { // runs only this it block
        cy.visit('/')
        cy.get('').click()

        cy.on('window:confirm', (t) => {
            expect(t).to.contains('');
        }) 

         cy.on('window:confirm', ()=> false); //close alert window using cancel button
        
        cy.get('').should('have.text', '')
    })

    it('Js prompt Alerts', () => {
        cy.visit('/')

        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('Welcome');
        })

        cy.on('wondow:confirm', () => false);
        cy.get('').click()
        cy.get('').should('have.text', '')

    })

    it("Js authenticated alerts", () => {
    
    })
})