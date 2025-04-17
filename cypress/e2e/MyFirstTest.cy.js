describe('My First Test',() =>{
    it('LogsIn',()=> {
        cy.visit('')
        cy.get('input[name="email"]').clear()
        cy.get('input[name="email"]').type('autobotuatA@gmail.com')
        cy.get('input[name="password"]').clear()
        cy.get('input[name="password"]').type('Test@1234')
        cy.get('.mui-z9exsg').click()


    } )
})
