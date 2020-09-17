const testData = require('../support/registrationData.json');
const accountsData = testData['accounts'];

describe('Automation Practice Test', function() {
  before(() => {          
    cy.viewport(1200, 1500);
    cy.fixture("rnd_fixture").then(
      data => {
        cy.visit(data.create_account)
      });
})

  describe('Create new account', () => {
    accountsData.forEach(account => {
      Object.entries(account).forEach(([key, parameters]) => {
        it('Registrate a new account as ${key}', ()=>{
          cy.createAccount('rnd_test11@qa_test.com');
          cy.fillRegistrationPage(parameters);
          
          cy.get('.logout').should('be.visible');
          cy.get('.account').should('be.visible');
        });
      });
    });
  });
})
