/*
*
* Ensure Facebook JS API is ready using closure method.
* */
;(function () {
    /*
     *
     * http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/
     * */
    "use strict";

    var Application = {

        start:function () {

            var self = this;
            /*
             * Slight hack to ensure the FB API has loaded before we do anything.
             * */
            if (!this.devMode) {
                self.fbEnsureInit(function () {
                    self.renderPage();
                });
            } else {
                self.renderPage();
            }

        },

        /*
         * Does facebook exist? Why are we here? What is air? Why aren't there rainarrows as well as rainbows? Can't we just get along?
         * */
        fbEnsureInit:function (callback) {

            var self = this;
            if (!window.fbApiInit) {
                setTimeout(function () {
                        self.fbEnsureInit(callback);
                    }, 50
                );
            } else {
                if (callback) {
                    callback();
                }
            }
        },

        /*
         * Get the handlebars from the templates in minisute_view.php and compile em.
         * */
        renderPage:function () {

        }
    };


    var initialize = function () {
        Application.start();
    };

    $(initialize);

})(jQuery);
/*
 *
 * /Ensure Facebook Connect
 * */