QUnit.module( "FEEDBACK group" );
QUnit.test( "Should redirect to homepage when bad id", function( assert ) {
    assert.expect(1);

    SURVEY = {
        get: function(id, callback){
            callback("invalid-token");
        }
    };


    VIEW = {
        goToHomepage: function () {
            assert.ok(true);
        },
        getUrlParameterByName: function () {
            return "123456"
        }
    };

    FEEDBACK.init();

});

QUnit.test( "Should redirect to homepage when id is null", function( assert ) {
    assert.expect(1);

    VIEW = {
        goToHomepage: function () {
            assert.ok(true);
        },
        getUrlParameterByName: function () {
            return null
        }
    };

    FEEDBACK.init();

});

QUnit.test( "Should call survey service when feedback is correctly answered", function( assert ) {

    SURVEY = {
        get: function (id, callback) {
            callback();
        },
        post: function (token, answers, callback) {
            assert.equal(token, "123456");
            assert.deepEqual(answers, [
                {
                    answer: "Adorei!"
                },
                {
                    answer: "1"
                }
            ]);
            callback();
        }
    };

    VIEW = {
        getUrlParameterByName: function () {
            return "123456"
        },
        goToSurveyThanks: function (){
            assert.ok(true)
        }
    };

    FEEDBACK.init();

    $("#i-question1-value").val("Adorei!");
    $("input[name=question2Radio]").prop('checked', true);


    assert.expect(3);
    $('#feedbackAction').click();

});
