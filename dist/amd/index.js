define(["exports", "./generator/gravatar-url-generator"], function (exports, _generatorGravatarUrlGenerator) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.configure = configure;

    function configure(aurelia) {
        aurelia.container.registerInstance(_generatorGravatarUrlGenerator.GravatarUrlGenerator, new _generatorGravatarUrlGenerator.GravatarUrlGenerator());
        aurelia.globalizeResources("./elements/gravatar-element");
    }
});