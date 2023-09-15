import { LoginUser } from "../../PageObjects/Login"

describe('Login new user', () => {
    it('should visit the site', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com')
    })

    it('login with credentials', () => {
        LoginUser.loginNewUser('Admin', 'admin123')

    })

    it('successful login',() => {
        LoginUser.successfulLogin()
    })

})
