module.exports = {
  ''(browser) {
    browser
      .url('')
      .waitForElementVisible('#identifierId')
      .setValue('#identifierId', 'test.task.in.tests@gmail.com')
      .click('#identifierNext')
      .waitForElementVisible('input[name="password"]')
      .setValue('input[name="password"]', 'test2354')
      .click('#passwordNext')
  }
}