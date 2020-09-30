class LoginForm{
    login(email, password){
        cy.get('#login_form');
        cy.get('#email').clear().type(email);
        cy.get('#passwd').clear().type(password);
        cy.get('#SubmitLogin').click();
    }
}
export default LoginForm;