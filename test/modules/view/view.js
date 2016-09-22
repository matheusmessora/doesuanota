QUnit.module( "APP.view group" );
QUnit.test( "Should add message inside divElement", function( assert ) {

    var field = "email-value";

    VIEW.markError(field, "expected");

    var actual = $("#e-" + field).html();
    assert.equal(actual, "expected");
});

QUnit.test( "Should redirect to homepage", function( assert ) {

    var mockWindow = {};
    VIEW.goToHomepage(mockWindow);

    assert.ok(mockWindow.location, "http://www.doesuanota.com.br/")
});
QUnit.test( "Should redirect to thank you page", function( assert ) {

    var mockWindow = {};
    VIEW.goToHomepage(mockWindow);

    assert.ok(mockWindow.location, "http://www.doesuanota.com.br/thank-you")
});
