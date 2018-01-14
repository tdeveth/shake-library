
var Triller = function () {

    var duration;
    var element;
    /**
     * Initializes the module
     * @param {string} [selector] Css selector that targets the element that needs to bounce
     * @param {string} [duration] Duration in seconds of one shake
     */
    var init = function (selector, duration) {
        duration = duration;
        element = document.querySelector(selector);
        element.style.animationDuration = duration;
    };

    //Return the functions that should be accessible from the outside. The rest is only accessible from within the object
    return {
        init: init
    };
};
