QUnit.module( "strings group" );
QUnit.test( "Should return true when blank string", function( assert ) {

    assert.ok(strings.isBlank(""));
});

QUnit.test( "Should return true when null", function( assert ) {

    assert.ok(strings.isBlank(null));
});

QUnit.test( "Should return true when undefined", function( assert ) {

    assert.ok(strings.isBlank(undefined));
});

QUnit.test( "Should return false when contains string", function( assert ) {

    assert.notOk(strings.isBlank("a"));
});