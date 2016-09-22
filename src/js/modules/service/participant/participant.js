var participant = (function () {

    function send(email, callback) {
        var json = {
            email: email
        };

        $.ajax({
            url: CONFIG.apiDomain + "/participants",
            type: "POST",
            data: JSON.stringify(json),
            contentType: "application/json; charset=utf-8",
            success: function(data, textStatus, jqXHR) {
                callback()
            },
            error: function(jqXHR, textStatus, errorThrown) {
                var msg = 'Falha ao enviar email ' + email;
                if(jqXHR.status == 400){
                    console.log("BAD REQUEST", jqXHR.responseJSON)
                    msg = MESSAGE.get(jqXHR.responseJSON.code);
                }else {
                    console.warn(jqXHR.status, jqXHR.responseJSON)
                }

                callback(msg)
            }
        });
    }

    return {
        send: send
    };
}());

