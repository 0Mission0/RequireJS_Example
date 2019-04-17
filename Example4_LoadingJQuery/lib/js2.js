define(["jquery"], function($) {
    return {
        loadJs: function() {
            return $("body").append('<p>Loading from second js file.</p>');
        }
    }
});