import Quiz from "../../client/src/components/Quiz";

describe('Quiz Component Suite', ()=> {
    //tutoring with Benicio
    beforeEach(()=> {
        cy.intercept({
            method: 'GET',
            url: '/api/questions/random'
        }, 
        {
            fixture: 'questions.json',
            statusCode: 200
        }).as('getRandomQuestions')
    });
    
    it('should render the start button initially', () => {
        //check start quiz button
        cy.mount(<Quiz />);
        cy.contains('Start Quiz').should('be.visible');
    });
    
    it('should start the quiz and display the first question', () => {
        //start quiz
        cy.mount(<Quiz />);
        cy.get('button').contains('Start Quiz').click();

        // display question
        cy.get('h2').should('be.visible');
        cy.get('h2').contains('What is the output of print(2 ** 3)?');
    
        // display answers
        cy.get('.btn.btn-primary').should('have.length', 4); 
        cy.get('.alert.alert-secondary').each(($el) => {
        cy.wrap($el).should('be.visible');
        }); 
    })

    it('should display a finish screen when all questions are answered', () => {
        cy.mount(<Quiz />);

        //click through the quiz answers
        for(let i=0; i<21; i++){
            cy.get('.btn.btn-primary').first().click({multiple:true});
        }
        
        //check title and button for quiz complete page
        cy.get('h2').contains('Quiz Completed').should('be.visible');
        cy.get('button').should('be.visible');
    })

    it('should bring up a new quiz page when the Take New Quiz button is pressed', () => {
        cy.mount(<Quiz />);

        //start a new quiz
        cy.get('button').click();

         // display question
         cy.get('h2').should('be.visible');
         cy.get('h2').contains('What is the output of print(2 ** 3)?');
     
         // display answers
         cy.get('.btn.btn-primary').should('have.length', 4); 
         cy.get('.alert.alert-secondary').each(($el) => {
         cy.wrap($el).should('be.visible');
         }); 

    })

});