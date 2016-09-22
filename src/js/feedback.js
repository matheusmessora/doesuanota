var FEEDBACK = (function () {

    var token;

    function loadSurvey(){
        token = VIEW.getUrlParameterByName("id");
        if(!token){
            VIEW.goToHomepage()
            return;
        }

        SURVEY.get(token, function (err) {
            if(err) VIEW.goToHomepage()
        })
    }

    function bindSendButton() {

        function sendFeedback(e) {
            e.preventDefault();

            var question1Value = $("#i-question1-value").val();
            var question2Value = $("input[name=question2Radio]:checked").val();

            var hasError = false;
            if (strings.isBlank(question1Value)) {
                VIEW.markError("question1-value", "Campo obrigatório");
                hasError = true;
            }
            if(strings.isBlank(question2Value)) {
                VIEW.markError("question2-value", "Campo obrigatório");
                hasError = true;
            }

            if(!hasError){
                var answers = [
                    {
                        answer: question1Value
                    },
                    {
                        answer: question2Value
                    }
                ];
                SURVEY.post(token, answers, function (err){
                    if(err) {

                    } else {
                        VIEW.goToSurveyThanks();
                    }
                })
            }

        }

        $('#feedbackAction').click(sendFeedback);
    }


    function init() {
        loadSurvey();

        bindSendButton();
    }

    return {
        init: init
    };
}());
