;(function($) {

    /*
    *
    * http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/
    * */
    "use strict";

    var Application = {

        init: function () {
            console.log('Application has started');
            this.appendP();
        },

        appendP: function () {
            console.log('appendP has run');
            $('.wrapper').append('<p>appendP function is running.</p>');
        }
    };

    var initialize = function() {
        Application.init();
    };

    $(initialize);

})(jQuery);