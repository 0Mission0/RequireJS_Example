requirejs.config({
    "baseUrl": "lib",   // lib 底下的 js 可以直接呼叫
    "paths": {
        "app": "../app",
        "common": "common/common",
        "jquery": "https://code.jquery.com/jquery-2.2.4"    // jquery 也可以直接呼叫了
    }
});

requirejs(["app/main"]);