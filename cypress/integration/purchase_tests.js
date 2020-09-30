import testData from '../support/purchaseData.json';
import CartPage from '../support/PageObjects/CartPage'
import SearchPanel from '../support/PageObjects/SearchPanel'
import SearchResults from '../support/PageObjects/SearchResults'
import Address from '../support/PageObjects/Address';
import Payment from '../support/PageObjects/Payment';
import Shipping from '../support/PageObjects/Shipping';
const productsData = testData['products'];

describe("Purchase Tests", () => {
  beforeEach(() => {
    cy.fixture("rnd_fixture").then(
      data => {
        cy.visit(data.main_url);
      });
  });

  describe('Buy a product', () => {
    let address = new Address();
    let cart = new CartPage();
    let payment = new Payment();
    let searchPanel = new SearchPanel();
    let searchResults = new SearchResults();
    let shipping = new Shipping();
    productsData.forEach(productName => {
        it(`Purchase ${productName}`, () => {
          searchPanel.searchItem(productName);
          searchResults.verifyResults(productName);
          let productTitle = searchResults.getFirstResultTitle().toString();
          searchResults.addProductToCart(productTitle);
          cart.verifyProductInCart(productName);
          cart.proceedToCheckout();
          cy.login("rnd_test11@qa_test.com", "randtest1245");
          address.checkUseAdressAsBilling();
          cart.proceedToCheckout();
          shipping.agreeToC();
          cart.proceedToCheckout();
          payment.selectPayByCard();
          cy.get('.page-heading').invoke('text').should('contain', "Order summary");
          cart.proceedToCheckout();
          cy.get('.page-heading').invoke('text').should('contain', "Order confirmation");
          cy.get('.cheque-indent').invoke('text').should('contain', "Your order on My Store is complete");
        });
      });
  });
});
