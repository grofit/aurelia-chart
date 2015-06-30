System.register([], function (_export) {
    "use strict";

    _export("configure", configure);

    function configure(aurelia) {
        aurelia.globalizeResources("./elements/chart-element");
    }

    return {
        setters: [],
        execute: function () {}
    };
});