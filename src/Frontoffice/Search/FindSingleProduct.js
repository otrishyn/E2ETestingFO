module.exports = {
  'Find product' : function (browser) {
    browser
    .url('https://www.futurumshop.nl')
    .waitForElementVisible('body', 1000)
    .setValue('#fc_search', 'futurum essentials bidon 500cc transparant')
    .click('button.searchButton')
  },

  'Go to product page' : function (browser) {
    browser
    .click('.productCards > .cardContainer > .productCard .productImage > .image > a')
    .pause(2000)
    .assert.containsText('#productomschrijving', 'PRODUCTOMSCHRIJVING')
    .end();
  }
};