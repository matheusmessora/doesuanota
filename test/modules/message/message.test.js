QUnit.module( "message group" );
QUnit.test( "Should return valeu from message bundle", function( assert ) {

    var result = MESSAGE.get("invalid-token");

    assert.equal(result, 'Token inválido');
});

QUnit.test( "Should return empty when key not found", function( assert ) {

    var result = MESSAGE.get("");

    assert.equal(result, '');
});
