define(["jquery"], function($) {
    $.fn.load_js1 = function() {
        return this.append('<p>Loading from first js file.</p>');
    }
});