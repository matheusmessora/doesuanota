var participate = (function () {

    function send(email, callback) {
        var json = {
            email: email
        };

        $.ajax({
            url: "http://api.doesuanota.com.br/participate",
            type: "POST",
            data: json,
            contentType: "application/json",
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

