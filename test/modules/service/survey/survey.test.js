QUnit.module( "survey group" );
QUnit.test( "Should execute callback without err on success GET request", function( assert ) {
    CONFIG = {
        apiDomain: "http://api.doesuanota.com.br"
    };

    $.ajax = function(options) {
        assert.equal(options.url, "http://api.doesuanota.com.br/surveys/123456");
        assert.equal(options.type, "GET");
        options.success({});
    };

    SURVEY.get("123456", function(err) {
        assert.ok(err === undefined);
    });
});

QUnit.test( "Should execute callback without err on success POST request", function( assert ) {
    CONFIG = {
        apiDomain: "http://api.doesuanota.com.br"
    };
    $.ajax = function(options) {
        assert.equal(options.url, "http://api.doesuanota.com.br/surveys/123456/answers");
        assert.equal(options.type, "POST");
        assert.deepEqual(options.data, JSON.stringify([{
            answer: "Adorei!"
        }]));
        options.success({});
    };

    SURVEY.post("123456", [{
        answer: "Adorei!"
    }], function(err) {
        assert.ok(err === undefined);

    });
});

QUnit.test( "Should execute callback with ERR on 404 GET request", function( assert ) {
    CONFIG = {
        apiDomain: "http://api.doesuanota.com.br"
    };
    $.ajax = function(options) {
        assert.equal(options.url, "http://api.doesuanota.com.br/surveys/123456");
        assert.equal(options.type, "GET");
        options.error({
            responseJSON: {
                error: "Invalid token",
                code: "invalid-token"
            }
        });
    };

    SURVEY.get("123456", function(err) {
        assert.equal(err, 'Token inválido');
    });
});
