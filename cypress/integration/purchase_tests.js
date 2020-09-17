describe("Test the search functionality", () => {
  before(() => {
    cy.fixture("rnd_fixture").then(
      data => {
        cy.visit(data.main_url);
      });
  });

  it('Check for product details and price', () => {
      cy.contains('Faded Short Sleeve T-shirts')
      cy.contains('Model')
      cy.contains('demo_1')
      cy.contains('Condition')
      cy.contains('New')
      cy.contains("Faded short sleeve t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!")
      cy.contains('$16.51');
      cy.contains('Quantity');

      cy.get('input#quantity_wanted').as('qty');
      cy.get('@qty').should('have.value', '1');

      cy.get('a.button-plus').click();
      cy.get('@qty').should('have.value', '2');

      cy.get('a.button-minus').click();
      cy.get('@qty').should('have.value', '1');
  });
});