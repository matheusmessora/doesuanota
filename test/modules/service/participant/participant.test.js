QUnit.module( "participate group" );
QUnit.test( "Should return callback without err on success ajax", function( assert ) {

    CONFIG = {
        apiDomain: "http://api.doesuanota.com.br"
    };

    $.ajax = function(options) {
        assert.equal(options.url, "http://api.doesuanota.com.br/participants");
        assert.equal(options.type, "POST");
        assert.deepEqual(options.data, JSON.stringify({
            email: "a"
        }));
        options.success({});
    };

    participant.send("a", function(err) {
        assert.ok(err === undefined);
    });
});

QUnit.test( "Should return callback with ERR on failed ajax", function( assert ) {

    CONFIG = {
        apiDomain: "http://api.doesuanota.com.br"
    };
    $.ajax = function(options) {
        assert.equal(options.url, "http://api.doesuanota.com.br/participants");
        assert.equal(options.type, "POST");
        assert.deepEqual(options.data, JSON.stringify({
            email: "a"
        }));
        options.error({});
    };

    participant.send("a", function(err) {
        assert.equal(err, 'Falha ao enviar email a');
    });
});
