System.register([], function (_export) {
    "use strict";

    _export("configure", configure);

    function configure(aurelia) {
        aurelia.globalResources("./elements/chart-element", "./attributes/chart-attribute");
    }

    return {
        setters: [],
        execute: function () {}
    };
});