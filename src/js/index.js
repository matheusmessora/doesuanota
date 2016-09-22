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

        function disableEnterButton(){
            $("#i-email-value").keyup(function(event){
                if(event.keyCode == 13){

                }
            });
        }

        $('#participate').click(doParticipate);
        disableEnterButton();
    }

    /**
     * Credits to https://css-tricks.com/snippets/jquery/smooth-scrolling/
     */
    function bindAnchors(){
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    }


    function init() {
        bindSendButton();
        bindAnchors();
    }

    return {
        init: init
    };
}());
