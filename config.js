System.config({
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "aurelia-framework": "github:aurelia/framework@0.8.8",
    "chartjs": "github:nnnick/Chart.js@1.0.2",
    "github:aurelia/binding@0.3.7": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.4.5",
      "aurelia-metadata": "github:aurelia/metadata@0.3.4",
      "aurelia-task-queue": "github:aurelia/task-queue@0.2.5"
    },
    "github:aurelia/dependency-injection@0.4.5": {
      "aurelia-metadata": "github:aurelia/metadata@0.3.4",
      "core-js": "npm:core-js@0.4.10"
    },
    "github:aurelia/framework@0.8.8": {
      "aurelia-binding": "github:aurelia/binding@0.3.7",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.4.5",
      "aurelia-loader": "github:aurelia/loader@0.3.5",
      "aurelia-logging": "github:aurelia/logging@0.2.7",
      "aurelia-metadata": "github:aurelia/metadata@0.3.4",
      "aurelia-task-queue": "github:aurelia/task-queue@0.2.5",
      "aurelia-templating": "github:aurelia/templating@0.8.14"
    },
    "github:aurelia/loader@0.3.5": {
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.1.3",
      "core-js": "npm:core-js@0.4.10",
      "webcomponentsjs": "github:webcomponents/webcomponentsjs@0.5.5"
    },
    "github:aurelia/templating@0.8.14": {
      "aurelia-binding": "github:aurelia/binding@0.3.7",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.4.5",
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.1.3",
      "aurelia-loader": "github:aurelia/loader@0.3.5",
      "aurelia-logging": "github:aurelia/logging@0.2.7",
      "aurelia-metadata": "github:aurelia/metadata@0.3.4",
      "aurelia-path": "github:aurelia/path@0.4.6",
      "aurelia-task-queue": "github:aurelia/task-queue@0.2.5",
      "core-js": "npm:core-js@0.4.10"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.2.2"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:MD5@1.2.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "charenc": "npm:charenc@0.0.1",
      "crypt": "npm:crypt@0.0.1"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:buffer@3.2.2": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:core-js@0.4.10": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

