

describe('login component', function(){
    it('validate', function(){
        expect(true).to.equal(true)
    })
    it('successfully able to log in.', function(){
        cy.visit('http://localhost:8080/#/')
        cy.get('input[id="email"]').type('admin@admin.com')
        cy.get('input[id="password"]').type('SuperHeavyPassword')
        cy.get('#loginbutton').click()
        cy.get('.WarningText').should('not.be.visible')
        // cy.url().should('include', '/commands/actions')
        // cy.get('.action-email')
        // .type('fake@email.com')
        // .should('have.value', "fake@email.com")
    }) 
    it('failing to login due to wrong credentials.', function(){
        cy.visit('http://localhost:8080/#/')
        cy.get('input[id="email"]').type('Wrong@credentials.com')
        cy.get('input[id="password"]').type('blub')
        cy.get('#loginbutton').click()
        cy.get(".WarningText").should('be.visible')
    })
})