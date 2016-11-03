"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.configure = configure;

var _observersModelObserver = require("./observers/model-observer");

function configure(aurelia) {
    aurelia.globalResources("./elements/chart-element", "./attributes/chart-attribute");

    aurelia.container.registerTransient(_observersModelObserver.ModelObserver);
}