define(["jquery"], function($) {
    return {
        loadJs: function() {
            return $("body").append('<p>Loading from common.js.</p>');
        }
    }
});