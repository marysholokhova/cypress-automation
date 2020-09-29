import dataUtils from '../support/utils/DataUtils';
import testData from '../support/registrationData.json';
import TopMenu from '../support/PageObjects/TopMenu'
const accountsData = testData['accounts'];

describe('Account Tests', function() {
  beforeEach(() => {          
    cy.viewport(1200, 1500);
    cy.fixture("rnd_fixture").then(
      data => {
        cy.visit(data.create_account)
      });
  });

  describe('Create new account', () => {
    accountsData.forEach(account => {
      var topMenu = new TopMenu();
      Object.entries(account).forEach(([key, parameters]) => {
        it(`Registrate a new account as ${key}`, ()=>{
          cy.createAccount(dataUtils.generateSignInId());
          cy.fillRegistrationPage(parameters);
          cy.url().should('include', 'my-account');          
          topMenu.logoutButton().should('be.visible');
          topMenu.accountTab().should('be.visible');
        });
      });
    });
  });
});
