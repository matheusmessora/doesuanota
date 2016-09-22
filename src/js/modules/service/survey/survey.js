var SURVEY = (function () {

    function get(id, callback) {

        $.ajax({
            url: CONFIG.apiDomain + "/surveys/" + id,
            type: "GET",
            contentType: "application/json",
            success: function(data, textStatus, jqXHR) {
                callback()
            },
            error: function(jqXHR, textStatus, errorThrown) {
                var errorCode = jqXHR.responseJSON.code;
                var message = MESSAGE.get(errorCode);
                callback(message)
            }
        });
    }

    function post(id, json, callback) {

        $.ajax({
            url: CONFIG.apiDomain + "/surveys/" + id + "/answers",
            data: JSON.stringify(json),
            contentType: "application/json; charset=utf-8",
            type: "POST",
            success: function(data, textStatus, jqXHR) {
                callback()
            },
            error: function(jqXHR, textStatus, errorThrown) {
                var errorCode = jqXHR.responseJSON.code;
                var message = MESSAGE.get(errorCode);
                callback(message)
            }
        });
    }

    return {
        get: get,
        post: post
    };
}());

