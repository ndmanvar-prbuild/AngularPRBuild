// spec.js
describe('AngularJS/Protractor Demo App', function() {
  it('should verify title', function() {
    browser.get('http://localhost:8000');

    var title = element(by.css('body h1'));

    expect(title.getText()).toEqual('Title');
  });
});