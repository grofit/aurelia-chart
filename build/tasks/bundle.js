var gulp = require('gulp');
var bundler = require('aurelia-bundler');
var paths = require("../paths");

var bundles = {
    "aurelia-bundle.min": {
        "includes": [
            "aurelia-bootstrapper",
            "aurelia-dependency-injection",
            "aurelia-loader",
            "aurelia-framework",
            "aurelia-metadata",
            "aurelia-templating",
            "aurelia-logging-console",
            "aurelia-loader-default",
            "aurelia-templating-binding",
            "aurelia-templating-router",
            "aurelia-templating-resources",
            "aurelia-history-browser",
            "chartjs",
            "babel"
        ],
        "options": {
            "inject": true,
            "minify": true,
            "rev": false
        }
    }
};

var config = {
    force: true,
    baseURL: "./examples",
    configPath: './examples/config.js',
    bundles: bundles
};

gulp.task('unbundle:example', function() {
    return bundler.unbundle(config);
});

gulp.task('bundle:example', ['build', 'unbundle:example'], function() {
    return bundler.bundle(config);
});