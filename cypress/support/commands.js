// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import CreateAccountForm from './PageObjects/CreateAccountForm'
import RegistrationPage from './PageObjects/RegistrationPage' 


//Log in to user account
Cypress.Commands.add('createAccount', (email) => {
    //generate random sign in id
    var createAccountForm = new CreateAccountForm();
    createAccountForm.fillEmailField(email)
    cy.screenshot('#email_create', {padding: 2});
    createAccountForm.submit();
})

//Log in to user account
Cypress.Commands.add('fillRegistrationPage', (parameters) => {
    var registrationPage = new RegistrationPage();
    registrationPage.selectGender(parameters['gender']);
    registrationPage.inputFirstname(parameters['firstname']);
    registrationPage.inputLastname(parameters['lastname']);
    registrationPage.inputPassword(parameters['password']);
    cy.screenshot( {blackout: ['#passwd']});
    registrationPage.selectDayOfBIrth(parameters['dayOfBIrth']);
    registrationPage.selectMonthOfBIrth(parameters['monthOfBIrth']);
    registrationPage.selectYearOfBIrth(parameters['yearOfBIrth']);
    registrationPage.inputAddressOne(parameters['addressOne']);
    registrationPage.inputCity(parameters['city']);
    registrationPage.inputPostcode(parameters['postcode']);
    registrationPage.selectCountry(parameters['country']);//replace with letters
    registrationPage.selectState(parameters['state']);
    registrationPage.inputMobilePhone(parameters['mobilePhone']);
    cy.screenshot("fill_registration_page", ['#passwd']);
    registrationPage.submitRegistation();
})