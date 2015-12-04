const WAIT = 1000;

module.exports = {
  'Test for component appears on the screen': function (browser) {
    browser
      .url('http://localhost:8080/')
      .waitForElementVisible('body', WAIT)
      .assert.containsText('body', 'Component')
      .end();
  }
};
