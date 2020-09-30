class Payment{
    selectPayByCard(){
        cy.get('.bankwire').click();
    }
}
export default Payment;