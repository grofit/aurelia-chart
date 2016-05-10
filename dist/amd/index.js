define(["exports", "./observers/model-observer"], function (exports, _observersModelObserver) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.configure = configure;

    function configure(aurelia) {
        aurelia.globalResources("./elements/chart-element", "./attributes/chart-attribute");

        aurelia.container.registerTransient(_observersModelObserver.ModelObserver);
    }
});