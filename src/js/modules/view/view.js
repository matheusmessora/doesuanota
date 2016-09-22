var VIEW = (function() {

    function markError(field, message){
        $("#g-" + field).addClass("has-error has-feedback");
        var errorElement = $("#e-" + field);
        errorElement.html(message).show();
    }

    function goToHomepage(windowObject){
        if (!windowObject) windowObject = window;

        windowObject.location = "http://www.doesuanota.com.br/";
    }

    function goToSurveyThanks(windowObject){
        if (!windowObject) windowObject = window;

        windowObject.location = "http://www.doesuanota.com.br/thank-you.html";
    }

    /**
     * based on http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
     * @param name
     * @param url
     * @returns {*}
     */
    function getUrlParameterByName(name, url) {
        if (!url) url = window.location.href;

        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    return {
        markError: markError,
        getUrlParameterByName: getUrlParameterByName,
        goToHomepage: goToHomepage,
        goToSurveyThanks: goToSurveyThanks
    }

}());
