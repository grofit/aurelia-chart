System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  packages: {
    "aurelia-chart": {
      "main": "index.js"
    }
  },
  map: {
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-beta.1.2.0",
    "aurelia-chart": "../dist/commonjs",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.2",
    "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.2.2",
    "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1.2.0",
    "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.3",
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "chartjs": "npm:chart.js@2.0.2",
    "core-js": "npm:core-js@2.3.0",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-binding@1.0.0-beta.1.3.2": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-bootstrapper@1.0.0-beta.1.2.0": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.2.0",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.2.2",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.2.0",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.2.0",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.2.1",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1.2.0",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-beta.1.1.2",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.2.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.3",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.2.1",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.2.2",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-dependency-injection@1.0.0-beta.1.2.2": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-event-aggregator@1.0.0-beta.1.2.0": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-framework@1.0.0-beta.1.2.2": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.2",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.3"
    },
    "npm:aurelia-history-browser@1.0.0-beta.1.2.0": {
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-loader-default@1.0.0-beta.1.2.1": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-loader@1.0.0-beta.1.2.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.1"
    },
    "npm:aurelia-logging-console@1.0.0-beta.1.2.0": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-metadata@1.0.0-beta.1.2.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-pal-browser@1.0.0-beta.1.2.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-polyfills@1.0.0-beta.1.1.2": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-route-recognizer@1.0.0-beta.1.2.0": {
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.1"
    },
    "npm:aurelia-router@1.0.0-beta.1.2.1": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.2",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.2.0",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.1",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-task-queue@1.0.0-beta.1.2.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-templating-binding@1.0.0-beta.1.2.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.2",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.3"
    },
    "npm:aurelia-templating-resources@1.0.0-beta.1.2.2": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.2",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.3"
    },
    "npm:aurelia-templating-router@1.0.0-beta.1.2.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.2",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.1",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.2.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.3"
    },
    "npm:aurelia-templating@1.0.0-beta.1.2.3": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.2",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.0"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:chart.js@2.0.2": {
      "chartjs-color": "npm:chartjs-color@1.0.22",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "moment": "npm:moment@2.13.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:chartjs-color-string@0.4.0": {
      "color-name": "npm:color-name@1.1.1"
    },
    "npm:chartjs-color@1.0.22": {
      "chartjs-color-string": "npm:chartjs-color-string@0.4.0",
      "color-convert": "npm:color-convert@0.5.3"
    },
    "npm:core-js@2.3.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  },
  bundles: {
    "aurelia-bundle.min.js": [
      "github:jspm/nodelibs-process@0.1.2.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "npm:aurelia-binding@1.0.0-beta.1.3.2.js",
      "npm:aurelia-binding@1.0.0-beta.1.3.2/aurelia-binding.js",
      "npm:aurelia-bootstrapper@1.0.0-beta.1.2.0.js",
      "npm:aurelia-bootstrapper@1.0.0-beta.1.2.0/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.0.0-beta.1.2.2.js",
      "npm:aurelia-dependency-injection@1.0.0-beta.1.2.2/aurelia-dependency-injection.js",
      "npm:aurelia-event-aggregator@1.0.0-beta.1.2.0.js",
      "npm:aurelia-event-aggregator@1.0.0-beta.1.2.0/aurelia-event-aggregator.js",
      "npm:aurelia-framework@1.0.0-beta.1.2.2.js",
      "npm:aurelia-framework@1.0.0-beta.1.2.2/aurelia-framework.js",
      "npm:aurelia-history-browser@1.0.0-beta.1.2.0.js",
      "npm:aurelia-history-browser@1.0.0-beta.1.2.0/aurelia-history-browser.js",
      "npm:aurelia-history@1.0.0-beta.1.2.0.js",
      "npm:aurelia-history@1.0.0-beta.1.2.0/aurelia-history.js",
      "npm:aurelia-loader-default@1.0.0-beta.1.2.1.js",
      "npm:aurelia-loader-default@1.0.0-beta.1.2.1/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.0-beta.1.2.0.js",
      "npm:aurelia-loader@1.0.0-beta.1.2.0/aurelia-loader.js",
      "npm:aurelia-logging-console@1.0.0-beta.1.2.0.js",
      "npm:aurelia-logging-console@1.0.0-beta.1.2.0/aurelia-logging-console.js",
      "npm:aurelia-logging@1.0.0-beta.1.2.0.js",
      "npm:aurelia-logging@1.0.0-beta.1.2.0/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.0-beta.1.2.0.js",
      "npm:aurelia-metadata@1.0.0-beta.1.2.0/aurelia-metadata.js",
      "npm:aurelia-pal-browser@1.0.0-beta.1.2.0.js",
      "npm:aurelia-pal-browser@1.0.0-beta.1.2.0/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.0.0-beta.1.2.0.js",
      "npm:aurelia-pal@1.0.0-beta.1.2.0/aurelia-pal.js",
      "npm:aurelia-path@1.0.0-beta.1.2.1.js",
      "npm:aurelia-path@1.0.0-beta.1.2.1/aurelia-path.js",
      "npm:aurelia-polyfills@1.0.0-beta.1.1.2.js",
      "npm:aurelia-polyfills@1.0.0-beta.1.1.2/aurelia-polyfills.js",
      "npm:aurelia-route-recognizer@1.0.0-beta.1.2.0.js",
      "npm:aurelia-route-recognizer@1.0.0-beta.1.2.0/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.0.0-beta.1.2.1.js",
      "npm:aurelia-router@1.0.0-beta.1.2.1/aurelia-router.js",
      "npm:aurelia-task-queue@1.0.0-beta.1.2.0.js",
      "npm:aurelia-task-queue@1.0.0-beta.1.2.0/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.0.0-beta.1.2.1.js",
      "npm:aurelia-templating-binding@1.0.0-beta.1.2.1/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/abstract-repeater.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/binding-signaler.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/compile-spy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/compose.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/css-resource.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/dynamic-element.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/focus.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/hide.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/html-resource-plugin.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/if.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/repeat.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/replaceable.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/sanitize-html.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/set-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/show.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/view-spy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/with.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.0.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.0/aurelia-templating-router.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.0/route-href.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.0/route-loader.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.0/router-view.js",
      "npm:aurelia-templating@1.0.0-beta.1.2.3.js",
      "npm:aurelia-templating@1.0.0-beta.1.2.3/aurelia-templating.js",
      "npm:babel-core@5.8.38.js",
      "npm:babel-core@5.8.38/browser.js",
      "npm:chart.js@2.0.2.js",
      "npm:chart.js@2.0.2/src/chart.js",
      "npm:chart.js@2.0.2/src/charts/Chart.Bar.js",
      "npm:chart.js@2.0.2/src/charts/Chart.Bubble.js",
      "npm:chart.js@2.0.2/src/charts/Chart.Doughnut.js",
      "npm:chart.js@2.0.2/src/charts/Chart.Line.js",
      "npm:chart.js@2.0.2/src/charts/Chart.PolarArea.js",
      "npm:chart.js@2.0.2/src/charts/Chart.Radar.js",
      "npm:chart.js@2.0.2/src/charts/Chart.Scatter.js",
      "npm:chart.js@2.0.2/src/controllers/controller.bar.js",
      "npm:chart.js@2.0.2/src/controllers/controller.bubble.js",
      "npm:chart.js@2.0.2/src/controllers/controller.doughnut.js",
      "npm:chart.js@2.0.2/src/controllers/controller.line.js",
      "npm:chart.js@2.0.2/src/controllers/controller.polarArea.js",
      "npm:chart.js@2.0.2/src/controllers/controller.radar.js",
      "npm:chart.js@2.0.2/src/core/core.animation.js",
      "npm:chart.js@2.0.2/src/core/core.controller.js",
      "npm:chart.js@2.0.2/src/core/core.datasetController.js",
      "npm:chart.js@2.0.2/src/core/core.element.js",
      "npm:chart.js@2.0.2/src/core/core.helpers.js",
      "npm:chart.js@2.0.2/src/core/core.js",
      "npm:chart.js@2.0.2/src/core/core.layoutService.js",
      "npm:chart.js@2.0.2/src/core/core.legend.js",
      "npm:chart.js@2.0.2/src/core/core.scale.js",
      "npm:chart.js@2.0.2/src/core/core.scaleService.js",
      "npm:chart.js@2.0.2/src/core/core.title.js",
      "npm:chart.js@2.0.2/src/core/core.tooltip.js",
      "npm:chart.js@2.0.2/src/elements/element.arc.js",
      "npm:chart.js@2.0.2/src/elements/element.line.js",
      "npm:chart.js@2.0.2/src/elements/element.point.js",
      "npm:chart.js@2.0.2/src/elements/element.rectangle.js",
      "npm:chart.js@2.0.2/src/scales/scale.category.js",
      "npm:chart.js@2.0.2/src/scales/scale.linear.js",
      "npm:chart.js@2.0.2/src/scales/scale.logarithmic.js",
      "npm:chart.js@2.0.2/src/scales/scale.radialLinear.js",
      "npm:chart.js@2.0.2/src/scales/scale.time.js",
      "npm:chartjs-color-string@0.4.0.js",
      "npm:chartjs-color-string@0.4.0/color-string.js",
      "npm:chartjs-color@1.0.22.js",
      "npm:chartjs-color@1.0.22/src/color.js",
      "npm:color-convert@0.5.3.js",
      "npm:color-convert@0.5.3/conversions.js",
      "npm:color-convert@0.5.3/index.js",
      "npm:color-name@1.1.1.js",
      "npm:color-name@1.1.1/index.js",
      "npm:moment@2.13.0.js",
      "npm:moment@2.13.0/moment.js",
      "npm:process@0.11.2.js",
      "npm:process@0.11.2/browser.js"
    ]
  }
});