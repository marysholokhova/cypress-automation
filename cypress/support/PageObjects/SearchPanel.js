class SearchPanel{
    searchItem(itemName){
        cy.get('#search_query_top').clear().type(itemName);
        cy.get('#searchbox > .btn').click();
    }
}
export default SearchPanel;