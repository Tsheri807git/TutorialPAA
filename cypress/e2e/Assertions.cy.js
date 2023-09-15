

describe("Assertion Demo", () => {
    it("implicit assertions", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        // should and
        // cy.url().should('include', 'orangehrmlive.com')
        // .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // .should('contain', 'orangehrm')

         cy.url().should('include', 'orangehrmlive.com')
        .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain', 'orangehrm')

        cy.title().should('include', 'Orange')
        .and('eq', 'OrangeHRM')
        .and('contain', 'HRM')

        cy.get('.orangehrm-login-branding > img').should('be.visible')
        .and('exist')


        cy.get("input[name='username']").type("Admin")
        .should('have.value', 'Admin')

    })

    it("Explicit assertions", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("input[name='username']").type("Admin")
        cy.get("input[name='password']").type("admin123")
        cy.get("button[type='submit']").click()

        let expName = "Ravindra Narwade Collings";
         cy.get(".oxd-userdropdown-name").then( (x) =>{
            let actName = x.text()
            expect(actName).to.equal(expName)
            expect(actName).to.not.equal(expName)

            assert.equal(actName, expName)
            assert.notequal(actName, expName)
         })
    })
})