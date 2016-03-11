var gulp = require('gulp');
var bundler = require('aurelia-bundler');
var paths = require("../paths");

var bundles = {
    "plugin-bundle": {
        "includes": [
            "./dist/commonjs/**/*.js",
            "./dist/commonjs/**/*.html!text"
        ],
        "options": {
            "inject": false,
            "minify": false,
            "rev": false
        },
        excludes: ["aurelia-framework"]
    },
    "aurelia-bundle.min": {
        "includes": [
            'aurelia-bootstrapper',
            'aurelia-dependency-injection',
            'aurelia-framework',
            'aurelia-templating-binding',
            'aurelia-templating-resources',
            'aurelia-loader-default'
        ],
        "options": {
            "inject": false,
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