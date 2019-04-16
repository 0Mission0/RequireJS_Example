define(["jquery"], function($) {
    $.fn.load_js2 = function() {
        return this.append('<p>Loading from second js file.</p>');
    }
});