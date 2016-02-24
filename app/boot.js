System.register(['./app.components', 'angular2/platform/browser', 'angular2/core', 'angular2/router'], function(exports_1) {
    "use strict";
    var app_components_1, browser_1, core_1, router_1;
    return {
        setters:[
            function (app_components_1_1) {
                app_components_1 = app_components_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_components_1.MainWindow, [
                router_1.ROUTER_PROVIDERS,
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
            ]);
        }
    }
});
//# sourceMappingURL=boot.js.map