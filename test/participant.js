QUnit.module( "participate group" );
QUnit.test( "Should return callback without err on success ajax", function( assert ) {

    $.ajax = function(options) {
        assert.equal(options.url, "http://api.doesuanota.com.br/participant");
        assert.equal(options.type, "POST");
        assert.deepEqual(options.data, {
            email: "a"
        });
        options.success({});
    };

    participate.send("a", function(err) {
        assert.ok(err === undefined);
    });
});

QUnit.test( "Should return callback with ERR on failed ajax", function( assert ) {

    $.ajax = function(options) {
        assert.equal(options.url, "http://api.doesuanota.com.br/participant");
        assert.equal(options.type, "POST");
        assert.deepEqual(options.data, {
            email: "a"
        });
        options.error({});
    };

    participate.send("a", function(err) {
        assert.equal(err, 'Falha ao enviar email a para participar');
    });
});