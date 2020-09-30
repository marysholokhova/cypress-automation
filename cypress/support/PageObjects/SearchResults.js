class SearchResults{
    verifyResults(productName){
        cy.url().should('include', `search_query=${productName}`);
        cy.get('.lighter').invoke('text').should('include', productName);
    }

    addProductToCart(productName){
        cy.get('.product_list > :nth-child(1) .ajax_add_to_cart_button').click();
        cy.get('.layer_cart_product > h2').invoke('text').should('include', "Product successfully added to your shopping cart");
        cy.get('.button-container > .button-medium > span').click();
    }

    getFirstResultTitle(){
        return cy.get('.product_list > :nth-child(1) a.product-name').text({ whitespace: 'simplify' });
    }

}
export default SearchResults;