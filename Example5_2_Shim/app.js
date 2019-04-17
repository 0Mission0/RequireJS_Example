requirejs.config({
    "baseUrl": "lib",   // lib 底下的 js 可以直接呼叫
    "paths": {
        "app": "../app",
        "jquery": "https://code.jquery.com/jquery-2.2.4"    // jquery 也可以直接呼叫了，注意：網址後沒有.js
    },
    "shim": {
        "shim1": ["jquery"],
        "shim2": ["jquery"]
    }
});

requirejs(["app/main"]);