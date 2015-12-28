// spec.js
describe('AngularJS/Protractor Demo App 2', function() {
  it('should verify title 2', function() {
    browser.get('http://localhost:8000');

    var title = element(by.css('body h1'));

    expect(title.getText()).toEqual('Title');
  });
});