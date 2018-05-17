module.exports = {
  'Go to product page' : function (browser) {
    browser
    .url('https://www.futurumshop.nl/futurum-floor-pump-bayamo-black.phtml')
    .waitForElementVisible('#productomschrijving', 1000)
    .assert.containsText('#productomschrijving', 'PRODUCTOMSCHRIJVING')
  },

  'Add product to cart and check modal window': function (browser) {
    browser
      .click('div.productContainer > div.mainDetails > div.productSpecs > div.buttonContainer')
      .pause(1000)
      .waitForElementVisible('#showModal_cart', 1000)
  },

  'Close modal window and check cart quantity': function (browser) {
    browser
      .click('#showModal_cart .modalClose')
      .assert.containsText('.bottomBar .cart .quantity', '1')
      .end();
  }
};