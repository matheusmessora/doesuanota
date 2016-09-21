var participant = (function () {

    function send(email, callback) {
        var json = {
            email: email
        };

        $.ajax({
            url: "http://api.doesuanota.com.br/participants",
            type: "POST",
            data: JSON.stringify(json),
            contentType: "application/json; charset=utf-8",
            success: function(data, textStatus, jqXHR) {
                callback()
            },
            error: function(jqXHR, textStatus, errorThrown) {
                callback('Falha ao enviar email ' + email + ' para participar')
            }
        });
    }

    return {
        send: send
    };
}());

