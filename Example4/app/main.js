// define(["jquery", "js1", "js2"], function($, js1, js2){
//     $(function() {
//         js1.loadJs();
//         js2.loadJs();
//     })
// });

define(["js1", "js2", "common"], function(js1, js2, common){
    js1.loadJs();
    js2.loadJs();
    common.loadJs();
});