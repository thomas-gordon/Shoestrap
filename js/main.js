;(function($) {

    "use strict";

    var Application = {

        start: function () {
            console.log('Application has started');
            this.storedString = 'Stored String!';
            this.afterStart();
        },

        afterStart: function () {

            // we need to define this because of scope.
            var self = this;

            $('p').each(function () {
                $(this).append(self.storedString);
                console.log('String appended to page.');
                self.printANumberOut(5000);
            });

            $('p').each(function () {
                //the stored string is empty because the scope has changed.
                $('p').append(this.storedString);
            });

        },

        printANumberOut: function (chosenNumber) {
            console.log(chosenNumber);
        }
    };

    var initialize = function() {
        Application.start();
    };

    $(initialize);

})(jQuery);