var view = (function() {

    function markError(field, message){
        $("#g-" + field).addClass("has-error has-feedback");
        var errorElement = $("#e-" + field);
        errorElement.html(message).show();
    }

    return {
        markError: markError
    }

}());
