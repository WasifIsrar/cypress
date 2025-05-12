describe('My First Test',() =>{
    it('LogsIn',()=> {
        cy.visit('https://dashboard.internal.dev.aioapp.com/')
        cy.get('input[name="email"]').clear()
        cy.get('input[name="email"]').type('autobotuatA@gmail.com')
        cy.get('input[name="password"]').clear()
        cy.get('input[name="password"]').type('Test@1234')
        cy.get('.mui-z9esg').click()


    } )
})
