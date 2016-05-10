System.register(["./observers/model-observer"], function (_export) {
    "use strict";

    var ModelObserver;

    _export("configure", configure);

    function configure(aurelia) {
        aurelia.globalResources("./elements/chart-element", "./attributes/chart-attribute");

        aurelia.container.registerTransient(ModelObserver);
    }

    return {
        setters: [function (_observersModelObserver) {
            ModelObserver = _observersModelObserver.ModelObserver;
        }],
        execute: function () {}
    };
});