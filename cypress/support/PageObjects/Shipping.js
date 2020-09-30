class Shipping{
    agreeToC(){
        cy.get('#cgv').check();
    }
}
export default Shipping;