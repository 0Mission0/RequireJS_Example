define(
    function(require) {
        var info = require("./info");
        var program = require("./program");
        alert("Player name: " + info.player);
        program.execute();
    }
);