class CartPage{
    verifyProductInCart(productTitle){
        cy.get('#cart_title');
        cy.get('.cart_item.first_item .product-name > a').text().should('contain', productTitle);
    }

    proceedToCheckout(){
        cy.get('.cart_navigation > .button').click();
    }

    submit(){
        cy.get('[type="submit"]').click();
    }
}
export default CartPage;