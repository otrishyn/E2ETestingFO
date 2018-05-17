module.exports = {
  'Add product to cart': function (browser) {
    browser
    .url('https://www.futurumshop.nl/futurum-natural-chamois-cream.phtml')
    .click('div.productContainer > div.mainDetails > div.productSpecs > div.buttonContainer')
    .pause(1000)
    .waitForElementVisible('#showModal_cart', 1000)
    .click('#showModal_cart .modalClose')
  },

  'Go to cart default page' : function (browser) {
    browser
    .click('.bottomBar .cart > a')
    .waitForElementVisible('.checkoutContainer', 1000)
    .assert.containsText('.checkoutContainer .checkoutHeader .title > h2', 'WINKELWAGEN')
  },

  'Go to login page': function (browser) {
    browser
    .click('#next-step button.order')
    .assert.urlContains('cart/chooseAccount')
    .setValue('form#loginAccountForm input[name=userName]', 'alexey_trishin@bintime.com')
    .setValue('form#loginAccountForm input[name=password]', 'q1w2e3r4')
    .click('#loginAccountForm > button')
    .waitForElementVisible('.checkoutContainer', 1000)
    .assert.containsText('#shippingMethod > div.title > h2', 'HOE WIL JE JE BESTELLING ONTVANGEN?')
    .end()
  }
};