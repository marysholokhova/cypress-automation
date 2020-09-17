class CreateAccountForm{
    
    fillEmailField(email){
        cy.get('#email_create').type(email);
    }
    
    submit(){
        cy.get('#SubmitCreate').click();
    } 
    
}

export default CreateAccountForm