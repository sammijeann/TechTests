
describe('Quiz E2E Suite', ()=> {
    beforeEach(()=> {
        cy.visit('/')
    })

    it('visits the home page', () => {
        cy.visit('http://localhost:3001')

    })

    it('should allow you to take the quiz and open to quiz completed page', () => {
        cy.get('button').click();

        //check question
        cy.get('h2').should('be.visible');
        
        //click through quiz
        for(let i=0; i<21; i++){
            cy.get('button').first().click();
        }

        // check completed page
        cy.contains('Quiz Completed').should('be.visible');
        cy.contains('Your score').should('be.visible');
        cy.contains('Take New Quiz').should('be.visible');
    })

    it('should allow you to click the Take New Quiz button and start a new quiz', () => {
        cy.get('button').click();

        //check question
        cy.get('h2').should('be.visible');
        
        //check answer visibility 
        cy.get('.btn.btn-primary').should('have.length', 4); 
        cy.get('.alert.alert-secondary').each(($el) => {
        cy.wrap($el).should('be.visible');
        }); 

    })
})