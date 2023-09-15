describe('handling file upload', () => {
    it("single file upload", () => {
        cy.visit('')
        cy.get('').attachFile('test.pdf')
    
    })

    it('file upload-rename', () => {
        cy.visit('')
        y.get('').attachFile({filePath:'test.pdf', fileName:'myfile.pdf'})
        cy.get('').should('have.text', '')
        
    })

    it('multiple file upload', () => {
        cy.visit('')
        cy.get('').attachFile(['test1.pdf', 'test2.pdf'])

        cy.wait(5000)
    })

    it('fileupload- shadow dom', () => {
        cy.visit('')
        cy.get('', {includeShadowDom:true}).attachFile('')
        cy.get('', {includeShadowDom:true}).contains('')
    })
})