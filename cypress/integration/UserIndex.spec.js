describe('Userindex component.', function(){
    let userId;
    it('validate', function(){
        expect(true).to.equal(true)
    })/*
    it('successfully create a user.', function(){
        login();
        cy.get("#adduser").click()
        cy.get('input[id="Name"]').type('Testing101')
        cy.get('input[id="Password"]').type('TestPW121')
        cy.get('input[id="Emailaddress"]').type('Testing@test.test')
        cy.get('#create').click()
        userId = cy.get('#table').last()
        console.log(userId)
    }) 

    it('succesfully add money to a user',function(){
        login();
        cy.get(".addMoney").last().click()
        cy.get('input[id="Amount"]').clear().type("7.50")
        cy.get("#submit").click(); 
    })*/

    it('succesfully remove money from a user', function(){
        login();
        //cy.get('md-table-cell').last().click(); 

        //Need to figure out how to test this, since i need to force the testing unit to select a bit of code that gets auto generated, so even I have no clue how I should make him address this. 

    })
    it('successfully edit a user.', function(){
        login();
        cy.get('.edit').last().click();
        cy.get('input[id="EmailAddress"]').type("UpdatedTesting101@test.test")
        cy.get('input[id="password"]').type("12341234")
        cy.get('input[id="Name"]').type("UpdatedTesting101")
        cy.get('.update').click();
    })
    
    it('successfully cancel a modal.', function(){
        login();

    })
    it('successfully cancel a modal by clicking outside of the box.',function(){
        login();
    })
/*
    it('successfully remove user.', function(){
        login();
        cy.get(".delete").last().click()
    })*/
})

function login(){
    cy.visit('http://localhost:8080/#/')
    cy.get('input[id="email"]').type('admin@admin.com')
    cy.get('input[id="password"]').type('SuperHeavyPassword')
    cy.get('#loginbutton').click()

}