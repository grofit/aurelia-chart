System.register([], function (_export) {
    "use strict";

    _export("configure", configure);

    function configure(aurelia) {
        aurelia.globalizeResources("./elements/chart-element");
        aurelia.globalizeResources("./attributes/chart-attribute");
    }

    return {
        setters: [],
        execute: function () {}
    };
});