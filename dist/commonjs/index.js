"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.configure = configure;

function configure(aurelia) {
    aurelia.globalResources("./elements/chart-element");
    aurelia.globalResources("./attributes/chart-attribute");
}