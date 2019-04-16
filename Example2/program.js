define(function(require) {
    var info = require("./info");
    return {
        execute: function() {
            document.write("Team: " + info.team + ", Name: " + info.player);
        }
    }
});