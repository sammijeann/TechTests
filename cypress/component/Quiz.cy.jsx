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
        cy.mount(<Quiz />);
        cy.contains('Start Quiz').should('be.visible');
    });
    
    it('should start the quiz and display the first question', () => {
        
        cy.mount(<Quiz />);
        cy.get('button').contains('Start Quiz').click();

        cy.get('h2').should('be.visible');
        cy.get('h2').contains('What is the output of print(2 ** 3)?');
    })

});