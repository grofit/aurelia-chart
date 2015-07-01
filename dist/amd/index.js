define(["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.configure = configure;

    function configure(aurelia) {
        aurelia.globalizeResources("./elements/chart-element");
        aurelia.globalizeResources("./attributes/chart-attribute");
    }
});