describe("fixture login", () => {
  
    let userData;
    // before(() => {
    //     cy.fixture('orangehrm').then((data) => {
    //         userData = data;
    //     })
    
        it.only('Datadriven test', () => {
            cy.fixture('orangehrm2').then((data) => {
                cy.visit('https://opensource-demo.orangehrmlive.com')
    
                data.forEach((userData) => {
               
    
                if(userData.username==='Admin'&& userData.password==='admin123'){
                    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text', userData.expected)
                    
                    cy.get('.oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon').click()
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
                    
                }
                else{
                    cy.get('.oxd-alert-action').should('have.text', userData.expected)
                }
                })
            })
        })
    })

    // it.skip('login from fixture data', () => {
    //     cy.visit('https://opensource-demo.orangehrmlive.com')

    //         cy.get("input[placeholder='Tên đăng nhập']").type(userData.username)
    //         cy.get("input[placeholder='Mật khẩu']").type(userData.password)
    //         cy.get("button[type='submit']").click()

    //         cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text', userData.expected)

    

