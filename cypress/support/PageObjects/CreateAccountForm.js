class CreateAccountForm{
    
    fillEmailField(email){
        cy.get('#email_create').clear().type(email);
    }
    
    submit(){
        cy.get('#SubmitCreate').click();
    } 
    
}

export default CreateAccountForm