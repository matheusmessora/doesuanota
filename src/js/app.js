var APP = (function () {

    function bindSendButton() {

        function doParticipate(e) {
            e.preventDefault();

            var email = $("#i-email-value").val();

            if (strings.isBlank(email)) {
                view.markError("email-value", "E-mail inválido");
            } else {
                participate.send(email);
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
