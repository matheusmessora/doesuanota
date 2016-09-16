var strings = (function() {

    function isBlank(string){
        return (!string || / ^ \s * $ /.test(string));
    }

    return {
        isBlank: isBlank
    }

}());
