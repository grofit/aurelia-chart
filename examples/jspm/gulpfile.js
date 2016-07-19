var gulp = require('gulp');
var bundler = require('aurelia-bundler');

var bundles = {
    "example-bundle.min": {
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
            "chart.js",
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
    baseURL: "./",
    configPath: './config.js',
    bundles: bundles
};

gulp.task('unbundle:example', function() {
    return bundler.unbundle(config);
});

gulp.task('bundle:example', ['unbundle:example'], function() {
    return bundler.bundle(config);
});

gulp.task('default', ['bundle:example']);