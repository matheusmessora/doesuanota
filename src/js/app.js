var APP = (function () {

    function bindSendButton() {

        function doParticipate(e) {
            e.preventDefault();

            var email = $("#i-email-value").val();

            if (strings.isBlank(email)) {
                view.markError("email-value", "E-mail inválido");
            } else {
                participant.send(email, function(err){
                    if(err){
                        view.markError("email-value", err);
                    }
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
