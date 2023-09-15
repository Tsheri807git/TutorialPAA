export class LoginUser {
    static loginNewUser(userName, password) {
        cy.get("input[placeholder='Username']").type(userName)
        cy.get("input[placeholder='Password']").type(password)
    }

    static successfulLogin(){
        cy.get("button[type='submit']").click()
        cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text', 'Dashboard')
    }
}