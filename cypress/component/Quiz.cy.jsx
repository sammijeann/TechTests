

import Quiz from "../../client/src/components/Quiz";

describe('Quiz Component Suite', ()=> {
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
        cy.mount(<Quiz />);
        cy.contains('Start Quiz').should('be.visible');
    });
    
    // it('should fetch and display questions after starting the quiz', () => {
    //     cy.mount(<Quiz />);
    //     cy.contains('Start Quiz').click();
    //     cy.wait('@getRandomQuestions');
    //     cy.get('h2').should('exist'); // Check if the question is displayed
    // });
    
    // it('should handle answering a question correctly', () => {
    //     cy.mount(<Quiz />);
    //     cy.contains('Start Quiz').click();
    //     cy.wait('@getRandomQuestions');
    //     cy.get('button').contains('1').click(); // Simulate clicking the first answer
    //     cy.get('h2').should('exist'); // Ensure the next question is displayed
    // });
    
    // it('should display the score after completing the quiz', () => {
    //     cy.mount(<Quiz />);
    //     cy.contains('Start Quiz').click();
    //     cy.wait('@getRandomQuestions');
    
    //     // Simulate answering all questions
    //     cy.get('button').each((button) => {
    //       cy.wrap(button).click();
    //     });
    
    //     cy.contains('Quiz Completed').should('be.visible');
    //     cy.contains('Your score:').should('be.visible');
    // });

});