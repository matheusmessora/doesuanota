var INDEX = (function () {

    function bindSendButton() {

        function doParticipate(e) {
            e.preventDefault();

            var email = $("#i-email-value").val();

            if (strings.isBlank(email)) {
                VIEW.markError("email-value", "E-mail inválido");
            } else {
                participant.send(email, function(err){
                    if(err){
                        VIEW.markError("email-value", err);
                        return;
                    }

                    $("#participant-form-row").hide('fast');
                    $("#participant-registered-text").show('fast');
                });

            }
        }

        $('#participate').click(doParticipate);
    }


    function init() {
        bindSendButton();
    }

    return {
        init: init
    };
}());
