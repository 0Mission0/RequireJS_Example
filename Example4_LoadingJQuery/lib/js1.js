define(["jquery"], function($) {
    return {
        loadJs: function() {
            return $("body").append('<p>Loading from first js file.</p>');
        }
    }
});