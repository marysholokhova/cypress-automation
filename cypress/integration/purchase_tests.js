import testData from '../support/purchaseData.json';
import SearchPanel from '../support/PageObjects/SearchPanel'
const productsData = testData['products'];

describe("Purchase Tests", () => {
  beforeEach(() => {
    cy.fixture("rnd_fixture").then(
      data => {
        cy.visit(data.main_url);
      });
  });

  describe('Buy a product', () => {
    productsData.forEach(product => {
      var searchPanel = new SearchPanel();
      Object.entries(product).forEach(([key, parameters]) => {
        it(`Purchase ${key}`, () => {
          searchPanel.searchItem(key);
          cy.url().should('include', `search_query=${key}`);
          cy.get('.lighter').invoke('text').should('include', key);
          let product_title = cy.get('.product-container:first-of-type .product-name').invoke('text');
          cy.get('ul.product_list.grid > li .product-container .ajax_add_to_cart_button:first-of-type').click();
          cy.get('.layer_cart_product > h2').should('include', "Product successfully added to your shopping cart");
          cy.get('.button-container > .button-medium > span').click();
          cy.get('#cart_title');
          cy.get('.cart_description > .product-name').should('include', product_title);
        });
      });
    });
  });
});
