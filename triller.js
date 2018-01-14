
var Triller = function () {

    /**
     * Initializes the module
     * @param {string} [selector] Css selector that targets the element that needs to shake
     * @param {string} [duration] Duration in seconds of one shake
     */
    var start = function (selector, duration) {
        element = document.querySelector(selector);
        element.style.animationName = 'tril';
        element.style.animationDuration = duration;
        element.style.animationTimingFunction = 'cubic-bezier(.36,.07,.19,.97)';
        element.style.animationIterationCount = 'infinite';
        element.style.transform = 'translateX(0)';
    };

    //Return the functions that should be accessible from the outside. The rest is only accessible from within the object
    return {
        start: start
    };
};
