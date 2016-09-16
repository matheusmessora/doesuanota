QUnit.module( "APP.view group" );
QUnit.test( "Should add message inside divElement", function( assert ) {

    var field = "email-value";

    view.markError(field, "expected");

    var actual = $("#e-" + field).html();
    assert.equal(actual, "expected");
});
