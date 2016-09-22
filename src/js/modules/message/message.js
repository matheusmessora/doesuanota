var MESSAGE = (function() {

    var messageBundle = {
        "invalid-token": "Token inválido",
        "participant-already-registered": "E-mail já cadastrado"
    };


    function get(key){
        var result = messageBundle[key];
        if(!result) result = "";
        return result;
    }

    return {
        get: get
    }

}());
