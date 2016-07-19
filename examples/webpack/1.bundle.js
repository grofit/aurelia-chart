webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./app": 14,
		"./app.html": 15,
		"./aurelia-bootstrapper-webpack": 2,
		"./aurelia-chart": 16,
		"./aurelia-chart/attributes/chart-attribute": 24,
		"./aurelia-chart/attributes/chart-attribute.js": 24,
		"./aurelia-chart/elements/chart-element": 171,
		"./aurelia-chart/elements/chart-element.html": 172,
		"./aurelia-chart/elements/chart-element.js": 171,
		"./aurelia-event-aggregator": 173,
		"./aurelia-fetch-client": 174,
		"./aurelia-framework": 18,
		"./aurelia-history-browser": 175,
		"./aurelia-loader-webpack": 9,
		"./aurelia-logging-console": 177,
		"./aurelia-pal-browser": 8,
		"./aurelia-polyfills": 6,
		"./aurelia-route-recognizer": 178,
		"./aurelia-router": 179,
		"./aurelia-templating-binding": 180,
		"./aurelia-templating-resources": 181,
		"./aurelia-templating-resources/binding-mode-behaviors": 203,
		"./aurelia-templating-resources/binding-mode-behaviors.js": 203,
		"./aurelia-templating-resources/compose": 182,
		"./aurelia-templating-resources/compose.js": 182,
		"./aurelia-templating-resources/debounce-binding-behavior": 205,
		"./aurelia-templating-resources/debounce-binding-behavior.js": 205,
		"./aurelia-templating-resources/focus": 201,
		"./aurelia-templating-resources/focus.js": 201,
		"./aurelia-templating-resources/hide": 197,
		"./aurelia-templating-resources/hide.js": 197,
		"./aurelia-templating-resources/if": 183,
		"./aurelia-templating-resources/if.js": 183,
		"./aurelia-templating-resources/repeat": 185,
		"./aurelia-templating-resources/repeat.js": 185,
		"./aurelia-templating-resources/replaceable": 200,
		"./aurelia-templating-resources/replaceable.js": 200,
		"./aurelia-templating-resources/sanitize-html": 198,
		"./aurelia-templating-resources/sanitize-html.js": 198,
		"./aurelia-templating-resources/show": 195,
		"./aurelia-templating-resources/show.js": 195,
		"./aurelia-templating-resources/signal-binding-behavior": 206,
		"./aurelia-templating-resources/signal-binding-behavior.js": 206,
		"./aurelia-templating-resources/throttle-binding-behavior": 204,
		"./aurelia-templating-resources/throttle-binding-behavior.js": 204,
		"./aurelia-templating-resources/update-trigger-binding-behavior": 208,
		"./aurelia-templating-resources/update-trigger-binding-behavior.js": 208,
		"./aurelia-templating-resources/with": 184,
		"./aurelia-templating-resources/with.js": 184,
		"./aurelia-templating-router": 211,
		"./aurelia-templating-router/route-href": 214,
		"./aurelia-templating-router/route-href.js": 214,
		"./aurelia-templating-router/router-view": 213,
		"./aurelia-templating-router/router-view.js": 213,
		"./bluebird": 3,
		"./bootstrap": 215,
		"./chart.js": 25,
		"./jquery": 217,
		"./main": 1
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 13;


/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var App = exports.App = function () {
	    function App() {
	        _classCallCheck(this, App);

	        this.DynamicDoughnutData = {};
	        this.SimpleLineData = {};

	        this.resetPieData();
	        this.resetLineData();
	    }

	    App.prototype.resetPieData = function resetPieData() {
	        this.DynamicDoughnutData = {
	            labels: ["Red", "Green", "Yellow"],
	            datasets: [{
	                data: [300, 50, 100],
	                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
	                hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
	            }]
	        };
	    };

	    App.prototype.resetLineData = function resetLineData() {
	        this.SimpleLineData = {
	            labels: ["January", "February", "March", "April", "May", "June", "July"],
	            datasets: [{
	                label: "Healthy People",
	                backgroundColor: "rgba(220,220,220,0.2)",
	                borderColor: "rgba(220,220,220,1)",
	                pointColor: "rgba(220,220,220,1)",
	                pointStrokeColor: "#fff",
	                pointHighlightFill: "#fff",
	                pointHighlightStroke: "rgba(220,220,220,1)",
	                data: [65, 59, 80, 81, 56, 55, 40]
	            }, {
	                label: "Ill People",
	                backgroundColor: "rgba(151,187,205,0.2)",
	                borderColor: "rgba(151,187,205,1)",
	                pointColor: "rgba(151,187,205,1)",
	                pointStrokeColor: "#fff",
	                pointHighlightFill: "#fff",
	                pointHighlightStroke: "rgba(151,187,205,1)",
	                data: [28, 48, 40, 19, 86, 27, 90]
	            }]
	        };
	    };

	    App.prototype.addEntry = function addEntry() {
	        this.DynamicDoughnutData.labels.push("New Colour");
	        this.DynamicDoughnutData.datasets[0].data.push(50);
	        this.DynamicDoughnutData.datasets[0].backgroundColor.push("#B4FD5C");
	    };

	    return App;
	}();

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "<template>\r\n    <fieldset>\r\n        <legend>Line Graph via Attribute</legend>\r\n        <canvas id=\"line-chart\" chart=\"type: line; should-update: false; data.bind: SimpleLineData\"></canvas>\r\n        <p>Changing the data wont change this graph as it is not update-able</p>\r\n    </fieldset>\r\n\r\n    <fieldset>\r\n        <legend>Doughnut Chart via Element</legend>\r\n        <chart id=\"dynamic-doughnut-chart\" type=\"doughnut\" style=\"width: 50%; height: 50%; display: block;\" should-update=\"true\" throttle=\"2000\" data.bind=\"DynamicDoughnutData\"></chart>\r\n        <chart id=\"dynamic-pie-chart\" type=\"pie\" style=\"width: 50%; height: 50%; display: block;\" should-update=\"true\" throttle=\"2000\" data.bind=\"DynamicDoughnutData\"></chart>\r\n        <div>\r\n            <label>Values</label>\r\n            <div repeat.for=\"i of DynamicDoughnutData.datasets[0].data.length\">\r\n                <input value.bind=\"DynamicDoughnutData.datasets[0].data[i]\" placeholder=\"Value ${$index + 1}\"/>\r\n            </div>\r\n        </div>\r\n\r\n        <p>Both charts are using the same dataset behind the scenes, so changing one will change both.</p>\r\n        <p>Changing the above value should trigger a chart refresh after 2 seconds</p>\r\n        <p>Although dynamically added entries will not be tracked currently</p>\r\n        <button click.delegate=\"addEntry()\">Add Entry</button>\r\n        <button click.delegate=\"resetPieData()\">Reset</button>\r\n    </fieldset>\r\n</template>\r\n";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.configure = configure;

	var _observersModelObserver = __webpack_require__(17);

	function configure(aurelia) {
	    aurelia.globalResources("./elements/chart-element", "./attributes/chart-attribute");

	    aurelia.container.registerTransient(_observersModelObserver.ModelObserver);
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _aureliaFramework = __webpack_require__(18);

	var ModelObserver = (function () {
	    function ModelObserver(bindingEngine, observerLocator) {
	        var _this = this;

	        _classCallCheck(this, _ModelObserver);

	        this.throttle = 100;
	        this._throttleTimeout = 0;
	        this._activeSubscriptions = [];

	        this.observe = function (model, onChange) {
	            var subscriptions = [];
	            _this._getAllSubscriptions(model, subscriptions);

	            var throttledHandler = function throttledHandler(args) {
	                if (_this.throttle <= 0) {
	                    return onChange();
	                }

	                if (!_this._throttleTimeout) {
	                    _this._throttleTimeout = setTimeout(function () {
	                        _this._throttleTimeout = null;
	                        onChange();
	                    }, _this.throttle);
	                }
	            };

	            for (var i = 0; i < subscriptions.length; i++) {
	                var outstandingSubscription = subscriptions[i](throttledHandler);
	                _this._activeSubscriptions.push(outstandingSubscription);
	            }
	        };

	        this.unsubscribe = function () {
	            for (var i = 0; i < _this._activeSubscriptions.length; i++) {
	                _this._activeSubscriptions[i].dispose();
	            }

	            _this._activeSubscriptions = [];
	        };

	        this.bindingEngine = bindingEngine;
	        this.observerLocator = observerLocator;
	    }

	    _createClass(ModelObserver, [{
	        key: "_getObjectType",
	        value: function _getObjectType(obj) {
	            if (obj && typeof obj === "object" && obj.constructor == new Date().constructor) return "date";
	            return typeof obj;
	        }
	    }, {
	        key: "_getAllSubscriptions",
	        value: function _getAllSubscriptions(model, subscriptions) {
	            var _this2 = this;

	            if (Array.isArray(model)) {
	                var subscription = this.bindingEngine.collectionObserver(model).subscribe;
	                subscriptions.push(subscription);
	            }

	            for (var property in model) {
	                var typeOfData = this._getObjectType(model[property]);
	                switch (typeOfData) {
	                    case "object":
	                        {
	                            this._getAllSubscriptions(model[property], subscriptions);
	                        }
	                        break;
	                    case "array":
	                        {
	                            var underlyingArray = model[property]();
	                            underlyingArray.forEach(function (entry, index) {
	                                _this2._getAllSubscriptions(underlyingArray[index], subscriptions);
	                            });

	                            var arraySubscription = this.bindingEngine.propertyObserver(model, property).subscribe;
	                            if (arraySubscription) {
	                                subscriptions.push(arraySubscription);
	                            }
	                        }
	                        break;

	                    default:
	                        {
	                            var subscription = this.bindingEngine.propertyObserver(model, property).subscribe;
	                            if (subscription) {
	                                subscriptions.push(subscription);
	                            }
	                        }
	                        break;
	                }
	            }
	        }
	    }]);

	    var _ModelObserver = ModelObserver;
	    ModelObserver = (0, _aureliaFramework.inject)(_aureliaFramework.BindingEngine)(ModelObserver) || ModelObserver;
	    return ModelObserver;
	})();

	exports.ModelObserver = ModelObserver;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Promise) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.LogManager = exports.FrameworkConfiguration = exports.Aurelia = undefined;

	var _aureliaDependencyInjection = __webpack_require__(19);

	Object.keys(_aureliaDependencyInjection).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _aureliaDependencyInjection[key];
	    }
	  });
	});

	var _aureliaBinding = __webpack_require__(20);

	Object.keys(_aureliaBinding).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _aureliaBinding[key];
	    }
	  });
	});

	var _aureliaMetadata = __webpack_require__(10);

	Object.keys(_aureliaMetadata).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _aureliaMetadata[key];
	    }
	  });
	});

	var _aureliaTemplating = __webpack_require__(23);

	Object.keys(_aureliaTemplating).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _aureliaTemplating[key];
	    }
	  });
	});

	var _aureliaLoader = __webpack_require__(11);

	Object.keys(_aureliaLoader).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _aureliaLoader[key];
	    }
	  });
	});

	var _aureliaTaskQueue = __webpack_require__(22);

	Object.keys(_aureliaTaskQueue).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _aureliaTaskQueue[key];
	    }
	  });
	});

	var _aureliaPath = __webpack_require__(12);

	Object.keys(_aureliaPath).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _aureliaPath[key];
	    }
	  });
	});

	var _aureliaPal = __webpack_require__(7);

	Object.keys(_aureliaPal).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _aureliaPal[key];
	    }
	  });
	});

	var _aureliaLogging = __webpack_require__(21);

	var TheLogManager = _interopRequireWildcard(_aureliaLogging);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }



	function preventActionlessFormSubmit() {
	  _aureliaPal.DOM.addEventListener('submit', function (evt) {
	    var target = evt.target;
	    var action = target.action;

	    if (target.tagName.toLowerCase() === 'form' && !action) {
	      evt.preventDefault();
	    }
	  });
	}

	var Aurelia = exports.Aurelia = function () {
	  function Aurelia(loader, container, resources) {


	    this.loader = loader || new _aureliaPal.PLATFORM.Loader();
	    this.container = container || new _aureliaDependencyInjection.Container().makeGlobal();
	    this.resources = resources || new _aureliaTemplating.ViewResources();
	    this.use = new FrameworkConfiguration(this);
	    this.logger = TheLogManager.getLogger('aurelia');
	    this.hostConfigured = false;
	    this.host = null;

	    this.use.instance(Aurelia, this);
	    this.use.instance(_aureliaLoader.Loader, this.loader);
	    this.use.instance(_aureliaTemplating.ViewResources, this.resources);
	  }

	  Aurelia.prototype.start = function start() {
	    var _this = this;

	    if (this.started) {
	      return Promise.resolve(this);
	    }

	    this.started = true;
	    this.logger.info('Aurelia Starting');

	    return this.use.apply().then(function () {
	      preventActionlessFormSubmit();

	      if (!_this.container.hasResolver(_aureliaTemplating.BindingLanguage)) {
	        var message = 'You must configure Aurelia with a BindingLanguage implementation.';
	        _this.logger.error(message);
	        throw new Error(message);
	      }

	      _this.logger.info('Aurelia Started');
	      var evt = _aureliaPal.DOM.createCustomEvent('aurelia-started', { bubbles: true, cancelable: true });
	      _aureliaPal.DOM.dispatchEvent(evt);
	      return _this;
	    });
	  };

	  Aurelia.prototype.enhance = function enhance() {
	    var _this2 = this;

	    var bindingContext = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var applicationHost = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	    this._configureHost(applicationHost || _aureliaPal.DOM.querySelectorAll('body')[0]);

	    return new Promise(function (resolve) {
	      var engine = _this2.container.get(_aureliaTemplating.TemplatingEngine);
	      _this2.root = engine.enhance({ container: _this2.container, element: _this2.host, resources: _this2.resources, bindingContext: bindingContext });
	      _this2.root.attached();
	      _this2._onAureliaComposed();
	      return _this2;
	    });
	  };

	  Aurelia.prototype.setRoot = function setRoot() {
	    var _this3 = this;

	    var root = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
	    var applicationHost = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	    var instruction = {};

	    if (this.root && this.root.viewModel && this.root.viewModel.router) {
	      this.root.viewModel.router.deactivate();
	      this.root.viewModel.router.reset();
	    }

	    this._configureHost(applicationHost);

	    var engine = this.container.get(_aureliaTemplating.TemplatingEngine);
	    var transaction = this.container.get(_aureliaTemplating.CompositionTransaction);
	    delete transaction.initialComposition;

	    if (!root) {
	      if (this.configModuleId) {
	        root = (0, _aureliaPath.relativeToFile)('./app', this.configModuleId);
	      } else {
	        root = 'app';
	      }
	    }

	    instruction.viewModel = root;
	    instruction.container = instruction.childContainer = this.container;
	    instruction.viewSlot = this.hostSlot;
	    instruction.host = this.host;

	    return engine.compose(instruction).then(function (r) {
	      _this3.root = r;
	      instruction.viewSlot.attached();
	      _this3._onAureliaComposed();
	      return _this3;
	    });
	  };

	  Aurelia.prototype._configureHost = function _configureHost(applicationHost) {
	    if (this.hostConfigured) {
	      return;
	    }
	    applicationHost = applicationHost || this.host;

	    if (!applicationHost || typeof applicationHost === 'string') {
	      this.host = _aureliaPal.DOM.getElementById(applicationHost || 'applicationHost');
	    } else {
	      this.host = applicationHost;
	    }

	    if (!this.host) {
	      throw new Error('No applicationHost was specified.');
	    }

	    this.hostConfigured = true;
	    this.host.aurelia = this;
	    this.hostSlot = new _aureliaTemplating.ViewSlot(this.host, true);
	    this.hostSlot.transformChildNodesIntoView();
	    this.container.registerInstance(_aureliaPal.DOM.boundary, this.host);
	  };

	  Aurelia.prototype._onAureliaComposed = function _onAureliaComposed() {
	    var evt = _aureliaPal.DOM.createCustomEvent('aurelia-composed', { bubbles: true, cancelable: true });
	    setTimeout(function () {
	      return _aureliaPal.DOM.dispatchEvent(evt);
	    }, 1);
	  };

	  return Aurelia;
	}();

	var logger = TheLogManager.getLogger('aurelia');
	var extPattern = /\.[^/.]+$/;

	function runTasks(config, tasks) {
	  var current = void 0;
	  var next = function next() {
	    if (current = tasks.shift()) {
	      return Promise.resolve(current(config)).then(next);
	    }

	    return Promise.resolve();
	  };

	  return next();
	}

	function loadPlugin(config, loader, info) {
	  logger.debug('Loading plugin ' + info.moduleId + '.');
	  config.resourcesRelativeTo = info.resourcesRelativeTo;

	  var id = info.moduleId;

	  if (info.resourcesRelativeTo.length > 1) {
	    return loader.normalize(info.moduleId, info.resourcesRelativeTo[1]).then(function (normalizedId) {
	      return _loadPlugin(normalizedId);
	    });
	  }

	  return _loadPlugin(id);

	  function _loadPlugin(moduleId) {
	    return loader.loadModule(moduleId).then(function (m) {
	      if ('configure' in m) {
	        return Promise.resolve(m.configure(config, info.config || {})).then(function () {
	          config.resourcesRelativeTo = null;
	          logger.debug('Configured plugin ' + info.moduleId + '.');
	        });
	      }

	      config.resourcesRelativeTo = null;
	      logger.debug('Loaded plugin ' + info.moduleId + '.');
	    });
	  }
	}

	function loadResources(aurelia, resourcesToLoad, appResources) {
	  var viewEngine = aurelia.container.get(_aureliaTemplating.ViewEngine);

	  return Promise.all(Object.keys(resourcesToLoad).map(function (n) {
	    return _normalize(resourcesToLoad[n]);
	  })).then(function (loads) {
	    var names = [];
	    var importIds = [];

	    loads.forEach(function (l) {
	      names.push(undefined);
	      importIds.push(l.importId);
	    });

	    return viewEngine.importViewResources(importIds, names, appResources);
	  });

	  function _normalize(load) {
	    var moduleId = load.moduleId;
	    var ext = getExt(moduleId);

	    if (isOtherResource(moduleId)) {
	      moduleId = removeExt(moduleId);
	    }

	    return aurelia.loader.normalize(moduleId, load.relativeTo).then(function (normalized) {
	      return {
	        name: load.moduleId,
	        importId: isOtherResource(load.moduleId) ? addOriginalExt(normalized, ext) : normalized
	      };
	    });
	  }

	  function isOtherResource(name) {
	    var ext = getExt(name);
	    if (!ext) return false;
	    if (ext === '') return false;
	    if (ext === '.js' || ext === '.ts') return false;
	    return true;
	  }

	  function removeExt(name) {
	    return name.replace(extPattern, '');
	  }

	  function addOriginalExt(normalized, ext) {
	    return removeExt(normalized) + '.' + ext;
	  }
	}

	function getExt(name) {
	  var match = name.match(extPattern);
	  if (match && match.length > 0) {
	    return match[0].split('.')[1];
	  }
	}

	function assertProcessed(plugins) {
	  if (plugins.processed) {
	    throw new Error('This config instance has already been applied. To load more plugins or global resources, create a new FrameworkConfiguration instance.');
	  }
	}

	var FrameworkConfiguration = function () {
	  function FrameworkConfiguration(aurelia) {
	    var _this4 = this;



	    this.aurelia = aurelia;
	    this.container = aurelia.container;
	    this.info = [];
	    this.processed = false;
	    this.preTasks = [];
	    this.postTasks = [];
	    this.resourcesToLoad = {};
	    this.preTask(function () {
	      return aurelia.loader.normalize('aurelia-bootstrapper').then(function (name) {
	        return _this4.bootstrapperName = name;
	      });
	    });
	    this.postTask(function () {
	      return loadResources(aurelia, _this4.resourcesToLoad, aurelia.resources);
	    });
	  }

	  FrameworkConfiguration.prototype.instance = function instance(type, _instance) {
	    this.container.registerInstance(type, _instance);
	    return this;
	  };

	  FrameworkConfiguration.prototype.singleton = function singleton(type, implementation) {
	    this.container.registerSingleton(type, implementation);
	    return this;
	  };

	  FrameworkConfiguration.prototype.transient = function transient(type, implementation) {
	    this.container.registerTransient(type, implementation);
	    return this;
	  };

	  FrameworkConfiguration.prototype.preTask = function preTask(task) {
	    assertProcessed(this);
	    this.preTasks.push(task);
	    return this;
	  };

	  FrameworkConfiguration.prototype.postTask = function postTask(task) {
	    assertProcessed(this);
	    this.postTasks.push(task);
	    return this;
	  };

	  FrameworkConfiguration.prototype.feature = function feature(plugin, config) {
	    if (getExt(plugin)) {
	      return this.plugin({ moduleId: plugin, resourcesRelativeTo: [plugin, ''], config: config || {} });
	    }

	    return this.plugin({ moduleId: plugin + '/index', resourcesRelativeTo: [plugin, ''], config: config || {} });
	  };

	  FrameworkConfiguration.prototype.globalResources = function globalResources(resources) {
	    assertProcessed(this);

	    var toAdd = Array.isArray(resources) ? resources : arguments;
	    var resource = void 0;
	    var path = void 0;
	    var resourcesRelativeTo = this.resourcesRelativeTo || ['', ''];

	    for (var i = 0, ii = toAdd.length; i < ii; ++i) {
	      resource = toAdd[i];
	      if (typeof resource !== 'string') {
	        throw new Error('Invalid resource path [' + resource + ']. Resources must be specified as relative module IDs.');
	      }

	      var parent = resourcesRelativeTo[0];
	      var grandParent = resourcesRelativeTo[1];
	      var name = resource;

	      if ((resource.startsWith('./') || resource.startsWith('../')) && parent !== '') {
	        name = (0, _aureliaPath.join)(parent, resource);
	      }

	      this.resourcesToLoad[name] = { moduleId: name, relativeTo: grandParent };
	    }

	    return this;
	  };

	  FrameworkConfiguration.prototype.globalName = function globalName(resourcePath, newName) {
	    assertProcessed(this);
	    this.resourcesToLoad[resourcePath] = { moduleId: newName, relativeTo: '' };
	    return this;
	  };

	  FrameworkConfiguration.prototype.plugin = function plugin(_plugin, config) {
	    assertProcessed(this);

	    if (typeof _plugin === 'string') {
	      return this.plugin({ moduleId: _plugin, resourcesRelativeTo: [_plugin, ''], config: config || {} });
	    }

	    this.info.push(_plugin);
	    return this;
	  };

	  FrameworkConfiguration.prototype._addNormalizedPlugin = function _addNormalizedPlugin(name, config) {
	    var _this5 = this;

	    var plugin = { moduleId: name, resourcesRelativeTo: [name, ''], config: config || {} };
	    this.plugin(plugin);

	    this.preTask(function () {
	      var relativeTo = [name, _this5.bootstrapperName];
	      plugin.moduleId = name;
	      plugin.resourcesRelativeTo = relativeTo;
	      return Promise.resolve();
	    });

	    return this;
	  };

	  FrameworkConfiguration.prototype.defaultBindingLanguage = function defaultBindingLanguage() {
	    return this._addNormalizedPlugin('aurelia-templating-binding');
	  };

	  FrameworkConfiguration.prototype.router = function router() {
	    return this._addNormalizedPlugin('aurelia-templating-router');
	  };

	  FrameworkConfiguration.prototype.history = function history() {
	    return this._addNormalizedPlugin('aurelia-history-browser');
	  };

	  FrameworkConfiguration.prototype.defaultResources = function defaultResources() {
	    return this._addNormalizedPlugin('aurelia-templating-resources');
	  };

	  FrameworkConfiguration.prototype.eventAggregator = function eventAggregator() {
	    return this._addNormalizedPlugin('aurelia-event-aggregator');
	  };

	  FrameworkConfiguration.prototype.basicConfiguration = function basicConfiguration() {
	    return this.defaultBindingLanguage().defaultResources().eventAggregator();
	  };

	  FrameworkConfiguration.prototype.standardConfiguration = function standardConfiguration() {
	    return this.basicConfiguration().history().router();
	  };

	  FrameworkConfiguration.prototype.developmentLogging = function developmentLogging() {
	    var _this6 = this;

	    this.preTask(function () {
	      return _this6.aurelia.loader.normalize('aurelia-logging-console', _this6.bootstrapperName).then(function (name) {
	        return _this6.aurelia.loader.loadModule(name).then(function (m) {
	          TheLogManager.addAppender(new m.ConsoleAppender());
	          TheLogManager.setLevel(TheLogManager.logLevel.debug);
	        });
	      });
	    });

	    return this;
	  };

	  FrameworkConfiguration.prototype.apply = function apply() {
	    var _this7 = this;

	    if (this.processed) {
	      return Promise.resolve();
	    }

	    return runTasks(this, this.preTasks).then(function () {
	      var loader = _this7.aurelia.loader;
	      var info = _this7.info;
	      var current = void 0;

	      var next = function next() {
	        if (current = info.shift()) {
	          return loadPlugin(_this7, loader, current).then(next);
	        }

	        _this7.processed = true;
	        return Promise.resolve();
	      };

	      return next().then(function () {
	        return runTasks(_this7, _this7.postTasks);
	      });
	    });
	  };

	  return FrameworkConfiguration;
	}();

	exports.FrameworkConfiguration = FrameworkConfiguration;
	var LogManager = exports.LogManager = TheLogManager;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Container = exports.InvocationHandler = exports._emptyParameters = exports.SingletonRegistration = exports.TransientRegistration = exports.FactoryInvoker = exports.NewInstance = exports.Factory = exports.StrategyResolver = exports.Parent = exports.Optional = exports.All = exports.Lazy = exports.resolver = undefined;

	var _dec, _class, _dec2, _class3, _dec3, _class5, _dec4, _class7, _dec5, _class9, _dec6, _class11, _dec7, _class13, _classInvokers;

	exports.invoker = invoker;
	exports.factory = factory;
	exports.registration = registration;
	exports.transient = transient;
	exports.singleton = singleton;
	exports.autoinject = autoinject;
	exports.inject = inject;

	var _aureliaMetadata = __webpack_require__(10);

	var _aureliaPal = __webpack_require__(7);



	var resolver = exports.resolver = _aureliaMetadata.protocol.create('aurelia:resolver', function (target) {
	  if (!(typeof target.get === 'function')) {
	    return 'Resolvers must implement: get(container: Container, key: any): any';
	  }

	  return true;
	});

	var Lazy = exports.Lazy = (_dec = resolver(), _dec(_class = function () {
	  function Lazy(key) {
	    

	    this._key = key;
	  }

	  Lazy.prototype.get = function get(container) {
	    var _this = this;

	    return function () {
	      return container.get(_this._key);
	    };
	  };

	  Lazy.of = function of(key) {
	    return new Lazy(key);
	  };

	  return Lazy;
	}()) || _class);
	var All = exports.All = (_dec2 = resolver(), _dec2(_class3 = function () {
	  function All(key) {
	    

	    this._key = key;
	  }

	  All.prototype.get = function get(container) {
	    return container.getAll(this._key);
	  };

	  All.of = function of(key) {
	    return new All(key);
	  };

	  return All;
	}()) || _class3);
	var Optional = exports.Optional = (_dec3 = resolver(), _dec3(_class5 = function () {
	  function Optional(key) {
	    var checkParent = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

	    

	    this._key = key;
	    this._checkParent = checkParent;
	  }

	  Optional.prototype.get = function get(container) {
	    if (container.hasResolver(this._key, this._checkParent)) {
	      return container.get(this._key);
	    }

	    return null;
	  };

	  Optional.of = function of(key) {
	    var checkParent = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

	    return new Optional(key, checkParent);
	  };

	  return Optional;
	}()) || _class5);
	var Parent = exports.Parent = (_dec4 = resolver(), _dec4(_class7 = function () {
	  function Parent(key) {
	    

	    this._key = key;
	  }

	  Parent.prototype.get = function get(container) {
	    return container.parent ? container.parent.get(this._key) : null;
	  };

	  Parent.of = function of(key) {
	    return new Parent(key);
	  };

	  return Parent;
	}()) || _class7);
	var StrategyResolver = exports.StrategyResolver = (_dec5 = resolver(), _dec5(_class9 = function () {
	  function StrategyResolver(strategy, state) {
	    

	    this.strategy = strategy;
	    this.state = state;
	  }

	  StrategyResolver.prototype.get = function get(container, key) {
	    switch (this.strategy) {
	      case 0:
	        return this.state;
	      case 1:
	        var singleton = container.invoke(this.state);
	        this.state = singleton;
	        this.strategy = 0;
	        return singleton;
	      case 2:
	        return container.invoke(this.state);
	      case 3:
	        return this.state(container, key, this);
	      case 4:
	        return this.state[0].get(container, key);
	      case 5:
	        return container.get(this.state);
	      default:
	        throw new Error('Invalid strategy: ' + this.strategy);
	    }
	  };

	  return StrategyResolver;
	}()) || _class9);
	var Factory = exports.Factory = (_dec6 = resolver(), _dec6(_class11 = function () {
	  function Factory(key) {
	    

	    this._key = key;
	  }

	  Factory.prototype.get = function get(container) {
	    var _this2 = this;

	    return function () {
	      for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
	        rest[_key] = arguments[_key];
	      }

	      return container.invoke(_this2._key, rest);
	    };
	  };

	  Factory.of = function of(key) {
	    return new Factory(key);
	  };

	  return Factory;
	}()) || _class11);
	var NewInstance = exports.NewInstance = (_dec7 = resolver(), _dec7(_class13 = function () {
	  function NewInstance(key) {
	    

	    this.key = key;
	    this.asKey = key;
	  }

	  NewInstance.prototype.get = function get(container) {
	    var instance = container.invoke(this.key);
	    container.registerInstance(this.asKey, instance);
	    return instance;
	  };

	  NewInstance.prototype.as = function as(key) {
	    this.asKey = key;
	    return this;
	  };

	  NewInstance.of = function of(key) {
	    return new NewInstance(key);
	  };

	  return NewInstance;
	}()) || _class13);
	function invoker(value) {
	  return function (target) {
	    _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.invoker, value, target);
	  };
	}

	function factory(potentialTarget) {
	  var deco = function deco(target) {
	    _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.invoker, FactoryInvoker.instance, target);
	  };

	  return potentialTarget ? deco(potentialTarget) : deco;
	}

	var FactoryInvoker = exports.FactoryInvoker = function () {
	  function FactoryInvoker() {
	    
	  }

	  FactoryInvoker.prototype.invoke = function invoke(container, fn, dependencies) {
	    var i = dependencies.length;
	    var args = new Array(i);

	    while (i--) {
	      args[i] = container.get(dependencies[i]);
	    }

	    return fn.apply(undefined, args);
	  };

	  FactoryInvoker.prototype.invokeWithDynamicDependencies = function invokeWithDynamicDependencies(container, fn, staticDependencies, dynamicDependencies) {
	    var i = staticDependencies.length;
	    var args = new Array(i);

	    while (i--) {
	      args[i] = container.get(staticDependencies[i]);
	    }

	    if (dynamicDependencies !== undefined) {
	      args = args.concat(dynamicDependencies);
	    }

	    return fn.apply(undefined, args);
	  };

	  return FactoryInvoker;
	}();

	FactoryInvoker.instance = new FactoryInvoker();

	function registration(value) {
	  return function (target) {
	    _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.registration, value, target);
	  };
	}

	function transient(key) {
	  return registration(new TransientRegistration(key));
	}

	function singleton(keyOrRegisterInChild) {
	  var registerInChild = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	  return registration(new SingletonRegistration(keyOrRegisterInChild, registerInChild));
	}

	var TransientRegistration = exports.TransientRegistration = function () {
	  function TransientRegistration(key) {
	    

	    this._key = key;
	  }

	  TransientRegistration.prototype.registerResolver = function registerResolver(container, key, fn) {
	    return container.registerTransient(this._key || key, fn);
	  };

	  return TransientRegistration;
	}();

	var SingletonRegistration = exports.SingletonRegistration = function () {
	  function SingletonRegistration(keyOrRegisterInChild) {
	    var registerInChild = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	    

	    if (typeof keyOrRegisterInChild === 'boolean') {
	      this._registerInChild = keyOrRegisterInChild;
	    } else {
	      this._key = keyOrRegisterInChild;
	      this._registerInChild = registerInChild;
	    }
	  }

	  SingletonRegistration.prototype.registerResolver = function registerResolver(container, key, fn) {
	    return this._registerInChild ? container.registerSingleton(this._key || key, fn) : container.root.registerSingleton(this._key || key, fn);
	  };

	  return SingletonRegistration;
	}();

	var badKeyError = 'key/value cannot be null or undefined. Are you trying to inject/register something that doesn\'t exist with DI?';
	var _emptyParameters = exports._emptyParameters = Object.freeze([]);

	_aureliaMetadata.metadata.registration = 'aurelia:registration';
	_aureliaMetadata.metadata.invoker = 'aurelia:invoker';

	var resolverDecorates = resolver.decorates;

	var InvocationHandler = exports.InvocationHandler = function () {
	  function InvocationHandler(fn, invoker, dependencies) {
	    

	    this.fn = fn;
	    this.invoker = invoker;
	    this.dependencies = dependencies;
	  }

	  InvocationHandler.prototype.invoke = function invoke(container, dynamicDependencies) {
	    return dynamicDependencies !== undefined ? this.invoker.invokeWithDynamicDependencies(container, this.fn, this.dependencies, dynamicDependencies) : this.invoker.invoke(container, this.fn, this.dependencies);
	  };

	  return InvocationHandler;
	}();

	function invokeWithDynamicDependencies(container, fn, staticDependencies, dynamicDependencies) {
	  var i = staticDependencies.length;
	  var args = new Array(i);

	  while (i--) {
	    args[i] = container.get(staticDependencies[i]);
	  }

	  if (dynamicDependencies !== undefined) {
	    args = args.concat(dynamicDependencies);
	  }

	  return Reflect.construct(fn, args);
	}

	var classInvokers = (_classInvokers = {}, _classInvokers[0] = {
	  invoke: function invoke(container, Type) {
	    return new Type();
	  },

	  invokeWithDynamicDependencies: invokeWithDynamicDependencies
	}, _classInvokers[1] = {
	  invoke: function invoke(container, Type, deps) {
	    return new Type(container.get(deps[0]));
	  },

	  invokeWithDynamicDependencies: invokeWithDynamicDependencies
	}, _classInvokers[2] = {
	  invoke: function invoke(container, Type, deps) {
	    return new Type(container.get(deps[0]), container.get(deps[1]));
	  },

	  invokeWithDynamicDependencies: invokeWithDynamicDependencies
	}, _classInvokers[3] = {
	  invoke: function invoke(container, Type, deps) {
	    return new Type(container.get(deps[0]), container.get(deps[1]), container.get(deps[2]));
	  },

	  invokeWithDynamicDependencies: invokeWithDynamicDependencies
	}, _classInvokers[4] = {
	  invoke: function invoke(container, Type, deps) {
	    return new Type(container.get(deps[0]), container.get(deps[1]), container.get(deps[2]), container.get(deps[3]));
	  },

	  invokeWithDynamicDependencies: invokeWithDynamicDependencies
	}, _classInvokers[5] = {
	  invoke: function invoke(container, Type, deps) {
	    return new Type(container.get(deps[0]), container.get(deps[1]), container.get(deps[2]), container.get(deps[3]), container.get(deps[4]));
	  },

	  invokeWithDynamicDependencies: invokeWithDynamicDependencies
	}, _classInvokers.fallback = {
	  invoke: invokeWithDynamicDependencies,
	  invokeWithDynamicDependencies: invokeWithDynamicDependencies
	}, _classInvokers);

	function getDependencies(f) {
	  if (!f.hasOwnProperty('inject')) {
	    return [];
	  }

	  if (typeof f.inject === 'function') {
	    return f.inject();
	  }

	  return f.inject;
	}

	var Container = exports.Container = function () {
	  function Container(configuration) {
	    

	    if (configuration === undefined) {
	      configuration = {};
	    }

	    this._configuration = configuration;
	    this._onHandlerCreated = configuration.onHandlerCreated;
	    this._handlers = configuration.handlers || (configuration.handlers = new Map());
	    this._resolvers = new Map();
	    this.root = this;
	    this.parent = null;
	  }

	  Container.prototype.makeGlobal = function makeGlobal() {
	    Container.instance = this;
	    return this;
	  };

	  Container.prototype.setHandlerCreatedCallback = function setHandlerCreatedCallback(onHandlerCreated) {
	    this._onHandlerCreated = onHandlerCreated;
	    this._configuration.onHandlerCreated = onHandlerCreated;
	  };

	  Container.prototype.registerInstance = function registerInstance(key, instance) {
	    return this.registerResolver(key, new StrategyResolver(0, instance === undefined ? key : instance));
	  };

	  Container.prototype.registerSingleton = function registerSingleton(key, fn) {
	    return this.registerResolver(key, new StrategyResolver(1, fn === undefined ? key : fn));
	  };

	  Container.prototype.registerTransient = function registerTransient(key, fn) {
	    return this.registerResolver(key, new StrategyResolver(2, fn === undefined ? key : fn));
	  };

	  Container.prototype.registerHandler = function registerHandler(key, handler) {
	    return this.registerResolver(key, new StrategyResolver(3, handler));
	  };

	  Container.prototype.registerAlias = function registerAlias(originalKey, aliasKey) {
	    return this.registerResolver(aliasKey, new StrategyResolver(5, originalKey));
	  };

	  Container.prototype.registerResolver = function registerResolver(key, resolver) {
	    if (key === null || key === undefined) {
	      throw new Error(badKeyError);
	    }

	    var allResolvers = this._resolvers;
	    var result = allResolvers.get(key);

	    if (result === undefined) {
	      allResolvers.set(key, resolver);
	    } else if (result.strategy === 4) {
	      result.state.push(resolver);
	    } else {
	      allResolvers.set(key, new StrategyResolver(4, [result, resolver]));
	    }

	    return resolver;
	  };

	  Container.prototype.autoRegister = function autoRegister(key, fn) {
	    fn = fn === undefined ? key : fn;

	    if (typeof fn === 'function') {
	      var _registration = _aureliaMetadata.metadata.get(_aureliaMetadata.metadata.registration, fn);

	      if (_registration === undefined) {
	        return this.registerResolver(key, new StrategyResolver(1, fn));
	      }

	      return _registration.registerResolver(this, key, fn);
	    }

	    return this.registerResolver(key, new StrategyResolver(0, fn));
	  };

	  Container.prototype.autoRegisterAll = function autoRegisterAll(fns) {
	    var i = fns.length;
	    while (i--) {
	      this.autoRegister(fns[i]);
	    }
	  };

	  Container.prototype.unregister = function unregister(key) {
	    this._resolvers.delete(key);
	  };

	  Container.prototype.hasResolver = function hasResolver(key) {
	    var checkParent = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	    if (key === null || key === undefined) {
	      throw new Error(badKeyError);
	    }

	    return this._resolvers.has(key) || checkParent && this.parent !== null && this.parent.hasResolver(key, checkParent);
	  };

	  Container.prototype.get = function get(key) {
	    if (key === null || key === undefined) {
	      throw new Error(badKeyError);
	    }

	    if (key === Container) {
	      return this;
	    }

	    if (resolverDecorates(key)) {
	      return key.get(this, key);
	    }

	    var resolver = this._resolvers.get(key);

	    if (resolver === undefined) {
	      if (this.parent === null) {
	        return this.autoRegister(key).get(this, key);
	      }

	      return this.parent._get(key);
	    }

	    return resolver.get(this, key);
	  };

	  Container.prototype._get = function _get(key) {
	    var resolver = this._resolvers.get(key);

	    if (resolver === undefined) {
	      if (this.parent === null) {
	        return this.autoRegister(key).get(this, key);
	      }

	      return this.parent._get(key);
	    }

	    return resolver.get(this, key);
	  };

	  Container.prototype.getAll = function getAll(key) {
	    if (key === null || key === undefined) {
	      throw new Error(badKeyError);
	    }

	    var resolver = this._resolvers.get(key);

	    if (resolver === undefined) {
	      if (this.parent === null) {
	        return _emptyParameters;
	      }

	      return this.parent.getAll(key);
	    }

	    if (resolver.strategy === 4) {
	      var state = resolver.state;
	      var i = state.length;
	      var results = new Array(i);

	      while (i--) {
	        results[i] = state[i].get(this, key);
	      }

	      return results;
	    }

	    return [resolver.get(this, key)];
	  };

	  Container.prototype.createChild = function createChild() {
	    var child = new Container(this._configuration);
	    child.root = this.root;
	    child.parent = this;
	    return child;
	  };

	  Container.prototype.invoke = function invoke(fn, dynamicDependencies) {
	    try {
	      var _handler = this._handlers.get(fn);

	      if (_handler === undefined) {
	        _handler = this._createInvocationHandler(fn);
	        this._handlers.set(fn, _handler);
	      }

	      return _handler.invoke(this, dynamicDependencies);
	    } catch (e) {
	      throw new _aureliaPal.AggregateError('Error invoking ' + fn.name + '. Check the inner error for details.', e, true);
	    }
	  };

	  Container.prototype._createInvocationHandler = function _createInvocationHandler(fn) {
	    var dependencies = void 0;

	    if (fn.inject === undefined) {
	      dependencies = _aureliaMetadata.metadata.getOwn(_aureliaMetadata.metadata.paramTypes, fn) || _emptyParameters;
	    } else {
	      dependencies = [];
	      var ctor = fn;
	      while (typeof ctor === 'function') {
	        var _dependencies;

	        (_dependencies = dependencies).push.apply(_dependencies, getDependencies(ctor));
	        ctor = Object.getPrototypeOf(ctor);
	      }
	    }

	    var invoker = _aureliaMetadata.metadata.getOwn(_aureliaMetadata.metadata.invoker, fn) || classInvokers[dependencies.length] || classInvokers.fallback;

	    var handler = new InvocationHandler(fn, invoker, dependencies);
	    return this._onHandlerCreated !== undefined ? this._onHandlerCreated(handler) : handler;
	  };

	  return Container;
	}();

	function autoinject(potentialTarget) {
	  var deco = function deco(target) {
	    target.inject = _aureliaMetadata.metadata.getOwn(_aureliaMetadata.metadata.paramTypes, target) || _emptyParameters;
	  };

	  return potentialTarget ? deco(potentialTarget) : deco;
	}

	function inject() {
	  for (var _len2 = arguments.length, rest = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	    rest[_key2] = arguments[_key2];
	  }

	  return function (target, key, descriptor) {
	    if (descriptor) {
	      var _fn = descriptor.value;
	      _fn.inject = rest;
	    } else {
	      target.inject = rest;
	    }
	  };
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getSetObserver = exports.BindingEngine = exports.NameExpression = exports.Listener = exports.ListenerExpression = exports.BindingBehaviorResource = exports.ValueConverterResource = exports.Call = exports.CallExpression = exports.Binding = exports.BindingExpression = exports.ObjectObservationAdapter = exports.ObserverLocator = exports.SVGAnalyzer = exports.presentationAttributes = exports.presentationElements = exports.elements = exports.ComputedExpression = exports.ClassObserver = exports.SelectValueObserver = exports.CheckedObserver = exports.ValueAttributeObserver = exports.StyleObserver = exports.DataAttributeObserver = exports.dataAttributeAccessor = exports.XLinkAttributeObserver = exports.SetterObserver = exports.PrimitiveObserver = exports.propertyAccessor = exports.DirtyCheckProperty = exports.DirtyChecker = exports.EventManager = exports.getMapObserver = exports.ParserImplementation = exports.Parser = exports.Scanner = exports.Lexer = exports.Token = exports.bindingMode = exports.ExpressionCloner = exports.Unparser = exports.LiteralObject = exports.LiteralArray = exports.LiteralString = exports.LiteralPrimitive = exports.PrefixNot = exports.Binary = exports.CallFunction = exports.CallMember = exports.CallScope = exports.AccessKeyed = exports.AccessMember = exports.AccessScope = exports.AccessThis = exports.Conditional = exports.Assign = exports.ValueConverter = exports.BindingBehavior = exports.Chain = exports.Expression = exports.getArrayObserver = exports.CollectionLengthObserver = exports.ModifyCollectionObserver = exports.ExpressionObserver = exports.sourceContext = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _dec2, _class, _dec3, _class2, _dec4, _class3, _dec5, _class5, _dec6, _class7, _dec7, _class8, _dec8, _class9, _dec9, _class10, _class11, _temp, _dec10, _class12, _class13, _temp2;

	exports.camelCase = camelCase;
	exports.createOverrideContext = createOverrideContext;
	exports.getContextFor = getContextFor;
	exports.createScopeForTest = createScopeForTest;
	exports.connectable = connectable;
	exports.enqueueBindingConnect = enqueueBindingConnect;
	exports.subscriberCollection = subscriberCollection;
	exports.calcSplices = calcSplices;
	exports.mergeSplice = mergeSplice;
	exports.projectArraySplices = projectArraySplices;
	exports.getChangeRecords = getChangeRecords;
	exports.cloneExpression = cloneExpression;
	exports.hasDeclaredDependencies = hasDeclaredDependencies;
	exports.declarePropertyDependencies = declarePropertyDependencies;
	exports.computedFrom = computedFrom;
	exports.createComputedObserver = createComputedObserver;
	exports.valueConverter = valueConverter;
	exports.bindingBehavior = bindingBehavior;
	exports.observable = observable;

	var _aureliaLogging = __webpack_require__(21);

	var LogManager = _interopRequireWildcard(_aureliaLogging);

	var _aureliaPal = __webpack_require__(7);

	var _aureliaTaskQueue = __webpack_require__(22);

	var _aureliaMetadata = __webpack_require__(10);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



	var map = Object.create(null);

	function camelCase(name) {
	  if (name in map) {
	    return map[name];
	  }
	  var result = name.charAt(0).toLowerCase() + name.slice(1).replace(/[_.-](\w|$)/g, function (_, x) {
	    return x.toUpperCase();
	  });
	  map[name] = result;
	  return result;
	}

	function createOverrideContext(bindingContext, parentOverrideContext) {
	  return {
	    bindingContext: bindingContext,
	    parentOverrideContext: parentOverrideContext || null
	  };
	}

	function getContextFor(name, scope, ancestor) {
	  var oc = scope.overrideContext;

	  if (ancestor) {
	    while (ancestor && oc) {
	      ancestor--;
	      oc = oc.parentOverrideContext;
	    }
	    if (ancestor || !oc) {
	      return undefined;
	    }
	    return name in oc ? oc : oc.bindingContext;
	  }

	  while (oc && !(name in oc) && !(oc.bindingContext && name in oc.bindingContext)) {
	    oc = oc.parentOverrideContext;
	  }
	  if (oc) {
	    return name in oc ? oc : oc.bindingContext;
	  }

	  return scope.bindingContext || scope.overrideContext;
	}

	function createScopeForTest(bindingContext, parentBindingContext) {
	  if (parentBindingContext) {
	    return {
	      bindingContext: bindingContext,
	      overrideContext: createOverrideContext(bindingContext, createOverrideContext(parentBindingContext))
	    };
	  }
	  return {
	    bindingContext: bindingContext,
	    overrideContext: createOverrideContext(bindingContext)
	  };
	}

	var sourceContext = exports.sourceContext = 'Binding:source';
	var slotNames = [];
	var versionSlotNames = [];

	for (var i = 0; i < 100; i++) {
	  slotNames.push('_observer' + i);
	  versionSlotNames.push('_observerVersion' + i);
	}

	function addObserver(observer) {
	  var observerSlots = this._observerSlots === undefined ? 0 : this._observerSlots;
	  var i = observerSlots;
	  while (i-- && this[slotNames[i]] !== observer) {}

	  if (i === -1) {
	    i = 0;
	    while (this[slotNames[i]]) {
	      i++;
	    }
	    this[slotNames[i]] = observer;
	    observer.subscribe(sourceContext, this);

	    if (i === observerSlots) {
	      this._observerSlots = i + 1;
	    }
	  }

	  if (this._version === undefined) {
	    this._version = 0;
	  }
	  this[versionSlotNames[i]] = this._version;
	}

	function observeProperty(obj, propertyName) {
	  var observer = this.observerLocator.getObserver(obj, propertyName);
	  addObserver.call(this, observer);
	}

	function observeArray(array) {
	  var observer = this.observerLocator.getArrayObserver(array);
	  addObserver.call(this, observer);
	}

	function unobserve(all) {
	  var i = this._observerSlots;
	  while (i--) {
	    if (all || this[versionSlotNames[i]] !== this._version) {
	      var observer = this[slotNames[i]];
	      this[slotNames[i]] = null;
	      if (observer) {
	        observer.unsubscribe(sourceContext, this);
	      }
	    }
	  }
	}

	function connectable() {
	  return function (target) {
	    target.prototype.observeProperty = observeProperty;
	    target.prototype.observeArray = observeArray;
	    target.prototype.unobserve = unobserve;
	    target.prototype.addObserver = addObserver;
	  };
	}

	var bindings = new Map();
	var minimumImmediate = 100;
	var frameBudget = 15;

	var isFlushRequested = false;
	var immediate = 0;

	function flush(animationFrameStart) {
	  var i = 0;
	  var keys = bindings.keys();
	  var item = void 0;

	  while (item = keys.next()) {
	    if (item.done) {
	      break;
	    }

	    var binding = item.value;
	    bindings.delete(binding);
	    binding.connect(true);
	    i++;

	    if (i % 100 === 0 && _aureliaPal.PLATFORM.performance.now() - animationFrameStart > frameBudget) {
	      break;
	    }
	  }

	  if (bindings.size) {
	    _aureliaPal.PLATFORM.requestAnimationFrame(flush);
	  } else {
	    isFlushRequested = false;
	    immediate = 0;
	  }
	}

	function enqueueBindingConnect(binding) {
	  if (immediate < minimumImmediate) {
	    immediate++;
	    binding.connect(false);
	  } else {
	    bindings.set(binding);
	  }
	  if (!isFlushRequested) {
	    isFlushRequested = true;
	    _aureliaPal.PLATFORM.requestAnimationFrame(flush);
	  }
	}

	function addSubscriber(context, callable) {
	  if (this.hasSubscriber(context, callable)) {
	    return false;
	  }
	  if (!this._context0) {
	    this._context0 = context;
	    this._callable0 = callable;
	    return true;
	  }
	  if (!this._context1) {
	    this._context1 = context;
	    this._callable1 = callable;
	    return true;
	  }
	  if (!this._context2) {
	    this._context2 = context;
	    this._callable2 = callable;
	    return true;
	  }
	  if (!this._contextsRest) {
	    this._contextsRest = [context];
	    this._callablesRest = [callable];
	    return true;
	  }
	  this._contextsRest.push(context);
	  this._callablesRest.push(callable);
	  return true;
	}

	function removeSubscriber(context, callable) {
	  if (this._context0 === context && this._callable0 === callable) {
	    this._context0 = null;
	    this._callable0 = null;
	    return true;
	  }
	  if (this._context1 === context && this._callable1 === callable) {
	    this._context1 = null;
	    this._callable1 = null;
	    return true;
	  }
	  if (this._context2 === context && this._callable2 === callable) {
	    this._context2 = null;
	    this._callable2 = null;
	    return true;
	  }
	  var rest = this._contextsRest;
	  var index = void 0;
	  if (!rest || !rest.length || (index = rest.indexOf(context)) === -1 || this._callablesRest[index] !== callable) {
	    return false;
	  }
	  rest.splice(index, 1);
	  this._callablesRest.splice(index, 1);
	  return true;
	}

	var arrayPool1 = [];
	var arrayPool2 = [];
	var poolUtilization = [];

	function callSubscribers(newValue, oldValue) {
	  var context0 = this._context0;
	  var callable0 = this._callable0;
	  var context1 = this._context1;
	  var callable1 = this._callable1;
	  var context2 = this._context2;
	  var callable2 = this._callable2;
	  var length = this._contextsRest ? this._contextsRest.length : 0;
	  var contextsRest = void 0;
	  var callablesRest = void 0;
	  var poolIndex = void 0;
	  var i = void 0;
	  if (length) {
	    poolIndex = poolUtilization.length;
	    while (poolIndex-- && poolUtilization[poolIndex]) {}
	    if (poolIndex < 0) {
	      poolIndex = poolUtilization.length;
	      contextsRest = [];
	      callablesRest = [];
	      poolUtilization.push(true);
	      arrayPool1.push(contextsRest);
	      arrayPool2.push(callablesRest);
	    } else {
	      poolUtilization[poolIndex] = true;
	      contextsRest = arrayPool1[poolIndex];
	      callablesRest = arrayPool2[poolIndex];
	    }

	    i = length;
	    while (i--) {
	      contextsRest[i] = this._contextsRest[i];
	      callablesRest[i] = this._callablesRest[i];
	    }
	  }

	  if (context0) {
	    if (callable0) {
	      callable0.call(context0, newValue, oldValue);
	    } else {
	      context0(newValue, oldValue);
	    }
	  }
	  if (context1) {
	    if (callable1) {
	      callable1.call(context1, newValue, oldValue);
	    } else {
	      context1(newValue, oldValue);
	    }
	  }
	  if (context2) {
	    if (callable2) {
	      callable2.call(context2, newValue, oldValue);
	    } else {
	      context2(newValue, oldValue);
	    }
	  }
	  if (length) {
	    for (i = 0; i < length; i++) {
	      var callable = callablesRest[i];
	      var context = contextsRest[i];
	      if (callable) {
	        callable.call(context, newValue, oldValue);
	      } else {
	        context(newValue, oldValue);
	      }
	      contextsRest[i] = null;
	      callablesRest[i] = null;
	    }
	    poolUtilization[poolIndex] = false;
	  }
	}

	function hasSubscribers() {
	  return !!(this._context0 || this._context1 || this._context2 || this._contextsRest && this._contextsRest.length);
	}

	function hasSubscriber(context, callable) {
	  var has = this._context0 === context && this._callable0 === callable || this._context1 === context && this._callable1 === callable || this._context2 === context && this._callable2 === callable;
	  if (has) {
	    return true;
	  }
	  var index = void 0;
	  var contexts = this._contextsRest;
	  if (!contexts || (index = contexts.length) === 0) {
	    return false;
	  }
	  var callables = this._callablesRest;
	  while (index--) {
	    if (contexts[index] === context && callables[index] === callable) {
	      return true;
	    }
	  }
	  return false;
	}

	function subscriberCollection() {
	  return function (target) {
	    target.prototype.addSubscriber = addSubscriber;
	    target.prototype.removeSubscriber = removeSubscriber;
	    target.prototype.callSubscribers = callSubscribers;
	    target.prototype.hasSubscribers = hasSubscribers;
	    target.prototype.hasSubscriber = hasSubscriber;
	  };
	}

	var ExpressionObserver = exports.ExpressionObserver = (_dec = connectable(), _dec2 = subscriberCollection(), _dec(_class = _dec2(_class = function () {
	  function ExpressionObserver(scope, expression, observerLocator, lookupFunctions) {
	    

	    this.scope = scope;
	    this.expression = expression;
	    this.observerLocator = observerLocator;
	    this.lookupFunctions = lookupFunctions;
	  }

	  ExpressionObserver.prototype.getValue = function getValue() {
	    return this.expression.evaluate(this.scope, this.lookupFunctions);
	  };

	  ExpressionObserver.prototype.setValue = function setValue(newValue) {
	    this.expression.assign(this.scope, newValue);
	  };

	  ExpressionObserver.prototype.subscribe = function subscribe(context, callable) {
	    var _this = this;

	    if (!this.hasSubscribers()) {
	      this.oldValue = this.expression.evaluate(this.scope, this.lookupFunctions);
	      this.expression.connect(this, this.scope);
	    }
	    this.addSubscriber(context, callable);
	    if (arguments.length === 1 && context instanceof Function) {
	      return {
	        dispose: function dispose() {
	          _this.unsubscribe(context, callable);
	        }
	      };
	    }
	  };

	  ExpressionObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
	    if (this.removeSubscriber(context, callable) && !this.hasSubscribers()) {
	      this.unobserve(true);
	      this.oldValue = undefined;
	    }
	  };

	  ExpressionObserver.prototype.call = function call() {
	    var newValue = this.expression.evaluate(this.scope, this.lookupFunctions);
	    var oldValue = this.oldValue;
	    if (newValue !== oldValue) {
	      this.oldValue = newValue;
	      this.callSubscribers(newValue, oldValue);
	    }
	    this._version++;
	    this.expression.connect(this, this.scope);
	    this.unobserve(false);
	  };

	  return ExpressionObserver;
	}()) || _class) || _class);


	function isIndex(s) {
	  return +s === s >>> 0;
	}

	function toNumber(s) {
	  return +s;
	}

	function newSplice(index, removed, addedCount) {
	  return {
	    index: index,
	    removed: removed,
	    addedCount: addedCount
	  };
	}

	var EDIT_LEAVE = 0;
	var EDIT_UPDATE = 1;
	var EDIT_ADD = 2;
	var EDIT_DELETE = 3;

	function ArraySplice() {}

	ArraySplice.prototype = {
	  calcEditDistances: function calcEditDistances(current, currentStart, currentEnd, old, oldStart, oldEnd) {
	    var rowCount = oldEnd - oldStart + 1;
	    var columnCount = currentEnd - currentStart + 1;
	    var distances = new Array(rowCount);
	    var north = void 0;
	    var west = void 0;

	    for (var _i = 0; _i < rowCount; ++_i) {
	      distances[_i] = new Array(columnCount);
	      distances[_i][0] = _i;
	    }

	    for (var j = 0; j < columnCount; ++j) {
	      distances[0][j] = j;
	    }

	    for (var _i2 = 1; _i2 < rowCount; ++_i2) {
	      for (var _j = 1; _j < columnCount; ++_j) {
	        if (this.equals(current[currentStart + _j - 1], old[oldStart + _i2 - 1])) {
	          distances[_i2][_j] = distances[_i2 - 1][_j - 1];
	        } else {
	          north = distances[_i2 - 1][_j] + 1;
	          west = distances[_i2][_j - 1] + 1;
	          distances[_i2][_j] = north < west ? north : west;
	        }
	      }
	    }

	    return distances;
	  },

	  spliceOperationsFromEditDistances: function spliceOperationsFromEditDistances(distances) {
	    var i = distances.length - 1;
	    var j = distances[0].length - 1;
	    var current = distances[i][j];
	    var edits = [];
	    while (i > 0 || j > 0) {
	      if (i === 0) {
	        edits.push(EDIT_ADD);
	        j--;
	        continue;
	      }
	      if (j === 0) {
	        edits.push(EDIT_DELETE);
	        i--;
	        continue;
	      }
	      var northWest = distances[i - 1][j - 1];
	      var west = distances[i - 1][j];
	      var north = distances[i][j - 1];

	      var min = void 0;
	      if (west < north) {
	        min = west < northWest ? west : northWest;
	      } else {
	        min = north < northWest ? north : northWest;
	      }

	      if (min === northWest) {
	        if (northWest === current) {
	          edits.push(EDIT_LEAVE);
	        } else {
	          edits.push(EDIT_UPDATE);
	          current = northWest;
	        }
	        i--;
	        j--;
	      } else if (min === west) {
	        edits.push(EDIT_DELETE);
	        i--;
	        current = west;
	      } else {
	        edits.push(EDIT_ADD);
	        j--;
	        current = north;
	      }
	    }

	    edits.reverse();
	    return edits;
	  },

	  calcSplices: function calcSplices(current, currentStart, currentEnd, old, oldStart, oldEnd) {
	    var prefixCount = 0;
	    var suffixCount = 0;

	    var minLength = Math.min(currentEnd - currentStart, oldEnd - oldStart);
	    if (currentStart === 0 && oldStart === 0) {
	      prefixCount = this.sharedPrefix(current, old, minLength);
	    }

	    if (currentEnd === current.length && oldEnd === old.length) {
	      suffixCount = this.sharedSuffix(current, old, minLength - prefixCount);
	    }

	    currentStart += prefixCount;
	    oldStart += prefixCount;
	    currentEnd -= suffixCount;
	    oldEnd -= suffixCount;

	    if (currentEnd - currentStart === 0 && oldEnd - oldStart === 0) {
	      return [];
	    }

	    if (currentStart === currentEnd) {
	      var _splice = newSplice(currentStart, [], 0);
	      while (oldStart < oldEnd) {
	        _splice.removed.push(old[oldStart++]);
	      }

	      return [_splice];
	    } else if (oldStart === oldEnd) {
	      return [newSplice(currentStart, [], currentEnd - currentStart)];
	    }

	    var ops = this.spliceOperationsFromEditDistances(this.calcEditDistances(current, currentStart, currentEnd, old, oldStart, oldEnd));

	    var splice = undefined;
	    var splices = [];
	    var index = currentStart;
	    var oldIndex = oldStart;
	    for (var _i3 = 0; _i3 < ops.length; ++_i3) {
	      switch (ops[_i3]) {
	        case EDIT_LEAVE:
	          if (splice) {
	            splices.push(splice);
	            splice = undefined;
	          }

	          index++;
	          oldIndex++;
	          break;
	        case EDIT_UPDATE:
	          if (!splice) {
	            splice = newSplice(index, [], 0);
	          }

	          splice.addedCount++;
	          index++;

	          splice.removed.push(old[oldIndex]);
	          oldIndex++;
	          break;
	        case EDIT_ADD:
	          if (!splice) {
	            splice = newSplice(index, [], 0);
	          }

	          splice.addedCount++;
	          index++;
	          break;
	        case EDIT_DELETE:
	          if (!splice) {
	            splice = newSplice(index, [], 0);
	          }

	          splice.removed.push(old[oldIndex]);
	          oldIndex++;
	          break;
	      }
	    }

	    if (splice) {
	      splices.push(splice);
	    }
	    return splices;
	  },

	  sharedPrefix: function sharedPrefix(current, old, searchLength) {
	    for (var _i4 = 0; _i4 < searchLength; ++_i4) {
	      if (!this.equals(current[_i4], old[_i4])) {
	        return _i4;
	      }
	    }

	    return searchLength;
	  },

	  sharedSuffix: function sharedSuffix(current, old, searchLength) {
	    var index1 = current.length;
	    var index2 = old.length;
	    var count = 0;
	    while (count < searchLength && this.equals(current[--index1], old[--index2])) {
	      count++;
	    }

	    return count;
	  },

	  calculateSplices: function calculateSplices(current, previous) {
	    return this.calcSplices(current, 0, current.length, previous, 0, previous.length);
	  },

	  equals: function equals(currentValue, previousValue) {
	    return currentValue === previousValue;
	  }
	};

	var arraySplice = new ArraySplice();

	function calcSplices(current, currentStart, currentEnd, old, oldStart, oldEnd) {
	  return arraySplice.calcSplices(current, currentStart, currentEnd, old, oldStart, oldEnd);
	}

	function intersect(start1, end1, start2, end2) {
	  if (end1 < start2 || end2 < start1) {
	    return -1;
	  }

	  if (end1 === start2 || end2 === start1) {
	    return 0;
	  }

	  if (start1 < start2) {
	    if (end1 < end2) {
	      return end1 - start2;
	    }

	    return end2 - start2;
	  }

	  if (end2 < end1) {
	    return end2 - start1;
	  }

	  return end1 - start1;
	}

	function mergeSplice(splices, index, removed, addedCount) {
	  var splice = newSplice(index, removed, addedCount);

	  var inserted = false;
	  var insertionOffset = 0;

	  for (var _i5 = 0; _i5 < splices.length; _i5++) {
	    var current = splices[_i5];
	    current.index += insertionOffset;

	    if (inserted) {
	      continue;
	    }

	    var intersectCount = intersect(splice.index, splice.index + splice.removed.length, current.index, current.index + current.addedCount);

	    if (intersectCount >= 0) {

	      splices.splice(_i5, 1);
	      _i5--;

	      insertionOffset -= current.addedCount - current.removed.length;

	      splice.addedCount += current.addedCount - intersectCount;
	      var deleteCount = splice.removed.length + current.removed.length - intersectCount;

	      if (!splice.addedCount && !deleteCount) {
	        inserted = true;
	      } else {
	        var currentRemoved = current.removed;

	        if (splice.index < current.index) {
	          var prepend = splice.removed.slice(0, current.index - splice.index);
	          Array.prototype.push.apply(prepend, currentRemoved);
	          currentRemoved = prepend;
	        }

	        if (splice.index + splice.removed.length > current.index + current.addedCount) {
	          var append = splice.removed.slice(current.index + current.addedCount - splice.index);
	          Array.prototype.push.apply(currentRemoved, append);
	        }

	        splice.removed = currentRemoved;
	        if (current.index < splice.index) {
	          splice.index = current.index;
	        }
	      }
	    } else if (splice.index < current.index) {

	      inserted = true;

	      splices.splice(_i5, 0, splice);
	      _i5++;

	      var offset = splice.addedCount - splice.removed.length;
	      current.index += offset;
	      insertionOffset += offset;
	    }
	  }

	  if (!inserted) {
	    splices.push(splice);
	  }
	}

	function createInitialSplices(array, changeRecords) {
	  var splices = [];

	  for (var _i6 = 0; _i6 < changeRecords.length; _i6++) {
	    var record = changeRecords[_i6];
	    switch (record.type) {
	      case 'splice':
	        mergeSplice(splices, record.index, record.removed.slice(), record.addedCount);
	        break;
	      case 'add':
	      case 'update':
	      case 'delete':
	        if (!isIndex(record.name)) {
	          continue;
	        }

	        var index = toNumber(record.name);
	        if (index < 0) {
	          continue;
	        }

	        mergeSplice(splices, index, [record.oldValue], record.type === 'delete' ? 0 : 1);
	        break;
	      default:
	        console.error('Unexpected record type: ' + JSON.stringify(record));
	        break;
	    }
	  }

	  return splices;
	}

	function projectArraySplices(array, changeRecords) {
	  var splices = [];

	  createInitialSplices(array, changeRecords).forEach(function (splice) {
	    if (splice.addedCount === 1 && splice.removed.length === 1) {
	      if (splice.removed[0] !== array[splice.index]) {
	        splices.push(splice);
	      }

	      return;
	    }

	    splices = splices.concat(calcSplices(array, splice.index, splice.index + splice.addedCount, splice.removed, 0, splice.removed.length));
	  });

	  return splices;
	}

	function newRecord(type, object, key, oldValue) {
	  return {
	    type: type,
	    object: object,
	    key: key,
	    oldValue: oldValue
	  };
	}

	function getChangeRecords(map) {
	  var entries = new Array(map.size);
	  var keys = map.keys();
	  var i = 0;
	  var item = void 0;

	  while (item = keys.next()) {
	    if (item.done) {
	      break;
	    }

	    entries[i] = newRecord('added', map, item.value);
	    i++;
	  }

	  return entries;
	}

	var ModifyCollectionObserver = exports.ModifyCollectionObserver = (_dec3 = subscriberCollection(), _dec3(_class2 = function () {
	  function ModifyCollectionObserver(taskQueue, collection) {
	    

	    this.taskQueue = taskQueue;
	    this.queued = false;
	    this.changeRecords = null;
	    this.oldCollection = null;
	    this.collection = collection;
	    this.lengthPropertyName = collection instanceof Map || collection instanceof Set ? 'size' : 'length';
	  }

	  ModifyCollectionObserver.prototype.subscribe = function subscribe(context, callable) {
	    this.addSubscriber(context, callable);
	  };

	  ModifyCollectionObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
	    this.removeSubscriber(context, callable);
	  };

	  ModifyCollectionObserver.prototype.addChangeRecord = function addChangeRecord(changeRecord) {
	    if (!this.hasSubscribers() && !this.lengthObserver) {
	      return;
	    }

	    if (changeRecord.type === 'splice') {
	      var index = changeRecord.index;
	      var arrayLength = changeRecord.object.length;
	      if (index > arrayLength) {
	        index = arrayLength - changeRecord.addedCount;
	      } else if (index < 0) {
	        index = arrayLength + changeRecord.removed.length + index - changeRecord.addedCount;
	      }
	      if (index < 0) {
	        index = 0;
	      }
	      changeRecord.index = index;
	    }

	    if (this.changeRecords === null) {
	      this.changeRecords = [changeRecord];
	    } else {
	      this.changeRecords.push(changeRecord);
	    }

	    if (!this.queued) {
	      this.queued = true;
	      this.taskQueue.queueMicroTask(this);
	    }
	  };

	  ModifyCollectionObserver.prototype.flushChangeRecords = function flushChangeRecords() {
	    if (this.changeRecords && this.changeRecords.length || this.oldCollection) {
	      this.call();
	    }
	  };

	  ModifyCollectionObserver.prototype.reset = function reset(oldCollection) {
	    this.oldCollection = oldCollection;

	    if (this.hasSubscribers() && !this.queued) {
	      this.queued = true;
	      this.taskQueue.queueMicroTask(this);
	    }
	  };

	  ModifyCollectionObserver.prototype.getLengthObserver = function getLengthObserver() {
	    return this.lengthObserver || (this.lengthObserver = new CollectionLengthObserver(this.collection));
	  };

	  ModifyCollectionObserver.prototype.call = function call() {
	    var changeRecords = this.changeRecords;
	    var oldCollection = this.oldCollection;
	    var records = void 0;

	    this.queued = false;
	    this.changeRecords = [];
	    this.oldCollection = null;

	    if (this.hasSubscribers()) {
	      if (oldCollection) {
	        if (this.collection instanceof Map || this.collection instanceof Set) {
	          records = getChangeRecords(oldCollection);
	        } else {
	          records = calcSplices(this.collection, 0, this.collection.length, oldCollection, 0, oldCollection.length);
	        }
	      } else {
	        if (this.collection instanceof Map || this.collection instanceof Set) {
	          records = changeRecords;
	        } else {
	          records = projectArraySplices(this.collection, changeRecords);
	        }
	      }

	      this.callSubscribers(records);
	    }

	    if (this.lengthObserver) {
	      this.lengthObserver.call(this.collection[this.lengthPropertyName]);
	    }
	  };

	  return ModifyCollectionObserver;
	}()) || _class2);
	var CollectionLengthObserver = exports.CollectionLengthObserver = (_dec4 = subscriberCollection(), _dec4(_class3 = function () {
	  function CollectionLengthObserver(collection) {
	    

	    this.collection = collection;
	    this.lengthPropertyName = collection instanceof Map || collection instanceof Set ? 'size' : 'length';
	    this.currentValue = collection[this.lengthPropertyName];
	  }

	  CollectionLengthObserver.prototype.getValue = function getValue() {
	    return this.collection[this.lengthPropertyName];
	  };

	  CollectionLengthObserver.prototype.setValue = function setValue(newValue) {
	    this.collection[this.lengthPropertyName] = newValue;
	  };

	  CollectionLengthObserver.prototype.subscribe = function subscribe(context, callable) {
	    this.addSubscriber(context, callable);
	  };

	  CollectionLengthObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
	    this.removeSubscriber(context, callable);
	  };

	  CollectionLengthObserver.prototype.call = function call(newValue) {
	    var oldValue = this.currentValue;
	    this.callSubscribers(newValue, oldValue);
	    this.currentValue = newValue;
	  };

	  return CollectionLengthObserver;
	}()) || _class3);

	var pop = Array.prototype.pop;
	var push = Array.prototype.push;
	var reverse = Array.prototype.reverse;
	var shift = Array.prototype.shift;
	var sort = Array.prototype.sort;
	var splice = Array.prototype.splice;
	var unshift = Array.prototype.unshift;

	Array.prototype.pop = function () {
	  var notEmpty = this.length > 0;
	  var methodCallResult = pop.apply(this, arguments);
	  if (notEmpty && this.__array_observer__ !== undefined) {
	    this.__array_observer__.addChangeRecord({
	      type: 'delete',
	      object: this,
	      name: this.length,
	      oldValue: methodCallResult
	    });
	  }
	  return methodCallResult;
	};

	Array.prototype.push = function () {
	  var methodCallResult = push.apply(this, arguments);
	  if (this.__array_observer__ !== undefined) {
	    this.__array_observer__.addChangeRecord({
	      type: 'splice',
	      object: this,
	      index: this.length - arguments.length,
	      removed: [],
	      addedCount: arguments.length
	    });
	  }
	  return methodCallResult;
	};

	Array.prototype.reverse = function () {
	  var oldArray = void 0;
	  if (this.__array_observer__ !== undefined) {
	    this.__array_observer__.flushChangeRecords();
	    oldArray = this.slice();
	  }
	  var methodCallResult = reverse.apply(this, arguments);
	  if (this.__array_observer__ !== undefined) {
	    this.__array_observer__.reset(oldArray);
	  }
	  return methodCallResult;
	};

	Array.prototype.shift = function () {
	  var notEmpty = this.length > 0;
	  var methodCallResult = shift.apply(this, arguments);
	  if (notEmpty && this.__array_observer__ !== undefined) {
	    this.__array_observer__.addChangeRecord({
	      type: 'delete',
	      object: this,
	      name: 0,
	      oldValue: methodCallResult
	    });
	  }
	  return methodCallResult;
	};

	Array.prototype.sort = function () {
	  var oldArray = void 0;
	  if (this.__array_observer__ !== undefined) {
	    this.__array_observer__.flushChangeRecords();
	    oldArray = this.slice();
	  }
	  var methodCallResult = sort.apply(this, arguments);
	  if (this.__array_observer__ !== undefined) {
	    this.__array_observer__.reset(oldArray);
	  }
	  return methodCallResult;
	};

	Array.prototype.splice = function () {
	  var methodCallResult = splice.apply(this, arguments);
	  if (this.__array_observer__ !== undefined) {
	    this.__array_observer__.addChangeRecord({
	      type: 'splice',
	      object: this,
	      index: arguments[0],
	      removed: methodCallResult,
	      addedCount: arguments.length > 2 ? arguments.length - 2 : 0
	    });
	  }
	  return methodCallResult;
	};

	Array.prototype.unshift = function () {
	  var methodCallResult = unshift.apply(this, arguments);
	  if (this.__array_observer__ !== undefined) {
	    this.__array_observer__.addChangeRecord({
	      type: 'splice',
	      object: this,
	      index: 0,
	      removed: [],
	      addedCount: arguments.length
	    });
	  }
	  return methodCallResult;
	};

	function _getArrayObserver(taskQueue, array) {
	  return ModifyArrayObserver.for(taskQueue, array);
	}

	exports.getArrayObserver = _getArrayObserver;

	var ModifyArrayObserver = function (_ModifyCollectionObse) {
	  _inherits(ModifyArrayObserver, _ModifyCollectionObse);

	  function ModifyArrayObserver(taskQueue, array) {
	    

	    return _possibleConstructorReturn(this, _ModifyCollectionObse.call(this, taskQueue, array));
	  }

	  ModifyArrayObserver.for = function _for(taskQueue, array) {
	    if (!('__array_observer__' in array)) {
	      var observer = ModifyArrayObserver.create(taskQueue, array);
	      Reflect.defineProperty(array, '__array_observer__', { value: observer, enumerable: false, configurable: false });
	    }
	    return array.__array_observer__;
	  };

	  ModifyArrayObserver.create = function create(taskQueue, array) {
	    var observer = new ModifyArrayObserver(taskQueue, array);
	    return observer;
	  };

	  return ModifyArrayObserver;
	}(ModifyCollectionObserver);

	var Expression = exports.Expression = function () {
	  function Expression() {
	    

	    this.isChain = false;
	    this.isAssignable = false;
	  }

	  Expression.prototype.evaluate = function evaluate(scope, lookupFunctions, args) {
	    throw new Error('Binding expression "' + this + '" cannot be evaluated.');
	  };

	  Expression.prototype.assign = function assign(scope, value, lookupFunctions) {
	    throw new Error('Binding expression "' + this + '" cannot be assigned to.');
	  };

	  Expression.prototype.toString = function toString() {
	    return Unparser.unparse(this);
	  };

	  return Expression;
	}();

	var Chain = exports.Chain = function (_Expression) {
	  _inherits(Chain, _Expression);

	  function Chain(expressions) {
	    

	    var _this3 = _possibleConstructorReturn(this, _Expression.call(this));

	    _this3.expressions = expressions;
	    _this3.isChain = true;
	    return _this3;
	  }

	  Chain.prototype.evaluate = function evaluate(scope, lookupFunctions) {
	    var result = void 0;
	    var expressions = this.expressions;
	    var last = void 0;

	    for (var _i7 = 0, length = expressions.length; _i7 < length; ++_i7) {
	      last = expressions[_i7].evaluate(scope, lookupFunctions);

	      if (last !== null) {
	        result = last;
	      }
	    }

	    return result;
	  };

	  Chain.prototype.accept = function accept(visitor) {
	    return visitor.visitChain(this);
	  };

	  return Chain;
	}(Expression);

	var BindingBehavior = exports.BindingBehavior = function (_Expression2) {
	  _inherits(BindingBehavior, _Expression2);

	  function BindingBehavior(expression, name, args) {
	    

	    var _this4 = _possibleConstructorReturn(this, _Expression2.call(this));

	    _this4.expression = expression;
	    _this4.name = name;
	    _this4.args = args;
	    return _this4;
	  }

	  BindingBehavior.prototype.evaluate = function evaluate(scope, lookupFunctions) {
	    return this.expression.evaluate(scope, lookupFunctions);
	  };

	  BindingBehavior.prototype.assign = function assign(scope, value, lookupFunctions) {
	    return this.expression.assign(scope, value, lookupFunctions);
	  };

	  BindingBehavior.prototype.accept = function accept(visitor) {
	    return visitor.visitBindingBehavior(this);
	  };

	  BindingBehavior.prototype.connect = function connect(binding, scope) {
	    this.expression.connect(binding, scope);
	  };

	  BindingBehavior.prototype.bind = function bind(binding, scope, lookupFunctions) {
	    if (this.expression.expression && this.expression.bind) {
	      this.expression.bind(binding, scope, lookupFunctions);
	    }
	    var behavior = lookupFunctions.bindingBehaviors(this.name);
	    if (!behavior) {
	      throw new Error('No BindingBehavior named "' + this.name + '" was found!');
	    }
	    var behaviorKey = 'behavior-' + this.name;
	    if (binding[behaviorKey]) {
	      throw new Error('A binding behavior named "' + this.name + '" has already been applied to "' + this.expression + '"');
	    }
	    binding[behaviorKey] = behavior;
	    behavior.bind.apply(behavior, [binding, scope].concat(evalList(scope, this.args, binding.lookupFunctions)));
	  };

	  BindingBehavior.prototype.unbind = function unbind(binding, scope) {
	    var behaviorKey = 'behavior-' + this.name;
	    binding[behaviorKey].unbind(binding, scope);
	    binding[behaviorKey] = null;
	    if (this.expression.expression && this.expression.unbind) {
	      this.expression.unbind(binding, scope);
	    }
	  };

	  return BindingBehavior;
	}(Expression);

	var ValueConverter = exports.ValueConverter = function (_Expression3) {
	  _inherits(ValueConverter, _Expression3);

	  function ValueConverter(expression, name, args, allArgs) {
	    

	    var _this5 = _possibleConstructorReturn(this, _Expression3.call(this));

	    _this5.expression = expression;
	    _this5.name = name;
	    _this5.args = args;
	    _this5.allArgs = allArgs;
	    return _this5;
	  }

	  ValueConverter.prototype.evaluate = function evaluate(scope, lookupFunctions) {
	    var converter = lookupFunctions.valueConverters(this.name);
	    if (!converter) {
	      throw new Error('No ValueConverter named "' + this.name + '" was found!');
	    }

	    if ('toView' in converter) {
	      return converter.toView.apply(converter, evalList(scope, this.allArgs, lookupFunctions));
	    }

	    return this.allArgs[0].evaluate(scope, lookupFunctions);
	  };

	  ValueConverter.prototype.assign = function assign(scope, value, lookupFunctions) {
	    var converter = lookupFunctions.valueConverters(this.name);
	    if (!converter) {
	      throw new Error('No ValueConverter named "' + this.name + '" was found!');
	    }

	    if ('fromView' in converter) {
	      value = converter.fromView.apply(converter, [value].concat(evalList(scope, this.args, lookupFunctions)));
	    }

	    return this.allArgs[0].assign(scope, value, lookupFunctions);
	  };

	  ValueConverter.prototype.accept = function accept(visitor) {
	    return visitor.visitValueConverter(this);
	  };

	  ValueConverter.prototype.connect = function connect(binding, scope) {
	    var expressions = this.allArgs;
	    var i = expressions.length;
	    while (i--) {
	      expressions[i].connect(binding, scope);
	    }
	  };

	  return ValueConverter;
	}(Expression);

	var Assign = exports.Assign = function (_Expression4) {
	  _inherits(Assign, _Expression4);

	  function Assign(target, value) {
	    

	    var _this6 = _possibleConstructorReturn(this, _Expression4.call(this));

	    _this6.target = target;
	    _this6.value = value;
	    return _this6;
	  }

	  Assign.prototype.evaluate = function evaluate(scope, lookupFunctions) {
	    return this.target.assign(scope, this.value.evaluate(scope, lookupFunctions));
	  };

	  Assign.prototype.accept = function accept(vistor) {
	    vistor.visitAssign(this);
	  };

	  Assign.prototype.connect = function connect(binding, scope) {};

	  return Assign;
	}(Expression);

	var Conditional = exports.Conditional = function (_Expression5) {
	  _inherits(Conditional, _Expression5);

	  function Conditional(condition, yes, no) {
	    

	    var _this7 = _possibleConstructorReturn(this, _Expression5.call(this));

	    _this7.condition = condition;
	    _this7.yes = yes;
	    _this7.no = no;
	    return _this7;
	  }

	  Conditional.prototype.evaluate = function evaluate(scope, lookupFunctions) {
	    return !!this.condition.evaluate(scope) ? this.yes.evaluate(scope) : this.no.evaluate(scope);
	  };

	  Conditional.prototype.accept = function accept(visitor) {
	    return visitor.visitConditional(this);
	  };

	  Conditional.prototype.connect = function connect(binding, scope) {
	    this.condition.connect(binding, scope);
	    if (this.condition.evaluate(scope)) {
	      this.yes.connect(binding, scope);
	    } else {
	      this.no.connect(binding, scope);
	    }
	  };

	  return Conditional;
	}(Expression);

	var AccessThis = exports.AccessThis = function (_Expression6) {
	  _inherits(AccessThis, _Expression6);

	  function AccessThis(ancestor) {
	    

	    var _this8 = _possibleConstructorReturn(this, _Expression6.call(this));

	    _this8.ancestor = ancestor;
	    return _this8;
	  }

	  AccessThis.prototype.evaluate = function evaluate(scope, lookupFunctions) {
	    var oc = scope.overrideContext;
	    var i = this.ancestor;
	    while (i-- && oc) {
	      oc = oc.parentOverrideContext;
	    }
	    return i < 1 && oc ? oc.bindingContext : undefined;
	  };

	  AccessThis.prototype.accept = function accept(visitor) {
	    return visitor.visitAccessThis(this);
	  };

	  AccessThis.prototype.connect = function connect(binding, scope) {};

	  return AccessThis;
	}(Expression);

	var AccessScope = exports.AccessScope = function (_Expression7) {
	  _inherits(AccessScope, _Expression7);

	  function AccessScope(name, ancestor) {
	    

	    var _this9 = _possibleConstructorReturn(this, _Expression7.call(this));

	    _this9.name = name;
	    _this9.ancestor = ancestor;
	    _this9.isAssignable = true;
	    return _this9;
	  }

	  AccessScope.prototype.evaluate = function evaluate(scope, lookupFunctions) {
	    var context = getContextFor(this.name, scope, this.ancestor);
	    return context[this.name];
	  };

	  AccessScope.prototype.assign = function assign(scope, value) {
	    var context = getContextFor(this.name, scope, this.ancestor);
	    return context ? context[this.name] = value : undefined;
	  };

	  AccessScope.prototype.accept = function accept(visitor) {
	    return visitor.visitAccessScope(this);
	  };

	  AccessScope.prototype.connect = function connect(binding, scope) {
	    var context = getContextFor(this.name, scope, this.ancestor);
	    binding.observeProperty(context, this.name);
	  };

	  return AccessScope;
	}(Expression);

	var AccessMember = exports.AccessMember = function (_Expression8) {
	  _inherits(AccessMember, _Expression8);

	  function AccessMember(object, name) {
	    

	    var _this10 = _possibleConstructorReturn(this, _Expression8.call(this));

	    _this10.object = object;
	    _this10.name = name;
	    _this10.isAssignable = true;
	    return _this10;
	  }

	  AccessMember.prototype.evaluate = function evaluate(scope, lookupFunctions) {
	    var instance = this.object.evaluate(scope, lookupFunctions);
	    return instance === null || instance === undefined ? instance : instance[this.name];
	  };

	  AccessMember.prototype.assign = function assign(scope, value) {
	    var instance = this.object.evaluate(scope);

	    if (instance === null || instance === undefined) {
	      instance = {};
	      this.object.assign(scope, instance);
	    }

	    instance[this.name] = value;
	    return value;
	  };

	  AccessMember.prototype.accept = function accept(visitor) {
	    return visitor.visitAccessMember(this);
	  };

	  AccessMember.prototype.connect = function connect(binding, scope) {
	    this.object.connect(binding, scope);
	    var obj = this.object.evaluate(scope);
	    if (obj) {
	      binding.observeProperty(obj, this.name);
	    }
	  };

	  return AccessMember;
	}(Expression);

	var AccessKeyed = exports.AccessKeyed = function (_Expression9) {
	  _inherits(AccessKeyed, _Expression9);

	  function AccessKeyed(object, key) {
	    

	    var _this11 = _possibleConstructorReturn(this, _Expression9.call(this));

	    _this11.object = object;
	    _this11.key = key;
	    _this11.isAssignable = true;
	    return _this11;
	  }

	  AccessKeyed.prototype.evaluate = function evaluate(scope, lookupFunctions) {
	    var instance = this.object.evaluate(scope, lookupFunctions);
	    var lookup = this.key.evaluate(scope, lookupFunctions);
	    return getKeyed(instance, lookup);
	  };

	  AccessKeyed.prototype.assign = function assign(scope, value) {
	    var instance = this.object.evaluate(scope);
	    var lookup = this.key.evaluate(scope);
	    return setKeyed(instance, lookup, value);
	  };

	  AccessKeyed.prototype.accept = function accept(visitor) {
	    return visitor.visitAccessKeyed(this);
	  };

	  AccessKeyed.prototype.connect = function connect(binding, scope) {
	    this.object.connect(binding, scope);
	    var obj = this.object.evaluate(scope);
	    if (obj instanceof Object) {
	      this.key.connect(binding, scope);
	      var key = this.key.evaluate(scope);

	      if (key !== null && key !== undefined && !(Array.isArray(obj) && typeof key === 'number')) {
	        binding.observeProperty(obj, key);
	      }
	    }
	  };

	  return AccessKeyed;
	}(Expression);

	var CallScope = exports.CallScope = function (_Expression10) {
	  _inherits(CallScope, _Expression10);

	  function CallScope(name, args, ancestor) {
	    

	    var _this12 = _possibleConstructorReturn(this, _Expression10.call(this));

	    _this12.name = name;
	    _this12.args = args;
	    _this12.ancestor = ancestor;
	    return _this12;
	  }

	  CallScope.prototype.evaluate = function evaluate(scope, lookupFunctions, mustEvaluate) {
	    var args = evalList(scope, this.args, lookupFunctions);
	    var context = getContextFor(this.name, scope, this.ancestor);
	    var func = getFunction(context, this.name, mustEvaluate);
	    if (func) {
	      return func.apply(context, args);
	    }
	    return undefined;
	  };

	  CallScope.prototype.accept = function accept(visitor) {
	    return visitor.visitCallScope(this);
	  };

	  CallScope.prototype.connect = function connect(binding, scope) {
	    var args = this.args;
	    var i = args.length;
	    while (i--) {
	      args[i].connect(binding, scope);
	    }
	  };

	  return CallScope;
	}(Expression);

	var CallMember = exports.CallMember = function (_Expression11) {
	  _inherits(CallMember, _Expression11);

	  function CallMember(object, name, args) {
	    

	    var _this13 = _possibleConstructorReturn(this, _Expression11.call(this));

	    _this13.object = object;
	    _this13.name = name;
	    _this13.args = args;
	    return _this13;
	  }

	  CallMember.prototype.evaluate = function evaluate(scope, lookupFunctions, mustEvaluate) {
	    var instance = this.object.evaluate(scope, lookupFunctions);
	    var args = evalList(scope, this.args, lookupFunctions);
	    var func = getFunction(instance, this.name, mustEvaluate);
	    if (func) {
	      return func.apply(instance, args);
	    }
	    return undefined;
	  };

	  CallMember.prototype.accept = function accept(visitor) {
	    return visitor.visitCallMember(this);
	  };

	  CallMember.prototype.connect = function connect(binding, scope) {
	    this.object.connect(binding, scope);
	    var obj = this.object.evaluate(scope);
	    if (getFunction(obj, this.name, false)) {
	      var args = this.args;
	      var _i8 = args.length;
	      while (_i8--) {
	        args[_i8].connect(binding, scope);
	      }
	    }
	  };

	  return CallMember;
	}(Expression);

	var CallFunction = exports.CallFunction = function (_Expression12) {
	  _inherits(CallFunction, _Expression12);

	  function CallFunction(func, args) {
	    

	    var _this14 = _possibleConstructorReturn(this, _Expression12.call(this));

	    _this14.func = func;
	    _this14.args = args;
	    return _this14;
	  }

	  CallFunction.prototype.evaluate = function evaluate(scope, lookupFunctions, mustEvaluate) {
	    var func = this.func.evaluate(scope, lookupFunctions);
	    if (typeof func === 'function') {
	      return func.apply(null, evalList(scope, this.args, lookupFunctions));
	    }
	    if (!mustEvaluate && (func === null || func === undefined)) {
	      return undefined;
	    }
	    throw new Error(this.func + ' is not a function');
	  };

	  CallFunction.prototype.accept = function accept(visitor) {
	    return visitor.visitCallFunction(this);
	  };

	  CallFunction.prototype.connect = function connect(binding, scope) {
	    this.func.connect(binding, scope);
	    var func = this.func.evaluate(scope);
	    if (typeof func === 'function') {
	      var args = this.args;
	      var _i9 = args.length;
	      while (_i9--) {
	        args[_i9].connect(binding, scope);
	      }
	    }
	  };

	  return CallFunction;
	}(Expression);

	var Binary = exports.Binary = function (_Expression13) {
	  _inherits(Binary, _Expression13);

	  function Binary(operation, left, right) {
	    

	    var _this15 = _possibleConstructorReturn(this, _Expression13.call(this));

	    _this15.operation = operation;
	    _this15.left = left;
	    _this15.right = right;
	    return _this15;
	  }

	  Binary.prototype.evaluate = function evaluate(scope, lookupFunctions) {
	    var left = this.left.evaluate(scope);

	    switch (this.operation) {
	      case '&&':
	        return left && this.right.evaluate(scope);
	      case '||':
	        return left || this.right.evaluate(scope);
	    }

	    var right = this.right.evaluate(scope);

	    switch (this.operation) {
	      case '==':
	        return left == right;
	      case '===':
	        return left === right;
	      case '!=':
	        return left != right;
	      case '!==':
	        return left !== right;
	    }

	    if (left === null || right === null || left === undefined || right === undefined) {
	      switch (this.operation) {
	        case '+':
	          if (left !== null && left !== undefined) return left;
	          if (right !== null && right !== undefined) return right;
	          return 0;
	        case '-':
	          if (left !== null && left !== undefined) return left;
	          if (right !== null && right !== undefined) return 0 - right;
	          return 0;
	      }

	      return null;
	    }

	    switch (this.operation) {
	      case '+':
	        return autoConvertAdd(left, right);
	      case '-':
	        return left - right;
	      case '*':
	        return left * right;
	      case '/':
	        return left / right;
	      case '%':
	        return left % right;
	      case '<':
	        return left < right;
	      case '>':
	        return left > right;
	      case '<=':
	        return left <= right;
	      case '>=':
	        return left >= right;
	      case '^':
	        return left ^ right;
	    }

	    throw new Error('Internal error [' + this.operation + '] not handled');
	  };

	  Binary.prototype.accept = function accept(visitor) {
	    return visitor.visitBinary(this);
	  };

	  Binary.prototype.connect = function connect(binding, scope) {
	    this.left.connect(binding, scope);
	    var left = this.left.evaluate(scope);
	    if (this.operation === '&&' && !left || this.operation === '||' && left) {
	      return;
	    }
	    this.right.connect(binding, scope);
	  };

	  return Binary;
	}(Expression);

	var PrefixNot = exports.PrefixNot = function (_Expression14) {
	  _inherits(PrefixNot, _Expression14);

	  function PrefixNot(operation, expression) {
	    

	    var _this16 = _possibleConstructorReturn(this, _Expression14.call(this));

	    _this16.operation = operation;
	    _this16.expression = expression;
	    return _this16;
	  }

	  PrefixNot.prototype.evaluate = function evaluate(scope, lookupFunctions) {
	    return !this.expression.evaluate(scope);
	  };

	  PrefixNot.prototype.accept = function accept(visitor) {
	    return visitor.visitPrefix(this);
	  };

	  PrefixNot.prototype.connect = function connect(binding, scope) {
	    this.expression.connect(binding, scope);
	  };

	  return PrefixNot;
	}(Expression);

	var LiteralPrimitive = exports.LiteralPrimitive = function (_Expression15) {
	  _inherits(LiteralPrimitive, _Expression15);

	  function LiteralPrimitive(value) {
	    

	    var _this17 = _possibleConstructorReturn(this, _Expression15.call(this));

	    _this17.value = value;
	    return _this17;
	  }

	  LiteralPrimitive.prototype.evaluate = function evaluate(scope, lookupFunctions) {
	    return this.value;
	  };

	  LiteralPrimitive.prototype.accept = function accept(visitor) {
	    return visitor.visitLiteralPrimitive(this);
	  };

	  LiteralPrimitive.prototype.connect = function connect(binding, scope) {};

	  return LiteralPrimitive;
	}(Expression);

	var LiteralString = exports.LiteralString = function (_Expression16) {
	  _inherits(LiteralString, _Expression16);

	  function LiteralString(value) {
	    

	    var _this18 = _possibleConstructorReturn(this, _Expression16.call(this));

	    _this18.value = value;
	    return _this18;
	  }

	  LiteralString.prototype.evaluate = function evaluate(scope, lookupFunctions) {
	    return this.value;
	  };

	  LiteralString.prototype.accept = function accept(visitor) {
	    return visitor.visitLiteralString(this);
	  };

	  LiteralString.prototype.connect = function connect(binding, scope) {};

	  return LiteralString;
	}(Expression);

	var LiteralArray = exports.LiteralArray = function (_Expression17) {
	  _inherits(LiteralArray, _Expression17);

	  function LiteralArray(elements) {
	    

	    var _this19 = _possibleConstructorReturn(this, _Expression17.call(this));

	    _this19.elements = elements;
	    return _this19;
	  }

	  LiteralArray.prototype.evaluate = function evaluate(scope, lookupFunctions) {
	    var elements = this.elements;
	    var result = [];

	    for (var _i10 = 0, length = elements.length; _i10 < length; ++_i10) {
	      result[_i10] = elements[_i10].evaluate(scope, lookupFunctions);
	    }

	    return result;
	  };

	  LiteralArray.prototype.accept = function accept(visitor) {
	    return visitor.visitLiteralArray(this);
	  };

	  LiteralArray.prototype.connect = function connect(binding, scope) {
	    var length = this.elements.length;
	    for (var _i11 = 0; _i11 < length; _i11++) {
	      this.elements[_i11].connect(binding, scope);
	    }
	  };

	  return LiteralArray;
	}(Expression);

	var LiteralObject = exports.LiteralObject = function (_Expression18) {
	  _inherits(LiteralObject, _Expression18);

	  function LiteralObject(keys, values) {
	    

	    var _this20 = _possibleConstructorReturn(this, _Expression18.call(this));

	    _this20.keys = keys;
	    _this20.values = values;
	    return _this20;
	  }

	  LiteralObject.prototype.evaluate = function evaluate(scope, lookupFunctions) {
	    var instance = {};
	    var keys = this.keys;
	    var values = this.values;

	    for (var _i12 = 0, length = keys.length; _i12 < length; ++_i12) {
	      instance[keys[_i12]] = values[_i12].evaluate(scope, lookupFunctions);
	    }

	    return instance;
	  };

	  LiteralObject.prototype.accept = function accept(visitor) {
	    return visitor.visitLiteralObject(this);
	  };

	  LiteralObject.prototype.connect = function connect(binding, scope) {
	    var length = this.keys.length;
	    for (var _i13 = 0; _i13 < length; _i13++) {
	      this.values[_i13].connect(binding, scope);
	    }
	  };

	  return LiteralObject;
	}(Expression);

	var evalListCache = [[], [0], [0, 0], [0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0, 0]];

	function evalList(scope, list, lookupFunctions) {
	  var length = list.length;

	  for (var cacheLength = evalListCache.length; cacheLength <= length; ++cacheLength) {
	    evalListCache.push([]);
	  }

	  var result = evalListCache[length];

	  for (var _i14 = 0; _i14 < length; ++_i14) {
	    result[_i14] = list[_i14].evaluate(scope, lookupFunctions);
	  }

	  return result;
	}

	function autoConvertAdd(a, b) {
	  if (a !== null && b !== null) {
	    if (typeof a === 'string' && typeof b !== 'string') {
	      return a + b.toString();
	    }

	    if (typeof a !== 'string' && typeof b === 'string') {
	      return a.toString() + b;
	    }

	    return a + b;
	  }

	  if (a !== null) {
	    return a;
	  }

	  if (b !== null) {
	    return b;
	  }

	  return 0;
	}

	function getFunction(obj, name, mustExist) {
	  var func = obj === null || obj === undefined ? null : obj[name];
	  if (typeof func === 'function') {
	    return func;
	  }
	  if (!mustExist && (func === null || func === undefined)) {
	    return null;
	  }
	  throw new Error(name + ' is not a function');
	}

	function getKeyed(obj, key) {
	  if (Array.isArray(obj)) {
	    return obj[parseInt(key, 10)];
	  } else if (obj) {
	    return obj[key];
	  } else if (obj === null || obj === undefined) {
	    return undefined;
	  }

	  return obj[key];
	}

	function setKeyed(obj, key, value) {
	  if (Array.isArray(obj)) {
	    var index = parseInt(key, 10);

	    if (obj.length <= index) {
	      obj.length = index + 1;
	    }

	    obj[index] = value;
	  } else {
	    obj[key] = value;
	  }

	  return value;
	}

	var Unparser = exports.Unparser = function () {
	  function Unparser(buffer) {
	    

	    this.buffer = buffer;
	  }

	  Unparser.unparse = function unparse(expression) {
	    var buffer = [];
	    var visitor = new Unparser(buffer);

	    expression.accept(visitor);

	    return buffer.join('');
	  };

	  Unparser.prototype.write = function write(text) {
	    this.buffer.push(text);
	  };

	  Unparser.prototype.writeArgs = function writeArgs(args) {
	    this.write('(');

	    for (var _i15 = 0, length = args.length; _i15 < length; ++_i15) {
	      if (_i15 !== 0) {
	        this.write(',');
	      }

	      args[_i15].accept(this);
	    }

	    this.write(')');
	  };

	  Unparser.prototype.visitChain = function visitChain(chain) {
	    var expressions = chain.expressions;

	    for (var _i16 = 0, length = expression.length; _i16 < length; ++_i16) {
	      if (_i16 !== 0) {
	        this.write(';');
	      }

	      expressions[_i16].accept(this);
	    }
	  };

	  Unparser.prototype.visitBindingBehavior = function visitBindingBehavior(behavior) {
	    var args = behavior.args;

	    behavior.expression.accept(this);
	    this.write('&' + behavior.name);

	    for (var _i17 = 0, length = args.length; _i17 < length; ++_i17) {
	      this.write(':');
	      args[_i17].accept(this);
	    }
	  };

	  Unparser.prototype.visitValueConverter = function visitValueConverter(converter) {
	    var args = converter.args;

	    converter.expression.accept(this);
	    this.write('|' + converter.name);

	    for (var _i18 = 0, length = args.length; _i18 < length; ++_i18) {
	      this.write(':');
	      args[_i18].accept(this);
	    }
	  };

	  Unparser.prototype.visitAssign = function visitAssign(assign) {
	    assign.target.accept(this);
	    this.write('=');
	    assign.value.accept(this);
	  };

	  Unparser.prototype.visitConditional = function visitConditional(conditional) {
	    conditional.condition.accept(this);
	    this.write('?');
	    conditional.yes.accept(this);
	    this.write(':');
	    conditional.no.accept(this);
	  };

	  Unparser.prototype.visitAccessThis = function visitAccessThis(access) {
	    if (access.ancestor === 0) {
	      this.write('$this');
	      return;
	    }
	    this.write('$parent');
	    var i = access.ancestor - 1;
	    while (i--) {
	      this.write('.$parent');
	    }
	  };

	  Unparser.prototype.visitAccessScope = function visitAccessScope(access) {
	    var i = access.ancestor;
	    while (i--) {
	      this.write('$parent.');
	    }
	    this.write(access.name);
	  };

	  Unparser.prototype.visitAccessMember = function visitAccessMember(access) {
	    access.object.accept(this);
	    this.write('.' + access.name);
	  };

	  Unparser.prototype.visitAccessKeyed = function visitAccessKeyed(access) {
	    access.object.accept(this);
	    this.write('[');
	    access.key.accept(this);
	    this.write(']');
	  };

	  Unparser.prototype.visitCallScope = function visitCallScope(call) {
	    var i = call.ancestor;
	    while (i--) {
	      this.write('$parent.');
	    }
	    this.write(call.name);
	    this.writeArgs(call.args);
	  };

	  Unparser.prototype.visitCallFunction = function visitCallFunction(call) {
	    call.func.accept(this);
	    this.writeArgs(call.args);
	  };

	  Unparser.prototype.visitCallMember = function visitCallMember(call) {
	    call.object.accept(this);
	    this.write('.' + call.name);
	    this.writeArgs(call.args);
	  };

	  Unparser.prototype.visitPrefix = function visitPrefix(prefix) {
	    this.write('(' + prefix.operation);
	    prefix.expression.accept(this);
	    this.write(')');
	  };

	  Unparser.prototype.visitBinary = function visitBinary(binary) {
	    binary.left.accept(this);
	    this.write(binary.operation);
	    binary.right.accept(this);
	  };

	  Unparser.prototype.visitLiteralPrimitive = function visitLiteralPrimitive(literal) {
	    this.write('' + literal.value);
	  };

	  Unparser.prototype.visitLiteralArray = function visitLiteralArray(literal) {
	    var elements = literal.elements;

	    this.write('[');

	    for (var _i19 = 0, length = elements.length; _i19 < length; ++_i19) {
	      if (_i19 !== 0) {
	        this.write(',');
	      }

	      elements[_i19].accept(this);
	    }

	    this.write(']');
	  };

	  Unparser.prototype.visitLiteralObject = function visitLiteralObject(literal) {
	    var keys = literal.keys;
	    var values = literal.values;

	    this.write('{');

	    for (var _i20 = 0, length = keys.length; _i20 < length; ++_i20) {
	      if (_i20 !== 0) {
	        this.write(',');
	      }

	      this.write('\'' + keys[_i20] + '\':');
	      values[_i20].accept(this);
	    }

	    this.write('}');
	  };

	  Unparser.prototype.visitLiteralString = function visitLiteralString(literal) {
	    var escaped = literal.value.replace(/'/g, "\'");
	    this.write('\'' + escaped + '\'');
	  };

	  return Unparser;
	}();

	var ExpressionCloner = exports.ExpressionCloner = function () {
	  function ExpressionCloner() {
	    
	  }

	  ExpressionCloner.prototype.cloneExpressionArray = function cloneExpressionArray(array) {
	    var clonedArray = [];
	    var i = array.length;
	    while (i--) {
	      clonedArray[i] = array[i].accept(this);
	    }
	    return clonedArray;
	  };

	  ExpressionCloner.prototype.visitChain = function visitChain(chain) {
	    return new Chain(this.cloneExpressionArray(chain.expressions));
	  };

	  ExpressionCloner.prototype.visitBindingBehavior = function visitBindingBehavior(behavior) {
	    return new BindingBehavior(behavior.expression.accept(this), behavior.name, this.cloneExpressionArray(behavior.args));
	  };

	  ExpressionCloner.prototype.visitValueConverter = function visitValueConverter(converter) {
	    return new ValueConverter(converter.expression.accept(this), converter.name, this.cloneExpressionArray(converter.args));
	  };

	  ExpressionCloner.prototype.visitAssign = function visitAssign(assign) {
	    return new Assign(assign.target.accept(this), assign.value.accept(this));
	  };

	  ExpressionCloner.prototype.visitConditional = function visitConditional(conditional) {
	    return new Conditional(conditional.condition.accept(this), conditional.yes.accept(this), conditional.no.accept(this));
	  };

	  ExpressionCloner.prototype.visitAccessThis = function visitAccessThis(access) {
	    return new AccessThis(access.ancestor);
	  };

	  ExpressionCloner.prototype.visitAccessScope = function visitAccessScope(access) {
	    return new AccessScope(access.name, access.ancestor);
	  };

	  ExpressionCloner.prototype.visitAccessMember = function visitAccessMember(access) {
	    return new AccessMember(access.object.accept(this), access.name);
	  };

	  ExpressionCloner.prototype.visitAccessKeyed = function visitAccessKeyed(access) {
	    return new AccessKeyed(access.object.accept(this), access.key.accept(this));
	  };

	  ExpressionCloner.prototype.visitCallScope = function visitCallScope(call) {
	    return new CallScope(call.name, this.cloneExpressionArray(call.args), call.ancestor);
	  };

	  ExpressionCloner.prototype.visitCallFunction = function visitCallFunction(call) {
	    return new CallFunction(call.func.accept(this), this.cloneExpressionArray(call.args));
	  };

	  ExpressionCloner.prototype.visitCallMember = function visitCallMember(call) {
	    return new CallMember(call.object.accept(this), call.name, this.cloneExpressionArray(call.args));
	  };

	  ExpressionCloner.prototype.visitPrefix = function visitPrefix(prefix) {
	    return new PrefixNot(prefix.operation, prefix.expression.accept(this));
	  };

	  ExpressionCloner.prototype.visitBinary = function visitBinary(binary) {
	    return new Binary(binary.operation, binary.left.accept(this), binary.right.accept(this));
	  };

	  ExpressionCloner.prototype.visitLiteralPrimitive = function visitLiteralPrimitive(literal) {
	    return new LiteralPrimitive(literal);
	  };

	  ExpressionCloner.prototype.visitLiteralArray = function visitLiteralArray(literal) {
	    return new LiteralArray(this.cloneExpressionArray(literal.elements));
	  };

	  ExpressionCloner.prototype.visitLiteralObject = function visitLiteralObject(literal) {
	    return new LiteralObject(literal.keys, this.cloneExpressionArray(literal.values));
	  };

	  ExpressionCloner.prototype.visitLiteralString = function visitLiteralString(literal) {
	    return new LiteralString(literal.value);
	  };

	  return ExpressionCloner;
	}();

	function cloneExpression(expression) {
	  var visitor = new ExpressionCloner();
	  return expression.accept(visitor);
	}

	var bindingMode = exports.bindingMode = {
	  oneTime: 0,
	  oneWay: 1,
	  twoWay: 2
	};

	var Token = exports.Token = function () {
	  function Token(index, text) {
	    

	    this.index = index;
	    this.text = text;
	  }

	  Token.prototype.withOp = function withOp(op) {
	    this.opKey = op;
	    return this;
	  };

	  Token.prototype.withGetterSetter = function withGetterSetter(key) {
	    this.key = key;
	    return this;
	  };

	  Token.prototype.withValue = function withValue(value) {
	    this.value = value;
	    return this;
	  };

	  Token.prototype.toString = function toString() {
	    return 'Token(' + this.text + ')';
	  };

	  return Token;
	}();

	var Lexer = exports.Lexer = function () {
	  function Lexer() {
	    
	  }

	  Lexer.prototype.lex = function lex(text) {
	    var scanner = new Scanner(text);
	    var tokens = [];
	    var token = scanner.scanToken();

	    while (token) {
	      tokens.push(token);
	      token = scanner.scanToken();
	    }

	    return tokens;
	  };

	  return Lexer;
	}();

	var Scanner = exports.Scanner = function () {
	  function Scanner(input) {
	    

	    this.input = input;
	    this.length = input.length;
	    this.peek = 0;
	    this.index = -1;

	    this.advance();
	  }

	  Scanner.prototype.scanToken = function scanToken() {
	    while (this.peek <= $SPACE) {
	      if (++this.index >= this.length) {
	        this.peek = $EOF;
	        return null;
	      }

	      this.peek = this.input.charCodeAt(this.index);
	    }

	    if (isIdentifierStart(this.peek)) {
	      return this.scanIdentifier();
	    }

	    if (isDigit(this.peek)) {
	      return this.scanNumber(this.index);
	    }

	    var start = this.index;

	    switch (this.peek) {
	      case $PERIOD:
	        this.advance();
	        return isDigit(this.peek) ? this.scanNumber(start) : new Token(start, '.');
	      case $LPAREN:
	      case $RPAREN:
	      case $LBRACE:
	      case $RBRACE:
	      case $LBRACKET:
	      case $RBRACKET:
	      case $COMMA:
	      case $COLON:
	      case $SEMICOLON:
	        return this.scanCharacter(start, String.fromCharCode(this.peek));
	      case $SQ:
	      case $DQ:
	        return this.scanString();
	      case $PLUS:
	      case $MINUS:
	      case $STAR:
	      case $SLASH:
	      case $PERCENT:
	      case $CARET:
	      case $QUESTION:
	        return this.scanOperator(start, String.fromCharCode(this.peek));
	      case $LT:
	      case $GT:
	      case $BANG:
	      case $EQ:
	        return this.scanComplexOperator(start, $EQ, String.fromCharCode(this.peek), '=');
	      case $AMPERSAND:
	        return this.scanComplexOperator(start, $AMPERSAND, '&', '&');
	      case $BAR:
	        return this.scanComplexOperator(start, $BAR, '|', '|');
	      case $NBSP:
	        while (isWhitespace(this.peek)) {
	          this.advance();
	        }

	        return this.scanToken();
	    }

	    var character = String.fromCharCode(this.peek);
	    this.error('Unexpected character [' + character + ']');
	    return null;
	  };

	  Scanner.prototype.scanCharacter = function scanCharacter(start, text) {
	    assert(this.peek === text.charCodeAt(0));
	    this.advance();
	    return new Token(start, text);
	  };

	  Scanner.prototype.scanOperator = function scanOperator(start, text) {
	    assert(this.peek === text.charCodeAt(0));
	    assert(OPERATORS.indexOf(text) !== -1);
	    this.advance();
	    return new Token(start, text).withOp(text);
	  };

	  Scanner.prototype.scanComplexOperator = function scanComplexOperator(start, code, one, two) {
	    assert(this.peek === one.charCodeAt(0));
	    this.advance();

	    var text = one;

	    if (this.peek === code) {
	      this.advance();
	      text += two;
	    }

	    if (this.peek === code) {
	      this.advance();
	      text += two;
	    }

	    assert(OPERATORS.indexOf(text) !== -1);

	    return new Token(start, text).withOp(text);
	  };

	  Scanner.prototype.scanIdentifier = function scanIdentifier() {
	    assert(isIdentifierStart(this.peek));
	    var start = this.index;

	    this.advance();

	    while (isIdentifierPart(this.peek)) {
	      this.advance();
	    }

	    var text = this.input.substring(start, this.index);
	    var result = new Token(start, text);

	    if (OPERATORS.indexOf(text) !== -1) {
	      result.withOp(text);
	    } else {
	      result.withGetterSetter(text);
	    }

	    return result;
	  };

	  Scanner.prototype.scanNumber = function scanNumber(start) {
	    assert(isDigit(this.peek));
	    var simple = this.index === start;
	    this.advance();

	    while (true) {
	      if (!isDigit(this.peek)) {
	        if (this.peek === $PERIOD) {
	          simple = false;
	        } else if (isExponentStart(this.peek)) {
	          this.advance();

	          if (isExponentSign(this.peek)) {
	            this.advance();
	          }

	          if (!isDigit(this.peek)) {
	            this.error('Invalid exponent', -1);
	          }

	          simple = false;
	        } else {
	          break;
	        }
	      }

	      this.advance();
	    }

	    var text = this.input.substring(start, this.index);
	    var value = simple ? parseInt(text, 10) : parseFloat(text);
	    return new Token(start, text).withValue(value);
	  };

	  Scanner.prototype.scanString = function scanString() {
	    assert(this.peek === $SQ || this.peek === $DQ);

	    var start = this.index;
	    var quote = this.peek;

	    this.advance();

	    var buffer = void 0;
	    var marker = this.index;

	    while (this.peek !== quote) {
	      if (this.peek === $BACKSLASH) {
	        if (!buffer) {
	          buffer = [];
	        }

	        buffer.push(this.input.substring(marker, this.index));
	        this.advance();

	        var _unescaped = void 0;

	        if (this.peek === $u) {
	          var hex = this.input.substring(this.index + 1, this.index + 5);

	          if (!/[A-Z0-9]{4}/.test(hex)) {
	            this.error('Invalid unicode escape [\\u' + hex + ']');
	          }

	          _unescaped = parseInt(hex, 16);

	          for (var _i21 = 0; _i21 < 5; ++_i21) {
	            this.advance();
	          }
	        } else {
	          _unescaped = unescape(this.peek);
	          this.advance();
	        }

	        buffer.push(String.fromCharCode(_unescaped));
	        marker = this.index;
	      } else if (this.peek === $EOF) {
	        this.error('Unterminated quote');
	      } else {
	        this.advance();
	      }
	    }

	    var last = this.input.substring(marker, this.index);
	    this.advance();
	    var text = this.input.substring(start, this.index);

	    var unescaped = last;

	    if (buffer !== null && buffer !== undefined) {
	      buffer.push(last);
	      unescaped = buffer.join('');
	    }

	    return new Token(start, text).withValue(unescaped);
	  };

	  Scanner.prototype.advance = function advance() {
	    if (++this.index >= this.length) {
	      this.peek = $EOF;
	    } else {
	      this.peek = this.input.charCodeAt(this.index);
	    }
	  };

	  Scanner.prototype.error = function error(message) {
	    var offset = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	    var position = this.index + offset;
	    throw new Error('Lexer Error: ' + message + ' at column ' + position + ' in expression [' + this.input + ']');
	  };

	  return Scanner;
	}();

	var OPERATORS = ['undefined', 'null', 'true', 'false', '+', '-', '*', '/', '%', '^', '=', '==', '===', '!=', '!==', '<', '>', '<=', '>=', '&&', '||', '&', '|', '!', '?'];

	var $EOF = 0;
	var $TAB = 9;
	var $LF = 10;
	var $VTAB = 11;
	var $FF = 12;
	var $CR = 13;
	var $SPACE = 32;
	var $BANG = 33;
	var $DQ = 34;
	var $$ = 36;
	var $PERCENT = 37;
	var $AMPERSAND = 38;
	var $SQ = 39;
	var $LPAREN = 40;
	var $RPAREN = 41;
	var $STAR = 42;
	var $PLUS = 43;
	var $COMMA = 44;
	var $MINUS = 45;
	var $PERIOD = 46;
	var $SLASH = 47;
	var $COLON = 58;
	var $SEMICOLON = 59;
	var $LT = 60;
	var $EQ = 61;
	var $GT = 62;
	var $QUESTION = 63;

	var $0 = 48;
	var $9 = 57;

	var $A = 65;
	var $E = 69;
	var $Z = 90;

	var $LBRACKET = 91;
	var $BACKSLASH = 92;
	var $RBRACKET = 93;
	var $CARET = 94;
	var $_ = 95;

	var $a = 97;
	var $e = 101;
	var $f = 102;
	var $n = 110;
	var $r = 114;
	var $t = 116;
	var $u = 117;
	var $v = 118;
	var $z = 122;

	var $LBRACE = 123;
	var $BAR = 124;
	var $RBRACE = 125;
	var $NBSP = 160;

	function isWhitespace(code) {
	  return code >= $TAB && code <= $SPACE || code === $NBSP;
	}

	function isIdentifierStart(code) {
	  return $a <= code && code <= $z || $A <= code && code <= $Z || code === $_ || code === $$;
	}

	function isIdentifierPart(code) {
	  return $a <= code && code <= $z || $A <= code && code <= $Z || $0 <= code && code <= $9 || code === $_ || code === $$;
	}

	function isDigit(code) {
	  return $0 <= code && code <= $9;
	}

	function isExponentStart(code) {
	  return code === $e || code === $E;
	}

	function isExponentSign(code) {
	  return code === $MINUS || code === $PLUS;
	}

	function unescape(code) {
	  switch (code) {
	    case $n:
	      return $LF;
	    case $f:
	      return $FF;
	    case $r:
	      return $CR;
	    case $t:
	      return $TAB;
	    case $v:
	      return $VTAB;
	    default:
	      return code;
	  }
	}

	function assert(condition, message) {
	  if (!condition) {
	    throw message || 'Assertion failed';
	  }
	}

	var EOF = new Token(-1, null);

	var Parser = exports.Parser = function () {
	  function Parser() {
	    

	    this.cache = {};
	    this.lexer = new Lexer();
	  }

	  Parser.prototype.parse = function parse(input) {
	    input = input || '';

	    return this.cache[input] || (this.cache[input] = new ParserImplementation(this.lexer, input).parseChain());
	  };

	  return Parser;
	}();

	var ParserImplementation = exports.ParserImplementation = function () {
	  function ParserImplementation(lexer, input) {
	    

	    this.index = 0;
	    this.input = input;
	    this.tokens = lexer.lex(input);
	  }

	  ParserImplementation.prototype.parseChain = function parseChain() {
	    var isChain = false;
	    var expressions = [];

	    while (this.optional(';')) {
	      isChain = true;
	    }

	    while (this.index < this.tokens.length) {
	      if (this.peek.text === ')' || this.peek.text === '}' || this.peek.text === ']') {
	        this.error('Unconsumed token ' + this.peek.text);
	      }

	      var expr = this.parseBindingBehavior();
	      expressions.push(expr);

	      while (this.optional(';')) {
	        isChain = true;
	      }

	      if (isChain) {
	        this.error('Multiple expressions are not allowed.');
	      }
	    }

	    return expressions.length === 1 ? expressions[0] : new Chain(expressions);
	  };

	  ParserImplementation.prototype.parseBindingBehavior = function parseBindingBehavior() {
	    var result = this.parseValueConverter();

	    while (this.optional('&')) {
	      var name = this.peek.text;
	      var args = [];

	      this.advance();

	      while (this.optional(':')) {
	        args.push(this.parseExpression());
	      }

	      result = new BindingBehavior(result, name, args);
	    }

	    return result;
	  };

	  ParserImplementation.prototype.parseValueConverter = function parseValueConverter() {
	    var result = this.parseExpression();

	    while (this.optional('|')) {
	      var name = this.peek.text;
	      var args = [];

	      this.advance();

	      while (this.optional(':')) {
	        args.push(this.parseExpression());
	      }

	      result = new ValueConverter(result, name, args, [result].concat(args));
	    }

	    return result;
	  };

	  ParserImplementation.prototype.parseExpression = function parseExpression() {
	    var start = this.peek.index;
	    var result = this.parseConditional();

	    while (this.peek.text === '=') {
	      if (!result.isAssignable) {
	        var end = this.index < this.tokens.length ? this.peek.index : this.input.length;
	        var _expression = this.input.substring(start, end);

	        this.error('Expression ' + _expression + ' is not assignable');
	      }

	      this.expect('=');
	      result = new Assign(result, this.parseConditional());
	    }

	    return result;
	  };

	  ParserImplementation.prototype.parseConditional = function parseConditional() {
	    var start = this.peek.index;
	    var result = this.parseLogicalOr();

	    if (this.optional('?')) {
	      var yes = this.parseExpression();

	      if (!this.optional(':')) {
	        var end = this.index < this.tokens.length ? this.peek.index : this.input.length;
	        var _expression2 = this.input.substring(start, end);

	        this.error('Conditional expression ' + _expression2 + ' requires all 3 expressions');
	      }

	      var no = this.parseExpression();
	      result = new Conditional(result, yes, no);
	    }

	    return result;
	  };

	  ParserImplementation.prototype.parseLogicalOr = function parseLogicalOr() {
	    var result = this.parseLogicalAnd();

	    while (this.optional('||')) {
	      result = new Binary('||', result, this.parseLogicalAnd());
	    }

	    return result;
	  };

	  ParserImplementation.prototype.parseLogicalAnd = function parseLogicalAnd() {
	    var result = this.parseEquality();

	    while (this.optional('&&')) {
	      result = new Binary('&&', result, this.parseEquality());
	    }

	    return result;
	  };

	  ParserImplementation.prototype.parseEquality = function parseEquality() {
	    var result = this.parseRelational();

	    while (true) {
	      if (this.optional('==')) {
	        result = new Binary('==', result, this.parseRelational());
	      } else if (this.optional('!=')) {
	        result = new Binary('!=', result, this.parseRelational());
	      } else if (this.optional('===')) {
	        result = new Binary('===', result, this.parseRelational());
	      } else if (this.optional('!==')) {
	        result = new Binary('!==', result, this.parseRelational());
	      } else {
	        return result;
	      }
	    }
	  };

	  ParserImplementation.prototype.parseRelational = function parseRelational() {
	    var result = this.parseAdditive();

	    while (true) {
	      if (this.optional('<')) {
	        result = new Binary('<', result, this.parseAdditive());
	      } else if (this.optional('>')) {
	        result = new Binary('>', result, this.parseAdditive());
	      } else if (this.optional('<=')) {
	        result = new Binary('<=', result, this.parseAdditive());
	      } else if (this.optional('>=')) {
	        result = new Binary('>=', result, this.parseAdditive());
	      } else {
	        return result;
	      }
	    }
	  };

	  ParserImplementation.prototype.parseAdditive = function parseAdditive() {
	    var result = this.parseMultiplicative();

	    while (true) {
	      if (this.optional('+')) {
	        result = new Binary('+', result, this.parseMultiplicative());
	      } else if (this.optional('-')) {
	        result = new Binary('-', result, this.parseMultiplicative());
	      } else {
	        return result;
	      }
	    }
	  };

	  ParserImplementation.prototype.parseMultiplicative = function parseMultiplicative() {
	    var result = this.parsePrefix();

	    while (true) {
	      if (this.optional('*')) {
	        result = new Binary('*', result, this.parsePrefix());
	      } else if (this.optional('%')) {
	        result = new Binary('%', result, this.parsePrefix());
	      } else if (this.optional('/')) {
	        result = new Binary('/', result, this.parsePrefix());
	      } else {
	        return result;
	      }
	    }
	  };

	  ParserImplementation.prototype.parsePrefix = function parsePrefix() {
	    if (this.optional('+')) {
	      return this.parsePrefix();
	    } else if (this.optional('-')) {
	        return new Binary('-', new LiteralPrimitive(0), this.parsePrefix());
	      } else if (this.optional('!')) {
	        return new PrefixNot('!', this.parsePrefix());
	      }

	    return this.parseAccessOrCallMember();
	  };

	  ParserImplementation.prototype.parseAccessOrCallMember = function parseAccessOrCallMember() {
	    var result = this.parsePrimary();

	    while (true) {
	      if (this.optional('.')) {
	        var name = this.peek.text;

	        this.advance();

	        if (this.optional('(')) {
	          var args = this.parseExpressionList(')');
	          this.expect(')');
	          if (result instanceof AccessThis) {
	            result = new CallScope(name, args, result.ancestor);
	          } else {
	            result = new CallMember(result, name, args);
	          }
	        } else {
	          if (result instanceof AccessThis) {
	            result = new AccessScope(name, result.ancestor);
	          } else {
	            result = new AccessMember(result, name);
	          }
	        }
	      } else if (this.optional('[')) {
	        var key = this.parseExpression();
	        this.expect(']');
	        result = new AccessKeyed(result, key);
	      } else if (this.optional('(')) {
	        var _args = this.parseExpressionList(')');
	        this.expect(')');
	        result = new CallFunction(result, _args);
	      } else {
	        return result;
	      }
	    }
	  };

	  ParserImplementation.prototype.parsePrimary = function parsePrimary() {
	    if (this.optional('(')) {
	      var result = this.parseExpression();
	      this.expect(')');
	      return result;
	    } else if (this.optional('null')) {
	      return new LiteralPrimitive(null);
	    } else if (this.optional('undefined')) {
	      return new LiteralPrimitive(undefined);
	    } else if (this.optional('true')) {
	      return new LiteralPrimitive(true);
	    } else if (this.optional('false')) {
	      return new LiteralPrimitive(false);
	    } else if (this.optional('[')) {
	      var elements = this.parseExpressionList(']');
	      this.expect(']');
	      return new LiteralArray(elements);
	    } else if (this.peek.text === '{') {
	      return this.parseObject();
	    } else if (this.peek.key !== null && this.peek.key !== undefined) {
	      return this.parseAccessOrCallScope();
	    } else if (this.peek.value !== null && this.peek.value !== undefined) {
	      var value = this.peek.value;
	      this.advance();
	      return value instanceof String || typeof value === 'string' ? new LiteralString(value) : new LiteralPrimitive(value);
	    } else if (this.index >= this.tokens.length) {
	      throw new Error('Unexpected end of expression: ' + this.input);
	    } else {
	      this.error('Unexpected token ' + this.peek.text);
	    }
	  };

	  ParserImplementation.prototype.parseAccessOrCallScope = function parseAccessOrCallScope() {
	    var name = this.peek.key;

	    this.advance();

	    if (name === '$this') {
	      return new AccessThis(0);
	    }

	    var ancestor = 0;
	    while (name === '$parent') {
	      ancestor++;
	      if (this.optional('.')) {
	        name = this.peek.key;
	        this.advance();
	      } else if (this.peek === EOF || this.peek.text === '(' || this.peek.text === '[' || this.peek.text === '}') {
	        return new AccessThis(ancestor);
	      } else {
	        this.error('Unexpected token ' + this.peek.text);
	      }
	    }

	    if (this.optional('(')) {
	      var args = this.parseExpressionList(')');
	      this.expect(')');
	      return new CallScope(name, args, ancestor);
	    }

	    return new AccessScope(name, ancestor);
	  };

	  ParserImplementation.prototype.parseObject = function parseObject() {
	    var keys = [];
	    var values = [];

	    this.expect('{');

	    if (this.peek.text !== '}') {
	      do {
	        var peek = this.peek;
	        var value = peek.value;
	        keys.push(typeof value === 'string' ? value : peek.text);

	        this.advance();
	        if (peek.key && (this.peek.text === ',' || this.peek.text === '}')) {
	          --this.index;
	          values.push(this.parseAccessOrCallScope());
	        } else {
	          this.expect(':');
	          values.push(this.parseExpression());
	        }
	      } while (this.optional(','));
	    }

	    this.expect('}');

	    return new LiteralObject(keys, values);
	  };

	  ParserImplementation.prototype.parseExpressionList = function parseExpressionList(terminator) {
	    var result = [];

	    if (this.peek.text !== terminator) {
	      do {
	        result.push(this.parseExpression());
	      } while (this.optional(','));
	    }

	    return result;
	  };

	  ParserImplementation.prototype.optional = function optional(text) {
	    if (this.peek.text === text) {
	      this.advance();
	      return true;
	    }

	    return false;
	  };

	  ParserImplementation.prototype.expect = function expect(text) {
	    if (this.peek.text === text) {
	      this.advance();
	    } else {
	      this.error('Missing expected ' + text);
	    }
	  };

	  ParserImplementation.prototype.advance = function advance() {
	    this.index++;
	  };

	  ParserImplementation.prototype.error = function error(message) {
	    var location = this.index < this.tokens.length ? 'at column ' + (this.tokens[this.index].index + 1) + ' in' : 'at the end of the expression';

	    throw new Error('Parser Error: ' + message + ' ' + location + ' [' + this.input + ']');
	  };

	  _createClass(ParserImplementation, [{
	    key: 'peek',
	    get: function get() {
	      return this.index < this.tokens.length ? this.tokens[this.index] : EOF;
	    }
	  }]);

	  return ParserImplementation;
	}();

	var mapProto = Map.prototype;

	function _getMapObserver(taskQueue, map) {
	  return ModifyMapObserver.for(taskQueue, map);
	}

	exports.getMapObserver = _getMapObserver;

	var ModifyMapObserver = function (_ModifyCollectionObse2) {
	  _inherits(ModifyMapObserver, _ModifyCollectionObse2);

	  function ModifyMapObserver(taskQueue, map) {
	    

	    return _possibleConstructorReturn(this, _ModifyCollectionObse2.call(this, taskQueue, map));
	  }

	  ModifyMapObserver.for = function _for(taskQueue, map) {
	    if (!('__map_observer__' in map)) {
	      var observer = ModifyMapObserver.create(taskQueue, map);
	      Reflect.defineProperty(map, '__map_observer__', { value: observer, enumerable: false, configurable: false });
	    }
	    return map.__map_observer__;
	  };

	  ModifyMapObserver.create = function create(taskQueue, map) {
	    var observer = new ModifyMapObserver(taskQueue, map);

	    var proto = mapProto;
	    if (proto.add !== map.add || proto.delete !== map.delete || proto.clear !== map.clear) {
	      proto = {
	        add: map.add,
	        delete: map.delete,
	        clear: map.clear
	      };
	    }

	    map.set = function () {
	      var hasValue = map.has(arguments[0]);
	      var type = hasValue ? 'update' : 'add';
	      var oldValue = map.get(arguments[0]);
	      var methodCallResult = proto.set.apply(map, arguments);
	      if (!hasValue || oldValue !== map.get(arguments[0])) {
	        observer.addChangeRecord({
	          type: type,
	          object: map,
	          key: arguments[0],
	          oldValue: oldValue
	        });
	      }
	      return methodCallResult;
	    };

	    map.delete = function () {
	      var hasValue = map.has(arguments[0]);
	      var oldValue = map.get(arguments[0]);
	      var methodCallResult = proto.delete.apply(map, arguments);
	      if (hasValue) {
	        observer.addChangeRecord({
	          type: 'delete',
	          object: map,
	          key: arguments[0],
	          oldValue: oldValue
	        });
	      }
	      return methodCallResult;
	    };

	    map.clear = function () {
	      var methodCallResult = proto.clear.apply(map, arguments);
	      observer.addChangeRecord({
	        type: 'clear',
	        object: map
	      });
	      return methodCallResult;
	    };

	    return observer;
	  };

	  return ModifyMapObserver;
	}(ModifyCollectionObserver);

	function findOriginalEventTarget(event) {
	  return event.path && event.path[0] || event.deepPath && event.deepPath[0] || event.target;
	}

	function handleDelegatedEvent(event) {
	  var target = findOriginalEventTarget(event);
	  var callback = void 0;

	  while (target && !callback) {
	    if (target.delegatedCallbacks) {
	      callback = target.delegatedCallbacks[event.type];
	    }

	    if (!callback) {
	      target = target.parentNode;
	    }
	  }

	  if (callback) {
	    callback(event);
	  }
	}

	var DelegateHandlerEntry = function () {
	  function DelegateHandlerEntry(eventName) {
	    

	    this.eventName = eventName;
	    this.count = 0;
	  }

	  DelegateHandlerEntry.prototype.increment = function increment() {
	    this.count++;

	    if (this.count === 1) {
	      _aureliaPal.DOM.addEventListener(this.eventName, handleDelegatedEvent, false);
	    }
	  };

	  DelegateHandlerEntry.prototype.decrement = function decrement() {
	    this.count--;

	    if (this.count === 0) {
	      _aureliaPal.DOM.removeEventListener(this.eventName, handleDelegatedEvent);
	    }
	  };

	  return DelegateHandlerEntry;
	}();

	var DefaultEventStrategy = function () {
	  function DefaultEventStrategy() {
	    

	    this.delegatedHandlers = [];
	  }

	  DefaultEventStrategy.prototype.subscribe = function subscribe(target, targetEvent, callback, delegate) {
	    var _this22 = this;

	    if (delegate) {
	      var _ret = function () {
	        var delegatedHandlers = _this22.delegatedHandlers;
	        var handlerEntry = delegatedHandlers[targetEvent] || (delegatedHandlers[targetEvent] = new DelegateHandlerEntry(targetEvent));
	        var delegatedCallbacks = target.delegatedCallbacks || (target.delegatedCallbacks = {});

	        handlerEntry.increment();
	        delegatedCallbacks[targetEvent] = callback;

	        return {
	          v: function v() {
	            handlerEntry.decrement();
	            delegatedCallbacks[targetEvent] = null;
	          }
	        };
	      }();

	      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	    }

	    target.addEventListener(targetEvent, callback, false);

	    return function () {
	      target.removeEventListener(targetEvent, callback);
	    };
	  };

	  return DefaultEventStrategy;
	}();

	var EventManager = exports.EventManager = function () {
	  function EventManager() {
	    

	    this.elementHandlerLookup = {};
	    this.eventStrategyLookup = {};

	    this.registerElementConfig({
	      tagName: 'input',
	      properties: {
	        value: ['change', 'input'],
	        checked: ['change', 'input'],
	        files: ['change', 'input']
	      }
	    });

	    this.registerElementConfig({
	      tagName: 'textarea',
	      properties: {
	        value: ['change', 'input']
	      }
	    });

	    this.registerElementConfig({
	      tagName: 'select',
	      properties: {
	        value: ['change']
	      }
	    });

	    this.registerElementConfig({
	      tagName: 'content editable',
	      properties: {
	        value: ['change', 'input', 'blur', 'keyup', 'paste']
	      }
	    });

	    this.registerElementConfig({
	      tagName: 'scrollable element',
	      properties: {
	        scrollTop: ['scroll'],
	        scrollLeft: ['scroll']
	      }
	    });

	    this.defaultEventStrategy = new DefaultEventStrategy();
	  }

	  EventManager.prototype.registerElementConfig = function registerElementConfig(config) {
	    var tagName = config.tagName.toLowerCase();
	    var properties = config.properties;
	    var propertyName = void 0;

	    this.elementHandlerLookup[tagName] = {};

	    for (propertyName in properties) {
	      if (properties.hasOwnProperty(propertyName)) {
	        this.registerElementPropertyConfig(tagName, propertyName, properties[propertyName]);
	      }
	    }
	  };

	  EventManager.prototype.registerElementPropertyConfig = function registerElementPropertyConfig(tagName, propertyName, events) {
	    this.elementHandlerLookup[tagName][propertyName] = this.createElementHandler(events);
	  };

	  EventManager.prototype.createElementHandler = function createElementHandler(events) {
	    return {
	      subscribe: function subscribe(target, callback) {
	        events.forEach(function (changeEvent) {
	          target.addEventListener(changeEvent, callback, false);
	        });

	        return function () {
	          events.forEach(function (changeEvent) {
	            target.removeEventListener(changeEvent, callback);
	          });
	        };
	      }
	    };
	  };

	  EventManager.prototype.registerElementHandler = function registerElementHandler(tagName, handler) {
	    this.elementHandlerLookup[tagName.toLowerCase()] = handler;
	  };

	  EventManager.prototype.registerEventStrategy = function registerEventStrategy(eventName, strategy) {
	    this.eventStrategyLookup[eventName] = strategy;
	  };

	  EventManager.prototype.getElementHandler = function getElementHandler(target, propertyName) {
	    var tagName = void 0;
	    var lookup = this.elementHandlerLookup;

	    if (target.tagName) {
	      tagName = target.tagName.toLowerCase();

	      if (lookup[tagName] && lookup[tagName][propertyName]) {
	        return lookup[tagName][propertyName];
	      }

	      if (propertyName === 'textContent' || propertyName === 'innerHTML') {
	        return lookup['content editable'].value;
	      }

	      if (propertyName === 'scrollTop' || propertyName === 'scrollLeft') {
	        return lookup['scrollable element'][propertyName];
	      }
	    }

	    return null;
	  };

	  EventManager.prototype.addEventListener = function addEventListener(target, targetEvent, callback, delegate) {
	    return (this.eventStrategyLookup[targetEvent] || this.defaultEventStrategy).subscribe(target, targetEvent, callback, delegate);
	  };

	  return EventManager;
	}();

	var DirtyChecker = exports.DirtyChecker = function () {
	  function DirtyChecker() {
	    

	    this.tracked = [];
	    this.checkDelay = 120;
	  }

	  DirtyChecker.prototype.addProperty = function addProperty(property) {
	    var tracked = this.tracked;

	    tracked.push(property);

	    if (tracked.length === 1) {
	      this.scheduleDirtyCheck();
	    }
	  };

	  DirtyChecker.prototype.removeProperty = function removeProperty(property) {
	    var tracked = this.tracked;
	    tracked.splice(tracked.indexOf(property), 1);
	  };

	  DirtyChecker.prototype.scheduleDirtyCheck = function scheduleDirtyCheck() {
	    var _this23 = this;

	    setTimeout(function () {
	      return _this23.check();
	    }, this.checkDelay);
	  };

	  DirtyChecker.prototype.check = function check() {
	    var tracked = this.tracked;
	    var i = tracked.length;

	    while (i--) {
	      var current = tracked[i];

	      if (current.isDirty()) {
	        current.call();
	      }
	    }

	    if (tracked.length) {
	      this.scheduleDirtyCheck();
	    }
	  };

	  return DirtyChecker;
	}();

	var DirtyCheckProperty = exports.DirtyCheckProperty = (_dec5 = subscriberCollection(), _dec5(_class5 = function () {
	  function DirtyCheckProperty(dirtyChecker, obj, propertyName) {
	    

	    this.dirtyChecker = dirtyChecker;
	    this.obj = obj;
	    this.propertyName = propertyName;
	  }

	  DirtyCheckProperty.prototype.getValue = function getValue() {
	    return this.obj[this.propertyName];
	  };

	  DirtyCheckProperty.prototype.setValue = function setValue(newValue) {
	    this.obj[this.propertyName] = newValue;
	  };

	  DirtyCheckProperty.prototype.call = function call() {
	    var oldValue = this.oldValue;
	    var newValue = this.getValue();

	    this.callSubscribers(newValue, oldValue);

	    this.oldValue = newValue;
	  };

	  DirtyCheckProperty.prototype.isDirty = function isDirty() {
	    return this.oldValue !== this.obj[this.propertyName];
	  };

	  DirtyCheckProperty.prototype.subscribe = function subscribe(context, callable) {
	    if (!this.hasSubscribers()) {
	      this.oldValue = this.getValue();
	      this.dirtyChecker.addProperty(this);
	    }
	    this.addSubscriber(context, callable);
	  };

	  DirtyCheckProperty.prototype.unsubscribe = function unsubscribe(context, callable) {
	    if (this.removeSubscriber(context, callable) && !this.hasSubscribers()) {
	      this.dirtyChecker.removeProperty(this);
	    }
	  };

	  return DirtyCheckProperty;
	}()) || _class5);


	var logger = LogManager.getLogger('property-observation');

	var propertyAccessor = exports.propertyAccessor = {
	  getValue: function getValue(obj, propertyName) {
	    return obj[propertyName];
	  },
	  setValue: function setValue(value, obj, propertyName) {
	    obj[propertyName] = value;
	  }
	};

	var PrimitiveObserver = exports.PrimitiveObserver = function () {
	  function PrimitiveObserver(primitive, propertyName) {
	    

	    this.doNotCache = true;

	    this.primitive = primitive;
	    this.propertyName = propertyName;
	  }

	  PrimitiveObserver.prototype.getValue = function getValue() {
	    return this.primitive[this.propertyName];
	  };

	  PrimitiveObserver.prototype.setValue = function setValue() {
	    var type = _typeof(this.primitive);
	    throw new Error('The ' + this.propertyName + ' property of a ' + type + ' (' + this.primitive + ') cannot be assigned.');
	  };

	  PrimitiveObserver.prototype.subscribe = function subscribe() {};

	  PrimitiveObserver.prototype.unsubscribe = function unsubscribe() {};

	  return PrimitiveObserver;
	}();

	var SetterObserver = exports.SetterObserver = (_dec6 = subscriberCollection(), _dec6(_class7 = function () {
	  function SetterObserver(taskQueue, obj, propertyName) {
	    

	    this.taskQueue = taskQueue;
	    this.obj = obj;
	    this.propertyName = propertyName;
	    this.queued = false;
	    this.observing = false;
	  }

	  SetterObserver.prototype.getValue = function getValue() {
	    return this.obj[this.propertyName];
	  };

	  SetterObserver.prototype.setValue = function setValue(newValue) {
	    this.obj[this.propertyName] = newValue;
	  };

	  SetterObserver.prototype.getterValue = function getterValue() {
	    return this.currentValue;
	  };

	  SetterObserver.prototype.setterValue = function setterValue(newValue) {
	    var oldValue = this.currentValue;

	    if (oldValue !== newValue) {
	      if (!this.queued) {
	        this.oldValue = oldValue;
	        this.queued = true;
	        this.taskQueue.queueMicroTask(this);
	      }

	      this.currentValue = newValue;
	    }
	  };

	  SetterObserver.prototype.call = function call() {
	    var oldValue = this.oldValue;
	    var newValue = this.currentValue;

	    this.queued = false;

	    this.callSubscribers(newValue, oldValue);
	  };

	  SetterObserver.prototype.subscribe = function subscribe(context, callable) {
	    if (!this.observing) {
	      this.convertProperty();
	    }
	    this.addSubscriber(context, callable);
	  };

	  SetterObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
	    this.removeSubscriber(context, callable);
	  };

	  SetterObserver.prototype.convertProperty = function convertProperty() {
	    this.observing = true;
	    this.currentValue = this.obj[this.propertyName];
	    this.setValue = this.setterValue;
	    this.getValue = this.getterValue;

	    if (!Reflect.defineProperty(this.obj, this.propertyName, {
	      configurable: true,
	      enumerable: this.propertyName in this.obj ? this.obj.propertyIsEnumerable(this.propertyName) : true,
	      get: this.getValue.bind(this),
	      set: this.setValue.bind(this)
	    })) {
	      logger.warn('Cannot observe property \'' + this.propertyName + '\' of object', this.obj);
	    }
	  };

	  return SetterObserver;
	}()) || _class7);

	var XLinkAttributeObserver = exports.XLinkAttributeObserver = function () {
	  function XLinkAttributeObserver(element, propertyName, attributeName) {
	    

	    this.element = element;
	    this.propertyName = propertyName;
	    this.attributeName = attributeName;
	  }

	  XLinkAttributeObserver.prototype.getValue = function getValue() {
	    return this.element.getAttributeNS('http://www.w3.org/1999/xlink', this.attributeName);
	  };

	  XLinkAttributeObserver.prototype.setValue = function setValue(newValue) {
	    return this.element.setAttributeNS('http://www.w3.org/1999/xlink', this.attributeName, newValue);
	  };

	  XLinkAttributeObserver.prototype.subscribe = function subscribe() {
	    throw new Error('Observation of a "' + this.element.nodeName + '" element\'s "' + this.propertyName + '" property is not supported.');
	  };

	  return XLinkAttributeObserver;
	}();

	var dataAttributeAccessor = exports.dataAttributeAccessor = {
	  getValue: function getValue(obj, propertyName) {
	    return obj.getAttribute(propertyName);
	  },
	  setValue: function setValue(value, obj, propertyName) {
	    return obj.setAttribute(propertyName, value);
	  }
	};

	var DataAttributeObserver = exports.DataAttributeObserver = function () {
	  function DataAttributeObserver(element, propertyName) {
	    

	    this.element = element;
	    this.propertyName = propertyName;
	  }

	  DataAttributeObserver.prototype.getValue = function getValue() {
	    return this.element.getAttribute(this.propertyName);
	  };

	  DataAttributeObserver.prototype.setValue = function setValue(newValue) {
	    return this.element.setAttribute(this.propertyName, newValue);
	  };

	  DataAttributeObserver.prototype.subscribe = function subscribe() {
	    throw new Error('Observation of a "' + this.element.nodeName + '" element\'s "' + this.propertyName + '" property is not supported.');
	  };

	  return DataAttributeObserver;
	}();

	var StyleObserver = exports.StyleObserver = function () {
	  function StyleObserver(element, propertyName) {
	    

	    this.element = element;
	    this.propertyName = propertyName;

	    this.styles = null;
	    this.version = 0;
	  }

	  StyleObserver.prototype.getValue = function getValue() {
	    return this.element.style.cssText;
	  };

	  StyleObserver.prototype.setValue = function setValue(newValue) {
	    var styles = this.styles || {};
	    var style = void 0;
	    var version = this.version;

	    if (newValue !== null && newValue !== undefined) {
	      if (newValue instanceof Object) {
	        for (style in newValue) {
	          if (newValue.hasOwnProperty(style)) {
	            styles[style] = version;
	            this.element.style[style] = newValue[style];
	          }
	        }
	      } else if (newValue.length) {
	        var pairs = newValue.split(/(?:;|:(?!\/))\s*/);
	        for (var _i22 = 0, length = pairs.length; _i22 < length; _i22++) {
	          style = pairs[_i22].trim();
	          if (!style) {
	            continue;
	          }

	          styles[style] = version;

	          this.element.style[style] = pairs[++_i22];
	        }
	      }
	    }

	    this.styles = styles;
	    this.version += 1;

	    if (version === 0) {
	      return;
	    }

	    version -= 1;
	    for (style in styles) {
	      if (!styles.hasOwnProperty(style) || styles[style] !== version) {
	        continue;
	      }

	      this.element.style[style] = '';
	    }
	  };

	  StyleObserver.prototype.subscribe = function subscribe() {
	    throw new Error('Observation of a "' + this.element.nodeName + '" element\'s "' + this.propertyName + '" property is not supported.');
	  };

	  return StyleObserver;
	}();

	var ValueAttributeObserver = exports.ValueAttributeObserver = (_dec7 = subscriberCollection(), _dec7(_class8 = function () {
	  function ValueAttributeObserver(element, propertyName, handler) {
	    

	    this.element = element;
	    this.propertyName = propertyName;
	    this.handler = handler;
	    if (propertyName === 'files') {
	      this.setValue = function () {};
	    }
	  }

	  ValueAttributeObserver.prototype.getValue = function getValue() {
	    return this.element[this.propertyName];
	  };

	  ValueAttributeObserver.prototype.setValue = function setValue(newValue) {
	    newValue = newValue === undefined || newValue === null ? '' : newValue;
	    if (this.element[this.propertyName] !== newValue) {
	      this.element[this.propertyName] = newValue;
	      this.notify();
	    }
	  };

	  ValueAttributeObserver.prototype.notify = function notify() {
	    var oldValue = this.oldValue;
	    var newValue = this.getValue();

	    this.callSubscribers(newValue, oldValue);

	    this.oldValue = newValue;
	  };

	  ValueAttributeObserver.prototype.subscribe = function subscribe(context, callable) {
	    if (!this.hasSubscribers()) {
	      this.oldValue = this.getValue();
	      this.disposeHandler = this.handler.subscribe(this.element, this.notify.bind(this));
	    }

	    this.addSubscriber(context, callable);
	  };

	  ValueAttributeObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
	    if (this.removeSubscriber(context, callable) && !this.hasSubscribers()) {
	      this.disposeHandler();
	      this.disposeHandler = null;
	    }
	  };

	  return ValueAttributeObserver;
	}()) || _class8);


	var checkedArrayContext = 'CheckedObserver:array';
	var checkedValueContext = 'CheckedObserver:value';

	var CheckedObserver = exports.CheckedObserver = (_dec8 = subscriberCollection(), _dec8(_class9 = function () {
	  function CheckedObserver(element, handler, observerLocator) {
	    

	    this.element = element;
	    this.handler = handler;
	    this.observerLocator = observerLocator;
	  }

	  CheckedObserver.prototype.getValue = function getValue() {
	    return this.value;
	  };

	  CheckedObserver.prototype.setValue = function setValue(newValue) {
	    if (this.value === newValue) {
	      return;
	    }

	    if (this.arrayObserver) {
	      this.arrayObserver.unsubscribe(checkedArrayContext, this);
	      this.arrayObserver = null;
	    }

	    if (this.element.type === 'checkbox' && Array.isArray(newValue)) {
	      this.arrayObserver = this.observerLocator.getArrayObserver(newValue);
	      this.arrayObserver.subscribe(checkedArrayContext, this);
	    }

	    this.oldValue = this.value;
	    this.value = newValue;
	    this.synchronizeElement();
	    this.notify();

	    if (!this.initialSync) {
	      this.initialSync = true;
	      this.observerLocator.taskQueue.queueMicroTask(this);
	    }
	  };

	  CheckedObserver.prototype.call = function call(context, splices) {
	    this.synchronizeElement();

	    if (!this.valueObserver) {
	      this.valueObserver = this.element.__observers__.model || this.element.__observers__.value;
	      if (this.valueObserver) {
	        this.valueObserver.subscribe(checkedValueContext, this);
	      }
	    }
	  };

	  CheckedObserver.prototype.synchronizeElement = function synchronizeElement() {
	    var value = this.value;
	    var element = this.element;
	    var elementValue = element.hasOwnProperty('model') ? element.model : element.value;
	    var isRadio = element.type === 'radio';
	    var matcher = element.matcher || function (a, b) {
	      return a === b;
	    };

	    element.checked = isRadio && !!matcher(value, elementValue) || !isRadio && value === true || !isRadio && Array.isArray(value) && value.findIndex(function (item) {
	      return !!matcher(item, elementValue);
	    }) !== -1;
	  };

	  CheckedObserver.prototype.synchronizeValue = function synchronizeValue() {
	    var value = this.value;
	    var element = this.element;
	    var elementValue = element.hasOwnProperty('model') ? element.model : element.value;
	    var index = void 0;
	    var matcher = element.matcher || function (a, b) {
	      return a === b;
	    };

	    if (element.type === 'checkbox') {
	      if (Array.isArray(value)) {
	        index = value.findIndex(function (item) {
	          return !!matcher(item, elementValue);
	        });
	        if (element.checked && index === -1) {
	          value.push(elementValue);
	        } else if (!element.checked && index !== -1) {
	          value.splice(index, 1);
	        }

	        return;
	      }

	      value = element.checked;
	    } else if (element.checked) {
	      value = elementValue;
	    } else {
	      return;
	    }

	    this.oldValue = this.value;
	    this.value = value;
	    this.notify();
	  };

	  CheckedObserver.prototype.notify = function notify() {
	    var oldValue = this.oldValue;
	    var newValue = this.value;

	    this.callSubscribers(newValue, oldValue);
	  };

	  CheckedObserver.prototype.subscribe = function subscribe(context, callable) {
	    if (!this.hasSubscribers()) {
	      this.disposeHandler = this.handler.subscribe(this.element, this.synchronizeValue.bind(this, false));
	    }
	    this.addSubscriber(context, callable);
	  };

	  CheckedObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
	    if (this.removeSubscriber(context, callable) && !this.hasSubscribers()) {
	      this.disposeHandler();
	      this.disposeHandler = null;
	    }
	  };

	  CheckedObserver.prototype.unbind = function unbind() {
	    if (this.arrayObserver) {
	      this.arrayObserver.unsubscribe(checkedArrayContext, this);
	      this.arrayObserver = null;
	    }
	    if (this.valueObserver) {
	      this.valueObserver.unsubscribe(checkedValueContext, this);
	    }
	  };

	  return CheckedObserver;
	}()) || _class9);


	var selectArrayContext = 'SelectValueObserver:array';

	var SelectValueObserver = exports.SelectValueObserver = (_dec9 = subscriberCollection(), _dec9(_class10 = function () {
	  function SelectValueObserver(element, handler, observerLocator) {
	    

	    this.element = element;
	    this.handler = handler;
	    this.observerLocator = observerLocator;
	  }

	  SelectValueObserver.prototype.getValue = function getValue() {
	    return this.value;
	  };

	  SelectValueObserver.prototype.setValue = function setValue(newValue) {
	    if (newValue !== null && newValue !== undefined && this.element.multiple && !Array.isArray(newValue)) {
	      throw new Error('Only null or Array instances can be bound to a multi-select.');
	    }
	    if (this.value === newValue) {
	      return;
	    }

	    if (this.arrayObserver) {
	      this.arrayObserver.unsubscribe(selectArrayContext, this);
	      this.arrayObserver = null;
	    }

	    if (Array.isArray(newValue)) {
	      this.arrayObserver = this.observerLocator.getArrayObserver(newValue);
	      this.arrayObserver.subscribe(selectArrayContext, this);
	    }

	    this.oldValue = this.value;
	    this.value = newValue;
	    this.synchronizeOptions();
	    this.notify();

	    if (!this.initialSync) {
	      this.initialSync = true;
	      this.observerLocator.taskQueue.queueMicroTask(this);
	    }
	  };

	  SelectValueObserver.prototype.call = function call(context, splices) {
	    this.synchronizeOptions();
	  };

	  SelectValueObserver.prototype.synchronizeOptions = function synchronizeOptions() {
	    var value = this.value;
	    var clear = void 0;
	    var isArray = void 0;

	    if (value === null || value === undefined) {
	      clear = true;
	    } else if (Array.isArray(value)) {
	      isArray = true;
	    }

	    var options = this.element.options;
	    var i = options.length;
	    var matcher = this.element.matcher || function (a, b) {
	      return a === b;
	    };

	    var _loop = function _loop() {
	      var option = options.item(i);
	      if (clear) {
	        option.selected = false;
	        return 'continue';
	      }
	      var optionValue = option.hasOwnProperty('model') ? option.model : option.value;
	      if (isArray) {
	        option.selected = value.findIndex(function (item) {
	          return !!matcher(optionValue, item);
	        }) !== -1;
	        return 'continue';
	      }
	      option.selected = !!matcher(optionValue, value);
	    };

	    while (i--) {
	      var _ret2 = _loop();

	      if (_ret2 === 'continue') continue;
	    }
	  };

	  SelectValueObserver.prototype.synchronizeValue = function synchronizeValue() {
	    var _this24 = this;

	    var options = this.element.options;
	    var count = 0;
	    var value = [];

	    for (var _i23 = 0, ii = options.length; _i23 < ii; _i23++) {
	      var _option = options.item(_i23);
	      if (!_option.selected) {
	        continue;
	      }
	      value.push(_option.hasOwnProperty('model') ? _option.model : _option.value);
	      count++;
	    }

	    if (this.element.multiple) {
	      if (Array.isArray(this.value)) {
	        var _ret3 = function () {
	          var matcher = _this24.element.matcher || function (a, b) {
	            return a === b;
	          };

	          var i = 0;

	          var _loop2 = function _loop2() {
	            var a = _this24.value[i];
	            if (value.findIndex(function (b) {
	              return matcher(a, b);
	            }) === -1) {
	              _this24.value.splice(i, 1);
	            } else {
	              i++;
	            }
	          };

	          while (i < _this24.value.length) {
	            _loop2();
	          }

	          i = 0;

	          var _loop3 = function _loop3() {
	            var a = value[i];
	            if (_this24.value.findIndex(function (b) {
	              return matcher(a, b);
	            }) === -1) {
	              _this24.value.push(a);
	            }
	            i++;
	          };

	          while (i < value.length) {
	            _loop3();
	          }
	          return {
	            v: void 0
	          };
	        }();

	        if ((typeof _ret3 === 'undefined' ? 'undefined' : _typeof(_ret3)) === "object") return _ret3.v;
	      }
	    } else {
	        if (count === 0) {
	          value = null;
	        } else {
	          value = value[0];
	        }
	      }

	    if (value !== this.value) {
	      this.oldValue = this.value;
	      this.value = value;
	      this.notify();
	    }
	  };

	  SelectValueObserver.prototype.notify = function notify() {
	    var oldValue = this.oldValue;
	    var newValue = this.value;

	    this.callSubscribers(newValue, oldValue);
	  };

	  SelectValueObserver.prototype.subscribe = function subscribe(context, callable) {
	    if (!this.hasSubscribers()) {
	      this.disposeHandler = this.handler.subscribe(this.element, this.synchronizeValue.bind(this, false));
	    }
	    this.addSubscriber(context, callable);
	  };

	  SelectValueObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
	    if (this.removeSubscriber(context, callable) && !this.hasSubscribers()) {
	      this.disposeHandler();
	      this.disposeHandler = null;
	    }
	  };

	  SelectValueObserver.prototype.bind = function bind() {
	    var _this25 = this;

	    this.domObserver = _aureliaPal.DOM.createMutationObserver(function () {
	      _this25.synchronizeOptions();
	      _this25.synchronizeValue();
	    });
	    this.domObserver.observe(this.element, { childList: true, subtree: true });
	  };

	  SelectValueObserver.prototype.unbind = function unbind() {
	    this.domObserver.disconnect();
	    this.domObserver = null;

	    if (this.arrayObserver) {
	      this.arrayObserver.unsubscribe(selectArrayContext, this);
	      this.arrayObserver = null;
	    }
	  };

	  return SelectValueObserver;
	}()) || _class10);

	var ClassObserver = exports.ClassObserver = function () {
	  function ClassObserver(element) {
	    

	    this.element = element;
	    this.doNotCache = true;
	    this.value = '';
	    this.version = 0;
	  }

	  ClassObserver.prototype.getValue = function getValue() {
	    return this.value;
	  };

	  ClassObserver.prototype.setValue = function setValue(newValue) {
	    var nameIndex = this.nameIndex || {};
	    var version = this.version;
	    var names = void 0;
	    var name = void 0;

	    if (newValue !== null && newValue !== undefined && newValue.length) {
	      names = newValue.split(/\s+/);
	      for (var _i24 = 0, length = names.length; _i24 < length; _i24++) {
	        name = names[_i24];
	        if (name === '') {
	          continue;
	        }
	        nameIndex[name] = version;
	        this.element.classList.add(name);
	      }
	    }

	    this.value = newValue;
	    this.nameIndex = nameIndex;
	    this.version += 1;

	    if (version === 0) {
	      return;
	    }

	    version -= 1;
	    for (name in nameIndex) {
	      if (!nameIndex.hasOwnProperty(name) || nameIndex[name] !== version) {
	        continue;
	      }
	      this.element.classList.remove(name);
	    }
	  };

	  ClassObserver.prototype.subscribe = function subscribe() {
	    throw new Error('Observation of a "' + this.element.nodeName + '" element\'s "class" property is not supported.');
	  };

	  return ClassObserver;
	}();

	function hasDeclaredDependencies(descriptor) {
	  return !!(descriptor && descriptor.get && descriptor.get.dependencies);
	}

	function declarePropertyDependencies(ctor, propertyName, dependencies) {
	  var descriptor = Object.getOwnPropertyDescriptor(ctor.prototype, propertyName);
	  descriptor.get.dependencies = dependencies;
	}

	function computedFrom() {
	  for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
	    rest[_key] = arguments[_key];
	  }

	  return function (target, key, descriptor) {
	    descriptor.get.dependencies = rest;
	    return descriptor;
	  };
	}

	var ComputedExpression = exports.ComputedExpression = function (_Expression19) {
	  _inherits(ComputedExpression, _Expression19);

	  function ComputedExpression(name, dependencies) {
	    

	    var _this26 = _possibleConstructorReturn(this, _Expression19.call(this));

	    _this26.name = name;
	    _this26.dependencies = dependencies;
	    _this26.isAssignable = true;
	    return _this26;
	  }

	  ComputedExpression.prototype.evaluate = function evaluate(scope, lookupFunctions) {
	    return scope.bindingContext[this.name];
	  };

	  ComputedExpression.prototype.assign = function assign(scope, value) {
	    scope.bindingContext[this.name] = value;
	  };

	  ComputedExpression.prototype.accept = function accept(visitor) {
	    throw new Error('not implemented');
	  };

	  ComputedExpression.prototype.connect = function connect(binding, scope) {
	    var dependencies = this.dependencies;
	    var i = dependencies.length;
	    while (i--) {
	      dependencies[i].connect(binding, scope);
	    }
	  };

	  return ComputedExpression;
	}(Expression);

	function createComputedObserver(obj, propertyName, descriptor, observerLocator) {
	  var dependencies = descriptor.get.dependencies;
	  if (!(dependencies instanceof ComputedExpression)) {
	    var _i25 = dependencies.length;
	    while (_i25--) {
	      dependencies[_i25] = observerLocator.parser.parse(dependencies[_i25]);
	    }
	    dependencies = descriptor.get.dependencies = new ComputedExpression(propertyName, dependencies);
	  }

	  var scope = { bindingContext: obj, overrideContext: createOverrideContext(obj) };
	  return new ExpressionObserver(scope, dependencies, observerLocator);
	}

	var elements = exports.elements = {
	  a: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'target', 'transform', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
	  altGlyph: ['class', 'dx', 'dy', 'externalResourcesRequired', 'format', 'glyphRef', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'rotate', 'style', 'systemLanguage', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  altGlyphDef: ['id', 'xml:base', 'xml:lang', 'xml:space'],
	  altGlyphItem: ['id', 'xml:base', 'xml:lang', 'xml:space'],
	  animate: ['accumulate', 'additive', 'attributeName', 'attributeType', 'begin', 'by', 'calcMode', 'dur', 'end', 'externalResourcesRequired', 'fill', 'from', 'id', 'keySplines', 'keyTimes', 'max', 'min', 'onbegin', 'onend', 'onload', 'onrepeat', 'repeatCount', 'repeatDur', 'requiredExtensions', 'requiredFeatures', 'restart', 'systemLanguage', 'to', 'values', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
	  animateColor: ['accumulate', 'additive', 'attributeName', 'attributeType', 'begin', 'by', 'calcMode', 'dur', 'end', 'externalResourcesRequired', 'fill', 'from', 'id', 'keySplines', 'keyTimes', 'max', 'min', 'onbegin', 'onend', 'onload', 'onrepeat', 'repeatCount', 'repeatDur', 'requiredExtensions', 'requiredFeatures', 'restart', 'systemLanguage', 'to', 'values', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
	  animateMotion: ['accumulate', 'additive', 'begin', 'by', 'calcMode', 'dur', 'end', 'externalResourcesRequired', 'fill', 'from', 'id', 'keyPoints', 'keySplines', 'keyTimes', 'max', 'min', 'onbegin', 'onend', 'onload', 'onrepeat', 'origin', 'path', 'repeatCount', 'repeatDur', 'requiredExtensions', 'requiredFeatures', 'restart', 'rotate', 'systemLanguage', 'to', 'values', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
	  animateTransform: ['accumulate', 'additive', 'attributeName', 'attributeType', 'begin', 'by', 'calcMode', 'dur', 'end', 'externalResourcesRequired', 'fill', 'from', 'id', 'keySplines', 'keyTimes', 'max', 'min', 'onbegin', 'onend', 'onload', 'onrepeat', 'repeatCount', 'repeatDur', 'requiredExtensions', 'requiredFeatures', 'restart', 'systemLanguage', 'to', 'type', 'values', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
	  circle: ['class', 'cx', 'cy', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'r', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
	  clipPath: ['class', 'clipPathUnits', 'externalResourcesRequired', 'id', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
	  'color-profile': ['id', 'local', 'name', 'rendering-intent', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
	  cursor: ['externalResourcesRequired', 'id', 'requiredExtensions', 'requiredFeatures', 'systemLanguage', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  defs: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
	  desc: ['class', 'id', 'style', 'xml:base', 'xml:lang', 'xml:space'],
	  ellipse: ['class', 'cx', 'cy', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'rx', 'ry', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
	  feBlend: ['class', 'height', 'id', 'in', 'in2', 'mode', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  feColorMatrix: ['class', 'height', 'id', 'in', 'result', 'style', 'type', 'values', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  feComponentTransfer: ['class', 'height', 'id', 'in', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  feComposite: ['class', 'height', 'id', 'in', 'in2', 'k1', 'k2', 'k3', 'k4', 'operator', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  feConvolveMatrix: ['bias', 'class', 'divisor', 'edgeMode', 'height', 'id', 'in', 'kernelMatrix', 'kernelUnitLength', 'order', 'preserveAlpha', 'result', 'style', 'targetX', 'targetY', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  feDiffuseLighting: ['class', 'diffuseConstant', 'height', 'id', 'in', 'kernelUnitLength', 'result', 'style', 'surfaceScale', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  feDisplacementMap: ['class', 'height', 'id', 'in', 'in2', 'result', 'scale', 'style', 'width', 'x', 'xChannelSelector', 'xml:base', 'xml:lang', 'xml:space', 'y', 'yChannelSelector'],
	  feDistantLight: ['azimuth', 'elevation', 'id', 'xml:base', 'xml:lang', 'xml:space'],
	  feFlood: ['class', 'height', 'id', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  feFuncA: ['amplitude', 'exponent', 'id', 'intercept', 'offset', 'slope', 'tableValues', 'type', 'xml:base', 'xml:lang', 'xml:space'],
	  feFuncB: ['amplitude', 'exponent', 'id', 'intercept', 'offset', 'slope', 'tableValues', 'type', 'xml:base', 'xml:lang', 'xml:space'],
	  feFuncG: ['amplitude', 'exponent', 'id', 'intercept', 'offset', 'slope', 'tableValues', 'type', 'xml:base', 'xml:lang', 'xml:space'],
	  feFuncR: ['amplitude', 'exponent', 'id', 'intercept', 'offset', 'slope', 'tableValues', 'type', 'xml:base', 'xml:lang', 'xml:space'],
	  feGaussianBlur: ['class', 'height', 'id', 'in', 'result', 'stdDeviation', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  feImage: ['class', 'externalResourcesRequired', 'height', 'id', 'preserveAspectRatio', 'result', 'style', 'width', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  feMerge: ['class', 'height', 'id', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  feMergeNode: ['id', 'xml:base', 'xml:lang', 'xml:space'],
	  feMorphology: ['class', 'height', 'id', 'in', 'operator', 'radius', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  feOffset: ['class', 'dx', 'dy', 'height', 'id', 'in', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  fePointLight: ['id', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y', 'z'],
	  feSpecularLighting: ['class', 'height', 'id', 'in', 'kernelUnitLength', 'result', 'specularConstant', 'specularExponent', 'style', 'surfaceScale', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  feSpotLight: ['id', 'limitingConeAngle', 'pointsAtX', 'pointsAtY', 'pointsAtZ', 'specularExponent', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y', 'z'],
	  feTile: ['class', 'height', 'id', 'in', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  feTurbulence: ['baseFrequency', 'class', 'height', 'id', 'numOctaves', 'result', 'seed', 'stitchTiles', 'style', 'type', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  filter: ['class', 'externalResourcesRequired', 'filterRes', 'filterUnits', 'height', 'id', 'primitiveUnits', 'style', 'width', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  font: ['class', 'externalResourcesRequired', 'horiz-adv-x', 'horiz-origin-x', 'horiz-origin-y', 'id', 'style', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'xml:base', 'xml:lang', 'xml:space'],
	  'font-face': ['accent-height', 'alphabetic', 'ascent', 'bbox', 'cap-height', 'descent', 'font-family', 'font-size', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'hanging', 'id', 'ideographic', 'mathematical', 'overline-position', 'overline-thickness', 'panose-1', 'slope', 'stemh', 'stemv', 'strikethrough-position', 'strikethrough-thickness', 'underline-position', 'underline-thickness', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'widths', 'x-height', 'xml:base', 'xml:lang', 'xml:space'],
	  'font-face-format': ['id', 'string', 'xml:base', 'xml:lang', 'xml:space'],
	  'font-face-name': ['id', 'name', 'xml:base', 'xml:lang', 'xml:space'],
	  'font-face-src': ['id', 'xml:base', 'xml:lang', 'xml:space'],
	  'font-face-uri': ['id', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
	  foreignObject: ['class', 'externalResourcesRequired', 'height', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  g: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
	  glyph: ['arabic-form', 'class', 'd', 'glyph-name', 'horiz-adv-x', 'id', 'lang', 'orientation', 'style', 'unicode', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'xml:base', 'xml:lang', 'xml:space'],
	  glyphRef: ['class', 'dx', 'dy', 'format', 'glyphRef', 'id', 'style', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  hkern: ['g1', 'g2', 'id', 'k', 'u1', 'u2', 'xml:base', 'xml:lang', 'xml:space'],
	  image: ['class', 'externalResourcesRequired', 'height', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'preserveAspectRatio', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'width', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  line: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'x1', 'x2', 'xml:base', 'xml:lang', 'xml:space', 'y1', 'y2'],
	  linearGradient: ['class', 'externalResourcesRequired', 'gradientTransform', 'gradientUnits', 'id', 'spreadMethod', 'style', 'x1', 'x2', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y1', 'y2'],
	  marker: ['class', 'externalResourcesRequired', 'id', 'markerHeight', 'markerUnits', 'markerWidth', 'orient', 'preserveAspectRatio', 'refX', 'refY', 'style', 'viewBox', 'xml:base', 'xml:lang', 'xml:space'],
	  mask: ['class', 'externalResourcesRequired', 'height', 'id', 'maskContentUnits', 'maskUnits', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  metadata: ['id', 'xml:base', 'xml:lang', 'xml:space'],
	  'missing-glyph': ['class', 'd', 'horiz-adv-x', 'id', 'style', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'xml:base', 'xml:lang', 'xml:space'],
	  mpath: ['externalResourcesRequired', 'id', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
	  path: ['class', 'd', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'pathLength', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
	  pattern: ['class', 'externalResourcesRequired', 'height', 'id', 'patternContentUnits', 'patternTransform', 'patternUnits', 'preserveAspectRatio', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'viewBox', 'width', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  polygon: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'points', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
	  polyline: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'points', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
	  radialGradient: ['class', 'cx', 'cy', 'externalResourcesRequired', 'fx', 'fy', 'gradientTransform', 'gradientUnits', 'id', 'r', 'spreadMethod', 'style', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
	  rect: ['class', 'externalResourcesRequired', 'height', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'rx', 'ry', 'style', 'systemLanguage', 'transform', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  script: ['externalResourcesRequired', 'id', 'type', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
	  set: ['attributeName', 'attributeType', 'begin', 'dur', 'end', 'externalResourcesRequired', 'fill', 'id', 'max', 'min', 'onbegin', 'onend', 'onload', 'onrepeat', 'repeatCount', 'repeatDur', 'requiredExtensions', 'requiredFeatures', 'restart', 'systemLanguage', 'to', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
	  stop: ['class', 'id', 'offset', 'style', 'xml:base', 'xml:lang', 'xml:space'],
	  style: ['id', 'media', 'title', 'type', 'xml:base', 'xml:lang', 'xml:space'],
	  svg: ['baseProfile', 'class', 'contentScriptType', 'contentStyleType', 'externalResourcesRequired', 'height', 'id', 'onabort', 'onactivate', 'onclick', 'onerror', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'onresize', 'onscroll', 'onunload', 'onzoom', 'preserveAspectRatio', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'version', 'viewBox', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y', 'zoomAndPan'],
	  switch: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
	  symbol: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'preserveAspectRatio', 'style', 'viewBox', 'xml:base', 'xml:lang', 'xml:space'],
	  text: ['class', 'dx', 'dy', 'externalResourcesRequired', 'id', 'lengthAdjust', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'rotate', 'style', 'systemLanguage', 'textLength', 'transform', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  textPath: ['class', 'externalResourcesRequired', 'id', 'lengthAdjust', 'method', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'spacing', 'startOffset', 'style', 'systemLanguage', 'textLength', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
	  title: ['class', 'id', 'style', 'xml:base', 'xml:lang', 'xml:space'],
	  tref: ['class', 'dx', 'dy', 'externalResourcesRequired', 'id', 'lengthAdjust', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'rotate', 'style', 'systemLanguage', 'textLength', 'x', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  tspan: ['class', 'dx', 'dy', 'externalResourcesRequired', 'id', 'lengthAdjust', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'rotate', 'style', 'systemLanguage', 'textLength', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  use: ['class', 'externalResourcesRequired', 'height', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'width', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
	  view: ['externalResourcesRequired', 'id', 'preserveAspectRatio', 'viewBox', 'viewTarget', 'xml:base', 'xml:lang', 'xml:space', 'zoomAndPan'],
	  vkern: ['g1', 'g2', 'id', 'k', 'u1', 'u2', 'xml:base', 'xml:lang', 'xml:space']
	};
	var presentationElements = exports.presentationElements = {
	  'a': true,
	  'altGlyph': true,
	  'animate': true,
	  'animateColor': true,
	  'circle': true,
	  'clipPath': true,
	  'defs': true,
	  'ellipse': true,
	  'feBlend': true,
	  'feColorMatrix': true,
	  'feComponentTransfer': true,
	  'feComposite': true,
	  'feConvolveMatrix': true,
	  'feDiffuseLighting': true,
	  'feDisplacementMap': true,
	  'feFlood': true,
	  'feGaussianBlur': true,
	  'feImage': true,
	  'feMerge': true,
	  'feMorphology': true,
	  'feOffset': true,
	  'feSpecularLighting': true,
	  'feTile': true,
	  'feTurbulence': true,
	  'filter': true,
	  'font': true,
	  'foreignObject': true,
	  'g': true,
	  'glyph': true,
	  'glyphRef': true,
	  'image': true,
	  'line': true,
	  'linearGradient': true,
	  'marker': true,
	  'mask': true,
	  'missing-glyph': true,
	  'path': true,
	  'pattern': true,
	  'polygon': true,
	  'polyline': true,
	  'radialGradient': true,
	  'rect': true,
	  'stop': true,
	  'svg': true,
	  'switch': true,
	  'symbol': true,
	  'text': true,
	  'textPath': true,
	  'tref': true,
	  'tspan': true,
	  'use': true
	};

	var presentationAttributes = exports.presentationAttributes = {
	  'alignment-baseline': true,
	  'baseline-shift': true,
	  'clip-path': true,
	  'clip-rule': true,
	  'clip': true,
	  'color-interpolation-filters': true,
	  'color-interpolation': true,
	  'color-profile': true,
	  'color-rendering': true,
	  'color': true,
	  'cursor': true,
	  'direction': true,
	  'display': true,
	  'dominant-baseline': true,
	  'enable-background': true,
	  'fill-opacity': true,
	  'fill-rule': true,
	  'fill': true,
	  'filter': true,
	  'flood-color': true,
	  'flood-opacity': true,
	  'font-family': true,
	  'font-size-adjust': true,
	  'font-size': true,
	  'font-stretch': true,
	  'font-style': true,
	  'font-variant': true,
	  'font-weight': true,
	  'glyph-orientation-horizontal': true,
	  'glyph-orientation-vertical': true,
	  'image-rendering': true,
	  'kerning': true,
	  'letter-spacing': true,
	  'lighting-color': true,
	  'marker-end': true,
	  'marker-mid': true,
	  'marker-start': true,
	  'mask': true,
	  'opacity': true,
	  'overflow': true,
	  'pointer-events': true,
	  'shape-rendering': true,
	  'stop-color': true,
	  'stop-opacity': true,
	  'stroke-dasharray': true,
	  'stroke-dashoffset': true,
	  'stroke-linecap': true,
	  'stroke-linejoin': true,
	  'stroke-miterlimit': true,
	  'stroke-opacity': true,
	  'stroke-width': true,
	  'stroke': true,
	  'text-anchor': true,
	  'text-decoration': true,
	  'text-rendering': true,
	  'unicode-bidi': true,
	  'visibility': true,
	  'word-spacing': true,
	  'writing-mode': true
	};

	function createElement(html) {
	  var div = _aureliaPal.DOM.createElement('div');
	  div.innerHTML = html;
	  return div.firstChild;
	}

	var SVGAnalyzer = exports.SVGAnalyzer = function () {
	  function SVGAnalyzer() {
	    

	    if (createElement('<svg><altGlyph /></svg>').firstElementChild.nodeName === 'altglyph' && elements.altGlyph) {
	      elements.altglyph = elements.altGlyph;
	      delete elements.altGlyph;
	      elements.altglyphdef = elements.altGlyphDef;
	      delete elements.altGlyphDef;
	      elements.altglyphitem = elements.altGlyphItem;
	      delete elements.altGlyphItem;
	      elements.glyphref = elements.glyphRef;
	      delete elements.glyphRef;
	    }
	  }

	  SVGAnalyzer.prototype.isStandardSvgAttribute = function isStandardSvgAttribute(nodeName, attributeName) {
	    return presentationElements[nodeName] && presentationAttributes[attributeName] || elements[nodeName] && elements[nodeName].indexOf(attributeName) !== -1;
	  };

	  return SVGAnalyzer;
	}();

	var ObserverLocator = exports.ObserverLocator = (_temp = _class11 = function () {
	  function ObserverLocator(taskQueue, eventManager, dirtyChecker, svgAnalyzer, parser) {
	    

	    this.taskQueue = taskQueue;
	    this.eventManager = eventManager;
	    this.dirtyChecker = dirtyChecker;
	    this.svgAnalyzer = svgAnalyzer;
	    this.parser = parser;
	    this.adapters = [];
	    this.logger = LogManager.getLogger('observer-locator');
	  }

	  ObserverLocator.prototype.getObserver = function getObserver(obj, propertyName) {
	    var observersLookup = obj.__observers__;
	    var observer = void 0;

	    if (observersLookup && propertyName in observersLookup) {
	      return observersLookup[propertyName];
	    }

	    observer = this.createPropertyObserver(obj, propertyName);

	    if (!observer.doNotCache) {
	      if (observersLookup === undefined) {
	        observersLookup = this.getOrCreateObserversLookup(obj);
	      }

	      observersLookup[propertyName] = observer;
	    }

	    return observer;
	  };

	  ObserverLocator.prototype.getOrCreateObserversLookup = function getOrCreateObserversLookup(obj) {
	    return obj.__observers__ || this.createObserversLookup(obj);
	  };

	  ObserverLocator.prototype.createObserversLookup = function createObserversLookup(obj) {
	    var value = {};

	    if (!Reflect.defineProperty(obj, '__observers__', {
	      enumerable: false,
	      configurable: false,
	      writable: false,
	      value: value
	    })) {
	      this.logger.warn('Cannot add observers to object', obj);
	    }

	    return value;
	  };

	  ObserverLocator.prototype.addAdapter = function addAdapter(adapter) {
	    this.adapters.push(adapter);
	  };

	  ObserverLocator.prototype.getAdapterObserver = function getAdapterObserver(obj, propertyName, descriptor) {
	    for (var _i26 = 0, ii = this.adapters.length; _i26 < ii; _i26++) {
	      var adapter = this.adapters[_i26];
	      var observer = adapter.getObserver(obj, propertyName, descriptor);
	      if (observer) {
	        return observer;
	      }
	    }
	    return null;
	  };

	  ObserverLocator.prototype.createPropertyObserver = function createPropertyObserver(obj, propertyName) {
	    var descriptor = void 0;
	    var handler = void 0;
	    var xlinkResult = void 0;

	    if (!(obj instanceof Object)) {
	      return new PrimitiveObserver(obj, propertyName);
	    }

	    if (obj instanceof _aureliaPal.DOM.Element) {
	      if (propertyName === 'class') {
	        return new ClassObserver(obj);
	      }
	      if (propertyName === 'style' || propertyName === 'css') {
	        return new StyleObserver(obj, propertyName);
	      }
	      handler = this.eventManager.getElementHandler(obj, propertyName);
	      if (propertyName === 'value' && obj.tagName.toLowerCase() === 'select') {
	        return new SelectValueObserver(obj, handler, this);
	      }
	      if (propertyName === 'checked' && obj.tagName.toLowerCase() === 'input') {
	        return new CheckedObserver(obj, handler, this);
	      }
	      if (handler) {
	        return new ValueAttributeObserver(obj, propertyName, handler);
	      }
	      xlinkResult = /^xlink:(.+)$/.exec(propertyName);
	      if (xlinkResult) {
	        return new XLinkAttributeObserver(obj, propertyName, xlinkResult[1]);
	      }
	      if (/^\w+:|^data-|^aria-/.test(propertyName) || obj instanceof _aureliaPal.DOM.SVGElement && this.svgAnalyzer.isStandardSvgAttribute(obj.nodeName, propertyName)) {
	        return new DataAttributeObserver(obj, propertyName);
	      }
	    }

	    descriptor = Object.getPropertyDescriptor(obj, propertyName);

	    if (hasDeclaredDependencies(descriptor)) {
	      return createComputedObserver(obj, propertyName, descriptor, this);
	    }

	    if (descriptor) {
	      var existingGetterOrSetter = descriptor.get || descriptor.set;
	      if (existingGetterOrSetter) {
	        if (existingGetterOrSetter.getObserver) {
	          return existingGetterOrSetter.getObserver(obj);
	        }

	        var adapterObserver = this.getAdapterObserver(obj, propertyName, descriptor);
	        if (adapterObserver) {
	          return adapterObserver;
	        }
	        return new DirtyCheckProperty(this.dirtyChecker, obj, propertyName);
	      }
	    }

	    if (obj instanceof Array) {
	      if (propertyName === 'length') {
	        return this.getArrayObserver(obj).getLengthObserver();
	      }

	      return new DirtyCheckProperty(this.dirtyChecker, obj, propertyName);
	    } else if (obj instanceof Map) {
	      if (propertyName === 'size') {
	        return this.getMapObserver(obj).getLengthObserver();
	      }

	      return new DirtyCheckProperty(this.dirtyChecker, obj, propertyName);
	    } else if (obj instanceof Set) {
	      if (propertyName === 'size') {
	        return this.getSetObserver(obj).getLengthObserver();
	      }

	      return new DirtyCheckProperty(this.dirtyChecker, obj, propertyName);
	    }

	    return new SetterObserver(this.taskQueue, obj, propertyName);
	  };

	  ObserverLocator.prototype.getAccessor = function getAccessor(obj, propertyName) {
	    if (obj instanceof _aureliaPal.DOM.Element) {
	      if (propertyName === 'class' || propertyName === 'style' || propertyName === 'css' || propertyName === 'value' && (obj.tagName.toLowerCase() === 'input' || obj.tagName.toLowerCase() === 'select') || propertyName === 'checked' && obj.tagName.toLowerCase() === 'input' || propertyName === 'model' && obj.tagName.toLowerCase() === 'input' || /^xlink:.+$/.exec(propertyName)) {
	        return this.getObserver(obj, propertyName);
	      }
	      if (/^\w+:|^data-|^aria-/.test(propertyName) || obj instanceof _aureliaPal.DOM.SVGElement && this.svgAnalyzer.isStandardSvgAttribute(obj.nodeName, propertyName)) {
	        return dataAttributeAccessor;
	      }
	    }
	    return propertyAccessor;
	  };

	  ObserverLocator.prototype.getArrayObserver = function getArrayObserver(array) {
	    return _getArrayObserver(this.taskQueue, array);
	  };

	  ObserverLocator.prototype.getMapObserver = function getMapObserver(map) {
	    return _getMapObserver(this.taskQueue, map);
	  };

	  ObserverLocator.prototype.getSetObserver = function getSetObserver(set) {
	    return _getSetObserver(this.taskQueue, set);
	  };

	  return ObserverLocator;
	}(), _class11.inject = [_aureliaTaskQueue.TaskQueue, EventManager, DirtyChecker, SVGAnalyzer, Parser], _temp);

	var ObjectObservationAdapter = exports.ObjectObservationAdapter = function () {
	  function ObjectObservationAdapter() {
	    
	  }

	  ObjectObservationAdapter.prototype.getObserver = function getObserver(object, propertyName, descriptor) {
	    throw new Error('BindingAdapters must implement getObserver(object, propertyName).');
	  };

	  return ObjectObservationAdapter;
	}();

	var BindingExpression = exports.BindingExpression = function () {
	  function BindingExpression(observerLocator, targetProperty, sourceExpression, mode, lookupFunctions, attribute) {
	    

	    this.observerLocator = observerLocator;
	    this.targetProperty = targetProperty;
	    this.sourceExpression = sourceExpression;
	    this.mode = mode;
	    this.lookupFunctions = lookupFunctions;
	    this.attribute = attribute;
	    this.discrete = false;
	  }

	  BindingExpression.prototype.createBinding = function createBinding(target) {
	    return new Binding(this.observerLocator, this.sourceExpression, target, this.targetProperty, this.mode, this.lookupFunctions);
	  };

	  return BindingExpression;
	}();

	var targetContext = 'Binding:target';

	var Binding = exports.Binding = (_dec10 = connectable(), _dec10(_class12 = function () {
	  function Binding(observerLocator, sourceExpression, target, targetProperty, mode, lookupFunctions) {
	    

	    this.observerLocator = observerLocator;
	    this.sourceExpression = sourceExpression;
	    this.target = target;
	    this.targetProperty = targetProperty;
	    this.mode = mode;
	    this.lookupFunctions = lookupFunctions;
	  }

	  Binding.prototype.updateTarget = function updateTarget(value) {
	    this.targetObserver.setValue(value, this.target, this.targetProperty);
	  };

	  Binding.prototype.updateSource = function updateSource(value) {
	    this.sourceExpression.assign(this.source, value, this.lookupFunctions);
	  };

	  Binding.prototype.call = function call(context, newValue, oldValue) {
	    if (!this.isBound) {
	      return;
	    }
	    if (context === sourceContext) {
	      oldValue = this.targetObserver.getValue(this.target, this.targetProperty);
	      newValue = this.sourceExpression.evaluate(this.source, this.lookupFunctions);
	      if (newValue !== oldValue) {
	        this.updateTarget(newValue);
	      }
	      if (this.mode !== bindingMode.oneTime) {
	        this._version++;
	        this.sourceExpression.connect(this, this.source);
	        this.unobserve(false);
	      }
	      return;
	    }
	    if (context === targetContext) {
	      if (newValue !== this.sourceExpression.evaluate(this.source, this.lookupFunctions)) {
	        this.updateSource(newValue);
	      }
	      return;
	    }
	    throw new Error('Unexpected call context ' + context);
	  };

	  Binding.prototype.bind = function bind(source) {
	    if (this.isBound) {
	      if (this.source === source) {
	        return;
	      }
	      this.unbind();
	    }
	    this.isBound = true;
	    this.source = source;

	    if (this.sourceExpression.bind) {
	      this.sourceExpression.bind(this, source, this.lookupFunctions);
	    }

	    var mode = this.mode;
	    if (!this.targetObserver) {
	      var method = mode === bindingMode.twoWay ? 'getObserver' : 'getAccessor';
	      this.targetObserver = this.observerLocator[method](this.target, this.targetProperty);
	    }

	    if ('bind' in this.targetObserver) {
	      this.targetObserver.bind();
	    }
	    var value = this.sourceExpression.evaluate(source, this.lookupFunctions);
	    this.updateTarget(value);

	    if (mode === bindingMode.oneWay) {
	      enqueueBindingConnect(this);
	    } else if (mode === bindingMode.twoWay) {
	      this.sourceExpression.connect(this, source);
	      this.targetObserver.subscribe(targetContext, this);
	    }
	  };

	  Binding.prototype.unbind = function unbind() {
	    if (!this.isBound) {
	      return;
	    }
	    this.isBound = false;
	    if (this.sourceExpression.unbind) {
	      this.sourceExpression.unbind(this, this.source);
	    }
	    this.source = null;
	    if ('unbind' in this.targetObserver) {
	      this.targetObserver.unbind();
	    }
	    if (this.targetObserver.unsubscribe) {
	      this.targetObserver.unsubscribe(targetContext, this);
	    }
	    this.unobserve(true);
	  };

	  Binding.prototype.connect = function connect(evaluate) {
	    if (!this.isBound) {
	      return;
	    }
	    if (evaluate) {
	      var value = this.sourceExpression.evaluate(this.source, this.lookupFunctions);
	      this.updateTarget(value);
	    }
	    this.sourceExpression.connect(this, this.source);
	  };

	  return Binding;
	}()) || _class12);

	var CallExpression = exports.CallExpression = function () {
	  function CallExpression(observerLocator, targetProperty, sourceExpression, lookupFunctions) {
	    

	    this.observerLocator = observerLocator;
	    this.targetProperty = targetProperty;
	    this.sourceExpression = sourceExpression;
	    this.lookupFunctions = lookupFunctions;
	  }

	  CallExpression.prototype.createBinding = function createBinding(target) {
	    return new Call(this.observerLocator, this.sourceExpression, target, this.targetProperty, this.lookupFunctions);
	  };

	  return CallExpression;
	}();

	var Call = exports.Call = function () {
	  function Call(observerLocator, sourceExpression, target, targetProperty, lookupFunctions) {
	    

	    this.sourceExpression = sourceExpression;
	    this.target = target;
	    this.targetProperty = observerLocator.getObserver(target, targetProperty);
	    this.lookupFunctions = lookupFunctions;
	  }

	  Call.prototype.callSource = function callSource($event) {
	    var overrideContext = this.source.overrideContext;
	    Object.assign(overrideContext, $event);
	    overrideContext.$event = $event;
	    var mustEvaluate = true;
	    var result = this.sourceExpression.evaluate(this.source, this.lookupFunctions, mustEvaluate);
	    delete overrideContext.$event;
	    for (var prop in $event) {
	      delete overrideContext[prop];
	    }
	    return result;
	  };

	  Call.prototype.bind = function bind(source) {
	    var _this27 = this;

	    if (this.isBound) {
	      if (this.source === source) {
	        return;
	      }
	      this.unbind();
	    }
	    this.isBound = true;
	    this.source = source;

	    if (this.sourceExpression.bind) {
	      this.sourceExpression.bind(this, source, this.lookupFunctions);
	    }
	    this.targetProperty.setValue(function ($event) {
	      return _this27.callSource($event);
	    });
	  };

	  Call.prototype.unbind = function unbind() {
	    if (!this.isBound) {
	      return;
	    }
	    this.isBound = false;
	    if (this.sourceExpression.unbind) {
	      this.sourceExpression.unbind(this, this.source);
	    }
	    this.source = null;
	    this.targetProperty.setValue(null);
	  };

	  return Call;
	}();

	var ValueConverterResource = exports.ValueConverterResource = function () {
	  function ValueConverterResource(name) {
	    

	    this.name = name;
	  }

	  ValueConverterResource.convention = function convention(name) {
	    if (name.endsWith('ValueConverter')) {
	      return new ValueConverterResource(camelCase(name.substring(0, name.length - 14)));
	    }
	  };

	  ValueConverterResource.prototype.initialize = function initialize(container, target) {
	    this.instance = container.get(target);
	  };

	  ValueConverterResource.prototype.register = function register(registry, name) {
	    registry.registerValueConverter(name || this.name, this.instance);
	  };

	  ValueConverterResource.prototype.load = function load(container, target) {};

	  return ValueConverterResource;
	}();

	function valueConverter(nameOrTarget) {
	  if (nameOrTarget === undefined || typeof nameOrTarget === 'string') {
	    return function (target) {
	      _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.resource, new ValueConverterResource(nameOrTarget), target);
	    };
	  }

	  _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.resource, new ValueConverterResource(), nameOrTarget);
	}

	var BindingBehaviorResource = exports.BindingBehaviorResource = function () {
	  function BindingBehaviorResource(name) {
	    

	    this.name = name;
	  }

	  BindingBehaviorResource.convention = function convention(name) {
	    if (name.endsWith('BindingBehavior')) {
	      return new BindingBehaviorResource(camelCase(name.substring(0, name.length - 15)));
	    }
	  };

	  BindingBehaviorResource.prototype.initialize = function initialize(container, target) {
	    this.instance = container.get(target);
	  };

	  BindingBehaviorResource.prototype.register = function register(registry, name) {
	    registry.registerBindingBehavior(name || this.name, this.instance);
	  };

	  BindingBehaviorResource.prototype.load = function load(container, target) {};

	  return BindingBehaviorResource;
	}();

	function bindingBehavior(nameOrTarget) {
	  if (nameOrTarget === undefined || typeof nameOrTarget === 'string') {
	    return function (target) {
	      _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.resource, new BindingBehaviorResource(nameOrTarget), target);
	    };
	  }

	  _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.resource, new BindingBehaviorResource(), nameOrTarget);
	}

	var ListenerExpression = exports.ListenerExpression = function () {
	  function ListenerExpression(eventManager, targetEvent, sourceExpression, delegate, preventDefault, lookupFunctions) {
	    

	    this.eventManager = eventManager;
	    this.targetEvent = targetEvent;
	    this.sourceExpression = sourceExpression;
	    this.delegate = delegate;
	    this.discrete = true;
	    this.preventDefault = preventDefault;
	    this.lookupFunctions = lookupFunctions;
	  }

	  ListenerExpression.prototype.createBinding = function createBinding(target) {
	    return new Listener(this.eventManager, this.targetEvent, this.delegate, this.sourceExpression, target, this.preventDefault, this.lookupFunctions);
	  };

	  return ListenerExpression;
	}();

	var Listener = exports.Listener = function () {
	  function Listener(eventManager, targetEvent, delegate, sourceExpression, target, preventDefault, lookupFunctions) {
	    

	    this.eventManager = eventManager;
	    this.targetEvent = targetEvent;
	    this.delegate = delegate;
	    this.sourceExpression = sourceExpression;
	    this.target = target;
	    this.preventDefault = preventDefault;
	    this.lookupFunctions = lookupFunctions;
	  }

	  Listener.prototype.callSource = function callSource(event) {
	    var overrideContext = this.source.overrideContext;
	    overrideContext.$event = event;
	    var mustEvaluate = true;
	    var result = this.sourceExpression.evaluate(this.source, this.lookupFunctions, mustEvaluate);
	    delete overrideContext.$event;
	    if (result !== true && this.preventDefault) {
	      event.preventDefault();
	    }
	    return result;
	  };

	  Listener.prototype.bind = function bind(source) {
	    var _this28 = this;

	    if (this.isBound) {
	      if (this.source === source) {
	        return;
	      }
	      this.unbind();
	    }
	    this.isBound = true;
	    this.source = source;

	    if (this.sourceExpression.bind) {
	      this.sourceExpression.bind(this, source, this.lookupFunctions);
	    }
	    this._disposeListener = this.eventManager.addEventListener(this.target, this.targetEvent, function (event) {
	      return _this28.callSource(event);
	    }, this.delegate);
	  };

	  Listener.prototype.unbind = function unbind() {
	    if (!this.isBound) {
	      return;
	    }
	    this.isBound = false;
	    if (this.sourceExpression.unbind) {
	      this.sourceExpression.unbind(this, this.source);
	    }
	    this.source = null;
	    this._disposeListener();
	    this._disposeListener = null;
	  };

	  return Listener;
	}();

	function getAU(element) {
	  var au = element.au;

	  if (au === undefined) {
	    throw new Error('No Aurelia APIs are defined for the element: "' + element.tagName + '".');
	  }

	  return au;
	}

	var NameExpression = exports.NameExpression = function () {
	  function NameExpression(sourceExpression, apiName, lookupFunctions) {
	    

	    this.sourceExpression = sourceExpression;
	    this.apiName = apiName;
	    this.lookupFunctions = lookupFunctions;
	    this.discrete = true;
	  }

	  NameExpression.prototype.createBinding = function createBinding(target) {
	    return new NameBinder(this.sourceExpression, NameExpression.locateAPI(target, this.apiName), this.lookupFunctions);
	  };

	  NameExpression.locateAPI = function locateAPI(element, apiName) {
	    switch (apiName) {
	      case 'element':
	        return element;
	      case 'controller':
	        return getAU(element).controller;
	      case 'view-model':
	        return getAU(element).controller.viewModel;
	      case 'view':
	        return getAU(element).controller.view;
	      default:
	        var target = getAU(element)[apiName];

	        if (target === undefined) {
	          throw new Error('Attempted to reference "' + apiName + '", but it was not found amongst the target\'s API.');
	        }

	        return target.viewModel;
	    }
	  };

	  return NameExpression;
	}();

	var NameBinder = function () {
	  function NameBinder(sourceExpression, target, lookupFunctions) {
	    

	    this.sourceExpression = sourceExpression;
	    this.target = target;
	    this.lookupFunctions = lookupFunctions;
	  }

	  NameBinder.prototype.bind = function bind(source) {
	    if (this.isBound) {
	      if (this.source === source) {
	        return;
	      }
	      this.unbind();
	    }
	    this.isBound = true;
	    this.source = source;
	    if (this.sourceExpression.bind) {
	      this.sourceExpression.bind(this, source, this.lookupFunctions);
	    }
	    this.sourceExpression.assign(this.source, this.target, this.lookupFunctions);
	  };

	  NameBinder.prototype.unbind = function unbind() {
	    if (!this.isBound) {
	      return;
	    }
	    this.isBound = false;
	    this.sourceExpression.assign(this.source, null, this.lookupFunctions);
	    if (this.sourceExpression.unbind) {
	      this.sourceExpression.unbind(this, this.source);
	    }
	    this.source = null;
	  };

	  return NameBinder;
	}();

	var LookupFunctions = {
	  bindingBehaviors: function bindingBehaviors(name) {
	    return null;
	  },
	  valueConverters: function valueConverters(name) {
	    return null;
	  }
	};

	var BindingEngine = exports.BindingEngine = (_temp2 = _class13 = function () {
	  function BindingEngine(observerLocator, parser) {
	    

	    this.observerLocator = observerLocator;
	    this.parser = parser;
	  }

	  BindingEngine.prototype.createBindingExpression = function createBindingExpression(targetProperty, sourceExpression) {
	    var mode = arguments.length <= 2 || arguments[2] === undefined ? bindingMode.oneWay : arguments[2];
	    var lookupFunctions = arguments.length <= 3 || arguments[3] === undefined ? LookupFunctions : arguments[3];

	    return new BindingExpression(this.observerLocator, targetProperty, this.parser.parse(sourceExpression), mode, lookupFunctions);
	  };

	  BindingEngine.prototype.propertyObserver = function propertyObserver(obj, propertyName) {
	    var _this29 = this;

	    return {
	      subscribe: function subscribe(callback) {
	        var observer = _this29.observerLocator.getObserver(obj, propertyName);
	        observer.subscribe(callback);
	        return {
	          dispose: function dispose() {
	            return observer.unsubscribe(callback);
	          }
	        };
	      }
	    };
	  };

	  BindingEngine.prototype.collectionObserver = function collectionObserver(collection) {
	    var _this30 = this;

	    return {
	      subscribe: function subscribe(callback) {
	        var observer = void 0;
	        if (collection instanceof Array) {
	          observer = _this30.observerLocator.getArrayObserver(collection);
	        } else if (collection instanceof Map) {
	          observer = _this30.observerLocator.getMapObserver(collection);
	        } else if (collection instanceof Set) {
	          observer = _this30.observerLocator.getSetObserver(collection);
	        } else {
	          throw new Error('collection must be an instance of Array, Map or Set.');
	        }
	        observer.subscribe(callback);
	        return {
	          dispose: function dispose() {
	            return observer.unsubscribe(callback);
	          }
	        };
	      }
	    };
	  };

	  BindingEngine.prototype.expressionObserver = function expressionObserver(bindingContext, expression) {
	    var scope = { bindingContext: bindingContext, overrideContext: createOverrideContext(bindingContext) };
	    return new ExpressionObserver(scope, this.parser.parse(expression), this.observerLocator, LookupFunctions);
	  };

	  BindingEngine.prototype.parseExpression = function parseExpression(expression) {
	    return this.parser.parse(expression);
	  };

	  BindingEngine.prototype.registerAdapter = function registerAdapter(adapter) {
	    this.observerLocator.addAdapter(adapter);
	  };

	  return BindingEngine;
	}(), _class13.inject = [ObserverLocator, Parser], _temp2);


	var setProto = Set.prototype;

	function _getSetObserver(taskQueue, set) {
	  return ModifySetObserver.for(taskQueue, set);
	}

	exports.getSetObserver = _getSetObserver;

	var ModifySetObserver = function (_ModifyCollectionObse3) {
	  _inherits(ModifySetObserver, _ModifyCollectionObse3);

	  function ModifySetObserver(taskQueue, set) {
	    

	    return _possibleConstructorReturn(this, _ModifyCollectionObse3.call(this, taskQueue, set));
	  }

	  ModifySetObserver.for = function _for(taskQueue, set) {
	    if (!('__set_observer__' in set)) {
	      var observer = ModifySetObserver.create(taskQueue, set);
	      Reflect.defineProperty(set, '__set_observer__', { value: observer, enumerable: false, configurable: false });
	    }
	    return set.__set_observer__;
	  };

	  ModifySetObserver.create = function create(taskQueue, set) {
	    var observer = new ModifySetObserver(taskQueue, set);

	    var proto = setProto;
	    if (proto.add !== set.add || proto.delete !== set.delete || proto.clear !== set.clear) {
	      proto = {
	        add: set.add,
	        delete: set.delete,
	        clear: set.clear
	      };
	    }

	    set.add = function () {
	      var type = 'add';
	      var oldSize = set.size;
	      var methodCallResult = proto.add.apply(set, arguments);
	      var hasValue = set.size === oldSize;
	      if (!hasValue) {
	        observer.addChangeRecord({
	          type: type,
	          object: set,
	          value: Array.from(set).pop()
	        });
	      }
	      return methodCallResult;
	    };

	    set.delete = function () {
	      var hasValue = set.has(arguments[0]);
	      var methodCallResult = proto.delete.apply(set, arguments);
	      if (hasValue) {
	        observer.addChangeRecord({
	          type: 'delete',
	          object: set,
	          value: arguments[0]
	        });
	      }
	      return methodCallResult;
	    };

	    set.clear = function () {
	      var methodCallResult = proto.clear.apply(set, arguments);
	      observer.addChangeRecord({
	        type: 'clear',
	        object: set
	      });
	      return methodCallResult;
	    };

	    return observer;
	  };

	  return ModifySetObserver;
	}(ModifyCollectionObserver);

	function observable(targetOrConfig, key, descriptor) {
	  function deco(target, key, descriptor, config) {
	    if (key === undefined) {
	      target = target.prototype;
	      key = typeof config === 'string' ? config : config.name;
	    }

	    var innerPropertyName = '_' + key;

	    var callbackName = config && config.changeHandler || key + 'Changed';

	    if (descriptor) {
	      if (typeof descriptor.initializer === 'function') {
	        target[innerPropertyName] = descriptor.initializer();
	      }
	    } else {
	      descriptor = {};
	    }

	    delete descriptor.writable;
	    delete descriptor.initializer;

	    descriptor.get = function () {
	      return this[innerPropertyName];
	    };
	    descriptor.set = function (newValue) {
	      var oldValue = this[innerPropertyName];
	      this[innerPropertyName] = newValue;
	      if (this[callbackName]) {
	        this[callbackName](newValue, oldValue);
	      }
	    };

	    descriptor.get.dependencies = [innerPropertyName];

	    Reflect.defineProperty(target, key, descriptor);
	  }

	  if (key === undefined) {
	    return function (t, k, d) {
	      return deco(t, k, d, targetOrConfig);
	    };
	  }
	  return deco(targetOrConfig, key, descriptor);
	}

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getLogger = getLogger;
	exports.addAppender = addAppender;
	exports.setLevel = setLevel;



	var logLevel = exports.logLevel = {
	  none: 0,
	  error: 1,
	  warn: 2,
	  info: 3,
	  debug: 4
	};

	var loggers = {};
	var currentLevel = logLevel.none;
	var appenders = [];
	var slice = Array.prototype.slice;
	var loggerConstructionKey = {};

	function log(logger, level, args) {
	  var i = appenders.length;
	  var current = void 0;

	  args = slice.call(args);
	  args.unshift(logger);

	  while (i--) {
	    current = appenders[i];
	    current[level].apply(current, args);
	  }
	}

	function debug() {
	  if (currentLevel < 4) {
	    return;
	  }

	  log(this, 'debug', arguments);
	}

	function info() {
	  if (currentLevel < 3) {
	    return;
	  }

	  log(this, 'info', arguments);
	}

	function warn() {
	  if (currentLevel < 2) {
	    return;
	  }

	  log(this, 'warn', arguments);
	}

	function error() {
	  if (currentLevel < 1) {
	    return;
	  }

	  log(this, 'error', arguments);
	}

	function connectLogger(logger) {
	  logger.debug = debug;
	  logger.info = info;
	  logger.warn = warn;
	  logger.error = error;
	}

	function createLogger(id) {
	  var logger = new Logger(id, loggerConstructionKey);

	  if (appenders.length) {
	    connectLogger(logger);
	  }

	  return logger;
	}

	function getLogger(id) {
	  return loggers[id] || (loggers[id] = createLogger(id));
	}

	function addAppender(appender) {
	  appenders.push(appender);

	  if (appenders.length === 1) {
	    for (var key in loggers) {
	      connectLogger(loggers[key]);
	    }
	  }
	}

	function setLevel(level) {
	  currentLevel = level;
	}

	var Logger = exports.Logger = function () {
	  function Logger(id, key) {
	    

	    if (key !== loggerConstructionKey) {
	      throw new Error('Cannot instantiate "Logger". Use "getLogger" instead.');
	    }

	    this.id = id;
	  }

	  Logger.prototype.debug = function debug(message) {};

	  Logger.prototype.info = function info(message) {};

	  Logger.prototype.warn = function warn(message) {};

	  Logger.prototype.error = function error(message) {};

	  return Logger;
	}();

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TaskQueue = undefined;

	var _aureliaPal = __webpack_require__(7);



	var hasSetImmediate = typeof setImmediate === 'function';

	function makeRequestFlushFromMutationObserver(flush) {
	  var toggle = 1;
	  var observer = _aureliaPal.DOM.createMutationObserver(flush);
	  var node = _aureliaPal.DOM.createTextNode('');
	  observer.observe(node, { characterData: true });
	  return function requestFlush() {
	    toggle = -toggle;
	    node.data = toggle;
	  };
	}

	function makeRequestFlushFromTimer(flush) {
	  return function requestFlush() {
	    var timeoutHandle = setTimeout(handleFlushTimer, 0);

	    var intervalHandle = setInterval(handleFlushTimer, 50);
	    function handleFlushTimer() {
	      clearTimeout(timeoutHandle);
	      clearInterval(intervalHandle);
	      flush();
	    }
	  };
	}

	function onError(error, task) {
	  if ('onError' in task) {
	    task.onError(error);
	  } else if (hasSetImmediate) {
	    setImmediate(function () {
	      throw error;
	    });
	  } else {
	    setTimeout(function () {
	      throw error;
	    }, 0);
	  }
	}

	var TaskQueue = exports.TaskQueue = function () {
	  function TaskQueue() {
	    var _this = this;

	    

	    this.microTaskQueue = [];
	    this.microTaskQueueCapacity = 1024;
	    this.taskQueue = [];

	    if (_aureliaPal.FEATURE.mutationObserver) {
	      this.requestFlushMicroTaskQueue = makeRequestFlushFromMutationObserver(function () {
	        return _this.flushMicroTaskQueue();
	      });
	    } else {
	      this.requestFlushMicroTaskQueue = makeRequestFlushFromTimer(function () {
	        return _this.flushMicroTaskQueue();
	      });
	    }

	    this.requestFlushTaskQueue = makeRequestFlushFromTimer(function () {
	      return _this.flushTaskQueue();
	    });
	  }

	  TaskQueue.prototype.queueMicroTask = function queueMicroTask(task) {
	    if (this.microTaskQueue.length < 1) {
	      this.requestFlushMicroTaskQueue();
	    }

	    this.microTaskQueue.push(task);
	  };

	  TaskQueue.prototype.queueTask = function queueTask(task) {
	    if (this.taskQueue.length < 1) {
	      this.requestFlushTaskQueue();
	    }

	    this.taskQueue.push(task);
	  };

	  TaskQueue.prototype.flushTaskQueue = function flushTaskQueue() {
	    var queue = this.taskQueue;
	    var index = 0;
	    var task = void 0;

	    this.taskQueue = [];

	    try {
	      while (index < queue.length) {
	        task = queue[index];
	        task.call();
	        index++;
	      }
	    } catch (error) {
	      onError(error, task);
	    }
	  };

	  TaskQueue.prototype.flushMicroTaskQueue = function flushMicroTaskQueue() {
	    var queue = this.microTaskQueue;
	    var capacity = this.microTaskQueueCapacity;
	    var index = 0;
	    var task = void 0;

	    try {
	      while (index < queue.length) {
	        task = queue[index];
	        task.call();
	        index++;

	        if (index > capacity) {
	          for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
	            queue[scan] = queue[scan + index];
	          }

	          queue.length -= index;
	          index = 0;
	        }
	      }
	    } catch (error) {
	      onError(error, task);
	    }

	    queue.length = 0;
	  };

	  return TaskQueue;
	}();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5).setImmediate))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Promise) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TemplatingEngine = exports.ElementConfigResource = exports.CompositionEngine = exports.HtmlBehaviorResource = exports.BindableProperty = exports.BehaviorPropertyObserver = exports.Controller = exports.ViewEngine = exports.ModuleAnalyzer = exports.ResourceDescription = exports.ResourceModule = exports.ViewCompiler = exports.ViewFactory = exports.BoundViewFactory = exports.ViewSlot = exports.View = exports.ViewResources = exports.ShadowDOM = exports.ShadowSlot = exports.PassThroughSlot = exports.SlotCustomAttribute = exports.BindingLanguage = exports.ViewLocator = exports.InlineViewStrategy = exports.TemplateRegistryViewStrategy = exports.NoViewStrategy = exports.ConventionalViewStrategy = exports.RelativeViewStrategy = exports.viewStrategy = exports.TargetInstruction = exports.BehaviorInstruction = exports.ViewCompileInstruction = exports.ResourceLoadContext = exports.ElementEvents = exports.ViewEngineHooksResource = exports.CompositionTransaction = exports.CompositionTransactionOwnershipToken = exports.CompositionTransactionNotifier = exports.Animator = exports.animationEvent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class4, _temp, _dec, _class5, _dec2, _class6, _dec3, _class7, _dec4, _class8, _dec5, _class9, _class10, _temp2, _dec6, _class11, _class12, _temp3, _class15, _dec7, _class17, _dec8, _class18, _dec9, _class20, _dec10, _class21, _dec11, _class22;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports._hyphenate = _hyphenate;
	exports._isAllWhitespace = _isAllWhitespace;
	exports.viewEngineHooks = viewEngineHooks;
	exports.children = children;
	exports.child = child;
	exports.resource = resource;
	exports.behavior = behavior;
	exports.customElement = customElement;
	exports.customAttribute = customAttribute;
	exports.templateController = templateController;
	exports.bindable = bindable;
	exports.dynamicOptions = dynamicOptions;
	exports.useShadowDOM = useShadowDOM;
	exports.processAttributes = processAttributes;
	exports.processContent = processContent;
	exports.containerless = containerless;
	exports.useViewStrategy = useViewStrategy;
	exports.useView = useView;
	exports.inlineView = inlineView;
	exports.noView = noView;
	exports.elementConfig = elementConfig;

	var _aureliaLogging = __webpack_require__(21);

	var LogManager = _interopRequireWildcard(_aureliaLogging);

	var _aureliaMetadata = __webpack_require__(10);

	var _aureliaPal = __webpack_require__(7);

	var _aureliaPath = __webpack_require__(12);

	var _aureliaLoader = __webpack_require__(11);

	var _aureliaDependencyInjection = __webpack_require__(19);

	var _aureliaBinding = __webpack_require__(20);

	var _aureliaTaskQueue = __webpack_require__(22);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }



	var animationEvent = exports.animationEvent = {
	  enterBegin: 'animation:enter:begin',
	  enterActive: 'animation:enter:active',
	  enterDone: 'animation:enter:done',
	  enterTimeout: 'animation:enter:timeout',

	  leaveBegin: 'animation:leave:begin',
	  leaveActive: 'animation:leave:active',
	  leaveDone: 'animation:leave:done',
	  leaveTimeout: 'animation:leave:timeout',

	  staggerNext: 'animation:stagger:next',

	  removeClassBegin: 'animation:remove-class:begin',
	  removeClassActive: 'animation:remove-class:active',
	  removeClassDone: 'animation:remove-class:done',
	  removeClassTimeout: 'animation:remove-class:timeout',

	  addClassBegin: 'animation:add-class:begin',
	  addClassActive: 'animation:add-class:active',
	  addClassDone: 'animation:add-class:done',
	  addClassTimeout: 'animation:add-class:timeout',

	  animateBegin: 'animation:animate:begin',
	  animateActive: 'animation:animate:active',
	  animateDone: 'animation:animate:done',
	  animateTimeout: 'animation:animate:timeout',

	  sequenceBegin: 'animation:sequence:begin',
	  sequenceDone: 'animation:sequence:done'
	};

	var Animator = exports.Animator = function () {
	  function Animator() {
	    
	  }

	  Animator.prototype.enter = function enter(element) {
	    return Promise.resolve(false);
	  };

	  Animator.prototype.leave = function leave(element) {
	    return Promise.resolve(false);
	  };

	  Animator.prototype.removeClass = function removeClass(element, className) {
	    element.classList.remove(className);
	    return Promise.resolve(false);
	  };

	  Animator.prototype.addClass = function addClass(element, className) {
	    element.classList.add(className);
	    return Promise.resolve(false);
	  };

	  Animator.prototype.animate = function animate(element, className) {
	    return Promise.resolve(false);
	  };

	  Animator.prototype.runSequence = function runSequence(animations) {};

	  Animator.prototype.registerEffect = function registerEffect(effectName, properties) {};

	  Animator.prototype.unregisterEffect = function unregisterEffect(effectName) {};

	  return Animator;
	}();

	var CompositionTransactionNotifier = exports.CompositionTransactionNotifier = function () {
	  function CompositionTransactionNotifier(owner) {
	    

	    this.owner = owner;
	    this.owner._compositionCount++;
	  }

	  CompositionTransactionNotifier.prototype.done = function done() {
	    this.owner._compositionCount--;
	    this.owner._tryCompleteTransaction();
	  };

	  return CompositionTransactionNotifier;
	}();

	var CompositionTransactionOwnershipToken = exports.CompositionTransactionOwnershipToken = function () {
	  function CompositionTransactionOwnershipToken(owner) {
	    

	    this.owner = owner;
	    this.owner._ownershipToken = this;
	    this.thenable = this._createThenable();
	  }

	  CompositionTransactionOwnershipToken.prototype.waitForCompositionComplete = function waitForCompositionComplete() {
	    this.owner._tryCompleteTransaction();
	    return this.thenable;
	  };

	  CompositionTransactionOwnershipToken.prototype.resolve = function resolve() {
	    this._resolveCallback();
	  };

	  CompositionTransactionOwnershipToken.prototype._createThenable = function _createThenable() {
	    var _this = this;

	    return new Promise(function (resolve, reject) {
	      _this._resolveCallback = resolve;
	    });
	  };

	  return CompositionTransactionOwnershipToken;
	}();

	var CompositionTransaction = exports.CompositionTransaction = function () {
	  function CompositionTransaction() {
	    

	    this._ownershipToken = null;
	    this._compositionCount = 0;
	  }

	  CompositionTransaction.prototype.tryCapture = function tryCapture() {
	    return this._ownershipToken === null ? new CompositionTransactionOwnershipToken(this) : null;
	  };

	  CompositionTransaction.prototype.enlist = function enlist() {
	    return new CompositionTransactionNotifier(this);
	  };

	  CompositionTransaction.prototype._tryCompleteTransaction = function _tryCompleteTransaction() {
	    if (this._compositionCount <= 0) {
	      this._compositionCount = 0;

	      if (this._ownershipToken !== null) {
	        var token = this._ownershipToken;
	        this._ownershipToken = null;
	        token.resolve();
	      }
	    }
	  };

	  return CompositionTransaction;
	}();

	var capitalMatcher = /([A-Z])/g;

	function addHyphenAndLower(char) {
	  return '-' + char.toLowerCase();
	}

	function _hyphenate(name) {
	  return (name.charAt(0).toLowerCase() + name.slice(1)).replace(capitalMatcher, addHyphenAndLower);
	}

	function _isAllWhitespace(node) {
	  return !(node.auInterpolationTarget || /[^\t\n\r ]/.test(node.textContent));
	}

	var ViewEngineHooksResource = exports.ViewEngineHooksResource = function () {
	  function ViewEngineHooksResource() {
	    
	  }

	  ViewEngineHooksResource.prototype.initialize = function initialize(container, target) {
	    this.instance = container.get(target);
	  };

	  ViewEngineHooksResource.prototype.register = function register(registry, name) {
	    registry.registerViewEngineHooks(this.instance);
	  };

	  ViewEngineHooksResource.prototype.load = function load(container, target) {};

	  ViewEngineHooksResource.convention = function convention(name) {
	    if (name.endsWith('ViewEngineHooks')) {
	      return new ViewEngineHooksResource();
	    }
	  };

	  return ViewEngineHooksResource;
	}();

	function viewEngineHooks(target) {
	  var deco = function deco(t) {
	    _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.resource, new ViewEngineHooksResource(), t);
	  };

	  return target ? deco(target) : deco;
	}

	var ElementEvents = exports.ElementEvents = function () {
	  function ElementEvents(element) {
	    

	    this.element = element;
	    this.subscriptions = {};
	  }

	  ElementEvents.prototype._enqueueHandler = function _enqueueHandler(handler) {
	    this.subscriptions[handler.eventName] = this.subscriptions[handler.eventName] || [];
	    this.subscriptions[handler.eventName].push(handler);
	  };

	  ElementEvents.prototype._dequeueHandler = function _dequeueHandler(handler) {
	    var index = void 0;
	    var subscriptions = this.subscriptions[handler.eventName];
	    if (subscriptions) {
	      index = subscriptions.indexOf(handler);
	      if (index > -1) {
	        subscriptions.splice(index, 1);
	      }
	    }
	    return handler;
	  };

	  ElementEvents.prototype.publish = function publish(eventName) {
	    var detail = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	    var bubbles = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
	    var cancelable = arguments.length <= 3 || arguments[3] === undefined ? true : arguments[3];

	    var event = _aureliaPal.DOM.createCustomEvent(eventName, { cancelable: cancelable, bubbles: bubbles, detail: detail });
	    this.element.dispatchEvent(event);
	  };

	  ElementEvents.prototype.subscribe = function subscribe(eventName, handler) {
	    var _this2 = this;

	    var bubbles = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

	    if (handler && typeof handler === 'function') {
	      handler.eventName = eventName;
	      handler.handler = handler;
	      handler.bubbles = bubbles;
	      handler.dispose = function () {
	        _this2.element.removeEventListener(eventName, handler, bubbles);
	        _this2._dequeueHandler(handler);
	      };
	      this.element.addEventListener(eventName, handler, bubbles);
	      this._enqueueHandler(handler);
	      return handler;
	    }

	    return undefined;
	  };

	  ElementEvents.prototype.subscribeOnce = function subscribeOnce(eventName, handler) {
	    var _this3 = this;

	    var bubbles = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

	    if (handler && typeof handler === 'function') {
	      var _ret = function () {
	        var _handler = function _handler(event) {
	          handler(event);
	          _handler.dispose();
	        };
	        return {
	          v: _this3.subscribe(eventName, _handler, bubbles)
	        };
	      }();

	      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	    }

	    return undefined;
	  };

	  ElementEvents.prototype.dispose = function dispose(eventName) {
	    if (eventName && typeof eventName === 'string') {
	      var subscriptions = this.subscriptions[eventName];
	      if (subscriptions) {
	        while (subscriptions.length) {
	          var subscription = subscriptions.pop();
	          if (subscription) {
	            subscription.dispose();
	          }
	        }
	      }
	    } else {
	      this.disposeAll();
	    }
	  };

	  ElementEvents.prototype.disposeAll = function disposeAll() {
	    for (var key in this.subscriptions) {
	      this.dispose(key);
	    }
	  };

	  return ElementEvents;
	}();

	var ResourceLoadContext = exports.ResourceLoadContext = function () {
	  function ResourceLoadContext() {
	    

	    this.dependencies = {};
	  }

	  ResourceLoadContext.prototype.addDependency = function addDependency(url) {
	    this.dependencies[url] = true;
	  };

	  ResourceLoadContext.prototype.hasDependency = function hasDependency(url) {
	    return url in this.dependencies;
	  };

	  return ResourceLoadContext;
	}();

	var ViewCompileInstruction = exports.ViewCompileInstruction = function ViewCompileInstruction() {
	  var targetShadowDOM = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
	  var compileSurrogate = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	  

	  this.targetShadowDOM = targetShadowDOM;
	  this.compileSurrogate = compileSurrogate;
	  this.associatedModuleId = null;
	};

	ViewCompileInstruction.normal = new ViewCompileInstruction();

	var BehaviorInstruction = exports.BehaviorInstruction = function () {
	  BehaviorInstruction.enhance = function enhance() {
	    var instruction = new BehaviorInstruction();
	    instruction.enhance = true;
	    return instruction;
	  };

	  BehaviorInstruction.unitTest = function unitTest(type, attributes) {
	    var instruction = new BehaviorInstruction();
	    instruction.type = type;
	    instruction.attributes = attributes || {};
	    return instruction;
	  };

	  BehaviorInstruction.element = function element(node, type) {
	    var instruction = new BehaviorInstruction();
	    instruction.type = type;
	    instruction.attributes = {};
	    instruction.anchorIsContainer = !(node.hasAttribute('containerless') || type.containerless);
	    instruction.initiatedByBehavior = true;
	    return instruction;
	  };

	  BehaviorInstruction.attribute = function attribute(attrName, type) {
	    var instruction = new BehaviorInstruction();
	    instruction.attrName = attrName;
	    instruction.type = type || null;
	    instruction.attributes = {};
	    return instruction;
	  };

	  BehaviorInstruction.dynamic = function dynamic(host, viewModel, viewFactory) {
	    var instruction = new BehaviorInstruction();
	    instruction.host = host;
	    instruction.viewModel = viewModel;
	    instruction.viewFactory = viewFactory;
	    instruction.inheritBindingContext = true;
	    return instruction;
	  };

	  function BehaviorInstruction() {
	    

	    this.initiatedByBehavior = false;
	    this.enhance = false;
	    this.partReplacements = null;
	    this.viewFactory = null;
	    this.originalAttrName = null;
	    this.skipContentProcessing = false;
	    this.contentFactory = null;
	    this.viewModel = null;
	    this.anchorIsContainer = false;
	    this.host = null;
	    this.attributes = null;
	    this.type = null;
	    this.attrName = null;
	    this.inheritBindingContext = false;
	  }

	  return BehaviorInstruction;
	}();

	BehaviorInstruction.normal = new BehaviorInstruction();

	var TargetInstruction = exports.TargetInstruction = (_temp = _class4 = function () {
	  TargetInstruction.shadowSlot = function shadowSlot(parentInjectorId) {
	    var instruction = new TargetInstruction();
	    instruction.parentInjectorId = parentInjectorId;
	    instruction.shadowSlot = true;
	    return instruction;
	  };

	  TargetInstruction.contentExpression = function contentExpression(expression) {
	    var instruction = new TargetInstruction();
	    instruction.contentExpression = expression;
	    return instruction;
	  };

	  TargetInstruction.lifting = function lifting(parentInjectorId, liftingInstruction) {
	    var instruction = new TargetInstruction();
	    instruction.parentInjectorId = parentInjectorId;
	    instruction.expressions = TargetInstruction.noExpressions;
	    instruction.behaviorInstructions = [liftingInstruction];
	    instruction.viewFactory = liftingInstruction.viewFactory;
	    instruction.providers = [liftingInstruction.type.target];
	    instruction.lifting = true;
	    return instruction;
	  };

	  TargetInstruction.normal = function normal(injectorId, parentInjectorId, providers, behaviorInstructions, expressions, elementInstruction) {
	    var instruction = new TargetInstruction();
	    instruction.injectorId = injectorId;
	    instruction.parentInjectorId = parentInjectorId;
	    instruction.providers = providers;
	    instruction.behaviorInstructions = behaviorInstructions;
	    instruction.expressions = expressions;
	    instruction.anchorIsContainer = elementInstruction ? elementInstruction.anchorIsContainer : true;
	    instruction.elementInstruction = elementInstruction;
	    return instruction;
	  };

	  TargetInstruction.surrogate = function surrogate(providers, behaviorInstructions, expressions, values) {
	    var instruction = new TargetInstruction();
	    instruction.expressions = expressions;
	    instruction.behaviorInstructions = behaviorInstructions;
	    instruction.providers = providers;
	    instruction.values = values;
	    return instruction;
	  };

	  function TargetInstruction() {
	    

	    this.injectorId = null;
	    this.parentInjectorId = null;

	    this.shadowSlot = false;
	    this.slotName = null;
	    this.slotFallbackFactory = null;

	    this.contentExpression = null;

	    this.expressions = null;
	    this.behaviorInstructions = null;
	    this.providers = null;

	    this.viewFactory = null;

	    this.anchorIsContainer = false;
	    this.elementInstruction = null;
	    this.lifting = false;

	    this.values = null;
	  }

	  return TargetInstruction;
	}(), _class4.noExpressions = Object.freeze([]), _temp);
	var viewStrategy = exports.viewStrategy = _aureliaMetadata.protocol.create('aurelia:view-strategy', {
	  validate: function validate(target) {
	    if (!(typeof target.loadViewFactory === 'function')) {
	      return 'View strategies must implement: loadViewFactory(viewEngine: ViewEngine, compileInstruction: ViewCompileInstruction, loadContext?: ResourceLoadContext): Promise<ViewFactory>';
	    }

	    return true;
	  },
	  compose: function compose(target) {
	    if (!(typeof target.makeRelativeTo === 'function')) {
	      target.makeRelativeTo = _aureliaPal.PLATFORM.noop;
	    }
	  }
	});

	var RelativeViewStrategy = exports.RelativeViewStrategy = (_dec = viewStrategy(), _dec(_class5 = function () {
	  function RelativeViewStrategy(path) {
	    

	    this.path = path;
	    this.absolutePath = null;
	  }

	  RelativeViewStrategy.prototype.loadViewFactory = function loadViewFactory(viewEngine, compileInstruction, loadContext) {
	    if (this.absolutePath === null && this.moduleId) {
	      this.absolutePath = (0, _aureliaPath.relativeToFile)(this.path, this.moduleId);
	    }

	    compileInstruction.associatedModuleId = this.moduleId;
	    return viewEngine.loadViewFactory(this.absolutePath || this.path, compileInstruction, loadContext);
	  };

	  RelativeViewStrategy.prototype.makeRelativeTo = function makeRelativeTo(file) {
	    if (this.absolutePath === null) {
	      this.absolutePath = (0, _aureliaPath.relativeToFile)(this.path, file);
	    }
	  };

	  return RelativeViewStrategy;
	}()) || _class5);
	var ConventionalViewStrategy = exports.ConventionalViewStrategy = (_dec2 = viewStrategy(), _dec2(_class6 = function () {
	  function ConventionalViewStrategy(viewLocator, origin) {
	    

	    this.moduleId = origin.moduleId;
	    this.viewUrl = viewLocator.convertOriginToViewUrl(origin);
	  }

	  ConventionalViewStrategy.prototype.loadViewFactory = function loadViewFactory(viewEngine, compileInstruction, loadContext) {
	    compileInstruction.associatedModuleId = this.moduleId;
	    return viewEngine.loadViewFactory(this.viewUrl, compileInstruction, loadContext);
	  };

	  return ConventionalViewStrategy;
	}()) || _class6);
	var NoViewStrategy = exports.NoViewStrategy = (_dec3 = viewStrategy(), _dec3(_class7 = function () {
	  function NoViewStrategy() {
	    
	  }

	  NoViewStrategy.prototype.loadViewFactory = function loadViewFactory(viewEngine, compileInstruction, loadContext) {
	    return Promise.resolve(null);
	  };

	  return NoViewStrategy;
	}()) || _class7);
	var TemplateRegistryViewStrategy = exports.TemplateRegistryViewStrategy = (_dec4 = viewStrategy(), _dec4(_class8 = function () {
	  function TemplateRegistryViewStrategy(moduleId, entry) {
	    

	    this.moduleId = moduleId;
	    this.entry = entry;
	  }

	  TemplateRegistryViewStrategy.prototype.loadViewFactory = function loadViewFactory(viewEngine, compileInstruction, loadContext) {
	    var entry = this.entry;

	    if (entry.factoryIsReady) {
	      return Promise.resolve(entry.factory);
	    }

	    compileInstruction.associatedModuleId = this.moduleId;
	    return viewEngine.loadViewFactory(entry, compileInstruction, loadContext);
	  };

	  return TemplateRegistryViewStrategy;
	}()) || _class8);
	var InlineViewStrategy = exports.InlineViewStrategy = (_dec5 = viewStrategy(), _dec5(_class9 = function () {
	  function InlineViewStrategy(markup, dependencies, dependencyBaseUrl) {
	    

	    this.markup = markup;
	    this.dependencies = dependencies || null;
	    this.dependencyBaseUrl = dependencyBaseUrl || '';
	  }

	  InlineViewStrategy.prototype.loadViewFactory = function loadViewFactory(viewEngine, compileInstruction, loadContext) {
	    var entry = this.entry;
	    var dependencies = this.dependencies;

	    if (entry && entry.factoryIsReady) {
	      return Promise.resolve(entry.factory);
	    }

	    this.entry = entry = new _aureliaLoader.TemplateRegistryEntry(this.moduleId || this.dependencyBaseUrl);
	    entry.template = _aureliaPal.DOM.createTemplateFromMarkup(this.markup);

	    if (dependencies !== null) {
	      for (var i = 0, ii = dependencies.length; i < ii; ++i) {
	        var current = dependencies[i];

	        if (typeof current === 'string' || typeof current === 'function') {
	          entry.addDependency(current);
	        } else {
	          entry.addDependency(current.from, current.as);
	        }
	      }
	    }

	    compileInstruction.associatedModuleId = this.moduleId;
	    return viewEngine.loadViewFactory(entry, compileInstruction, loadContext);
	  };

	  return InlineViewStrategy;
	}()) || _class9);
	var ViewLocator = exports.ViewLocator = (_temp2 = _class10 = function () {
	  function ViewLocator() {
	    
	  }

	  ViewLocator.prototype.getViewStrategy = function getViewStrategy(value) {
	    if (!value) {
	      return null;
	    }

	    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && 'getViewStrategy' in value) {
	      var _origin = _aureliaMetadata.Origin.get(value.constructor);

	      value = value.getViewStrategy();

	      if (typeof value === 'string') {
	        value = new RelativeViewStrategy(value);
	      }

	      viewStrategy.assert(value);

	      if (_origin) {
	        value.makeRelativeTo(_origin.moduleId);
	      }

	      return value;
	    }

	    if (typeof value === 'string') {
	      value = new RelativeViewStrategy(value);
	    }

	    if (viewStrategy.validate(value)) {
	      return value;
	    }

	    if (typeof value !== 'function') {
	      value = value.constructor;
	    }

	    var origin = _aureliaMetadata.Origin.get(value);
	    var strategy = _aureliaMetadata.metadata.get(ViewLocator.viewStrategyMetadataKey, value);

	    if (!strategy) {
	      if (!origin) {
	        throw new Error('Cannot determine default view strategy for object.', value);
	      }

	      strategy = this.createFallbackViewStrategy(origin);
	    } else if (origin) {
	      strategy.moduleId = origin.moduleId;
	    }

	    return strategy;
	  };

	  ViewLocator.prototype.createFallbackViewStrategy = function createFallbackViewStrategy(origin) {
	    return new ConventionalViewStrategy(this, origin);
	  };

	  ViewLocator.prototype.convertOriginToViewUrl = function convertOriginToViewUrl(origin) {
	    var moduleId = origin.moduleId;
	    var id = moduleId.endsWith('.js') || moduleId.endsWith('.ts') ? moduleId.substring(0, moduleId.length - 3) : moduleId;
	    return id + '.html';
	  };

	  return ViewLocator;
	}(), _class10.viewStrategyMetadataKey = 'aurelia:view-strategy', _temp2);


	function mi(name) {
	  throw new Error('BindingLanguage must implement ' + name + '().');
	}

	var BindingLanguage = exports.BindingLanguage = function () {
	  function BindingLanguage() {
	    
	  }

	  BindingLanguage.prototype.inspectAttribute = function inspectAttribute(resources, elementName, attrName, attrValue) {
	    mi('inspectAttribute');
	  };

	  BindingLanguage.prototype.createAttributeInstruction = function createAttributeInstruction(resources, element, info, existingInstruction) {
	    mi('createAttributeInstruction');
	  };

	  BindingLanguage.prototype.inspectTextContent = function inspectTextContent(resources, value) {
	    mi('inspectTextContent');
	  };

	  return BindingLanguage;
	}();

	var noNodes = Object.freeze([]);

	var SlotCustomAttribute = exports.SlotCustomAttribute = (_dec6 = (0, _aureliaDependencyInjection.inject)(_aureliaPal.DOM.Element), _dec6(_class11 = function () {
	  function SlotCustomAttribute(element) {
	    

	    this.element = element;
	    this.element.auSlotAttribute = this;
	  }

	  SlotCustomAttribute.prototype.valueChanged = function valueChanged(newValue, oldValue) {};

	  return SlotCustomAttribute;
	}()) || _class11);

	var PassThroughSlot = exports.PassThroughSlot = function () {
	  function PassThroughSlot(anchor, name, destinationName, fallbackFactory) {
	    

	    this.anchor = anchor;
	    this.anchor.viewSlot = this;
	    this.name = name;
	    this.destinationName = destinationName;
	    this.fallbackFactory = fallbackFactory;
	    this.destinationSlot = null;
	    this.projections = 0;
	    this.contentView = null;

	    var attr = new SlotCustomAttribute(this.anchor);
	    attr.value = this.destinationName;
	  }

	  PassThroughSlot.prototype.renderFallbackContent = function renderFallbackContent(view, nodes, projectionSource, index) {
	    if (this.contentView === null) {
	      this.contentView = this.fallbackFactory.create(this.ownerView.container);
	      this.contentView.bind(this.ownerView.bindingContext, this.ownerView.overrideContext);

	      var slots = Object.create(null);
	      slots[this.destinationSlot.name] = this.destinationSlot;

	      ShadowDOM.distributeView(this.contentView, slots, projectionSource, index, this.destinationSlot.name);
	    }
	  };

	  PassThroughSlot.prototype.passThroughTo = function passThroughTo(destinationSlot) {
	    this.destinationSlot = destinationSlot;
	  };

	  PassThroughSlot.prototype.addNode = function addNode(view, node, projectionSource, index) {
	    if (this.contentView !== null) {
	      this.contentView.removeNodes();
	      this.contentView.detached();
	      this.contentView.unbind();
	      this.contentView = null;
	    }

	    if (node.viewSlot instanceof PassThroughSlot) {
	      node.viewSlot.passThroughTo(this);
	      return;
	    }

	    this.projections++;
	    this.destinationSlot.addNode(view, node, projectionSource, index);
	  };

	  PassThroughSlot.prototype.removeView = function removeView(view, projectionSource) {
	    this.projections--;
	    this.destinationSlot.removeView(view, projectionSource);

	    if (this.needsFallbackRendering) {
	      this.renderFallbackContent(null, noNodes, projectionSource);
	    }
	  };

	  PassThroughSlot.prototype.removeAll = function removeAll(projectionSource) {
	    this.projections = 0;
	    this.destinationSlot.removeAll(projectionSource);

	    if (this.needsFallbackRendering) {
	      this.renderFallbackContent(null, noNodes, projectionSource);
	    }
	  };

	  PassThroughSlot.prototype.projectFrom = function projectFrom(view, projectionSource) {
	    this.destinationSlot.projectFrom(view, projectionSource);
	  };

	  PassThroughSlot.prototype.created = function created(ownerView) {
	    this.ownerView = ownerView;
	  };

	  PassThroughSlot.prototype.bind = function bind(view) {
	    if (this.contentView) {
	      this.contentView.bind(view.bindingContext, view.overrideContext);
	    }
	  };

	  PassThroughSlot.prototype.attached = function attached() {
	    if (this.contentView) {
	      this.contentView.attached();
	    }
	  };

	  PassThroughSlot.prototype.detached = function detached() {
	    if (this.contentView) {
	      this.contentView.detached();
	    }
	  };

	  PassThroughSlot.prototype.unbind = function unbind() {
	    if (this.contentView) {
	      this.contentView.unbind();
	    }
	  };

	  _createClass(PassThroughSlot, [{
	    key: 'needsFallbackRendering',
	    get: function get() {
	      return this.fallbackFactory && this.projections === 0;
	    }
	  }]);

	  return PassThroughSlot;
	}();

	var ShadowSlot = exports.ShadowSlot = function () {
	  function ShadowSlot(anchor, name, fallbackFactory) {
	    

	    this.anchor = anchor;
	    this.anchor.isContentProjectionSource = true;
	    this.anchor.viewSlot = this;
	    this.name = name;
	    this.fallbackFactory = fallbackFactory;
	    this.contentView = null;
	    this.projections = 0;
	    this.children = [];
	    this.projectFromAnchors = null;
	    this.destinationSlots = null;
	  }

	  ShadowSlot.prototype.addNode = function addNode(view, node, projectionSource, index, destination) {
	    if (this.contentView !== null) {
	      this.contentView.removeNodes();
	      this.contentView.detached();
	      this.contentView.unbind();
	      this.contentView = null;
	    }

	    if (node.viewSlot instanceof PassThroughSlot) {
	      node.viewSlot.passThroughTo(this);
	      return;
	    }

	    if (this.destinationSlots !== null) {
	      ShadowDOM.distributeNodes(view, [node], this.destinationSlots, this, index);
	    } else {
	      node.auOwnerView = view;
	      node.auProjectionSource = projectionSource;
	      node.auAssignedSlot = this;

	      var anchor = this._findAnchor(view, node, projectionSource, index);
	      var parent = anchor.parentNode;

	      parent.insertBefore(node, anchor);
	      this.children.push(node);
	      this.projections++;
	    }
	  };

	  ShadowSlot.prototype.removeView = function removeView(view, projectionSource) {
	    if (this.destinationSlots !== null) {
	      ShadowDOM.undistributeView(view, this.destinationSlots, this);
	    } else if (this.contentView && this.contentView.hasSlots) {
	      ShadowDOM.undistributeView(view, this.contentView.slots, projectionSource);
	    } else {
	      var found = this.children.find(function (x) {
	        return x.auSlotProjectFrom === projectionSource;
	      });
	      if (found) {
	        var _children = found.auProjectionChildren;

	        for (var i = 0, ii = _children.length; i < ii; ++i) {
	          var _child = _children[i];

	          if (_child.auOwnerView === view) {
	            _children.splice(i, 1);
	            view.fragment.appendChild(_child);
	            i--;ii--;
	            this.projections--;
	          }
	        }

	        if (this.needsFallbackRendering) {
	          this.renderFallbackContent(view, noNodes, projectionSource);
	        }
	      }
	    }
	  };

	  ShadowSlot.prototype.removeAll = function removeAll(projectionSource) {
	    if (this.destinationSlots !== null) {
	      ShadowDOM.undistributeAll(this.destinationSlots, this);
	    } else if (this.contentView && this.contentView.hasSlots) {
	      ShadowDOM.undistributeAll(this.contentView.slots, projectionSource);
	    } else {
	      var found = this.children.find(function (x) {
	        return x.auSlotProjectFrom === projectionSource;
	      });

	      if (found) {
	        var _children2 = found.auProjectionChildren;
	        for (var i = 0, ii = _children2.length; i < ii; ++i) {
	          var _child2 = _children2[i];
	          _child2.auOwnerView.fragment.appendChild(_child2);
	          this.projections--;
	        }

	        found.auProjectionChildren = [];

	        if (this.needsFallbackRendering) {
	          this.renderFallbackContent(null, noNodes, projectionSource);
	        }
	      }
	    }
	  };

	  ShadowSlot.prototype._findAnchor = function _findAnchor(view, node, projectionSource, index) {
	    if (projectionSource) {
	      var found = this.children.find(function (x) {
	        return x.auSlotProjectFrom === projectionSource;
	      });
	      if (found) {
	        if (index !== undefined) {
	          var _children3 = found.auProjectionChildren;
	          var viewIndex = -1;
	          var lastView = void 0;

	          for (var i = 0, ii = _children3.length; i < ii; ++i) {
	            var current = _children3[i];

	            if (current.auOwnerView !== lastView) {
	              viewIndex++;
	              lastView = current.auOwnerView;

	              if (viewIndex >= index && lastView !== view) {
	                _children3.splice(i, 0, node);
	                return current;
	              }
	            }
	          }
	        }

	        found.auProjectionChildren.push(node);
	        return found;
	      }
	    }

	    return this.anchor;
	  };

	  ShadowSlot.prototype.projectTo = function projectTo(slots) {
	    this.destinationSlots = slots;
	  };

	  ShadowSlot.prototype.projectFrom = function projectFrom(view, projectionSource) {
	    var anchor = _aureliaPal.DOM.createComment('anchor');
	    var parent = this.anchor.parentNode;
	    anchor.auSlotProjectFrom = projectionSource;
	    anchor.auOwnerView = view;
	    anchor.auProjectionChildren = [];
	    parent.insertBefore(anchor, this.anchor);
	    this.children.push(anchor);

	    if (this.projectFromAnchors === null) {
	      this.projectFromAnchors = [];
	    }

	    this.projectFromAnchors.push(anchor);
	  };

	  ShadowSlot.prototype.renderFallbackContent = function renderFallbackContent(view, nodes, projectionSource, index) {
	    if (this.contentView === null) {
	      this.contentView = this.fallbackFactory.create(this.ownerView.container);
	      this.contentView.bind(this.ownerView.bindingContext, this.ownerView.overrideContext);
	      this.contentView.insertNodesBefore(this.anchor);
	    }

	    if (this.contentView.hasSlots) {
	      var slots = this.contentView.slots;
	      var projectFromAnchors = this.projectFromAnchors;

	      if (projectFromAnchors !== null) {
	        for (var slotName in slots) {
	          var slot = slots[slotName];

	          for (var i = 0, ii = projectFromAnchors.length; i < ii; ++i) {
	            var anchor = projectFromAnchors[i];
	            slot.projectFrom(anchor.auOwnerView, anchor.auSlotProjectFrom);
	          }
	        }
	      }

	      this.fallbackSlots = slots;
	      ShadowDOM.distributeNodes(view, nodes, slots, projectionSource, index);
	    }
	  };

	  ShadowSlot.prototype.created = function created(ownerView) {
	    this.ownerView = ownerView;
	  };

	  ShadowSlot.prototype.bind = function bind(view) {
	    if (this.contentView) {
	      this.contentView.bind(view.bindingContext, view.overrideContext);
	    }
	  };

	  ShadowSlot.prototype.attached = function attached() {
	    if (this.contentView) {
	      this.contentView.attached();
	    }
	  };

	  ShadowSlot.prototype.detached = function detached() {
	    if (this.contentView) {
	      this.contentView.detached();
	    }
	  };

	  ShadowSlot.prototype.unbind = function unbind() {
	    if (this.contentView) {
	      this.contentView.unbind();
	    }
	  };

	  _createClass(ShadowSlot, [{
	    key: 'needsFallbackRendering',
	    get: function get() {
	      return this.fallbackFactory && this.projections === 0;
	    }
	  }]);

	  return ShadowSlot;
	}();

	var ShadowDOM = exports.ShadowDOM = (_temp3 = _class12 = function () {
	  function ShadowDOM() {
	    
	  }

	  ShadowDOM.getSlotName = function getSlotName(node) {
	    if (node.auSlotAttribute === undefined) {
	      return ShadowDOM.defaultSlotKey;
	    }

	    return node.auSlotAttribute.value;
	  };

	  ShadowDOM.distributeView = function distributeView(view, slots, projectionSource, index, destinationOverride) {
	    var nodes = void 0;

	    if (view === null) {
	      nodes = noNodes;
	    } else {
	      var childNodes = view.fragment.childNodes;
	      var ii = childNodes.length;
	      nodes = new Array(ii);

	      for (var i = 0; i < ii; ++i) {
	        nodes[i] = childNodes[i];
	      }
	    }

	    ShadowDOM.distributeNodes(view, nodes, slots, projectionSource, index, destinationOverride);
	  };

	  ShadowDOM.undistributeView = function undistributeView(view, slots, projectionSource) {
	    for (var slotName in slots) {
	      slots[slotName].removeView(view, projectionSource);
	    }
	  };

	  ShadowDOM.undistributeAll = function undistributeAll(slots, projectionSource) {
	    for (var slotName in slots) {
	      slots[slotName].removeAll(projectionSource);
	    }
	  };

	  ShadowDOM.distributeNodes = function distributeNodes(view, nodes, slots, projectionSource, index, destinationOverride) {
	    for (var i = 0, ii = nodes.length; i < ii; ++i) {
	      var currentNode = nodes[i];
	      var nodeType = currentNode.nodeType;

	      if (currentNode.isContentProjectionSource) {
	        currentNode.viewSlot.projectTo(slots);

	        for (var slotName in slots) {
	          slots[slotName].projectFrom(view, currentNode.viewSlot);
	        }

	        nodes.splice(i, 1);
	        ii--;i--;
	      } else if (nodeType === 1 || nodeType === 3 || currentNode.viewSlot instanceof PassThroughSlot) {
	        if (nodeType === 3 && _isAllWhitespace(currentNode)) {
	          nodes.splice(i, 1);
	          ii--;i--;
	        } else {
	          var found = slots[destinationOverride || ShadowDOM.getSlotName(currentNode)];

	          if (found) {
	            found.addNode(view, currentNode, projectionSource, index);
	            nodes.splice(i, 1);
	            ii--;i--;
	          }
	        }
	      } else {
	        nodes.splice(i, 1);
	        ii--;i--;
	      }
	    }

	    for (var _slotName in slots) {
	      var slot = slots[_slotName];

	      if (slot.needsFallbackRendering) {
	        slot.renderFallbackContent(view, nodes, projectionSource, index);
	      }
	    }
	  };

	  return ShadowDOM;
	}(), _class12.defaultSlotKey = '__au-default-slot-key__', _temp3);


	function register(lookup, name, resource, type) {
	  if (!name) {
	    return;
	  }

	  var existing = lookup[name];
	  if (existing) {
	    if (existing !== resource) {
	      throw new Error('Attempted to register ' + type + ' when one with the same name already exists. Name: ' + name + '.');
	    }

	    return;
	  }

	  lookup[name] = resource;
	}

	var ViewResources = exports.ViewResources = function () {
	  function ViewResources(parent, viewUrl) {
	    

	    this.bindingLanguage = null;

	    this.parent = parent || null;
	    this.hasParent = this.parent !== null;
	    this.viewUrl = viewUrl || '';
	    this.lookupFunctions = {
	      valueConverters: this.getValueConverter.bind(this),
	      bindingBehaviors: this.getBindingBehavior.bind(this)
	    };
	    this.attributes = Object.create(null);
	    this.elements = Object.create(null);
	    this.valueConverters = Object.create(null);
	    this.bindingBehaviors = Object.create(null);
	    this.attributeMap = Object.create(null);
	    this.values = Object.create(null);
	    this.beforeCompile = this.afterCompile = this.beforeCreate = this.afterCreate = this.beforeBind = this.beforeUnbind = false;
	  }

	  ViewResources.prototype._tryAddHook = function _tryAddHook(obj, name) {
	    if (typeof obj[name] === 'function') {
	      var func = obj[name].bind(obj);
	      var counter = 1;
	      var callbackName = void 0;

	      while (this[callbackName = name + counter.toString()] !== undefined) {
	        counter++;
	      }

	      this[name] = true;
	      this[callbackName] = func;
	    }
	  };

	  ViewResources.prototype._invokeHook = function _invokeHook(name, one, two, three, four) {
	    if (this.hasParent) {
	      this.parent._invokeHook(name, one, two, three, four);
	    }

	    if (this[name]) {
	      this[name + '1'](one, two, three, four);

	      var callbackName = name + '2';
	      if (this[callbackName]) {
	        this[callbackName](one, two, three, four);

	        callbackName = name + '3';
	        if (this[callbackName]) {
	          this[callbackName](one, two, three, four);

	          var counter = 4;

	          while (this[callbackName = name + counter.toString()] !== undefined) {
	            this[callbackName](one, two, three, four);
	            counter++;
	          }
	        }
	      }
	    }
	  };

	  ViewResources.prototype.registerViewEngineHooks = function registerViewEngineHooks(hooks) {
	    this._tryAddHook(hooks, 'beforeCompile');
	    this._tryAddHook(hooks, 'afterCompile');
	    this._tryAddHook(hooks, 'beforeCreate');
	    this._tryAddHook(hooks, 'afterCreate');
	    this._tryAddHook(hooks, 'beforeBind');
	    this._tryAddHook(hooks, 'beforeUnbind');
	  };

	  ViewResources.prototype.getBindingLanguage = function getBindingLanguage(bindingLanguageFallback) {
	    return this.bindingLanguage || (this.bindingLanguage = bindingLanguageFallback);
	  };

	  ViewResources.prototype.patchInParent = function patchInParent(newParent) {
	    var originalParent = this.parent;

	    this.parent = newParent || null;
	    this.hasParent = this.parent !== null;

	    if (newParent.parent === null) {
	      newParent.parent = originalParent;
	      newParent.hasParent = originalParent !== null;
	    }
	  };

	  ViewResources.prototype.relativeToView = function relativeToView(path) {
	    return (0, _aureliaPath.relativeToFile)(path, this.viewUrl);
	  };

	  ViewResources.prototype.registerElement = function registerElement(tagName, behavior) {
	    register(this.elements, tagName, behavior, 'an Element');
	  };

	  ViewResources.prototype.getElement = function getElement(tagName) {
	    return this.elements[tagName] || (this.hasParent ? this.parent.getElement(tagName) : null);
	  };

	  ViewResources.prototype.mapAttribute = function mapAttribute(attribute) {
	    return this.attributeMap[attribute] || (this.hasParent ? this.parent.mapAttribute(attribute) : null);
	  };

	  ViewResources.prototype.registerAttribute = function registerAttribute(attribute, behavior, knownAttribute) {
	    this.attributeMap[attribute] = knownAttribute;
	    register(this.attributes, attribute, behavior, 'an Attribute');
	  };

	  ViewResources.prototype.getAttribute = function getAttribute(attribute) {
	    return this.attributes[attribute] || (this.hasParent ? this.parent.getAttribute(attribute) : null);
	  };

	  ViewResources.prototype.registerValueConverter = function registerValueConverter(name, valueConverter) {
	    register(this.valueConverters, name, valueConverter, 'a ValueConverter');
	  };

	  ViewResources.prototype.getValueConverter = function getValueConverter(name) {
	    return this.valueConverters[name] || (this.hasParent ? this.parent.getValueConverter(name) : null);
	  };

	  ViewResources.prototype.registerBindingBehavior = function registerBindingBehavior(name, bindingBehavior) {
	    register(this.bindingBehaviors, name, bindingBehavior, 'a BindingBehavior');
	  };

	  ViewResources.prototype.getBindingBehavior = function getBindingBehavior(name) {
	    return this.bindingBehaviors[name] || (this.hasParent ? this.parent.getBindingBehavior(name) : null);
	  };

	  ViewResources.prototype.registerValue = function registerValue(name, value) {
	    register(this.values, name, value, 'a value');
	  };

	  ViewResources.prototype.getValue = function getValue(name) {
	    return this.values[name] || (this.hasParent ? this.parent.getValue(name) : null);
	  };

	  return ViewResources;
	}();

	var View = exports.View = function () {
	  function View(container, viewFactory, fragment, controllers, bindings, children, slots) {
	    

	    this.container = container;
	    this.viewFactory = viewFactory;
	    this.resources = viewFactory.resources;
	    this.fragment = fragment;
	    this.firstChild = fragment.firstChild;
	    this.lastChild = fragment.lastChild;
	    this.controllers = controllers;
	    this.bindings = bindings;
	    this.children = children;
	    this.slots = slots;
	    this.hasSlots = false;
	    this.fromCache = false;
	    this.isBound = false;
	    this.isAttached = false;
	    this.bindingContext = null;
	    this.overrideContext = null;
	    this.controller = null;
	    this.viewModelScope = null;
	    this.animatableElement = undefined;
	    this._isUserControlled = false;
	    this.contentView = null;

	    for (var key in slots) {
	      this.hasSlots = true;
	      break;
	    }
	  }

	  View.prototype.returnToCache = function returnToCache() {
	    this.viewFactory.returnViewToCache(this);
	  };

	  View.prototype.created = function created() {
	    var i = void 0;
	    var ii = void 0;
	    var controllers = this.controllers;

	    for (i = 0, ii = controllers.length; i < ii; ++i) {
	      controllers[i].created(this);
	    }
	  };

	  View.prototype.bind = function bind(bindingContext, overrideContext, _systemUpdate) {
	    var controllers = void 0;
	    var bindings = void 0;
	    var children = void 0;
	    var i = void 0;
	    var ii = void 0;

	    if (_systemUpdate && this._isUserControlled) {
	      return;
	    }

	    if (this.isBound) {
	      if (this.bindingContext === bindingContext) {
	        return;
	      }

	      this.unbind();
	    }

	    this.isBound = true;
	    this.bindingContext = bindingContext;
	    this.overrideContext = overrideContext || (0, _aureliaBinding.createOverrideContext)(bindingContext);

	    this.resources._invokeHook('beforeBind', this);

	    bindings = this.bindings;
	    for (i = 0, ii = bindings.length; i < ii; ++i) {
	      bindings[i].bind(this);
	    }

	    if (this.viewModelScope !== null) {
	      bindingContext.bind(this.viewModelScope.bindingContext, this.viewModelScope.overrideContext);
	      this.viewModelScope = null;
	    }

	    controllers = this.controllers;
	    for (i = 0, ii = controllers.length; i < ii; ++i) {
	      controllers[i].bind(this);
	    }

	    children = this.children;
	    for (i = 0, ii = children.length; i < ii; ++i) {
	      children[i].bind(bindingContext, overrideContext, true);
	    }

	    if (this.hasSlots) {
	      ShadowDOM.distributeView(this.contentView, this.slots);
	    }
	  };

	  View.prototype.addBinding = function addBinding(binding) {
	    this.bindings.push(binding);

	    if (this.isBound) {
	      binding.bind(this);
	    }
	  };

	  View.prototype.unbind = function unbind() {
	    var controllers = void 0;
	    var bindings = void 0;
	    var children = void 0;
	    var i = void 0;
	    var ii = void 0;

	    if (this.isBound) {
	      this.isBound = false;
	      this.resources._invokeHook('beforeUnbind', this);

	      if (this.controller !== null) {
	        this.controller.unbind();
	      }

	      bindings = this.bindings;
	      for (i = 0, ii = bindings.length; i < ii; ++i) {
	        bindings[i].unbind();
	      }

	      controllers = this.controllers;
	      for (i = 0, ii = controllers.length; i < ii; ++i) {
	        controllers[i].unbind();
	      }

	      children = this.children;
	      for (i = 0, ii = children.length; i < ii; ++i) {
	        children[i].unbind();
	      }

	      this.bindingContext = null;
	      this.overrideContext = null;
	    }
	  };

	  View.prototype.insertNodesBefore = function insertNodesBefore(refNode) {
	    refNode.parentNode.insertBefore(this.fragment, refNode);
	  };

	  View.prototype.appendNodesTo = function appendNodesTo(parent) {
	    parent.appendChild(this.fragment);
	  };

	  View.prototype.removeNodes = function removeNodes() {
	    var fragment = this.fragment;
	    var current = this.firstChild;
	    var end = this.lastChild;
	    var next = void 0;

	    while (current) {
	      next = current.nextSibling;
	      fragment.appendChild(current);

	      if (current === end) {
	        break;
	      }

	      current = next;
	    }
	  };

	  View.prototype.attached = function attached() {
	    var controllers = void 0;
	    var children = void 0;
	    var i = void 0;
	    var ii = void 0;

	    if (this.isAttached) {
	      return;
	    }

	    this.isAttached = true;

	    if (this.controller !== null) {
	      this.controller.attached();
	    }

	    controllers = this.controllers;
	    for (i = 0, ii = controllers.length; i < ii; ++i) {
	      controllers[i].attached();
	    }

	    children = this.children;
	    for (i = 0, ii = children.length; i < ii; ++i) {
	      children[i].attached();
	    }
	  };

	  View.prototype.detached = function detached() {
	    var controllers = void 0;
	    var children = void 0;
	    var i = void 0;
	    var ii = void 0;

	    if (this.isAttached) {
	      this.isAttached = false;

	      if (this.controller !== null) {
	        this.controller.detached();
	      }

	      controllers = this.controllers;
	      for (i = 0, ii = controllers.length; i < ii; ++i) {
	        controllers[i].detached();
	      }

	      children = this.children;
	      for (i = 0, ii = children.length; i < ii; ++i) {
	        children[i].detached();
	      }
	    }
	  };

	  return View;
	}();

	function getAnimatableElement(view) {
	  if (view.animatableElement !== undefined) {
	    return view.animatableElement;
	  }

	  var current = view.firstChild;

	  while (current && current.nodeType !== 1) {
	    current = current.nextSibling;
	  }

	  if (current && current.nodeType === 1) {
	    return view.animatableElement = current.classList.contains('au-animate') ? current : null;
	  }

	  return view.animatableElement = null;
	}

	var ViewSlot = exports.ViewSlot = function () {
	  function ViewSlot(anchor, anchorIsContainer) {
	    var animator = arguments.length <= 2 || arguments[2] === undefined ? Animator.instance : arguments[2];

	    

	    this.anchor = anchor;
	    this.anchorIsContainer = anchorIsContainer;
	    this.bindingContext = null;
	    this.overrideContext = null;
	    this.animator = animator;
	    this.children = [];
	    this.isBound = false;
	    this.isAttached = false;
	    this.contentSelectors = null;
	    anchor.viewSlot = this;
	    anchor.isContentProjectionSource = false;
	  }

	  ViewSlot.prototype.animateView = function animateView(view) {
	    var direction = arguments.length <= 1 || arguments[1] === undefined ? 'enter' : arguments[1];

	    var animatableElement = getAnimatableElement(view);

	    if (animatableElement !== null) {
	      switch (direction) {
	        case 'enter':
	          return this.animator.enter(animatableElement);
	        case 'leave':
	          return this.animator.leave(animatableElement);
	        default:
	          throw new Error('Invalid animation direction: ' + direction);
	      }
	    }
	  };

	  ViewSlot.prototype.transformChildNodesIntoView = function transformChildNodesIntoView() {
	    var parent = this.anchor;

	    this.children.push({
	      fragment: parent,
	      firstChild: parent.firstChild,
	      lastChild: parent.lastChild,
	      returnToCache: function returnToCache() {},
	      removeNodes: function removeNodes() {
	        var last = void 0;

	        while (last = parent.lastChild) {
	          parent.removeChild(last);
	        }
	      },
	      created: function created() {},
	      bind: function bind() {},
	      unbind: function unbind() {},
	      attached: function attached() {},
	      detached: function detached() {}
	    });
	  };

	  ViewSlot.prototype.bind = function bind(bindingContext, overrideContext) {
	    var i = void 0;
	    var ii = void 0;
	    var children = void 0;

	    if (this.isBound) {
	      if (this.bindingContext === bindingContext) {
	        return;
	      }

	      this.unbind();
	    }

	    this.isBound = true;
	    this.bindingContext = bindingContext = bindingContext || this.bindingContext;
	    this.overrideContext = overrideContext = overrideContext || this.overrideContext;

	    children = this.children;
	    for (i = 0, ii = children.length; i < ii; ++i) {
	      children[i].bind(bindingContext, overrideContext, true);
	    }
	  };

	  ViewSlot.prototype.unbind = function unbind() {
	    if (this.isBound) {
	      var i = void 0;
	      var ii = void 0;
	      var _children4 = this.children;

	      this.isBound = false;
	      this.bindingContext = null;
	      this.overrideContext = null;

	      for (i = 0, ii = _children4.length; i < ii; ++i) {
	        _children4[i].unbind();
	      }
	    }
	  };

	  ViewSlot.prototype.add = function add(view) {
	    if (this.anchorIsContainer) {
	      view.appendNodesTo(this.anchor);
	    } else {
	      view.insertNodesBefore(this.anchor);
	    }

	    this.children.push(view);

	    if (this.isAttached) {
	      view.attached();
	      return this.animateView(view, 'enter');
	    }
	  };

	  ViewSlot.prototype.insert = function insert(index, view) {
	    var children = this.children;
	    var length = children.length;

	    if (index === 0 && length === 0 || index >= length) {
	      return this.add(view);
	    }

	    view.insertNodesBefore(children[index].firstChild);
	    children.splice(index, 0, view);

	    if (this.isAttached) {
	      view.attached();
	      return this.animateView(view, 'enter');
	    }
	  };

	  ViewSlot.prototype.move = function move(sourceIndex, targetIndex) {
	    if (sourceIndex === targetIndex) {
	      return;
	    }

	    var children = this.children;
	    var view = children[sourceIndex];

	    view.removeNodes();
	    view.insertNodesBefore(children[targetIndex].firstChild);
	    children.splice(sourceIndex, 1);
	    children.splice(targetIndex, 0, view);
	  };

	  ViewSlot.prototype.remove = function remove(view, returnToCache, skipAnimation) {
	    return this.removeAt(this.children.indexOf(view), returnToCache, skipAnimation);
	  };

	  ViewSlot.prototype.removeMany = function removeMany(viewsToRemove, returnToCache, skipAnimation) {
	    var _this4 = this;

	    var children = this.children;
	    var ii = viewsToRemove.length;
	    var i = void 0;
	    var rmPromises = [];

	    viewsToRemove.forEach(function (child) {
	      if (skipAnimation) {
	        child.removeNodes();
	        return;
	      }

	      var animation = _this4.animateView(child, 'leave');
	      if (animation) {
	        rmPromises.push(animation.then(function () {
	          return child.removeNodes();
	        }));
	      } else {
	        child.removeNodes();
	      }
	    });

	    var removeAction = function removeAction() {
	      if (_this4.isAttached) {
	        for (i = 0; i < ii; ++i) {
	          viewsToRemove[i].detached();
	        }
	      }

	      if (returnToCache) {
	        for (i = 0; i < ii; ++i) {
	          viewsToRemove[i].returnToCache();
	        }
	      }

	      for (i = 0; i < ii; ++i) {
	        var index = children.indexOf(viewsToRemove[i]);
	        if (index >= 0) {
	          children.splice(index, 1);
	        }
	      }
	    };

	    if (rmPromises.length > 0) {
	      return Promise.all(rmPromises).then(function () {
	        return removeAction();
	      });
	    }

	    return removeAction();
	  };

	  ViewSlot.prototype.removeAt = function removeAt(index, returnToCache, skipAnimation) {
	    var _this5 = this;

	    var view = this.children[index];

	    var removeAction = function removeAction() {
	      index = _this5.children.indexOf(view);
	      view.removeNodes();
	      _this5.children.splice(index, 1);

	      if (_this5.isAttached) {
	        view.detached();
	      }

	      if (returnToCache) {
	        view.returnToCache();
	      }

	      return view;
	    };

	    if (!skipAnimation) {
	      var animation = this.animateView(view, 'leave');
	      if (animation) {
	        return animation.then(function () {
	          return removeAction();
	        });
	      }
	    }

	    return removeAction();
	  };

	  ViewSlot.prototype.removeAll = function removeAll(returnToCache, skipAnimation) {
	    var _this6 = this;

	    var children = this.children;
	    var ii = children.length;
	    var i = void 0;
	    var rmPromises = [];

	    children.forEach(function (child) {
	      if (skipAnimation) {
	        child.removeNodes();
	        return;
	      }

	      var animation = _this6.animateView(child, 'leave');
	      if (animation) {
	        rmPromises.push(animation.then(function () {
	          return child.removeNodes();
	        }));
	      } else {
	        child.removeNodes();
	      }
	    });

	    var removeAction = function removeAction() {
	      if (_this6.isAttached) {
	        for (i = 0; i < ii; ++i) {
	          children[i].detached();
	        }
	      }

	      if (returnToCache) {
	        for (i = 0; i < ii; ++i) {
	          children[i].returnToCache();
	        }
	      }

	      _this6.children = [];
	    };

	    if (rmPromises.length > 0) {
	      return Promise.all(rmPromises).then(function () {
	        return removeAction();
	      });
	    }

	    return removeAction();
	  };

	  ViewSlot.prototype.attached = function attached() {
	    var i = void 0;
	    var ii = void 0;
	    var children = void 0;
	    var child = void 0;

	    if (this.isAttached) {
	      return;
	    }

	    this.isAttached = true;

	    children = this.children;
	    for (i = 0, ii = children.length; i < ii; ++i) {
	      child = children[i];
	      child.attached();
	      this.animateView(child, 'enter');
	    }
	  };

	  ViewSlot.prototype.detached = function detached() {
	    var i = void 0;
	    var ii = void 0;
	    var children = void 0;

	    if (this.isAttached) {
	      this.isAttached = false;
	      children = this.children;
	      for (i = 0, ii = children.length; i < ii; ++i) {
	        children[i].detached();
	      }
	    }
	  };

	  ViewSlot.prototype.projectTo = function projectTo(slots) {
	    var _this7 = this;

	    this.projectToSlots = slots;
	    this.add = this._projectionAdd;
	    this.insert = this._projectionInsert;
	    this.move = this._projectionMove;
	    this.remove = this._projectionRemove;
	    this.removeAt = this._projectionRemoveAt;
	    this.removeMany = this._projectionRemoveMany;
	    this.removeAll = this._projectionRemoveAll;
	    this.children.forEach(function (view) {
	      return ShadowDOM.distributeView(view, slots, _this7);
	    });
	  };

	  ViewSlot.prototype._projectionAdd = function _projectionAdd(view) {
	    ShadowDOM.distributeView(view, this.projectToSlots, this);

	    this.children.push(view);

	    if (this.isAttached) {
	      view.attached();
	    }
	  };

	  ViewSlot.prototype._projectionInsert = function _projectionInsert(index, view) {
	    if (index === 0 && !this.children.length || index >= this.children.length) {
	      this.add(view);
	    } else {
	      ShadowDOM.distributeView(view, this.projectToSlots, this, index);

	      this.children.splice(index, 0, view);

	      if (this.isAttached) {
	        view.attached();
	      }
	    }
	  };

	  ViewSlot.prototype._projectionMove = function _projectionMove(sourceIndex, targetIndex) {
	    if (sourceIndex === targetIndex) {
	      return;
	    }

	    var children = this.children;
	    var view = children[sourceIndex];

	    ShadowDOM.undistributeView(view, this.projectToSlots, this);
	    ShadowDOM.distributeView(view, this.projectToSlots, this, targetIndex);

	    children.splice(sourceIndex, 1);
	    children.splice(targetIndex, 0, view);
	  };

	  ViewSlot.prototype._projectionRemove = function _projectionRemove(view, returnToCache) {
	    ShadowDOM.undistributeView(view, this.projectToSlots, this);
	    this.children.splice(this.children.indexOf(view), 1);

	    if (this.isAttached) {
	      view.detached();
	    }
	  };

	  ViewSlot.prototype._projectionRemoveAt = function _projectionRemoveAt(index, returnToCache) {
	    var view = this.children[index];

	    ShadowDOM.undistributeView(view, this.projectToSlots, this);
	    this.children.splice(index, 1);

	    if (this.isAttached) {
	      view.detached();
	    }
	  };

	  ViewSlot.prototype._projectionRemoveMany = function _projectionRemoveMany(viewsToRemove, returnToCache) {
	    var _this8 = this;

	    viewsToRemove.forEach(function (view) {
	      return _this8.remove(view, returnToCache);
	    });
	  };

	  ViewSlot.prototype._projectionRemoveAll = function _projectionRemoveAll(returnToCache) {
	    ShadowDOM.undistributeAll(this.projectToSlots, this);

	    var children = this.children;

	    if (this.isAttached) {
	      for (var i = 0, ii = children.length; i < ii; ++i) {
	        children[i].detached();
	      }
	    }

	    this.children = [];
	  };

	  return ViewSlot;
	}();

	var ProviderResolver = (0, _aureliaDependencyInjection.resolver)(_class15 = function () {
	  function ProviderResolver() {
	    
	  }

	  ProviderResolver.prototype.get = function get(container, key) {
	    var id = key.__providerId__;
	    return id in container ? container[id] : container[id] = container.invoke(key);
	  };

	  return ProviderResolver;
	}()) || _class15;

	var providerResolverInstance = new ProviderResolver();

	function elementContainerGet(key) {
	  if (key === _aureliaPal.DOM.Element) {
	    return this.element;
	  }

	  if (key === BoundViewFactory) {
	    if (this.boundViewFactory) {
	      return this.boundViewFactory;
	    }

	    var factory = this.instruction.viewFactory;
	    var _partReplacements = this.partReplacements;

	    if (_partReplacements) {
	      factory = _partReplacements[factory.part] || factory;
	    }

	    this.boundViewFactory = new BoundViewFactory(this, factory, _partReplacements);
	    return this.boundViewFactory;
	  }

	  if (key === ViewSlot) {
	    if (this.viewSlot === undefined) {
	      this.viewSlot = new ViewSlot(this.element, this.instruction.anchorIsContainer);
	      this.element.isContentProjectionSource = this.instruction.lifting;
	      this.children.push(this.viewSlot);
	    }

	    return this.viewSlot;
	  }

	  if (key === ElementEvents) {
	    return this.elementEvents || (this.elementEvents = new ElementEvents(this.element));
	  }

	  if (key === CompositionTransaction) {
	    return this.compositionTransaction || (this.compositionTransaction = this.parent.get(key));
	  }

	  if (key === ViewResources) {
	    return this.viewResources;
	  }

	  if (key === TargetInstruction) {
	    return this.instruction;
	  }

	  return this.superGet(key);
	}

	function createElementContainer(parent, element, instruction, children, partReplacements, resources) {
	  var container = parent.createChild();
	  var providers = void 0;
	  var i = void 0;

	  container.element = element;
	  container.instruction = instruction;
	  container.children = children;
	  container.viewResources = resources;
	  container.partReplacements = partReplacements;

	  providers = instruction.providers;
	  i = providers.length;

	  while (i--) {
	    container._resolvers.set(providers[i], providerResolverInstance);
	  }

	  container.superGet = container.get;
	  container.get = elementContainerGet;

	  return container;
	}

	function makeElementIntoAnchor(element, elementInstruction) {
	  var anchor = _aureliaPal.DOM.createComment('anchor');

	  if (elementInstruction) {
	    var firstChild = element.firstChild;

	    if (firstChild && firstChild.tagName === 'AU-CONTENT') {
	      anchor.contentElement = firstChild;
	    }

	    anchor.hasAttribute = function (name) {
	      return element.hasAttribute(name);
	    };
	    anchor.getAttribute = function (name) {
	      return element.getAttribute(name);
	    };
	    anchor.setAttribute = function (name, value) {
	      element.setAttribute(name, value);
	    };
	  }

	  _aureliaPal.DOM.replaceNode(anchor, element);

	  return anchor;
	}

	function applyInstructions(containers, element, instruction, controllers, bindings, children, shadowSlots, partReplacements, resources) {
	  var behaviorInstructions = instruction.behaviorInstructions;
	  var expressions = instruction.expressions;
	  var elementContainer = void 0;
	  var i = void 0;
	  var ii = void 0;
	  var current = void 0;
	  var instance = void 0;

	  if (instruction.contentExpression) {
	    bindings.push(instruction.contentExpression.createBinding(element.nextSibling));
	    element.nextSibling.auInterpolationTarget = true;
	    element.parentNode.removeChild(element);
	    return;
	  }

	  if (instruction.shadowSlot) {
	    var commentAnchor = _aureliaPal.DOM.createComment('slot');
	    var slot = void 0;

	    if (instruction.slotDestination) {
	      slot = new PassThroughSlot(commentAnchor, instruction.slotName, instruction.slotDestination, instruction.slotFallbackFactory);
	    } else {
	      slot = new ShadowSlot(commentAnchor, instruction.slotName, instruction.slotFallbackFactory);
	    }

	    _aureliaPal.DOM.replaceNode(commentAnchor, element);
	    shadowSlots[instruction.slotName] = slot;
	    controllers.push(slot);
	    return;
	  }

	  if (behaviorInstructions.length) {
	    if (!instruction.anchorIsContainer) {
	      element = makeElementIntoAnchor(element, instruction.elementInstruction);
	    }

	    containers[instruction.injectorId] = elementContainer = createElementContainer(containers[instruction.parentInjectorId], element, instruction, children, partReplacements, resources);

	    for (i = 0, ii = behaviorInstructions.length; i < ii; ++i) {
	      current = behaviorInstructions[i];
	      instance = current.type.create(elementContainer, current, element, bindings);
	      controllers.push(instance);
	    }
	  }

	  for (i = 0, ii = expressions.length; i < ii; ++i) {
	    bindings.push(expressions[i].createBinding(element));
	  }
	}

	function styleStringToObject(style, target) {
	  var attributes = style.split(';');
	  var firstIndexOfColon = void 0;
	  var i = void 0;
	  var current = void 0;
	  var key = void 0;
	  var value = void 0;

	  target = target || {};

	  for (i = 0; i < attributes.length; i++) {
	    current = attributes[i];
	    firstIndexOfColon = current.indexOf(':');
	    key = current.substring(0, firstIndexOfColon).trim();
	    value = current.substring(firstIndexOfColon + 1).trim();
	    target[key] = value;
	  }

	  return target;
	}

	function styleObjectToString(obj) {
	  var result = '';

	  for (var key in obj) {
	    result += key + ':' + obj[key] + ';';
	  }

	  return result;
	}

	function applySurrogateInstruction(container, element, instruction, controllers, bindings, children) {
	  var behaviorInstructions = instruction.behaviorInstructions;
	  var expressions = instruction.expressions;
	  var providers = instruction.providers;
	  var values = instruction.values;
	  var i = void 0;
	  var ii = void 0;
	  var current = void 0;
	  var instance = void 0;
	  var currentAttributeValue = void 0;

	  i = providers.length;
	  while (i--) {
	    container._resolvers.set(providers[i], providerResolverInstance);
	  }

	  for (var key in values) {
	    currentAttributeValue = element.getAttribute(key);

	    if (currentAttributeValue) {
	      if (key === 'class') {
	        element.setAttribute('class', currentAttributeValue + ' ' + values[key]);
	      } else if (key === 'style') {
	        var styleObject = styleStringToObject(values[key]);
	        styleStringToObject(currentAttributeValue, styleObject);
	        element.setAttribute('style', styleObjectToString(styleObject));
	      }
	    } else {
	        element.setAttribute(key, values[key]);
	      }
	  }

	  if (behaviorInstructions.length) {
	    for (i = 0, ii = behaviorInstructions.length; i < ii; ++i) {
	      current = behaviorInstructions[i];
	      instance = current.type.create(container, current, element, bindings);

	      if (instance.contentView) {
	        children.push(instance.contentView);
	      }

	      controllers.push(instance);
	    }
	  }

	  for (i = 0, ii = expressions.length; i < ii; ++i) {
	    bindings.push(expressions[i].createBinding(element));
	  }
	}

	var BoundViewFactory = exports.BoundViewFactory = function () {
	  function BoundViewFactory(parentContainer, viewFactory, partReplacements) {
	    

	    this.parentContainer = parentContainer;
	    this.viewFactory = viewFactory;
	    this.factoryCreateInstruction = { partReplacements: partReplacements };
	  }

	  BoundViewFactory.prototype.create = function create() {
	    var view = this.viewFactory.create(this.parentContainer.createChild(), this.factoryCreateInstruction);
	    view._isUserControlled = true;
	    return view;
	  };

	  BoundViewFactory.prototype.setCacheSize = function setCacheSize(size, doNotOverrideIfAlreadySet) {
	    this.viewFactory.setCacheSize(size, doNotOverrideIfAlreadySet);
	  };

	  BoundViewFactory.prototype.getCachedView = function getCachedView() {
	    return this.viewFactory.getCachedView();
	  };

	  BoundViewFactory.prototype.returnViewToCache = function returnViewToCache(view) {
	    this.viewFactory.returnViewToCache(view);
	  };

	  _createClass(BoundViewFactory, [{
	    key: 'isCaching',
	    get: function get() {
	      return this.viewFactory.isCaching;
	    }
	  }]);

	  return BoundViewFactory;
	}();

	var ViewFactory = exports.ViewFactory = function () {
	  function ViewFactory(template, instructions, resources) {
	    

	    this.isCaching = false;

	    this.template = template;
	    this.instructions = instructions;
	    this.resources = resources;
	    this.cacheSize = -1;
	    this.cache = null;
	  }

	  ViewFactory.prototype.setCacheSize = function setCacheSize(size, doNotOverrideIfAlreadySet) {
	    if (size) {
	      if (size === '*') {
	        size = Number.MAX_VALUE;
	      } else if (typeof size === 'string') {
	        size = parseInt(size, 10);
	      }
	    }

	    if (this.cacheSize === -1 || !doNotOverrideIfAlreadySet) {
	      this.cacheSize = size;
	    }

	    if (this.cacheSize > 0) {
	      this.cache = [];
	    } else {
	      this.cache = null;
	    }

	    this.isCaching = this.cacheSize > 0;
	  };

	  ViewFactory.prototype.getCachedView = function getCachedView() {
	    return this.cache !== null ? this.cache.pop() || null : null;
	  };

	  ViewFactory.prototype.returnViewToCache = function returnViewToCache(view) {
	    if (view.isAttached) {
	      view.detached();
	    }

	    if (view.isBound) {
	      view.unbind();
	    }

	    if (this.cache !== null && this.cache.length < this.cacheSize) {
	      view.fromCache = true;
	      this.cache.push(view);
	    }
	  };

	  ViewFactory.prototype.create = function create(container, createInstruction, element) {
	    createInstruction = createInstruction || BehaviorInstruction.normal;

	    var cachedView = this.getCachedView();
	    if (cachedView !== null) {
	      return cachedView;
	    }

	    var fragment = createInstruction.enhance ? this.template : this.template.cloneNode(true);
	    var instructables = fragment.querySelectorAll('.au-target');
	    var instructions = this.instructions;
	    var resources = this.resources;
	    var controllers = [];
	    var bindings = [];
	    var children = [];
	    var shadowSlots = Object.create(null);
	    var containers = { root: container };
	    var partReplacements = createInstruction.partReplacements;
	    var i = void 0;
	    var ii = void 0;
	    var view = void 0;
	    var instructable = void 0;
	    var instruction = void 0;

	    this.resources._invokeHook('beforeCreate', this, container, fragment, createInstruction);

	    if (element && this.surrogateInstruction !== null) {
	      applySurrogateInstruction(container, element, this.surrogateInstruction, controllers, bindings, children);
	    }

	    if (createInstruction.enhance && fragment.hasAttribute('au-target-id')) {
	      instructable = fragment;
	      instruction = instructions[instructable.getAttribute('au-target-id')];
	      applyInstructions(containers, instructable, instruction, controllers, bindings, children, shadowSlots, partReplacements, resources);
	    }

	    for (i = 0, ii = instructables.length; i < ii; ++i) {
	      instructable = instructables[i];
	      instruction = instructions[instructable.getAttribute('au-target-id')];
	      applyInstructions(containers, instructable, instruction, controllers, bindings, children, shadowSlots, partReplacements, resources);
	    }

	    view = new View(container, this, fragment, controllers, bindings, children, shadowSlots);

	    if (!createInstruction.initiatedByBehavior) {
	      view.created();
	    }

	    this.resources._invokeHook('afterCreate', view);

	    return view;
	  };

	  return ViewFactory;
	}();

	var nextInjectorId = 0;
	function getNextInjectorId() {
	  return ++nextInjectorId;
	}

	function configureProperties(instruction, resources) {
	  var type = instruction.type;
	  var attrName = instruction.attrName;
	  var attributes = instruction.attributes;
	  var property = void 0;
	  var key = void 0;
	  var value = void 0;

	  var knownAttribute = resources.mapAttribute(attrName);
	  if (knownAttribute && attrName in attributes && knownAttribute !== attrName) {
	    attributes[knownAttribute] = attributes[attrName];
	    delete attributes[attrName];
	  }

	  for (key in attributes) {
	    value = attributes[key];

	    if (value !== null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
	      property = type.attributes[key];

	      if (property !== undefined) {
	        value.targetProperty = property.name;
	      } else {
	        value.targetProperty = key;
	      }
	    }
	  }
	}

	var lastAUTargetID = 0;
	function getNextAUTargetID() {
	  return (++lastAUTargetID).toString();
	}

	function makeIntoInstructionTarget(element) {
	  var value = element.getAttribute('class');
	  var auTargetID = getNextAUTargetID();

	  element.setAttribute('class', value ? value += ' au-target' : 'au-target');
	  element.setAttribute('au-target-id', auTargetID);

	  return auTargetID;
	}

	function makeShadowSlot(compiler, resources, node, instructions, parentInjectorId) {
	  var auShadowSlot = _aureliaPal.DOM.createElement('au-shadow-slot');
	  _aureliaPal.DOM.replaceNode(auShadowSlot, node);

	  var auTargetID = makeIntoInstructionTarget(auShadowSlot);
	  var instruction = TargetInstruction.shadowSlot(parentInjectorId);

	  instruction.slotName = node.getAttribute('name') || ShadowDOM.defaultSlotKey;
	  instruction.slotDestination = node.getAttribute('slot');

	  if (node.innerHTML.trim()) {
	    var fragment = _aureliaPal.DOM.createDocumentFragment();
	    var _child3 = void 0;

	    while (_child3 = node.firstChild) {
	      fragment.appendChild(_child3);
	    }

	    instruction.slotFallbackFactory = compiler.compile(fragment, resources);
	  }

	  instructions[auTargetID] = instruction;

	  return auShadowSlot;
	}

	var ViewCompiler = exports.ViewCompiler = (_dec7 = (0, _aureliaDependencyInjection.inject)(BindingLanguage, ViewResources), _dec7(_class17 = function () {
	  function ViewCompiler(bindingLanguage, resources) {
	    

	    this.bindingLanguage = bindingLanguage;
	    this.resources = resources;
	  }

	  ViewCompiler.prototype.compile = function compile(source, resources, compileInstruction) {
	    resources = resources || this.resources;
	    compileInstruction = compileInstruction || ViewCompileInstruction.normal;
	    source = typeof source === 'string' ? _aureliaPal.DOM.createTemplateFromMarkup(source) : source;

	    var content = void 0;
	    var part = void 0;
	    var cacheSize = void 0;

	    if (source.content) {
	      part = source.getAttribute('part');
	      cacheSize = source.getAttribute('view-cache');
	      content = _aureliaPal.DOM.adoptNode(source.content);
	    } else {
	      content = source;
	    }

	    compileInstruction.targetShadowDOM = compileInstruction.targetShadowDOM && _aureliaPal.FEATURE.shadowDOM;
	    resources._invokeHook('beforeCompile', content, resources, compileInstruction);

	    var instructions = {};
	    this._compileNode(content, resources, instructions, source, 'root', !compileInstruction.targetShadowDOM);

	    var firstChild = content.firstChild;
	    if (firstChild && firstChild.nodeType === 1) {
	      var targetId = firstChild.getAttribute('au-target-id');
	      if (targetId) {
	        var ins = instructions[targetId];

	        if (ins.shadowSlot || ins.lifting) {
	          content.insertBefore(_aureliaPal.DOM.createComment('view'), firstChild);
	        }
	      }
	    }

	    var factory = new ViewFactory(content, instructions, resources);

	    factory.surrogateInstruction = compileInstruction.compileSurrogate ? this._compileSurrogate(source, resources) : null;
	    factory.part = part;

	    if (cacheSize) {
	      factory.setCacheSize(cacheSize);
	    }

	    resources._invokeHook('afterCompile', factory);

	    return factory;
	  };

	  ViewCompiler.prototype._compileNode = function _compileNode(node, resources, instructions, parentNode, parentInjectorId, targetLightDOM) {
	    switch (node.nodeType) {
	      case 1:
	        return this._compileElement(node, resources, instructions, parentNode, parentInjectorId, targetLightDOM);
	      case 3:
	        var expression = resources.getBindingLanguage(this.bindingLanguage).inspectTextContent(resources, node.wholeText);
	        if (expression) {
	          var marker = _aureliaPal.DOM.createElement('au-marker');
	          var auTargetID = makeIntoInstructionTarget(marker);
	          (node.parentNode || parentNode).insertBefore(marker, node);
	          node.textContent = ' ';
	          instructions[auTargetID] = TargetInstruction.contentExpression(expression);

	          while (node.nextSibling && node.nextSibling.nodeType === 3) {
	            (node.parentNode || parentNode).removeChild(node.nextSibling);
	          }
	        } else {
	          while (node.nextSibling && node.nextSibling.nodeType === 3) {
	            node = node.nextSibling;
	          }
	        }
	        return node.nextSibling;
	      case 11:
	        var currentChild = node.firstChild;
	        while (currentChild) {
	          currentChild = this._compileNode(currentChild, resources, instructions, node, parentInjectorId, targetLightDOM);
	        }
	        break;
	      default:
	        break;
	    }

	    return node.nextSibling;
	  };

	  ViewCompiler.prototype._compileSurrogate = function _compileSurrogate(node, resources) {
	    var tagName = node.tagName.toLowerCase();
	    var attributes = node.attributes;
	    var bindingLanguage = resources.getBindingLanguage(this.bindingLanguage);
	    var knownAttribute = void 0;
	    var property = void 0;
	    var instruction = void 0;
	    var i = void 0;
	    var ii = void 0;
	    var attr = void 0;
	    var attrName = void 0;
	    var attrValue = void 0;
	    var info = void 0;
	    var type = void 0;
	    var expressions = [];
	    var expression = void 0;
	    var behaviorInstructions = [];
	    var values = {};
	    var hasValues = false;
	    var providers = [];

	    for (i = 0, ii = attributes.length; i < ii; ++i) {
	      attr = attributes[i];
	      attrName = attr.name;
	      attrValue = attr.value;

	      info = bindingLanguage.inspectAttribute(resources, tagName, attrName, attrValue);
	      type = resources.getAttribute(info.attrName);

	      if (type) {
	        knownAttribute = resources.mapAttribute(info.attrName);
	        if (knownAttribute) {
	          property = type.attributes[knownAttribute];

	          if (property) {
	            info.defaultBindingMode = property.defaultBindingMode;

	            if (!info.command && !info.expression) {
	              info.command = property.hasOptions ? 'options' : null;
	            }
	          }
	        }
	      }

	      instruction = bindingLanguage.createAttributeInstruction(resources, node, info, undefined, type);

	      if (instruction) {
	        if (instruction.alteredAttr) {
	          type = resources.getAttribute(instruction.attrName);
	        }

	        if (instruction.discrete) {
	          expressions.push(instruction);
	        } else {
	          if (type) {
	            instruction.type = type;
	            configureProperties(instruction, resources);

	            if (type.liftsContent) {
	              throw new Error('You cannot place a template controller on a surrogate element.');
	            } else {
	              behaviorInstructions.push(instruction);
	            }
	          } else {
	            expressions.push(instruction.attributes[instruction.attrName]);
	          }
	        }
	      } else {
	        if (type) {
	          instruction = BehaviorInstruction.attribute(attrName, type);
	          instruction.attributes[resources.mapAttribute(attrName)] = attrValue;

	          if (type.liftsContent) {
	            throw new Error('You cannot place a template controller on a surrogate element.');
	          } else {
	            behaviorInstructions.push(instruction);
	          }
	        } else if (attrName !== 'id' && attrName !== 'part' && attrName !== 'replace-part') {
	          hasValues = true;
	          values[attrName] = attrValue;
	        }
	      }
	    }

	    if (expressions.length || behaviorInstructions.length || hasValues) {
	      for (i = 0, ii = behaviorInstructions.length; i < ii; ++i) {
	        instruction = behaviorInstructions[i];
	        instruction.type.compile(this, resources, node, instruction);
	        providers.push(instruction.type.target);
	      }

	      for (i = 0, ii = expressions.length; i < ii; ++i) {
	        expression = expressions[i];
	        if (expression.attrToRemove !== undefined) {
	          node.removeAttribute(expression.attrToRemove);
	        }
	      }

	      return TargetInstruction.surrogate(providers, behaviorInstructions, expressions, values);
	    }

	    return null;
	  };

	  ViewCompiler.prototype._compileElement = function _compileElement(node, resources, instructions, parentNode, parentInjectorId, targetLightDOM) {
	    var tagName = node.tagName.toLowerCase();
	    var attributes = node.attributes;
	    var expressions = [];
	    var expression = void 0;
	    var behaviorInstructions = [];
	    var providers = [];
	    var bindingLanguage = resources.getBindingLanguage(this.bindingLanguage);
	    var liftingInstruction = void 0;
	    var viewFactory = void 0;
	    var type = void 0;
	    var elementInstruction = void 0;
	    var elementProperty = void 0;
	    var i = void 0;
	    var ii = void 0;
	    var attr = void 0;
	    var attrName = void 0;
	    var attrValue = void 0;
	    var instruction = void 0;
	    var info = void 0;
	    var property = void 0;
	    var knownAttribute = void 0;
	    var auTargetID = void 0;
	    var injectorId = void 0;

	    if (tagName === 'slot') {
	      if (targetLightDOM) {
	        node = makeShadowSlot(this, resources, node, instructions, parentInjectorId);
	      }
	      return node.nextSibling;
	    } else if (tagName === 'template') {
	      viewFactory = this.compile(node, resources);
	      viewFactory.part = node.getAttribute('part');
	    } else {
	      type = resources.getElement(node.getAttribute('as-element') || tagName);
	      if (type) {
	        elementInstruction = BehaviorInstruction.element(node, type);
	        type.processAttributes(this, resources, node, attributes, elementInstruction);
	        behaviorInstructions.push(elementInstruction);
	      }
	    }

	    for (i = 0, ii = attributes.length; i < ii; ++i) {
	      attr = attributes[i];
	      attrName = attr.name;
	      attrValue = attr.value;
	      info = bindingLanguage.inspectAttribute(resources, tagName, attrName, attrValue);

	      if (targetLightDOM && info.attrName === 'slot') {
	        info.attrName = attrName = 'au-slot';
	      }

	      type = resources.getAttribute(info.attrName);
	      elementProperty = null;

	      if (type) {
	        knownAttribute = resources.mapAttribute(info.attrName);
	        if (knownAttribute) {
	          property = type.attributes[knownAttribute];

	          if (property) {
	            info.defaultBindingMode = property.defaultBindingMode;

	            if (!info.command && !info.expression) {
	              info.command = property.hasOptions ? 'options' : null;
	            }
	          }
	        }
	      } else if (elementInstruction) {
	          elementProperty = elementInstruction.type.attributes[info.attrName];
	          if (elementProperty) {
	            info.defaultBindingMode = elementProperty.defaultBindingMode;
	          }
	        }

	      if (elementProperty) {
	        instruction = bindingLanguage.createAttributeInstruction(resources, node, info, elementInstruction);
	      } else {
	        instruction = bindingLanguage.createAttributeInstruction(resources, node, info, undefined, type);
	      }

	      if (instruction) {
	        if (instruction.alteredAttr) {
	          type = resources.getAttribute(instruction.attrName);
	        }

	        if (instruction.discrete) {
	          expressions.push(instruction);
	        } else {
	          if (type) {
	            instruction.type = type;
	            configureProperties(instruction, resources);

	            if (type.liftsContent) {
	              instruction.originalAttrName = attrName;
	              liftingInstruction = instruction;
	              break;
	            } else {
	              behaviorInstructions.push(instruction);
	            }
	          } else if (elementProperty) {
	            elementInstruction.attributes[info.attrName].targetProperty = elementProperty.name;
	          } else {
	            expressions.push(instruction.attributes[instruction.attrName]);
	          }
	        }
	      } else {
	        if (type) {
	          instruction = BehaviorInstruction.attribute(attrName, type);
	          instruction.attributes[resources.mapAttribute(attrName)] = attrValue;

	          if (type.liftsContent) {
	            instruction.originalAttrName = attrName;
	            liftingInstruction = instruction;
	            break;
	          } else {
	            behaviorInstructions.push(instruction);
	          }
	        } else if (elementProperty) {
	          elementInstruction.attributes[attrName] = attrValue;
	        }
	      }
	    }

	    if (liftingInstruction) {
	      liftingInstruction.viewFactory = viewFactory;
	      node = liftingInstruction.type.compile(this, resources, node, liftingInstruction, parentNode);
	      auTargetID = makeIntoInstructionTarget(node);
	      instructions[auTargetID] = TargetInstruction.lifting(parentInjectorId, liftingInstruction);
	    } else {
	      if (expressions.length || behaviorInstructions.length) {
	        injectorId = behaviorInstructions.length ? getNextInjectorId() : false;

	        for (i = 0, ii = behaviorInstructions.length; i < ii; ++i) {
	          instruction = behaviorInstructions[i];
	          instruction.type.compile(this, resources, node, instruction, parentNode);
	          providers.push(instruction.type.target);
	        }

	        for (i = 0, ii = expressions.length; i < ii; ++i) {
	          expression = expressions[i];
	          if (expression.attrToRemove !== undefined) {
	            node.removeAttribute(expression.attrToRemove);
	          }
	        }

	        auTargetID = makeIntoInstructionTarget(node);
	        instructions[auTargetID] = TargetInstruction.normal(injectorId, parentInjectorId, providers, behaviorInstructions, expressions, elementInstruction);
	      }

	      if (elementInstruction && elementInstruction.skipContentProcessing) {
	        return node.nextSibling;
	      }

	      var currentChild = node.firstChild;
	      while (currentChild) {
	        currentChild = this._compileNode(currentChild, resources, instructions, node, injectorId || parentInjectorId, targetLightDOM);
	      }
	    }

	    return node.nextSibling;
	  };

	  return ViewCompiler;
	}()) || _class17);

	var ResourceModule = exports.ResourceModule = function () {
	  function ResourceModule(moduleId) {
	    

	    this.id = moduleId;
	    this.moduleInstance = null;
	    this.mainResource = null;
	    this.resources = null;
	    this.viewStrategy = null;
	    this.isInitialized = false;
	    this.onLoaded = null;
	    this.loadContext = null;
	  }

	  ResourceModule.prototype.initialize = function initialize(container) {
	    var current = this.mainResource;
	    var resources = this.resources;
	    var vs = this.viewStrategy;

	    if (this.isInitialized) {
	      return;
	    }

	    this.isInitialized = true;

	    if (current !== undefined) {
	      current.metadata.viewStrategy = vs;
	      current.initialize(container);
	    }

	    for (var i = 0, ii = resources.length; i < ii; ++i) {
	      current = resources[i];
	      current.metadata.viewStrategy = vs;
	      current.initialize(container);
	    }
	  };

	  ResourceModule.prototype.register = function register(registry, name) {
	    var main = this.mainResource;
	    var resources = this.resources;

	    if (main !== undefined) {
	      main.register(registry, name);
	      name = null;
	    }

	    for (var i = 0, ii = resources.length; i < ii; ++i) {
	      resources[i].register(registry, name);
	      name = null;
	    }
	  };

	  ResourceModule.prototype.load = function load(container, loadContext) {
	    if (this.onLoaded !== null) {
	      return this.loadContext === loadContext ? Promise.resolve() : this.onLoaded;
	    }

	    var main = this.mainResource;
	    var resources = this.resources;
	    var loads = void 0;

	    if (main !== undefined) {
	      loads = new Array(resources.length + 1);
	      loads[0] = main.load(container, loadContext);
	      for (var i = 0, ii = resources.length; i < ii; ++i) {
	        loads[i + 1] = resources[i].load(container, loadContext);
	      }
	    } else {
	      loads = new Array(resources.length);
	      for (var _i = 0, _ii = resources.length; _i < _ii; ++_i) {
	        loads[_i] = resources[_i].load(container, loadContext);
	      }
	    }

	    this.loadContext = loadContext;
	    this.onLoaded = Promise.all(loads);
	    return this.onLoaded;
	  };

	  return ResourceModule;
	}();

	var ResourceDescription = exports.ResourceDescription = function () {
	  function ResourceDescription(key, exportedValue, resourceTypeMeta) {
	    

	    if (!resourceTypeMeta) {
	      resourceTypeMeta = _aureliaMetadata.metadata.get(_aureliaMetadata.metadata.resource, exportedValue);

	      if (!resourceTypeMeta) {
	        resourceTypeMeta = new HtmlBehaviorResource();
	        resourceTypeMeta.elementName = _hyphenate(key);
	        _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.resource, resourceTypeMeta, exportedValue);
	      }
	    }

	    if (resourceTypeMeta instanceof HtmlBehaviorResource) {
	      if (resourceTypeMeta.elementName === undefined) {
	        resourceTypeMeta.elementName = _hyphenate(key);
	      } else if (resourceTypeMeta.attributeName === undefined) {
	        resourceTypeMeta.attributeName = _hyphenate(key);
	      } else if (resourceTypeMeta.attributeName === null && resourceTypeMeta.elementName === null) {
	        HtmlBehaviorResource.convention(key, resourceTypeMeta);
	      }
	    } else if (!resourceTypeMeta.name) {
	      resourceTypeMeta.name = _hyphenate(key);
	    }

	    this.metadata = resourceTypeMeta;
	    this.value = exportedValue;
	  }

	  ResourceDescription.prototype.initialize = function initialize(container) {
	    this.metadata.initialize(container, this.value);
	  };

	  ResourceDescription.prototype.register = function register(registry, name) {
	    this.metadata.register(registry, name);
	  };

	  ResourceDescription.prototype.load = function load(container, loadContext) {
	    return this.metadata.load(container, this.value, loadContext);
	  };

	  return ResourceDescription;
	}();

	var ModuleAnalyzer = exports.ModuleAnalyzer = function () {
	  function ModuleAnalyzer() {
	    

	    this.cache = Object.create(null);
	  }

	  ModuleAnalyzer.prototype.getAnalysis = function getAnalysis(moduleId) {
	    return this.cache[moduleId];
	  };

	  ModuleAnalyzer.prototype.analyze = function analyze(moduleId, moduleInstance, mainResourceKey) {
	    var mainResource = void 0;
	    var fallbackValue = void 0;
	    var fallbackKey = void 0;
	    var resourceTypeMeta = void 0;
	    var key = void 0;
	    var exportedValue = void 0;
	    var resources = [];
	    var conventional = void 0;
	    var vs = void 0;
	    var resourceModule = void 0;

	    resourceModule = this.cache[moduleId];
	    if (resourceModule) {
	      return resourceModule;
	    }

	    resourceModule = new ResourceModule(moduleId);
	    this.cache[moduleId] = resourceModule;

	    if (typeof moduleInstance === 'function') {
	      moduleInstance = { 'default': moduleInstance };
	    }

	    if (mainResourceKey) {
	      mainResource = new ResourceDescription(mainResourceKey, moduleInstance[mainResourceKey]);
	    }

	    for (key in moduleInstance) {
	      exportedValue = moduleInstance[key];

	      if (key === mainResourceKey || typeof exportedValue !== 'function') {
	        continue;
	      }

	      resourceTypeMeta = _aureliaMetadata.metadata.get(_aureliaMetadata.metadata.resource, exportedValue);

	      if (resourceTypeMeta) {
	        if (resourceTypeMeta.attributeName === null && resourceTypeMeta.elementName === null) {
	          HtmlBehaviorResource.convention(key, resourceTypeMeta);
	        }

	        if (resourceTypeMeta.attributeName === null && resourceTypeMeta.elementName === null) {
	          resourceTypeMeta.elementName = _hyphenate(key);
	        }

	        if (!mainResource && resourceTypeMeta instanceof HtmlBehaviorResource && resourceTypeMeta.elementName !== null) {
	          mainResource = new ResourceDescription(key, exportedValue, resourceTypeMeta);
	        } else {
	          resources.push(new ResourceDescription(key, exportedValue, resourceTypeMeta));
	        }
	      } else if (viewStrategy.decorates(exportedValue)) {
	        vs = exportedValue;
	      } else if (exportedValue instanceof _aureliaLoader.TemplateRegistryEntry) {
	        vs = new TemplateRegistryViewStrategy(moduleId, exportedValue);
	      } else {
	        if (conventional = HtmlBehaviorResource.convention(key)) {
	          if (conventional.elementName !== null && !mainResource) {
	            mainResource = new ResourceDescription(key, exportedValue, conventional);
	          } else {
	            resources.push(new ResourceDescription(key, exportedValue, conventional));
	          }

	          _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.resource, conventional, exportedValue);
	        } else if (conventional = _aureliaBinding.ValueConverterResource.convention(key) || _aureliaBinding.BindingBehaviorResource.convention(key) || ViewEngineHooksResource.convention(key)) {
	          resources.push(new ResourceDescription(key, exportedValue, conventional));
	          _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.resource, conventional, exportedValue);
	        } else if (!fallbackValue) {
	          fallbackValue = exportedValue;
	          fallbackKey = key;
	        }
	      }
	    }

	    if (!mainResource && fallbackValue) {
	      mainResource = new ResourceDescription(fallbackKey, fallbackValue);
	    }

	    resourceModule.moduleInstance = moduleInstance;
	    resourceModule.mainResource = mainResource;
	    resourceModule.resources = resources;
	    resourceModule.viewStrategy = vs;

	    return resourceModule;
	  };

	  return ModuleAnalyzer;
	}();

	var logger = LogManager.getLogger('templating');

	function ensureRegistryEntry(loader, urlOrRegistryEntry) {
	  if (urlOrRegistryEntry instanceof _aureliaLoader.TemplateRegistryEntry) {
	    return Promise.resolve(urlOrRegistryEntry);
	  }

	  return loader.loadTemplate(urlOrRegistryEntry);
	}

	var ProxyViewFactory = function () {
	  function ProxyViewFactory(promise) {
	    var _this9 = this;

	    

	    promise.then(function (x) {
	      return _this9.viewFactory = x;
	    });
	  }

	  ProxyViewFactory.prototype.create = function create(container, bindingContext, createInstruction, element) {
	    return this.viewFactory.create(container, bindingContext, createInstruction, element);
	  };

	  ProxyViewFactory.prototype.setCacheSize = function setCacheSize(size, doNotOverrideIfAlreadySet) {
	    this.viewFactory.setCacheSize(size, doNotOverrideIfAlreadySet);
	  };

	  ProxyViewFactory.prototype.getCachedView = function getCachedView() {
	    return this.viewFactory.getCachedView();
	  };

	  ProxyViewFactory.prototype.returnViewToCache = function returnViewToCache(view) {
	    this.viewFactory.returnViewToCache(view);
	  };

	  _createClass(ProxyViewFactory, [{
	    key: 'isCaching',
	    get: function get() {
	      return this.viewFactory.isCaching;
	    }
	  }]);

	  return ProxyViewFactory;
	}();

	var ViewEngine = exports.ViewEngine = (_dec8 = (0, _aureliaDependencyInjection.inject)(_aureliaLoader.Loader, _aureliaDependencyInjection.Container, ViewCompiler, ModuleAnalyzer, ViewResources), _dec8(_class18 = function () {
	  function ViewEngine(loader, container, viewCompiler, moduleAnalyzer, appResources) {
	    

	    this.loader = loader;
	    this.container = container;
	    this.viewCompiler = viewCompiler;
	    this.moduleAnalyzer = moduleAnalyzer;
	    this.appResources = appResources;
	    this._pluginMap = {};

	    var auSlotBehavior = new HtmlBehaviorResource();
	    auSlotBehavior.attributeName = 'au-slot';
	    auSlotBehavior.initialize(container, SlotCustomAttribute);
	    auSlotBehavior.register(appResources);
	  }

	  ViewEngine.prototype.addResourcePlugin = function addResourcePlugin(extension, implementation) {
	    var name = extension.replace('.', '') + '-resource-plugin';
	    this._pluginMap[extension] = name;
	    this.loader.addPlugin(name, implementation);
	  };

	  ViewEngine.prototype.loadViewFactory = function loadViewFactory(urlOrRegistryEntry, compileInstruction, loadContext) {
	    var _this10 = this;

	    loadContext = loadContext || new ResourceLoadContext();

	    return ensureRegistryEntry(this.loader, urlOrRegistryEntry).then(function (registryEntry) {
	      if (registryEntry.onReady) {
	        if (!loadContext.hasDependency(urlOrRegistryEntry)) {
	          loadContext.addDependency(urlOrRegistryEntry);
	          return registryEntry.onReady;
	        }

	        return Promise.resolve(new ProxyViewFactory(registryEntry.onReady));
	      }

	      loadContext.addDependency(urlOrRegistryEntry);

	      registryEntry.onReady = _this10.loadTemplateResources(registryEntry, compileInstruction, loadContext).then(function (resources) {
	        registryEntry.resources = resources;
	        var viewFactory = _this10.viewCompiler.compile(registryEntry.template, resources, compileInstruction);
	        registryEntry.factory = viewFactory;
	        return viewFactory;
	      });

	      return registryEntry.onReady;
	    });
	  };

	  ViewEngine.prototype.loadTemplateResources = function loadTemplateResources(registryEntry, compileInstruction, loadContext) {
	    var resources = new ViewResources(this.appResources, registryEntry.address);
	    var dependencies = registryEntry.dependencies;
	    var importIds = void 0;
	    var names = void 0;

	    compileInstruction = compileInstruction || ViewCompileInstruction.normal;

	    if (dependencies.length === 0 && !compileInstruction.associatedModuleId) {
	      return Promise.resolve(resources);
	    }

	    importIds = dependencies.map(function (x) {
	      return x.src;
	    });
	    names = dependencies.map(function (x) {
	      return x.name;
	    });
	    logger.debug('importing resources for ' + registryEntry.address, importIds);

	    return this.importViewResources(importIds, names, resources, compileInstruction, loadContext);
	  };

	  ViewEngine.prototype.importViewModelResource = function importViewModelResource(moduleImport, moduleMember) {
	    var _this11 = this;

	    return this.loader.loadModule(moduleImport).then(function (viewModelModule) {
	      var normalizedId = _aureliaMetadata.Origin.get(viewModelModule).moduleId;
	      var resourceModule = _this11.moduleAnalyzer.analyze(normalizedId, viewModelModule, moduleMember);

	      if (!resourceModule.mainResource) {
	        throw new Error('No view model found in module "' + moduleImport + '".');
	      }

	      resourceModule.initialize(_this11.container);

	      return resourceModule.mainResource;
	    });
	  };

	  ViewEngine.prototype.importViewResources = function importViewResources(moduleIds, names, resources, compileInstruction, loadContext) {
	    var _this12 = this;

	    loadContext = loadContext || new ResourceLoadContext();
	    compileInstruction = compileInstruction || ViewCompileInstruction.normal;

	    moduleIds = moduleIds.map(function (x) {
	      return _this12._applyLoaderPlugin(x);
	    });

	    return this.loader.loadAllModules(moduleIds).then(function (imports) {
	      var i = void 0;
	      var ii = void 0;
	      var analysis = void 0;
	      var normalizedId = void 0;
	      var current = void 0;
	      var associatedModule = void 0;
	      var container = _this12.container;
	      var moduleAnalyzer = _this12.moduleAnalyzer;
	      var allAnalysis = new Array(imports.length);

	      for (i = 0, ii = imports.length; i < ii; ++i) {
	        current = imports[i];
	        normalizedId = _aureliaMetadata.Origin.get(current).moduleId;

	        analysis = moduleAnalyzer.analyze(normalizedId, current);
	        analysis.initialize(container);
	        analysis.register(resources, names[i]);

	        allAnalysis[i] = analysis;
	      }

	      if (compileInstruction.associatedModuleId) {
	        associatedModule = moduleAnalyzer.getAnalysis(compileInstruction.associatedModuleId);

	        if (associatedModule) {
	          associatedModule.register(resources);
	        }
	      }

	      for (i = 0, ii = allAnalysis.length; i < ii; ++i) {
	        allAnalysis[i] = allAnalysis[i].load(container, loadContext);
	      }

	      return Promise.all(allAnalysis).then(function () {
	        return resources;
	      });
	    });
	  };

	  ViewEngine.prototype._applyLoaderPlugin = function _applyLoaderPlugin(id) {
	    var index = id.lastIndexOf('.');
	    if (index !== -1) {
	      var ext = id.substring(index);
	      var pluginName = this._pluginMap[ext];

	      if (pluginName === undefined) {
	        return id;
	      }

	      return this.loader.applyPluginToUrl(id, pluginName);
	    }

	    return id;
	  };

	  return ViewEngine;
	}()) || _class18);

	var Controller = exports.Controller = function () {
	  function Controller(behavior, instruction, viewModel, elementEvents) {
	    

	    this.behavior = behavior;
	    this.instruction = instruction;
	    this.viewModel = viewModel;
	    this.isAttached = false;
	    this.view = null;
	    this.isBound = false;
	    this.scope = null;
	    this.elementEvents = elementEvents || null;

	    var observerLookup = behavior.observerLocator.getOrCreateObserversLookup(viewModel);
	    var handlesBind = behavior.handlesBind;
	    var attributes = instruction.attributes;
	    var boundProperties = this.boundProperties = [];
	    var properties = behavior.properties;
	    var i = void 0;
	    var ii = void 0;

	    behavior._ensurePropertiesDefined(viewModel, observerLookup);

	    for (i = 0, ii = properties.length; i < ii; ++i) {
	      properties[i]._initialize(viewModel, observerLookup, attributes, handlesBind, boundProperties);
	    }
	  }

	  Controller.prototype.created = function created(owningView) {
	    if (this.behavior.handlesCreated) {
	      this.viewModel.created(owningView, this.view);
	    }
	  };

	  Controller.prototype.automate = function automate(overrideContext, owningView) {
	    this.view.bindingContext = this.viewModel;
	    this.view.overrideContext = overrideContext || (0, _aureliaBinding.createOverrideContext)(this.viewModel);
	    this.view._isUserControlled = true;

	    if (this.behavior.handlesCreated) {
	      this.viewModel.created(owningView || null, this.view);
	    }

	    this.bind(this.view);
	  };

	  Controller.prototype.bind = function bind(scope) {
	    var skipSelfSubscriber = this.behavior.handlesBind;
	    var boundProperties = this.boundProperties;
	    var i = void 0;
	    var ii = void 0;
	    var x = void 0;
	    var observer = void 0;
	    var selfSubscriber = void 0;

	    if (this.isBound) {
	      if (this.scope === scope) {
	        return;
	      }

	      this.unbind();
	    }

	    this.isBound = true;
	    this.scope = scope;

	    for (i = 0, ii = boundProperties.length; i < ii; ++i) {
	      x = boundProperties[i];
	      observer = x.observer;
	      selfSubscriber = observer.selfSubscriber;
	      observer.publishing = false;

	      if (skipSelfSubscriber) {
	        observer.selfSubscriber = null;
	      }

	      x.binding.bind(scope);
	      observer.call();

	      observer.publishing = true;
	      observer.selfSubscriber = selfSubscriber;
	    }

	    var overrideContext = void 0;
	    if (this.view !== null) {
	      if (skipSelfSubscriber) {
	        this.view.viewModelScope = scope;
	      }

	      if (this.viewModel === scope.overrideContext.bindingContext) {
	        overrideContext = scope.overrideContext;
	      } else if (this.instruction.inheritBindingContext) {
	          overrideContext = (0, _aureliaBinding.createOverrideContext)(this.viewModel, scope.overrideContext);
	        } else {
	            overrideContext = (0, _aureliaBinding.createOverrideContext)(this.viewModel);
	            overrideContext.__parentOverrideContext = scope.overrideContext;
	          }

	      this.view.bind(this.viewModel, overrideContext);
	    } else if (skipSelfSubscriber) {
	      overrideContext = scope.overrideContext;

	      if (scope.overrideContext.__parentOverrideContext !== undefined && this.viewModel.viewFactory && this.viewModel.viewFactory.factoryCreateInstruction.partReplacements) {
	        overrideContext = Object.assign({}, scope.overrideContext);
	        overrideContext.parentOverrideContext = scope.overrideContext.__parentOverrideContext;
	      }
	      this.viewModel.bind(scope.bindingContext, overrideContext);
	    }
	  };

	  Controller.prototype.unbind = function unbind() {
	    if (this.isBound) {
	      var boundProperties = this.boundProperties;
	      var i = void 0;
	      var ii = void 0;

	      this.isBound = false;
	      this.scope = null;

	      if (this.view !== null) {
	        this.view.unbind();
	      }

	      if (this.behavior.handlesUnbind) {
	        this.viewModel.unbind();
	      }

	      if (this.elementEvents !== null) {
	        this.elementEvents.disposeAll();
	      }

	      for (i = 0, ii = boundProperties.length; i < ii; ++i) {
	        boundProperties[i].binding.unbind();
	      }
	    }
	  };

	  Controller.prototype.attached = function attached() {
	    if (this.isAttached) {
	      return;
	    }

	    this.isAttached = true;

	    if (this.behavior.handlesAttached) {
	      this.viewModel.attached();
	    }

	    if (this.view !== null) {
	      this.view.attached();
	    }
	  };

	  Controller.prototype.detached = function detached() {
	    if (this.isAttached) {
	      this.isAttached = false;

	      if (this.view !== null) {
	        this.view.detached();
	      }

	      if (this.behavior.handlesDetached) {
	        this.viewModel.detached();
	      }
	    }
	  };

	  return Controller;
	}();

	var BehaviorPropertyObserver = exports.BehaviorPropertyObserver = (_dec9 = (0, _aureliaBinding.subscriberCollection)(), _dec9(_class20 = function () {
	  function BehaviorPropertyObserver(taskQueue, obj, propertyName, selfSubscriber, initialValue) {
	    

	    this.taskQueue = taskQueue;
	    this.obj = obj;
	    this.propertyName = propertyName;
	    this.notqueued = true;
	    this.publishing = false;
	    this.selfSubscriber = selfSubscriber;
	    this.currentValue = this.oldValue = initialValue;
	  }

	  BehaviorPropertyObserver.prototype.getValue = function getValue() {
	    return this.currentValue;
	  };

	  BehaviorPropertyObserver.prototype.setValue = function setValue(newValue) {
	    var oldValue = this.currentValue;

	    if (oldValue !== newValue) {
	      if (this.publishing && this.notqueued) {
	        this.notqueued = false;
	        this.taskQueue.queueMicroTask(this);
	      }

	      this.oldValue = oldValue;
	      this.currentValue = newValue;
	    }
	  };

	  BehaviorPropertyObserver.prototype.call = function call() {
	    var oldValue = this.oldValue;
	    var newValue = this.currentValue;

	    this.notqueued = true;

	    if (newValue === oldValue) {
	      return;
	    }

	    if (this.selfSubscriber) {
	      this.selfSubscriber(newValue, oldValue);
	    }

	    this.callSubscribers(newValue, oldValue);
	    this.oldValue = newValue;
	  };

	  BehaviorPropertyObserver.prototype.subscribe = function subscribe(context, callable) {
	    this.addSubscriber(context, callable);
	  };

	  BehaviorPropertyObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
	    this.removeSubscriber(context, callable);
	  };

	  return BehaviorPropertyObserver;
	}()) || _class20);


	function getObserver(behavior, instance, name) {
	  var lookup = instance.__observers__;

	  if (lookup === undefined) {
	    if (!behavior.isInitialized) {
	      behavior.initialize(_aureliaDependencyInjection.Container.instance || new _aureliaDependencyInjection.Container(), instance.constructor);
	    }

	    lookup = behavior.observerLocator.getOrCreateObserversLookup(instance);
	    behavior._ensurePropertiesDefined(instance, lookup);
	  }

	  return lookup[name];
	}

	var BindableProperty = exports.BindableProperty = function () {
	  function BindableProperty(nameOrConfig) {
	    

	    if (typeof nameOrConfig === 'string') {
	      this.name = nameOrConfig;
	    } else {
	      Object.assign(this, nameOrConfig);
	    }

	    this.attribute = this.attribute || _hyphenate(this.name);
	    if (this.defaultBindingMode === null || this.defaultBindingMode === undefined) {
	      this.defaultBindingMode = _aureliaBinding.bindingMode.oneWay;
	    }
	    this.changeHandler = this.changeHandler || null;
	    this.owner = null;
	    this.descriptor = null;
	  }

	  BindableProperty.prototype.registerWith = function registerWith(target, behavior, descriptor) {
	    behavior.properties.push(this);
	    behavior.attributes[this.attribute] = this;
	    this.owner = behavior;

	    if (descriptor) {
	      this.descriptor = descriptor;
	      return this._configureDescriptor(behavior, descriptor);
	    }

	    return undefined;
	  };

	  BindableProperty.prototype._configureDescriptor = function _configureDescriptor(behavior, descriptor) {
	    var name = this.name;

	    descriptor.configurable = true;
	    descriptor.enumerable = true;

	    if ('initializer' in descriptor) {
	      this.defaultValue = descriptor.initializer;
	      delete descriptor.initializer;
	      delete descriptor.writable;
	    }

	    if ('value' in descriptor) {
	      this.defaultValue = descriptor.value;
	      delete descriptor.value;
	      delete descriptor.writable;
	    }

	    descriptor.get = function () {
	      return getObserver(behavior, this, name).getValue();
	    };

	    descriptor.set = function (value) {
	      getObserver(behavior, this, name).setValue(value);
	    };

	    descriptor.get.getObserver = function (obj) {
	      return getObserver(behavior, obj, name);
	    };

	    return descriptor;
	  };

	  BindableProperty.prototype.defineOn = function defineOn(target, behavior) {
	    var name = this.name;
	    var handlerName = void 0;

	    if (this.changeHandler === null) {
	      handlerName = name + 'Changed';
	      if (handlerName in target.prototype) {
	        this.changeHandler = handlerName;
	      }
	    }

	    if (this.descriptor === null) {
	      Object.defineProperty(target.prototype, name, this._configureDescriptor(behavior, {}));
	    }
	  };

	  BindableProperty.prototype.createObserver = function createObserver(viewModel) {
	    var selfSubscriber = null;
	    var defaultValue = this.defaultValue;
	    var changeHandlerName = this.changeHandler;
	    var name = this.name;
	    var initialValue = void 0;

	    if (this.hasOptions) {
	      return undefined;
	    }

	    if (changeHandlerName in viewModel) {
	      if ('propertyChanged' in viewModel) {
	        selfSubscriber = function selfSubscriber(newValue, oldValue) {
	          viewModel[changeHandlerName](newValue, oldValue);
	          viewModel.propertyChanged(name, newValue, oldValue);
	        };
	      } else {
	        selfSubscriber = function selfSubscriber(newValue, oldValue) {
	          return viewModel[changeHandlerName](newValue, oldValue);
	        };
	      }
	    } else if ('propertyChanged' in viewModel) {
	      selfSubscriber = function selfSubscriber(newValue, oldValue) {
	        return viewModel.propertyChanged(name, newValue, oldValue);
	      };
	    } else if (changeHandlerName !== null) {
	      throw new Error('Change handler ' + changeHandlerName + ' was specified but not declared on the class.');
	    }

	    if (defaultValue !== undefined) {
	      initialValue = typeof defaultValue === 'function' ? defaultValue.call(viewModel) : defaultValue;
	    }

	    return new BehaviorPropertyObserver(this.owner.taskQueue, viewModel, this.name, selfSubscriber, initialValue);
	  };

	  BindableProperty.prototype._initialize = function _initialize(viewModel, observerLookup, attributes, behaviorHandlesBind, boundProperties) {
	    var selfSubscriber = void 0;
	    var observer = void 0;
	    var attribute = void 0;
	    var defaultValue = this.defaultValue;

	    if (this.isDynamic) {
	      for (var key in attributes) {
	        this._createDynamicProperty(viewModel, observerLookup, behaviorHandlesBind, key, attributes[key], boundProperties);
	      }
	    } else if (!this.hasOptions) {
	      observer = observerLookup[this.name];

	      if (attributes !== null) {
	        selfSubscriber = observer.selfSubscriber;
	        attribute = attributes[this.attribute];

	        if (behaviorHandlesBind) {
	          observer.selfSubscriber = null;
	        }

	        if (typeof attribute === 'string') {
	          viewModel[this.name] = attribute;
	          observer.call();
	        } else if (attribute) {
	          boundProperties.push({ observer: observer, binding: attribute.createBinding(viewModel) });
	        } else if (defaultValue !== undefined) {
	          observer.call();
	        }

	        observer.selfSubscriber = selfSubscriber;
	      }

	      observer.publishing = true;
	    }
	  };

	  BindableProperty.prototype._createDynamicProperty = function _createDynamicProperty(viewModel, observerLookup, behaviorHandlesBind, name, attribute, boundProperties) {
	    var changeHandlerName = name + 'Changed';
	    var selfSubscriber = null;
	    var observer = void 0;
	    var info = void 0;

	    if (changeHandlerName in viewModel) {
	      if ('propertyChanged' in viewModel) {
	        selfSubscriber = function selfSubscriber(newValue, oldValue) {
	          viewModel[changeHandlerName](newValue, oldValue);
	          viewModel.propertyChanged(name, newValue, oldValue);
	        };
	      } else {
	        selfSubscriber = function selfSubscriber(newValue, oldValue) {
	          return viewModel[changeHandlerName](newValue, oldValue);
	        };
	      }
	    } else if ('propertyChanged' in viewModel) {
	      selfSubscriber = function selfSubscriber(newValue, oldValue) {
	        return viewModel.propertyChanged(name, newValue, oldValue);
	      };
	    }

	    observer = observerLookup[name] = new BehaviorPropertyObserver(this.owner.taskQueue, viewModel, name, selfSubscriber);

	    Object.defineProperty(viewModel, name, {
	      configurable: true,
	      enumerable: true,
	      get: observer.getValue.bind(observer),
	      set: observer.setValue.bind(observer)
	    });

	    if (behaviorHandlesBind) {
	      observer.selfSubscriber = null;
	    }

	    if (typeof attribute === 'string') {
	      viewModel[name] = attribute;
	      observer.call();
	    } else if (attribute) {
	      info = { observer: observer, binding: attribute.createBinding(viewModel) };
	      boundProperties.push(info);
	    }

	    observer.publishing = true;
	    observer.selfSubscriber = selfSubscriber;
	  };

	  return BindableProperty;
	}();

	var lastProviderId = 0;

	function nextProviderId() {
	  return ++lastProviderId;
	}

	function doProcessContent() {
	  return true;
	}
	function doProcessAttributes() {}

	var HtmlBehaviorResource = exports.HtmlBehaviorResource = function () {
	  function HtmlBehaviorResource() {
	    

	    this.elementName = null;
	    this.attributeName = null;
	    this.attributeDefaultBindingMode = undefined;
	    this.liftsContent = false;
	    this.targetShadowDOM = false;
	    this.shadowDOMOptions = null;
	    this.processAttributes = doProcessAttributes;
	    this.processContent = doProcessContent;
	    this.usesShadowDOM = false;
	    this.childBindings = null;
	    this.hasDynamicOptions = false;
	    this.containerless = false;
	    this.properties = [];
	    this.attributes = {};
	    this.isInitialized = false;
	  }

	  HtmlBehaviorResource.convention = function convention(name, existing) {
	    var behavior = void 0;

	    if (name.endsWith('CustomAttribute')) {
	      behavior = existing || new HtmlBehaviorResource();
	      behavior.attributeName = _hyphenate(name.substring(0, name.length - 15));
	    }

	    if (name.endsWith('CustomElement')) {
	      behavior = existing || new HtmlBehaviorResource();
	      behavior.elementName = _hyphenate(name.substring(0, name.length - 13));
	    }

	    return behavior;
	  };

	  HtmlBehaviorResource.prototype.addChildBinding = function addChildBinding(behavior) {
	    if (this.childBindings === null) {
	      this.childBindings = [];
	    }

	    this.childBindings.push(behavior);
	  };

	  HtmlBehaviorResource.prototype.initialize = function initialize(container, target) {
	    var proto = target.prototype;
	    var properties = this.properties;
	    var attributeName = this.attributeName;
	    var attributeDefaultBindingMode = this.attributeDefaultBindingMode;
	    var i = void 0;
	    var ii = void 0;
	    var current = void 0;

	    if (this.isInitialized) {
	      return;
	    }

	    this.isInitialized = true;
	    target.__providerId__ = nextProviderId();

	    this.observerLocator = container.get(_aureliaBinding.ObserverLocator);
	    this.taskQueue = container.get(_aureliaTaskQueue.TaskQueue);

	    this.target = target;
	    this.usesShadowDOM = this.targetShadowDOM && _aureliaPal.FEATURE.shadowDOM;
	    this.handlesCreated = 'created' in proto;
	    this.handlesBind = 'bind' in proto;
	    this.handlesUnbind = 'unbind' in proto;
	    this.handlesAttached = 'attached' in proto;
	    this.handlesDetached = 'detached' in proto;
	    this.htmlName = this.elementName || this.attributeName;

	    if (attributeName !== null) {
	      if (properties.length === 0) {
	        new BindableProperty({
	          name: 'value',
	          changeHandler: 'valueChanged' in proto ? 'valueChanged' : null,
	          attribute: attributeName,
	          defaultBindingMode: attributeDefaultBindingMode
	        }).registerWith(target, this);
	      }

	      current = properties[0];

	      if (properties.length === 1 && current.name === 'value') {
	        current.isDynamic = current.hasOptions = this.hasDynamicOptions;
	        current.defineOn(target, this);
	      } else {
	        for (i = 0, ii = properties.length; i < ii; ++i) {
	          properties[i].defineOn(target, this);
	        }

	        current = new BindableProperty({
	          name: 'value',
	          changeHandler: 'valueChanged' in proto ? 'valueChanged' : null,
	          attribute: attributeName,
	          defaultBindingMode: attributeDefaultBindingMode
	        });

	        current.hasOptions = true;
	        current.registerWith(target, this);
	      }
	    } else {
	      for (i = 0, ii = properties.length; i < ii; ++i) {
	        properties[i].defineOn(target, this);
	      }
	    }
	  };

	  HtmlBehaviorResource.prototype.register = function register(registry, name) {
	    if (this.attributeName !== null) {
	      registry.registerAttribute(name || this.attributeName, this, this.attributeName);
	    }

	    if (this.elementName !== null) {
	      registry.registerElement(name || this.elementName, this);
	    }
	  };

	  HtmlBehaviorResource.prototype.load = function load(container, target, loadContext, viewStrategy, transientView) {
	    var _this13 = this;

	    var options = void 0;

	    if (this.elementName !== null) {
	      viewStrategy = container.get(ViewLocator).getViewStrategy(viewStrategy || this.viewStrategy || target);
	      options = new ViewCompileInstruction(this.targetShadowDOM, true);

	      if (!viewStrategy.moduleId) {
	        viewStrategy.moduleId = _aureliaMetadata.Origin.get(target).moduleId;
	      }

	      return viewStrategy.loadViewFactory(container.get(ViewEngine), options, loadContext).then(function (viewFactory) {
	        if (!transientView || !_this13.viewFactory) {
	          _this13.viewFactory = viewFactory;
	        }

	        return viewFactory;
	      });
	    }

	    return Promise.resolve(this);
	  };

	  HtmlBehaviorResource.prototype.compile = function compile(compiler, resources, node, instruction, parentNode) {
	    if (this.liftsContent) {
	      if (!instruction.viewFactory) {
	        var template = _aureliaPal.DOM.createElement('template');
	        var fragment = _aureliaPal.DOM.createDocumentFragment();
	        var cacheSize = node.getAttribute('view-cache');
	        var part = node.getAttribute('part');

	        node.removeAttribute(instruction.originalAttrName);
	        _aureliaPal.DOM.replaceNode(template, node, parentNode);
	        fragment.appendChild(node);
	        instruction.viewFactory = compiler.compile(fragment, resources);

	        if (part) {
	          instruction.viewFactory.part = part;
	          node.removeAttribute('part');
	        }

	        if (cacheSize) {
	          instruction.viewFactory.setCacheSize(cacheSize);
	          node.removeAttribute('view-cache');
	        }

	        node = template;
	      }
	    } else if (this.elementName !== null) {
	      var _partReplacements2 = {};

	      if (this.processContent(compiler, resources, node, instruction) && node.hasChildNodes()) {
	        var currentChild = node.firstChild;
	        var contentElement = this.usesShadowDOM ? null : _aureliaPal.DOM.createElement('au-content');
	        var nextSibling = void 0;
	        var toReplace = void 0;

	        while (currentChild) {
	          nextSibling = currentChild.nextSibling;

	          if (currentChild.tagName === 'TEMPLATE' && (toReplace = currentChild.getAttribute('replace-part'))) {
	            _partReplacements2[toReplace] = compiler.compile(currentChild, resources);
	            _aureliaPal.DOM.removeNode(currentChild, parentNode);
	            instruction.partReplacements = _partReplacements2;
	          } else if (contentElement !== null) {
	            if (currentChild.nodeType === 3 && _isAllWhitespace(currentChild)) {
	              _aureliaPal.DOM.removeNode(currentChild, parentNode);
	            } else {
	              contentElement.appendChild(currentChild);
	            }
	          }

	          currentChild = nextSibling;
	        }

	        if (contentElement !== null && contentElement.hasChildNodes()) {
	          node.appendChild(contentElement);
	        }

	        instruction.skipContentProcessing = false;
	      } else {
	        instruction.skipContentProcessing = true;
	      }
	    }

	    return node;
	  };

	  HtmlBehaviorResource.prototype.create = function create(container, instruction, element, bindings) {
	    var viewHost = void 0;
	    var au = null;

	    instruction = instruction || BehaviorInstruction.normal;
	    element = element || null;
	    bindings = bindings || null;

	    if (this.elementName !== null && element) {
	      if (this.usesShadowDOM) {
	        viewHost = element.attachShadow(this.shadowDOMOptions);
	        container.registerInstance(_aureliaPal.DOM.boundary, viewHost);
	      } else {
	        viewHost = element;
	        if (this.targetShadowDOM) {
	          container.registerInstance(_aureliaPal.DOM.boundary, viewHost);
	        }
	      }
	    }

	    if (element !== null) {
	      element.au = au = element.au || {};
	    }

	    var viewModel = instruction.viewModel || container.get(this.target);
	    var controller = new Controller(this, instruction, viewModel, container.elementEvents);
	    var childBindings = this.childBindings;
	    var viewFactory = void 0;

	    if (this.liftsContent) {
	      au.controller = controller;
	    } else if (this.elementName !== null) {
	      viewFactory = instruction.viewFactory || this.viewFactory;
	      container.viewModel = viewModel;

	      if (viewFactory) {
	        controller.view = viewFactory.create(container, instruction, element);
	      }

	      if (element !== null) {
	        au.controller = controller;

	        if (controller.view) {
	          if (!this.usesShadowDOM && (element.childNodes.length === 1 || element.contentElement)) {
	            var contentElement = element.childNodes[0] || element.contentElement;
	            controller.view.contentView = { fragment: contentElement };
	            contentElement.parentNode && _aureliaPal.DOM.removeNode(contentElement);
	          }

	          if (instruction.anchorIsContainer) {
	            if (childBindings !== null) {
	              for (var i = 0, ii = childBindings.length; i < ii; ++i) {
	                controller.view.addBinding(childBindings[i].create(element, viewModel, controller));
	              }
	            }

	            controller.view.appendNodesTo(viewHost);
	          } else {
	            controller.view.insertNodesBefore(viewHost);
	          }
	        } else if (childBindings !== null) {
	          for (var _i2 = 0, _ii2 = childBindings.length; _i2 < _ii2; ++_i2) {
	            bindings.push(childBindings[_i2].create(element, viewModel, controller));
	          }
	        }
	      } else if (controller.view) {
	        controller.view.controller = controller;

	        if (childBindings !== null) {
	          for (var _i3 = 0, _ii3 = childBindings.length; _i3 < _ii3; ++_i3) {
	            controller.view.addBinding(childBindings[_i3].create(instruction.host, viewModel, controller));
	          }
	        }
	      } else if (childBindings !== null) {
	        for (var _i4 = 0, _ii4 = childBindings.length; _i4 < _ii4; ++_i4) {
	          bindings.push(childBindings[_i4].create(instruction.host, viewModel, controller));
	        }
	      }
	    } else if (childBindings !== null) {
	      for (var _i5 = 0, _ii5 = childBindings.length; _i5 < _ii5; ++_i5) {
	        bindings.push(childBindings[_i5].create(element, viewModel, controller));
	      }
	    }

	    if (au !== null) {
	      au[this.htmlName] = controller;
	    }

	    if (instruction.initiatedByBehavior && viewFactory) {
	      controller.view.created();
	    }

	    return controller;
	  };

	  HtmlBehaviorResource.prototype._ensurePropertiesDefined = function _ensurePropertiesDefined(instance, lookup) {
	    var properties = void 0;
	    var i = void 0;
	    var ii = void 0;
	    var observer = void 0;

	    if ('__propertiesDefined__' in lookup) {
	      return;
	    }

	    lookup.__propertiesDefined__ = true;
	    properties = this.properties;

	    for (i = 0, ii = properties.length; i < ii; ++i) {
	      observer = properties[i].createObserver(instance);

	      if (observer !== undefined) {
	        lookup[observer.propertyName] = observer;
	      }
	    }
	  };

	  return HtmlBehaviorResource;
	}();

	function createChildObserverDecorator(selectorOrConfig, all) {
	  return function (target, key, descriptor) {
	    var actualTarget = typeof key === 'string' ? target.constructor : target;
	    var r = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, HtmlBehaviorResource, actualTarget);

	    if (typeof selectorOrConfig === 'string') {
	      selectorOrConfig = {
	        selector: selectorOrConfig,
	        name: key
	      };
	    }

	    if (descriptor) {
	      descriptor.writable = true;
	    }

	    selectorOrConfig.all = all;
	    r.addChildBinding(new ChildObserver(selectorOrConfig));
	  };
	}

	function children(selectorOrConfig) {
	  return createChildObserverDecorator(selectorOrConfig, true);
	}

	function child(selectorOrConfig) {
	  return createChildObserverDecorator(selectorOrConfig, false);
	}

	var ChildObserver = function () {
	  function ChildObserver(config) {
	    

	    this.name = config.name;
	    this.changeHandler = config.changeHandler || this.name + 'Changed';
	    this.selector = config.selector;
	    this.all = config.all;
	  }

	  ChildObserver.prototype.create = function create(viewHost, viewModel, controller) {
	    return new ChildObserverBinder(this.selector, viewHost, this.name, viewModel, controller, this.changeHandler, this.all);
	  };

	  return ChildObserver;
	}();

	var noMutations = [];

	function trackMutation(groupedMutations, binder, record) {
	  var mutations = groupedMutations.get(binder);

	  if (!mutations) {
	    mutations = [];
	    groupedMutations.set(binder, mutations);
	  }

	  mutations.push(record);
	}

	function onChildChange(mutations, observer) {
	  var binders = observer.binders;
	  var bindersLength = binders.length;
	  var groupedMutations = new Map();

	  for (var i = 0, ii = mutations.length; i < ii; ++i) {
	    var record = mutations[i];
	    var added = record.addedNodes;
	    var removed = record.removedNodes;

	    for (var j = 0, jj = removed.length; j < jj; ++j) {
	      var node = removed[j];
	      if (node.nodeType === 1) {
	        for (var k = 0; k < bindersLength; ++k) {
	          var binder = binders[k];
	          if (binder.onRemove(node)) {
	            trackMutation(groupedMutations, binder, record);
	          }
	        }
	      }
	    }

	    for (var _j = 0, _jj = added.length; _j < _jj; ++_j) {
	      var _node = added[_j];
	      if (_node.nodeType === 1) {
	        for (var _k = 0; _k < bindersLength; ++_k) {
	          var _binder = binders[_k];
	          if (_binder.onAdd(_node)) {
	            trackMutation(groupedMutations, _binder, record);
	          }
	        }
	      }
	    }
	  }

	  groupedMutations.forEach(function (value, key) {
	    if (key.changeHandler !== null) {
	      key.viewModel[key.changeHandler](value);
	    }
	  });
	}

	var ChildObserverBinder = function () {
	  function ChildObserverBinder(selector, viewHost, property, viewModel, controller, changeHandler, all) {
	    

	    this.selector = selector;
	    this.viewHost = viewHost;
	    this.property = property;
	    this.viewModel = viewModel;
	    this.controller = controller;
	    this.changeHandler = changeHandler in viewModel ? changeHandler : null;
	    this.usesShadowDOM = controller.behavior.usesShadowDOM;
	    this.all = all;

	    if (!this.usesShadowDOM && controller.view && controller.view.contentView) {
	      this.contentView = controller.view.contentView;
	    } else {
	      this.contentView = null;
	    }
	  }

	  ChildObserverBinder.prototype.matches = function matches(element) {
	    if (element.matches(this.selector)) {
	      if (this.contentView === null) {
	        return true;
	      }

	      var contentView = this.contentView;
	      var assignedSlot = element.auAssignedSlot;

	      if (assignedSlot && assignedSlot.projectFromAnchors) {
	        var anchors = assignedSlot.projectFromAnchors;

	        for (var i = 0, ii = anchors.length; i < ii; ++i) {
	          if (anchors[i].auOwnerView === contentView) {
	            return true;
	          }
	        }

	        return false;
	      }

	      return element.auOwnerView === contentView;
	    }

	    return false;
	  };

	  ChildObserverBinder.prototype.bind = function bind(source) {
	    var viewHost = this.viewHost;
	    var viewModel = this.viewModel;
	    var observer = viewHost.__childObserver__;

	    if (!observer) {
	      observer = viewHost.__childObserver__ = _aureliaPal.DOM.createMutationObserver(onChildChange);

	      var options = {
	        childList: true,
	        subtree: !this.usesShadowDOM
	      };

	      observer.observe(viewHost, options);
	      observer.binders = [];
	    }

	    observer.binders.push(this);

	    if (this.usesShadowDOM) {
	      var current = viewHost.firstElementChild;

	      if (this.all) {
	        var items = viewModel[this.property];
	        if (!items) {
	          items = viewModel[this.property] = [];
	        } else {
	          items.length = 0;
	        }

	        while (current) {
	          if (this.matches(current)) {
	            items.push(current.au && current.au.controller ? current.au.controller.viewModel : current);
	          }

	          current = current.nextElementSibling;
	        }

	        if (this.changeHandler !== null) {
	          this.viewModel[this.changeHandler](noMutations);
	        }
	      } else {
	        while (current) {
	          if (this.matches(current)) {
	            var value = current.au && current.au.controller ? current.au.controller.viewModel : current;
	            this.viewModel[this.property] = value;

	            if (this.changeHandler !== null) {
	              this.viewModel[this.changeHandler](value);
	            }

	            break;
	          }

	          current = current.nextElementSibling;
	        }
	      }
	    }
	  };

	  ChildObserverBinder.prototype.onRemove = function onRemove(element) {
	    if (this.matches(element)) {
	      var value = element.au && element.au.controller ? element.au.controller.viewModel : element;

	      if (this.all) {
	        var items = this.viewModel[this.property] || (this.viewModel[this.property] = []);
	        var index = items.indexOf(value);

	        if (index !== -1) {
	          items.splice(index, 1);
	        }

	        return true;
	      }

	      return false;
	    }

	    return false;
	  };

	  ChildObserverBinder.prototype.onAdd = function onAdd(element) {
	    if (this.matches(element)) {
	      var value = element.au && element.au.controller ? element.au.controller.viewModel : element;

	      if (this.all) {
	        var items = this.viewModel[this.property] || (this.viewModel[this.property] = []);
	        var index = 0;
	        var prev = element.previousElementSibling;

	        while (prev) {
	          if (this.matches(prev)) {
	            index++;
	          }

	          prev = prev.previousElementSibling;
	        }

	        items.splice(index, 0, value);
	        return true;
	      }

	      this.viewModel[this.property] = value;

	      if (this.changeHandler !== null) {
	        this.viewModel[this.changeHandler](value);
	      }
	    }

	    return false;
	  };

	  ChildObserverBinder.prototype.unbind = function unbind() {
	    if (this.viewHost.__childObserver__) {
	      this.viewHost.__childObserver__.disconnect();
	      this.viewHost.__childObserver__ = null;
	    }
	  };

	  return ChildObserverBinder;
	}();

	function tryActivateViewModel(context) {
	  if (context.skipActivation || typeof context.viewModel.activate !== 'function') {
	    return Promise.resolve();
	  }

	  return context.viewModel.activate(context.model) || Promise.resolve();
	}

	var CompositionEngine = exports.CompositionEngine = (_dec10 = (0, _aureliaDependencyInjection.inject)(ViewEngine, ViewLocator), _dec10(_class21 = function () {
	  function CompositionEngine(viewEngine, viewLocator) {
	    

	    this.viewEngine = viewEngine;
	    this.viewLocator = viewLocator;
	  }

	  CompositionEngine.prototype._createControllerAndSwap = function _createControllerAndSwap(context) {
	    function swap(controller) {
	      return Promise.resolve(context.viewSlot.removeAll(true)).then(function () {
	        if (context.currentController) {
	          context.currentController.unbind();
	        }

	        context.viewSlot.add(controller.view);

	        if (context.compositionTransactionNotifier) {
	          context.compositionTransactionNotifier.done();
	        }

	        return controller;
	      });
	    }

	    return this.createController(context).then(function (controller) {
	      controller.automate(context.overrideContext, context.owningView);

	      if (context.compositionTransactionOwnershipToken) {
	        return context.compositionTransactionOwnershipToken.waitForCompositionComplete().then(function () {
	          return swap(controller);
	        });
	      }

	      return swap(controller);
	    });
	  };

	  CompositionEngine.prototype.createController = function createController(context) {
	    var _this14 = this;

	    var childContainer = void 0;
	    var viewModel = void 0;
	    var viewModelResource = void 0;
	    var m = void 0;

	    return this.ensureViewModel(context).then(tryActivateViewModel).then(function () {
	      childContainer = context.childContainer;
	      viewModel = context.viewModel;
	      viewModelResource = context.viewModelResource;
	      m = viewModelResource.metadata;

	      var viewStrategy = _this14.viewLocator.getViewStrategy(context.view || viewModel);

	      if (context.viewResources) {
	        viewStrategy.makeRelativeTo(context.viewResources.viewUrl);
	      }

	      return m.load(childContainer, viewModelResource.value, null, viewStrategy, true);
	    }).then(function (viewFactory) {
	      return m.create(childContainer, BehaviorInstruction.dynamic(context.host, viewModel, viewFactory));
	    });
	  };

	  CompositionEngine.prototype.ensureViewModel = function ensureViewModel(context) {
	    var childContainer = context.childContainer = context.childContainer || context.container.createChild();

	    if (typeof context.viewModel === 'string') {
	      context.viewModel = context.viewResources ? context.viewResources.relativeToView(context.viewModel) : context.viewModel;

	      return this.viewEngine.importViewModelResource(context.viewModel).then(function (viewModelResource) {
	        childContainer.autoRegister(viewModelResource.value);

	        if (context.host) {
	          childContainer.registerInstance(_aureliaPal.DOM.Element, context.host);
	        }

	        context.viewModel = childContainer.viewModel = childContainer.get(viewModelResource.value);
	        context.viewModelResource = viewModelResource;
	        return context;
	      });
	    }

	    var m = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, HtmlBehaviorResource, context.viewModel.constructor);
	    m.elementName = m.elementName || 'dynamic-element';
	    m.initialize(context.container || childContainer, context.viewModel.constructor);
	    context.viewModelResource = { metadata: m, value: context.viewModel.constructor };
	    childContainer.viewModel = context.viewModel;
	    return Promise.resolve(context);
	  };

	  CompositionEngine.prototype.compose = function compose(context) {
	    context.childContainer = context.childContainer || context.container.createChild();
	    context.view = this.viewLocator.getViewStrategy(context.view);

	    var transaction = context.childContainer.get(CompositionTransaction);
	    var compositionTransactionOwnershipToken = transaction.tryCapture();

	    if (compositionTransactionOwnershipToken) {
	      context.compositionTransactionOwnershipToken = compositionTransactionOwnershipToken;
	    } else {
	      context.compositionTransactionNotifier = transaction.enlist();
	    }

	    if (context.viewModel) {
	      return this._createControllerAndSwap(context);
	    } else if (context.view) {
	      if (context.viewResources) {
	        context.view.makeRelativeTo(context.viewResources.viewUrl);
	      }

	      return context.view.loadViewFactory(this.viewEngine, new ViewCompileInstruction()).then(function (viewFactory) {
	        var result = viewFactory.create(context.childContainer);
	        result.bind(context.bindingContext, context.overrideContext);

	        var work = function work() {
	          return Promise.resolve(context.viewSlot.removeAll(true)).then(function () {
	            context.viewSlot.add(result);

	            if (context.compositionTransactionNotifier) {
	              context.compositionTransactionNotifier.done();
	            }

	            return result;
	          });
	        };

	        if (context.compositionTransactionOwnershipToken) {
	          return context.compositionTransactionOwnershipToken.waitForCompositionComplete().then(work);
	        }

	        return work();
	      });
	    } else if (context.viewSlot) {
	      context.viewSlot.removeAll();

	      if (context.compositionTransactionNotifier) {
	        context.compositionTransactionNotifier.done();
	      }

	      return Promise.resolve(null);
	    }

	    return Promise.resolve(null);
	  };

	  return CompositionEngine;
	}()) || _class21);

	var ElementConfigResource = exports.ElementConfigResource = function () {
	  function ElementConfigResource() {
	    
	  }

	  ElementConfigResource.prototype.initialize = function initialize(container, target) {};

	  ElementConfigResource.prototype.register = function register(registry, name) {};

	  ElementConfigResource.prototype.load = function load(container, target) {
	    var config = new target();
	    var eventManager = container.get(_aureliaBinding.EventManager);
	    eventManager.registerElementConfig(config);
	  };

	  return ElementConfigResource;
	}();

	function validateBehaviorName(name, type) {
	  if (/[A-Z]/.test(name)) {
	    var newName = _hyphenate(name);
	    LogManager.getLogger('templating').warn('\'' + name + '\' is not a valid ' + type + ' name and has been converted to \'' + newName + '\'. Upper-case letters are not allowed because the DOM is not case-sensitive.');
	    return newName;
	  }
	  return name;
	}

	function resource(instance) {
	  return function (target) {
	    _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.resource, instance, target);
	  };
	}

	function behavior(override) {
	  return function (target) {
	    if (override instanceof HtmlBehaviorResource) {
	      _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.resource, override, target);
	    } else {
	      var r = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, HtmlBehaviorResource, target);
	      Object.assign(r, override);
	    }
	  };
	}

	function customElement(name) {
	  return function (target) {
	    var r = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, HtmlBehaviorResource, target);
	    r.elementName = validateBehaviorName(name, 'custom element');
	  };
	}

	function customAttribute(name, defaultBindingMode) {
	  return function (target) {
	    var r = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, HtmlBehaviorResource, target);
	    r.attributeName = validateBehaviorName(name, 'custom attribute');
	    r.attributeDefaultBindingMode = defaultBindingMode;
	  };
	}

	function templateController(target) {
	  var deco = function deco(t) {
	    var r = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, HtmlBehaviorResource, t);
	    r.liftsContent = true;
	  };

	  return target ? deco(target) : deco;
	}

	function bindable(nameOrConfigOrTarget, key, descriptor) {
	  var deco = function deco(target, key2, descriptor2) {
	    var actualTarget = key2 ? target.constructor : target;
	    var r = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, HtmlBehaviorResource, actualTarget);
	    var prop = void 0;

	    if (key2) {
	      nameOrConfigOrTarget = nameOrConfigOrTarget || {};
	      nameOrConfigOrTarget.name = key2;
	    }

	    prop = new BindableProperty(nameOrConfigOrTarget);
	    return prop.registerWith(actualTarget, r, descriptor2);
	  };

	  if (!nameOrConfigOrTarget) {
	    return deco;
	  }

	  if (key) {
	    var target = nameOrConfigOrTarget;
	    nameOrConfigOrTarget = null;
	    return deco(target, key, descriptor);
	  }

	  return deco;
	}

	function dynamicOptions(target) {
	  var deco = function deco(t) {
	    var r = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, HtmlBehaviorResource, t);
	    r.hasDynamicOptions = true;
	  };

	  return target ? deco(target) : deco;
	}

	var defaultShadowDOMOptions = { mode: 'open' };
	function useShadowDOM(targetOrOptions) {
	  var options = typeof targetOrOptions === 'function' || !targetOrOptions ? defaultShadowDOMOptions : targetOrOptions;

	  var deco = function deco(t) {
	    var r = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, HtmlBehaviorResource, t);
	    r.targetShadowDOM = true;
	    r.shadowDOMOptions = options;
	  };

	  return typeof targetOrOptions === 'function' ? deco(targetOrOptions) : deco;
	}

	function processAttributes(processor) {
	  return function (t) {
	    var r = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, HtmlBehaviorResource, t);
	    r.processAttributes = function (compiler, resources, node, attributes, elementInstruction) {
	      try {
	        processor(compiler, resources, node, attributes, elementInstruction);
	      } catch (error) {
	        LogManager.getLogger('templating').error(error);
	      }
	    };
	  };
	}

	function doNotProcessContent() {
	  return false;
	}

	function processContent(processor) {
	  return function (t) {
	    var r = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, HtmlBehaviorResource, t);
	    r.processContent = processor ? function (compiler, resources, node, instruction) {
	      try {
	        return processor(compiler, resources, node, instruction);
	      } catch (error) {
	        LogManager.getLogger('templating').error(error);
	        return false;
	      }
	    } : doNotProcessContent;
	  };
	}

	function containerless(target) {
	  var deco = function deco(t) {
	    var r = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, HtmlBehaviorResource, t);
	    r.containerless = true;
	  };

	  return target ? deco(target) : deco;
	}

	function useViewStrategy(strategy) {
	  return function (target) {
	    _aureliaMetadata.metadata.define(ViewLocator.viewStrategyMetadataKey, strategy, target);
	  };
	}

	function useView(path) {
	  return useViewStrategy(new RelativeViewStrategy(path));
	}

	function inlineView(markup, dependencies, dependencyBaseUrl) {
	  return useViewStrategy(new InlineViewStrategy(markup, dependencies, dependencyBaseUrl));
	}

	function noView(target) {
	  var deco = function deco(t) {
	    _aureliaMetadata.metadata.define(ViewLocator.viewStrategyMetadataKey, new NoViewStrategy(), t);
	  };

	  return target ? deco(target) : deco;
	}

	function elementConfig(target) {
	  var deco = function deco(t) {
	    _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.resource, new ElementConfigResource(), t);
	  };

	  return target ? deco(target) : deco;
	}

	var TemplatingEngine = exports.TemplatingEngine = (_dec11 = (0, _aureliaDependencyInjection.inject)(_aureliaDependencyInjection.Container, ModuleAnalyzer, ViewCompiler, CompositionEngine), _dec11(_class22 = function () {
	  function TemplatingEngine(container, moduleAnalyzer, viewCompiler, compositionEngine) {
	    

	    this._container = container;
	    this._moduleAnalyzer = moduleAnalyzer;
	    this._viewCompiler = viewCompiler;
	    this._compositionEngine = compositionEngine;
	    container.registerInstance(Animator, Animator.instance = new Animator());
	  }

	  TemplatingEngine.prototype.configureAnimator = function configureAnimator(animator) {
	    this._container.unregister(Animator);
	    this._container.registerInstance(Animator, Animator.instance = animator);
	  };

	  TemplatingEngine.prototype.compose = function compose(context) {
	    return this._compositionEngine.compose(context);
	  };

	  TemplatingEngine.prototype.enhance = function enhance(instruction) {
	    if (instruction instanceof _aureliaPal.DOM.Element) {
	      instruction = { element: instruction };
	    }

	    var compilerInstructions = {};
	    var resources = instruction.resources || this._container.get(ViewResources);

	    this._viewCompiler._compileNode(instruction.element, resources, compilerInstructions, instruction.element.parentNode, 'root', true);

	    var factory = new ViewFactory(instruction.element, compilerInstructions, resources);
	    var container = instruction.container || this._container.createChild();
	    var view = factory.create(container, BehaviorInstruction.enhance());

	    view.bind(instruction.bindingContext || {}, instruction.overrideContext);

	    return view;
	  };

	  return TemplatingEngine;
	}()) || _class22);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === "function") { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError("The decorator for method " + descriptor.key + " is of the invalid type " + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

	var _aureliaFramework = __webpack_require__(18);

	var _observersModelObserver = __webpack_require__(17);

	var _chartJs = __webpack_require__(25);

	var _chartJs2 = _interopRequireDefault(_chartJs);

	var ChartAttribute = (function () {
	  var _instanceInitializers = {};
	  var _instanceInitializers = {};

	  _createDecoratedClass(ChartAttribute, [{
	    key: "type",
	    decorators: [_aureliaFramework.bindable],
	    initializer: null,
	    enumerable: true
	  }, {
	    key: "data",
	    decorators: [_aureliaFramework.bindable],
	    initializer: null,
	    enumerable: true
	  }, {
	    key: "shouldUpdate",
	    decorators: [_aureliaFramework.bindable],
	    initializer: null,
	    enumerable: true
	  }, {
	    key: "throttle",
	    decorators: [_aureliaFramework.bindable],
	    initializer: null,
	    enumerable: true
	  }, {
	    key: "nativeOptions",
	    decorators: [_aureliaFramework.bindable],
	    initializer: function initializer() {
	      return {};
	    },
	    enumerable: true
	  }], null, _instanceInitializers);

	  function ChartAttribute(element, modelObserver) {
	    var _this = this;

	    _classCallCheck(this, _ChartAttribute);

	    _defineDecoratedPropertyDescriptor(this, "type", _instanceInitializers);

	    _defineDecoratedPropertyDescriptor(this, "data", _instanceInitializers);

	    _defineDecoratedPropertyDescriptor(this, "shouldUpdate", _instanceInitializers);

	    _defineDecoratedPropertyDescriptor(this, "throttle", _instanceInitializers);

	    _defineDecoratedPropertyDescriptor(this, "nativeOptions", _instanceInitializers);

	    this._isSetup = false;

	    this.propertyChanged = function (propertyName, newValue, oldValue) {
	      if (_this._isSetup && _this._isObserving) {
	        _this.refreshChart();
	        _this._modelObserver.unsubscribe();
	        _this.subscribeToChanges();
	      }
	    };

	    this.refreshChart = function () {
	      _this._chartData.data = _this._clonedData;
	      _this._activeChart.update();
	      _this._activeChart.resize();
	    };

	    this.element = element;
	    this._modelObserver = modelObserver;
	  }

	  _createDecoratedClass(ChartAttribute, [{
	    key: "attached",
	    value: function attached() {
	      this.createChart();
	      this._isSetup = true;

	      if (this._isObserving) {
	        this.subscribeToChanges();
	      }
	    }
	  }, {
	    key: "detached",
	    value: function detached() {
	      if (this.shouldUpdate == true) {
	        this._modelObserver.unsubscribe();
	      }

	      this._activeChart.destroy();

	      this._isSetup = false;
	    }
	  }, {
	    key: "createChart",
	    value: function createChart() {
	      this._chartData = {
	        type: this.type,
	        data: this._clonedData,
	        options: this.nativeOptions
	      };

	      this._activeChart = new _chartJs2["default"](this.element, this._chartData);
	      this.refreshChart();
	    }
	  }, {
	    key: "subscribeToChanges",
	    value: function subscribeToChanges() {
	      this._modelObserver.throttle = this.throttle || 100;
	      this._modelObserver.observe(this.data, this.refreshChart);
	    }
	  }, {
	    key: "_isObserving",
	    get: function get() {
	      return this.shouldUpdate == true || this.shouldUpdate == "true";
	    }
	  }, {
	    key: "_clonedData",
	    get: function get() {
	      return JSON.parse(JSON.stringify(this.data));
	    }
	  }], null, _instanceInitializers);

	  var _ChartAttribute = ChartAttribute;
	  ChartAttribute = (0, _aureliaFramework.inject)(Element, _observersModelObserver.ModelObserver)(ChartAttribute) || ChartAttribute;
	  ChartAttribute = (0, _aureliaFramework.customAttribute)('chart')(ChartAttribute) || ChartAttribute;
	  return ChartAttribute;
	})();

	exports.ChartAttribute = ChartAttribute;

/***/ },
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === "function") { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError("The decorator for method " + descriptor.key + " is of the invalid type " + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

	var _aureliaFramework = __webpack_require__(18);

	var _observersModelObserver = __webpack_require__(17);

	var _chartJs = __webpack_require__(25);

	var _chartJs2 = _interopRequireDefault(_chartJs);

	var ChartElement = (function () {
	  var _instanceInitializers = {};
	  var _instanceInitializers = {};

	  _createDecoratedClass(ChartElement, [{
	    key: "type",
	    decorators: [_aureliaFramework.bindable],
	    initializer: null,
	    enumerable: true
	  }, {
	    key: "data",
	    decorators: [_aureliaFramework.bindable],
	    initializer: null,
	    enumerable: true
	  }, {
	    key: "shouldUpdate",
	    decorators: [_aureliaFramework.bindable],
	    initializer: null,
	    enumerable: true
	  }, {
	    key: "throttle",
	    decorators: [_aureliaFramework.bindable],
	    initializer: null,
	    enumerable: true
	  }, {
	    key: "nativeOptions",
	    decorators: [_aureliaFramework.bindable],
	    initializer: function initializer() {
	      return {};
	    },
	    enumerable: true
	  }, {
	    key: "canvasElement",
	    decorators: [_aureliaFramework.bindable],
	    initializer: null,
	    enumerable: true
	  }], null, _instanceInitializers);

	  function ChartElement(modelObserver) {
	    var _this = this;

	    _classCallCheck(this, _ChartElement);

	    _defineDecoratedPropertyDescriptor(this, "type", _instanceInitializers);

	    _defineDecoratedPropertyDescriptor(this, "data", _instanceInitializers);

	    _defineDecoratedPropertyDescriptor(this, "shouldUpdate", _instanceInitializers);

	    _defineDecoratedPropertyDescriptor(this, "throttle", _instanceInitializers);

	    _defineDecoratedPropertyDescriptor(this, "nativeOptions", _instanceInitializers);

	    _defineDecoratedPropertyDescriptor(this, "canvasElement", _instanceInitializers);

	    this._isSetup = false;

	    this.propertyChanged = function (propertyName, newValue, oldValue) {
	      if (_this._isSetup && _this._isObserving) {
	        _this.refreshChart();
	        _this._modelObserver.unsubscribe();
	        _this.subscribeToChanges();
	      }
	    };

	    this.refreshChart = function () {
	      _this._chartData.data = _this._clonedData;
	      _this._activeChart.update();
	      _this._activeChart.resize();
	    };

	    this._modelObserver = modelObserver;
	  }

	  _createDecoratedClass(ChartElement, [{
	    key: "attached",
	    value: function attached() {
	      this.createChart();
	      this._isSetup = true;

	      if (this._isObserving) {
	        this.subscribeToChanges();
	      }
	    }
	  }, {
	    key: "detached",
	    value: function detached() {
	      if (this._isObserving) {
	        this._modelObserver.unsubscribe();
	      }

	      this._activeChart.destroy();
	      this._isSetup = false;
	    }
	  }, {
	    key: "createChart",
	    value: function createChart() {
	      this._chartData = {
	        type: this.type,
	        data: this._clonedData,
	        options: this.nativeOptions
	      };

	      this._activeChart = new _chartJs2["default"](this.canvasElement, this._chartData);
	      this.refreshChart();
	    }
	  }, {
	    key: "subscribeToChanges",
	    value: function subscribeToChanges() {
	      this._modelObserver.throttle = this.throttle || 100;
	      this._modelObserver.observe(this.data.datasets, this.refreshChart);
	    }
	  }, {
	    key: "_isObserving",
	    get: function get() {
	      return this.shouldUpdate == true || this.shouldUpdate == "true";
	    }
	  }, {
	    key: "_clonedData",
	    get: function get() {
	      return JSON.parse(JSON.stringify(this.data));
	    }
	  }], null, _instanceInitializers);

	  var _ChartElement = ChartElement;
	  ChartElement = (0, _aureliaFramework.useView)("./chart-element.html")(ChartElement) || ChartElement;
	  ChartElement = (0, _aureliaFramework.inject)(_observersModelObserver.ModelObserver)(ChartElement) || ChartElement;
	  ChartElement = (0, _aureliaFramework.customElement)('chart')(ChartElement) || ChartElement;
	  return ChartElement;
	})();

	exports.ChartElement = ChartElement;

/***/ },
/* 172 */
/***/ function(module, exports) {

	module.exports = "<template>\r\n    <canvas ref=\"canvasElement\"></canvas>\r\n</template>";

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.EventAggregator = undefined;
	exports.includeEventsIn = includeEventsIn;
	exports.configure = configure;

	var _aureliaLogging = __webpack_require__(21);

	var LogManager = _interopRequireWildcard(_aureliaLogging);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }



	var logger = LogManager.getLogger('event-aggregator');

	var Handler = function () {
	  function Handler(messageType, callback) {
	    

	    this.messageType = messageType;
	    this.callback = callback;
	  }

	  Handler.prototype.handle = function handle(message) {
	    if (message instanceof this.messageType) {
	      this.callback.call(null, message);
	    }
	  };

	  return Handler;
	}();

	var EventAggregator = exports.EventAggregator = function () {
	  function EventAggregator() {
	    

	    this.eventLookup = {};
	    this.messageHandlers = [];
	  }

	  EventAggregator.prototype.publish = function publish(event, data) {
	    var subscribers = void 0;
	    var i = void 0;

	    if (!event) {
	      throw new Error('Event was invalid.');
	    }

	    if (typeof event === 'string') {
	      subscribers = this.eventLookup[event];
	      if (subscribers) {
	        subscribers = subscribers.slice();
	        i = subscribers.length;

	        try {
	          while (i--) {
	            subscribers[i](data, event);
	          }
	        } catch (e) {
	          logger.error(e);
	        }
	      }
	    } else {
	      subscribers = this.messageHandlers.slice();
	      i = subscribers.length;

	      try {
	        while (i--) {
	          subscribers[i].handle(event);
	        }
	      } catch (e) {
	        logger.error(e);
	      }
	    }
	  };

	  EventAggregator.prototype.subscribe = function subscribe(event, callback) {
	    var handler = void 0;
	    var subscribers = void 0;

	    if (!event) {
	      throw new Error('Event channel/type was invalid.');
	    }

	    if (typeof event === 'string') {
	      handler = callback;
	      subscribers = this.eventLookup[event] || (this.eventLookup[event] = []);
	    } else {
	      handler = new Handler(event, callback);
	      subscribers = this.messageHandlers;
	    }

	    subscribers.push(handler);

	    return {
	      dispose: function dispose() {
	        var idx = subscribers.indexOf(handler);
	        if (idx !== -1) {
	          subscribers.splice(idx, 1);
	        }
	      }
	    };
	  };

	  EventAggregator.prototype.subscribeOnce = function subscribeOnce(event, callback) {
	    var sub = this.subscribe(event, function (a, b) {
	      sub.dispose();
	      return callback(a, b);
	    });

	    return sub;
	  };

	  return EventAggregator;
	}();

	function includeEventsIn(obj) {
	  var ea = new EventAggregator();

	  obj.subscribeOnce = function (event, callback) {
	    return ea.subscribeOnce(event, callback);
	  };

	  obj.subscribe = function (event, callback) {
	    return ea.subscribe(event, callback);
	  };

	  obj.publish = function (event, data) {
	    ea.publish(event, data);
	  };

	  return ea;
	}

	function configure(config) {
	  config.instance(EventAggregator, includeEventsIn(config.aurelia));
	}

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Promise) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.json = json;



	function json(body) {
	  return new Blob([JSON.stringify(body)], { type: 'application/json' });
	}

	var HttpClientConfiguration = exports.HttpClientConfiguration = function () {
	  function HttpClientConfiguration() {
	    

	    this.baseUrl = '';
	    this.defaults = {};
	    this.interceptors = [];
	  }

	  HttpClientConfiguration.prototype.withBaseUrl = function withBaseUrl(baseUrl) {
	    this.baseUrl = baseUrl;
	    return this;
	  };

	  HttpClientConfiguration.prototype.withDefaults = function withDefaults(defaults) {
	    this.defaults = defaults;
	    return this;
	  };

	  HttpClientConfiguration.prototype.withInterceptor = function withInterceptor(interceptor) {
	    this.interceptors.push(interceptor);
	    return this;
	  };

	  HttpClientConfiguration.prototype.useStandardConfiguration = function useStandardConfiguration() {
	    var standardConfig = { credentials: 'same-origin' };
	    Object.assign(this.defaults, standardConfig, this.defaults);
	    return this.rejectErrorResponses();
	  };

	  HttpClientConfiguration.prototype.rejectErrorResponses = function rejectErrorResponses() {
	    return this.withInterceptor({ response: rejectOnError });
	  };

	  return HttpClientConfiguration;
	}();

	function rejectOnError(response) {
	  if (!response.ok) {
	    throw response;
	  }

	  return response;
	}

	var HttpClient = exports.HttpClient = function () {
	  function HttpClient() {
	    

	    this.activeRequestCount = 0;
	    this.isRequesting = false;
	    this.isConfigured = false;
	    this.baseUrl = '';
	    this.defaults = null;
	    this.interceptors = [];

	    if (typeof fetch === 'undefined') {
	      throw new Error('HttpClient requires a Fetch API implementation, but the current environment doesn\'t support it. You may need to load a polyfill such as https://github.com/github/fetch.');
	    }
	  }

	  HttpClient.prototype.configure = function configure(config) {
	    var _interceptors;

	    var normalizedConfig = void 0;

	    if ((typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object') {
	      normalizedConfig = { defaults: config };
	    } else if (typeof config === 'function') {
	      normalizedConfig = new HttpClientConfiguration();
	      var c = config(normalizedConfig);
	      if (HttpClientConfiguration.prototype.isPrototypeOf(c)) {
	        normalizedConfig = c;
	      }
	    } else {
	      throw new Error('invalid config');
	    }

	    var defaults = normalizedConfig.defaults;
	    if (defaults && Headers.prototype.isPrototypeOf(defaults.headers)) {
	      throw new Error('Default headers must be a plain object.');
	    }

	    this.baseUrl = normalizedConfig.baseUrl;
	    this.defaults = defaults;
	    (_interceptors = this.interceptors).push.apply(_interceptors, normalizedConfig.interceptors || []);
	    this.isConfigured = true;

	    return this;
	  };

	  HttpClient.prototype.fetch = function (_fetch) {
	    function fetch(_x, _x2) {
	      return _fetch.apply(this, arguments);
	    }

	    fetch.toString = function () {
	      return _fetch.toString();
	    };

	    return fetch;
	  }(function (input, init) {
	    var _this = this;

	    trackRequestStart.call(this);

	    var request = Promise.resolve().then(function () {
	      return buildRequest.call(_this, input, init, _this.defaults);
	    });
	    var promise = processRequest(request, this.interceptors).then(function (result) {
	      var response = null;

	      if (Response.prototype.isPrototypeOf(result)) {
	        response = result;
	      } else if (Request.prototype.isPrototypeOf(result)) {
	        request = Promise.resolve(result);
	        response = fetch(result);
	      } else {
	        throw new Error('An invalid result was returned by the interceptor chain. Expected a Request or Response instance, but got [' + result + ']');
	      }

	      return request.then(function (_request) {
	        return processResponse(response, _this.interceptors, _request);
	      });
	    });

	    return trackRequestEndWith.call(this, promise);
	  });

	  return HttpClient;
	}();

	var absoluteUrlRegexp = /^([a-z][a-z0-9+\-.]*:)?\/\//i;

	function trackRequestStart() {
	  this.isRequesting = !! ++this.activeRequestCount;
	}

	function trackRequestEnd() {
	  this.isRequesting = !! --this.activeRequestCount;
	}

	function trackRequestEndWith(promise) {
	  var handle = trackRequestEnd.bind(this);
	  promise.then(handle, handle);
	  return promise;
	}

	function parseHeaderValues(headers) {
	  var parsedHeaders = {};
	  for (var name in headers || {}) {
	    if (headers.hasOwnProperty(name)) {
	      parsedHeaders[name] = typeof headers[name] === 'function' ? headers[name]() : headers[name];
	    }
	  }
	  return parsedHeaders;
	}

	function buildRequest(input, init) {
	  var defaults = this.defaults || {};
	  var request = void 0;
	  var body = void 0;
	  var requestContentType = void 0;

	  var parsedDefaultHeaders = parseHeaderValues(defaults.headers);
	  if (Request.prototype.isPrototypeOf(input)) {
	    request = input;
	    requestContentType = new Headers(request.headers).get('Content-Type');
	  } else {
	    init || (init = {});
	    body = init.body;
	    var bodyObj = body ? { body: body } : null;
	    var requestInit = Object.assign({}, defaults, { headers: {} }, init, bodyObj);
	    requestContentType = new Headers(requestInit.headers).get('Content-Type');
	    request = new Request(getRequestUrl(this.baseUrl, input), requestInit);
	  }
	  if (!requestContentType && new Headers(parsedDefaultHeaders).has('content-type')) {
	    request.headers.set('Content-Type', new Headers(parsedDefaultHeaders).get('content-type'));
	  }
	  setDefaultHeaders(request.headers, parsedDefaultHeaders);
	  if (body && Blob.prototype.isPrototypeOf(body) && body.type) {
	    request.headers.set('Content-Type', body.type);
	  }
	  return request;
	}

	function getRequestUrl(baseUrl, url) {
	  if (absoluteUrlRegexp.test(url)) {
	    return url;
	  }

	  return (baseUrl || '') + url;
	}

	function setDefaultHeaders(headers, defaultHeaders) {
	  for (var name in defaultHeaders || {}) {
	    if (defaultHeaders.hasOwnProperty(name) && !headers.has(name)) {
	      headers.set(name, defaultHeaders[name]);
	    }
	  }
	}

	function processRequest(request, interceptors) {
	  return applyInterceptors(request, interceptors, 'request', 'requestError');
	}

	function processResponse(response, interceptors, request) {
	  return applyInterceptors(response, interceptors, 'response', 'responseError', request);
	}

	function applyInterceptors(input, interceptors, successName, errorName) {
	  for (var _len = arguments.length, interceptorArgs = Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
	    interceptorArgs[_key - 4] = arguments[_key];
	  }

	  return (interceptors || []).reduce(function (chain, interceptor) {
	    var successHandler = interceptor[successName];
	    var errorHandler = interceptor[errorName];

	    return chain.then(successHandler && function (value) {
	      return successHandler.call.apply(successHandler, [interceptor, value].concat(interceptorArgs));
	    } || identity, errorHandler && function (reason) {
	      return errorHandler.call.apply(errorHandler, [interceptor, reason].concat(interceptorArgs));
	    } || thrower);
	  }, Promise.resolve(input));
	}

	function identity(x) {
	  return x;
	}

	function thrower(x) {
	  throw x;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BrowserHistory = exports.DefaultLinkHandler = exports.LinkHandler = undefined;

	var _class, _temp;

	exports.configure = configure;

	var _aureliaPal = __webpack_require__(7);

	var _aureliaHistory = __webpack_require__(176);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



	var LinkHandler = exports.LinkHandler = function () {
	  function LinkHandler() {
	    
	  }

	  LinkHandler.prototype.activate = function activate(history) {};

	  LinkHandler.prototype.deactivate = function deactivate() {};

	  return LinkHandler;
	}();

	var DefaultLinkHandler = exports.DefaultLinkHandler = function (_LinkHandler) {
	  _inherits(DefaultLinkHandler, _LinkHandler);

	  function DefaultLinkHandler() {
	    

	    var _this = _possibleConstructorReturn(this, _LinkHandler.call(this));

	    _this.handler = function (e) {
	      var _DefaultLinkHandler$g = DefaultLinkHandler.getEventInfo(e);

	      var shouldHandleEvent = _DefaultLinkHandler$g.shouldHandleEvent;
	      var href = _DefaultLinkHandler$g.href;


	      if (shouldHandleEvent) {
	        e.preventDefault();
	        _this.history.navigate(href);
	      }
	    };
	    return _this;
	  }

	  DefaultLinkHandler.prototype.activate = function activate(history) {
	    if (history._hasPushState) {
	      this.history = history;
	      _aureliaPal.DOM.addEventListener('click', this.handler, true);
	    }
	  };

	  DefaultLinkHandler.prototype.deactivate = function deactivate() {
	    _aureliaPal.DOM.removeEventListener('click', this.handler);
	  };

	  DefaultLinkHandler.getEventInfo = function getEventInfo(event) {
	    var info = {
	      shouldHandleEvent: false,
	      href: null,
	      anchor: null
	    };

	    var target = DefaultLinkHandler.findClosestAnchor(event.target);
	    if (!target || !DefaultLinkHandler.targetIsThisWindow(target)) {
	      return info;
	    }

	    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
	      return info;
	    }

	    var href = target.getAttribute('href');
	    info.anchor = target;
	    info.href = href;

	    var leftButtonClicked = event.which === 1;
	    var isRelative = href && !(href.charAt(0) === '#' || /^[a-z]+:/i.test(href));

	    info.shouldHandleEvent = leftButtonClicked && isRelative;
	    return info;
	  };

	  DefaultLinkHandler.findClosestAnchor = function findClosestAnchor(el) {
	    while (el) {
	      if (el.tagName === 'A') {
	        return el;
	      }

	      el = el.parentNode;
	    }
	  };

	  DefaultLinkHandler.targetIsThisWindow = function targetIsThisWindow(target) {
	    var targetWindow = target.getAttribute('target');
	    var win = _aureliaPal.PLATFORM.global;

	    return !targetWindow || targetWindow === win.name || targetWindow === '_self' || targetWindow === 'top' && win === win.top;
	  };

	  return DefaultLinkHandler;
	}(LinkHandler);

	function configure(config) {
	  config.singleton(_aureliaHistory.History, BrowserHistory);
	  config.transient(LinkHandler, DefaultLinkHandler);
	}

	var BrowserHistory = exports.BrowserHistory = (_temp = _class = function (_History) {
	  _inherits(BrowserHistory, _History);

	  function BrowserHistory(linkHandler) {
	    

	    var _this2 = _possibleConstructorReturn(this, _History.call(this));

	    _this2._isActive = false;
	    _this2._checkUrlCallback = _this2._checkUrl.bind(_this2);

	    _this2.location = _aureliaPal.PLATFORM.location;
	    _this2.history = _aureliaPal.PLATFORM.history;
	    _this2.linkHandler = linkHandler;
	    return _this2;
	  }

	  BrowserHistory.prototype.activate = function activate(options) {
	    if (this._isActive) {
	      throw new Error('History has already been activated.');
	    }

	    var wantsPushState = !!options.pushState;

	    this._isActive = true;
	    this.options = Object.assign({}, { root: '/' }, this.options, options);

	    this.root = ('/' + this.options.root + '/').replace(rootStripper, '/');

	    this._wantsHashChange = this.options.hashChange !== false;
	    this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);

	    var eventName = void 0;
	    if (this._hasPushState) {
	      eventName = 'popstate';
	    } else if (this._wantsHashChange) {
	      eventName = 'hashchange';
	    }

	    _aureliaPal.PLATFORM.addEventListener(eventName, this._checkUrlCallback);

	    if (this._wantsHashChange && wantsPushState) {
	      var loc = this.location;
	      var atRoot = loc.pathname.replace(/[^\/]$/, '$&/') === this.root;

	      if (!this._hasPushState && !atRoot) {
	        this.fragment = this._getFragment(null, true);
	        this.location.replace(this.root + this.location.search + '#' + this.fragment);

	        return true;
	      } else if (this._hasPushState && atRoot && loc.hash) {
	          this.fragment = this._getHash().replace(routeStripper, '');
	          this.history.replaceState({}, _aureliaPal.DOM.title, this.root + this.fragment + loc.search);
	        }
	    }

	    if (!this.fragment) {
	      this.fragment = this._getFragment();
	    }

	    this.linkHandler.activate(this);

	    if (!this.options.silent) {
	      return this._loadUrl();
	    }
	  };

	  BrowserHistory.prototype.deactivate = function deactivate() {
	    _aureliaPal.PLATFORM.removeEventListener('popstate', this._checkUrlCallback);
	    _aureliaPal.PLATFORM.removeEventListener('hashchange', this._checkUrlCallback);
	    this._isActive = false;
	    this.linkHandler.deactivate();
	  };

	  BrowserHistory.prototype.getAbsoluteRoot = function getAbsoluteRoot() {
	    var origin = createOrigin(this.location.protocol, this.location.hostname, this.location.port);
	    return '' + origin + this.root;
	  };

	  BrowserHistory.prototype.navigate = function navigate(fragment) {
	    var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var _ref$trigger = _ref.trigger;
	    var trigger = _ref$trigger === undefined ? true : _ref$trigger;
	    var _ref$replace = _ref.replace;
	    var replace = _ref$replace === undefined ? false : _ref$replace;

	    if (fragment && absoluteUrl.test(fragment)) {
	      this.location.href = fragment;
	      return true;
	    }

	    if (!this._isActive) {
	      return false;
	    }

	    fragment = this._getFragment(fragment || '');

	    if (this.fragment === fragment && !replace) {
	      return false;
	    }

	    this.fragment = fragment;

	    var url = this.root + fragment;

	    if (fragment === '' && url !== '/') {
	      url = url.slice(0, -1);
	    }

	    if (this._hasPushState) {
	      url = url.replace('//', '/');
	      this.history[replace ? 'replaceState' : 'pushState']({}, _aureliaPal.DOM.title, url);
	    } else if (this._wantsHashChange) {
	      updateHash(this.location, fragment, replace);
	    } else {
	      return this.location.assign(url);
	    }

	    if (trigger) {
	      return this._loadUrl(fragment);
	    }
	  };

	  BrowserHistory.prototype.navigateBack = function navigateBack() {
	    this.history.back();
	  };

	  BrowserHistory.prototype.setTitle = function setTitle(title) {
	    _aureliaPal.DOM.title = title;
	  };

	  BrowserHistory.prototype._getHash = function _getHash() {
	    return this.location.hash.substr(1);
	  };

	  BrowserHistory.prototype._getFragment = function _getFragment(fragment, forcePushState) {
	    var root = void 0;

	    if (!fragment) {
	      if (this._hasPushState || !this._wantsHashChange || forcePushState) {
	        fragment = this.location.pathname + this.location.search;
	        root = this.root.replace(trailingSlash, '');
	        if (!fragment.indexOf(root)) {
	          fragment = fragment.substr(root.length);
	        }
	      } else {
	        fragment = this._getHash();
	      }
	    }

	    return '/' + fragment.replace(routeStripper, '');
	  };

	  BrowserHistory.prototype._checkUrl = function _checkUrl() {
	    var current = this._getFragment();
	    if (current !== this.fragment) {
	      this._loadUrl();
	    }
	  };

	  BrowserHistory.prototype._loadUrl = function _loadUrl(fragmentOverride) {
	    var fragment = this.fragment = this._getFragment(fragmentOverride);

	    return this.options.routeHandler ? this.options.routeHandler(fragment) : false;
	  };

	  return BrowserHistory;
	}(_aureliaHistory.History), _class.inject = [LinkHandler], _temp);

	var routeStripper = /^#?\/*|\s+$/g;

	var rootStripper = /^\/+|\/+$/g;

	var trailingSlash = /\/$/;

	var absoluteUrl = /^([a-z][a-z0-9+\-.]*:)?\/\//i;

	function updateHash(location, fragment, replace) {
	  if (replace) {
	    var _href = location.href.replace(/(javascript:|#).*$/, '');
	    location.replace(_href + '#' + fragment);
	  } else {
	    location.hash = '#' + fragment;
	  }
	}

	function createOrigin(protocol, hostname, port) {
	  return protocol + '//' + hostname + (port ? ':' + port : '');
	}

/***/ },
/* 176 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});



	function mi(name) {
	  throw new Error('History must implement ' + name + '().');
	}

	var History = exports.History = function () {
	  function History() {
	    
	  }

	  History.prototype.activate = function activate(options) {
	    mi('activate');
	  };

	  History.prototype.deactivate = function deactivate() {
	    mi('deactivate');
	  };

	  History.prototype.getAbsoluteRoot = function getAbsoluteRoot() {
	    mi('getAbsoluteRoot');
	  };

	  History.prototype.navigate = function navigate(fragment, options) {
	    mi('navigate');
	  };

	  History.prototype.navigateBack = function navigateBack() {
	    mi('navigateBack');
	  };

	  History.prototype.setTitle = function setTitle(title) {
	    mi('setTitle');
	  };

	  return History;
	}();

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ConsoleAppender = undefined;

	var _aureliaLogging = __webpack_require__(21);



	var ConsoleAppender = exports.ConsoleAppender = function () {
	  function ConsoleAppender() {
	    
	  }

	  ConsoleAppender.prototype.debug = function debug(logger) {
	    var _console;

	    for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      rest[_key - 1] = arguments[_key];
	    }

	    (_console = console).debug.apply(_console, ['DEBUG [' + logger.id + ']'].concat(rest));
	  };

	  ConsoleAppender.prototype.info = function info(logger) {
	    var _console2;

	    for (var _len2 = arguments.length, rest = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	      rest[_key2 - 1] = arguments[_key2];
	    }

	    (_console2 = console).info.apply(_console2, ['INFO [' + logger.id + ']'].concat(rest));
	  };

	  ConsoleAppender.prototype.warn = function warn(logger) {
	    var _console3;

	    for (var _len3 = arguments.length, rest = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	      rest[_key3 - 1] = arguments[_key3];
	    }

	    (_console3 = console).warn.apply(_console3, ['WARN [' + logger.id + ']'].concat(rest));
	  };

	  ConsoleAppender.prototype.error = function error(logger) {
	    var _console4;

	    for (var _len4 = arguments.length, rest = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
	      rest[_key4 - 1] = arguments[_key4];
	    }

	    (_console4 = console).error.apply(_console4, ['ERROR [' + logger.id + ']'].concat(rest));
	  };

	  return ConsoleAppender;
	}();

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.RouteRecognizer = exports.EpsilonSegment = exports.StarSegment = exports.DynamicSegment = exports.StaticSegment = exports.State = undefined;

	var _aureliaPath = __webpack_require__(12);



	var State = exports.State = function () {
	  function State(charSpec) {
	    

	    this.charSpec = charSpec;
	    this.nextStates = [];
	  }

	  State.prototype.get = function get(charSpec) {
	    for (var _iterator = this.nextStates, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	      var _ref;

	      if (_isArray) {
	        if (_i >= _iterator.length) break;
	        _ref = _iterator[_i++];
	      } else {
	        _i = _iterator.next();
	        if (_i.done) break;
	        _ref = _i.value;
	      }

	      var child = _ref;

	      var isEqual = child.charSpec.validChars === charSpec.validChars && child.charSpec.invalidChars === charSpec.invalidChars;

	      if (isEqual) {
	        return child;
	      }
	    }

	    return undefined;
	  };

	  State.prototype.put = function put(charSpec) {
	    var state = this.get(charSpec);

	    if (state) {
	      return state;
	    }

	    state = new State(charSpec);

	    this.nextStates.push(state);

	    if (charSpec.repeat) {
	      state.nextStates.push(state);
	    }

	    return state;
	  };

	  State.prototype.match = function match(ch) {
	    var nextStates = this.nextStates;
	    var results = [];

	    for (var i = 0, l = nextStates.length; i < l; i++) {
	      var child = nextStates[i];
	      var charSpec = child.charSpec;

	      if (charSpec.validChars !== undefined) {
	        if (charSpec.validChars.indexOf(ch) !== -1) {
	          results.push(child);
	        }
	      } else if (charSpec.invalidChars !== undefined) {
	        if (charSpec.invalidChars.indexOf(ch) === -1) {
	          results.push(child);
	        }
	      }
	    }

	    return results;
	  };

	  return State;
	}();

	var specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];

	var escapeRegex = new RegExp('(\\' + specials.join('|\\') + ')', 'g');

	var StaticSegment = exports.StaticSegment = function () {
	  function StaticSegment(string, caseSensitive) {
	    

	    this.string = string;
	    this.caseSensitive = caseSensitive;
	  }

	  StaticSegment.prototype.eachChar = function eachChar(callback) {
	    var s = this.string;
	    for (var i = 0, ii = s.length; i < ii; ++i) {
	      var ch = s[i];
	      callback({ validChars: this.caseSensitive ? ch : ch.toUpperCase() + ch.toLowerCase() });
	    }
	  };

	  StaticSegment.prototype.regex = function regex() {
	    return this.string.replace(escapeRegex, '\\$1');
	  };

	  StaticSegment.prototype.generate = function generate() {
	    return this.string;
	  };

	  return StaticSegment;
	}();

	var DynamicSegment = exports.DynamicSegment = function () {
	  function DynamicSegment(name) {
	    

	    this.name = name;
	  }

	  DynamicSegment.prototype.eachChar = function eachChar(callback) {
	    callback({ invalidChars: '/', repeat: true });
	  };

	  DynamicSegment.prototype.regex = function regex() {
	    return '([^/]+)';
	  };

	  DynamicSegment.prototype.generate = function generate(params, consumed) {
	    consumed[this.name] = true;
	    return params[this.name];
	  };

	  return DynamicSegment;
	}();

	var StarSegment = exports.StarSegment = function () {
	  function StarSegment(name) {
	    

	    this.name = name;
	  }

	  StarSegment.prototype.eachChar = function eachChar(callback) {
	    callback({ invalidChars: '', repeat: true });
	  };

	  StarSegment.prototype.regex = function regex() {
	    return '(.+)';
	  };

	  StarSegment.prototype.generate = function generate(params, consumed) {
	    consumed[this.name] = true;
	    return params[this.name];
	  };

	  return StarSegment;
	}();

	var EpsilonSegment = exports.EpsilonSegment = function () {
	  function EpsilonSegment() {
	    
	  }

	  EpsilonSegment.prototype.eachChar = function eachChar() {};

	  EpsilonSegment.prototype.regex = function regex() {
	    return '';
	  };

	  EpsilonSegment.prototype.generate = function generate() {
	    return '';
	  };

	  return EpsilonSegment;
	}();

	var RouteRecognizer = exports.RouteRecognizer = function () {
	  function RouteRecognizer() {
	    

	    this.rootState = new State();
	    this.names = {};
	  }

	  RouteRecognizer.prototype.add = function add(route) {
	    var _this = this;

	    if (Array.isArray(route)) {
	      route.forEach(function (r) {
	        return _this.add(r);
	      });
	      return undefined;
	    }

	    var currentState = this.rootState;
	    var regex = '^';
	    var types = { statics: 0, dynamics: 0, stars: 0 };
	    var names = [];
	    var routeName = route.handler.name;
	    var isEmpty = true;
	    var segments = parse(route.path, names, types, route.caseSensitive);

	    for (var i = 0, ii = segments.length; i < ii; i++) {
	      var segment = segments[i];
	      if (segment instanceof EpsilonSegment) {
	        continue;
	      }

	      isEmpty = false;

	      currentState = currentState.put({ validChars: '/' });
	      regex += '/';

	      currentState = addSegment(currentState, segment);
	      regex += segment.regex();
	    }

	    if (isEmpty) {
	      currentState = currentState.put({ validChars: '/' });
	      regex += '/';
	    }

	    var handlers = [{ handler: route.handler, names: names }];

	    if (routeName) {
	      var routeNames = Array.isArray(routeName) ? routeName : [routeName];
	      for (var _i2 = 0; _i2 < routeNames.length; _i2++) {
	        this.names[routeNames[_i2]] = {
	          segments: segments,
	          handlers: handlers
	        };
	      }
	    }

	    currentState.handlers = handlers;
	    currentState.regex = new RegExp(regex + '$', route.caseSensitive ? '' : 'i');
	    currentState.types = types;

	    return currentState;
	  };

	  RouteRecognizer.prototype.handlersFor = function handlersFor(name) {
	    var route = this.names[name];
	    if (!route) {
	      throw new Error('There is no route named ' + name);
	    }

	    return [].concat(route.handlers);
	  };

	  RouteRecognizer.prototype.hasRoute = function hasRoute(name) {
	    return !!this.names[name];
	  };

	  RouteRecognizer.prototype.generate = function generate(name, params) {
	    var route = this.names[name];
	    if (!route) {
	      throw new Error('There is no route named ' + name);
	    }

	    var handler = route.handlers[0].handler;
	    if (handler.href) {
	      return handler.href;
	    }

	    var routeParams = Object.assign({}, params);
	    var segments = route.segments;
	    var consumed = {};
	    var output = '';

	    for (var i = 0, l = segments.length; i < l; i++) {
	      var segment = segments[i];

	      if (segment instanceof EpsilonSegment) {
	        continue;
	      }

	      output += '/';
	      var segmentValue = segment.generate(routeParams, consumed);
	      if (segmentValue === null || segmentValue === undefined) {
	        throw new Error('A value is required for route parameter \'' + segment.name + '\' in route \'' + name + '\'.');
	      }

	      output += segmentValue;
	    }

	    if (output.charAt(0) !== '/') {
	      output = '/' + output;
	    }

	    for (var param in consumed) {
	      delete routeParams[param];
	    }

	    var queryString = (0, _aureliaPath.buildQueryString)(routeParams);
	    output += queryString ? '?' + queryString : '';

	    return output;
	  };

	  RouteRecognizer.prototype.recognize = function recognize(path) {
	    var states = [this.rootState];
	    var queryParams = {};
	    var isSlashDropped = false;
	    var normalizedPath = path;

	    var queryStart = normalizedPath.indexOf('?');
	    if (queryStart !== -1) {
	      var queryString = normalizedPath.substr(queryStart + 1, normalizedPath.length);
	      normalizedPath = normalizedPath.substr(0, queryStart);
	      queryParams = (0, _aureliaPath.parseQueryString)(queryString);
	    }

	    normalizedPath = decodeURI(normalizedPath);

	    if (normalizedPath.charAt(0) !== '/') {
	      normalizedPath = '/' + normalizedPath;
	    }

	    var pathLen = normalizedPath.length;
	    if (pathLen > 1 && normalizedPath.charAt(pathLen - 1) === '/') {
	      normalizedPath = normalizedPath.substr(0, pathLen - 1);
	      isSlashDropped = true;
	    }

	    for (var i = 0, l = normalizedPath.length; i < l; i++) {
	      states = recognizeChar(states, normalizedPath.charAt(i));
	      if (!states.length) {
	        break;
	      }
	    }

	    var solutions = [];
	    for (var _i3 = 0, _l = states.length; _i3 < _l; _i3++) {
	      if (states[_i3].handlers) {
	        solutions.push(states[_i3]);
	      }
	    }

	    states = sortSolutions(solutions);

	    var state = solutions[0];
	    if (state && state.handlers) {
	      if (isSlashDropped && state.regex.source.slice(-5) === '(.+)$') {
	        normalizedPath = normalizedPath + '/';
	      }

	      return findHandler(state, normalizedPath, queryParams);
	    }

	    return undefined;
	  };

	  return RouteRecognizer;
	}();

	var RecognizeResults = function RecognizeResults(queryParams) {
	  

	  this.splice = Array.prototype.splice;
	  this.slice = Array.prototype.slice;
	  this.push = Array.prototype.push;
	  this.length = 0;
	  this.queryParams = queryParams || {};
	};

	function parse(route, names, types, caseSensitive) {
	  var normalizedRoute = route;
	  if (route.charAt(0) === '/') {
	    normalizedRoute = route.substr(1);
	  }

	  var results = [];

	  var splitRoute = normalizedRoute.split('/');
	  for (var i = 0, ii = splitRoute.length; i < ii; ++i) {
	    var segment = splitRoute[i];
	    var match = segment.match(/^:([^\/]+)$/);
	    if (match) {
	      results.push(new DynamicSegment(match[1]));
	      names.push(match[1]);
	      types.dynamics++;
	      continue;
	    }

	    match = segment.match(/^\*([^\/]+)$/);
	    if (match) {
	      results.push(new StarSegment(match[1]));
	      names.push(match[1]);
	      types.stars++;
	    } else if (segment === '') {
	      results.push(new EpsilonSegment());
	    } else {
	      results.push(new StaticSegment(segment, caseSensitive));
	      types.statics++;
	    }
	  }

	  return results;
	}

	function sortSolutions(states) {
	  return states.sort(function (a, b) {
	    if (a.types.stars !== b.types.stars) {
	      return a.types.stars - b.types.stars;
	    }

	    if (a.types.stars) {
	      if (a.types.statics !== b.types.statics) {
	        return b.types.statics - a.types.statics;
	      }
	      if (a.types.dynamics !== b.types.dynamics) {
	        return b.types.dynamics - a.types.dynamics;
	      }
	    }

	    if (a.types.dynamics !== b.types.dynamics) {
	      return a.types.dynamics - b.types.dynamics;
	    }

	    if (a.types.statics !== b.types.statics) {
	      return b.types.statics - a.types.statics;
	    }

	    return 0;
	  });
	}

	function recognizeChar(states, ch) {
	  var nextStates = [];

	  for (var i = 0, l = states.length; i < l; i++) {
	    var state = states[i];
	    nextStates.push.apply(nextStates, state.match(ch));
	  }

	  return nextStates;
	}

	function findHandler(state, path, queryParams) {
	  var handlers = state.handlers;
	  var regex = state.regex;
	  var captures = path.match(regex);
	  var currentCapture = 1;
	  var result = new RecognizeResults(queryParams);

	  for (var i = 0, l = handlers.length; i < l; i++) {
	    var _handler = handlers[i];
	    var _names = _handler.names;
	    var _params = {};

	    for (var j = 0, m = _names.length; j < m; j++) {
	      _params[_names[j]] = captures[currentCapture++];
	    }

	    result.push({ handler: _handler.handler, params: _params, isDynamic: !!_names.length });
	  }

	  return result;
	}

	function addSegment(currentState, segment) {
	  var state = currentState;
	  segment.eachChar(function (ch) {
	    state = state.put(ch);
	  });

	  return state;
	}

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Promise) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.AppRouter = exports.PipelineProvider = exports.LoadRouteStep = exports.RouteLoader = exports.ActivateNextStep = exports.DeactivatePreviousStep = exports.CanActivateNextStep = exports.CanDeactivatePreviousStep = exports.Router = exports.BuildNavigationPlanStep = exports.activationStrategy = exports.RouterConfiguration = exports.RedirectToRoute = exports.Redirect = exports.NavModel = exports.NavigationInstruction = exports.CommitChangesStep = exports.Pipeline = exports.pipelineStatus = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports._normalizeAbsolutePath = _normalizeAbsolutePath;
	exports._createRootedPath = _createRootedPath;
	exports._resolveUrl = _resolveUrl;
	exports.isNavigationCommand = isNavigationCommand;
	exports._buildNavigationPlan = _buildNavigationPlan;

	var _aureliaLogging = __webpack_require__(21);

	var LogManager = _interopRequireWildcard(_aureliaLogging);

	var _aureliaRouteRecognizer = __webpack_require__(178);

	var _aureliaDependencyInjection = __webpack_require__(19);

	var _aureliaHistory = __webpack_require__(176);

	var _aureliaEventAggregator = __webpack_require__(173);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



	function _normalizeAbsolutePath(path, hasPushState) {
	  var absolute = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

	  if (!hasPushState && path[0] !== '#') {
	    path = '#' + path;
	  }

	  if (hasPushState && absolute) {
	    path = path.substring(1, path.length);
	  }

	  return path;
	}

	function _createRootedPath(fragment, baseUrl, hasPushState, absolute) {
	  if (isAbsoluteUrl.test(fragment)) {
	    return fragment;
	  }

	  var path = '';

	  if (baseUrl.length && baseUrl[0] !== '/') {
	    path += '/';
	  }

	  path += baseUrl;

	  if ((!path.length || path[path.length - 1] !== '/') && fragment[0] !== '/') {
	    path += '/';
	  }

	  if (path.length && path[path.length - 1] === '/' && fragment[0] === '/') {
	    path = path.substring(0, path.length - 1);
	  }

	  return _normalizeAbsolutePath(path + fragment, hasPushState, absolute);
	}

	function _resolveUrl(fragment, baseUrl, hasPushState) {
	  if (isRootedPath.test(fragment)) {
	    return _normalizeAbsolutePath(fragment, hasPushState);
	  }

	  return _createRootedPath(fragment, baseUrl, hasPushState);
	}

	var isRootedPath = /^#?\//;
	var isAbsoluteUrl = /^([a-z][a-z0-9+\-.]*:)?\/\//i;

	var pipelineStatus = exports.pipelineStatus = {
	  completed: 'completed',
	  canceled: 'canceled',
	  rejected: 'rejected',
	  running: 'running'
	};

	var Pipeline = exports.Pipeline = function () {
	  function Pipeline() {
	    

	    this.steps = [];
	  }

	  Pipeline.prototype.addStep = function addStep(step) {
	    var run = void 0;

	    if (typeof step === 'function') {
	      run = step;
	    } else if (typeof step.getSteps === 'function') {
	      var steps = step.getSteps();
	      for (var i = 0, l = steps.length; i < l; i++) {
	        this.addStep(steps[i]);
	      }

	      return this;
	    } else {
	      run = step.run.bind(step);
	    }

	    this.steps.push(run);

	    return this;
	  };

	  Pipeline.prototype.run = function run(instruction) {
	    var index = -1;
	    var steps = this.steps;

	    function next() {
	      index++;

	      if (index < steps.length) {
	        var currentStep = steps[index];

	        try {
	          return currentStep(instruction, next);
	        } catch (e) {
	          return next.reject(e);
	        }
	      } else {
	        return next.complete();
	      }
	    }

	    next.complete = createCompletionHandler(next, pipelineStatus.completed);
	    next.cancel = createCompletionHandler(next, pipelineStatus.canceled);
	    next.reject = createCompletionHandler(next, pipelineStatus.rejected);

	    return next();
	  };

	  return Pipeline;
	}();

	function createCompletionHandler(next, status) {
	  return function (output) {
	    return Promise.resolve({ status: status, output: output, completed: status === pipelineStatus.completed });
	  };
	}

	var CommitChangesStep = exports.CommitChangesStep = function () {
	  function CommitChangesStep() {
	    
	  }

	  CommitChangesStep.prototype.run = function run(navigationInstruction, next) {
	    return navigationInstruction._commitChanges(true).then(function () {
	      navigationInstruction._updateTitle();
	      return next();
	    });
	  };

	  return CommitChangesStep;
	}();

	var NavigationInstruction = exports.NavigationInstruction = function () {
	  function NavigationInstruction(init) {
	    

	    this.plan = null;
	    this.options = {};

	    Object.assign(this, init);

	    this.params = this.params || {};
	    this.viewPortInstructions = {};

	    var ancestorParams = [];
	    var current = this;
	    do {
	      var currentParams = Object.assign({}, current.params);
	      if (current.config && current.config.hasChildRouter) {
	        delete currentParams[current.getWildCardName()];
	      }

	      ancestorParams.unshift(currentParams);
	      current = current.parentInstruction;
	    } while (current);

	    var allParams = Object.assign.apply(Object, [{}, this.queryParams].concat(ancestorParams));
	    this.lifecycleArgs = [allParams, this.config, this];
	  }

	  NavigationInstruction.prototype.getAllInstructions = function getAllInstructions() {
	    var instructions = [this];
	    for (var key in this.viewPortInstructions) {
	      var childInstruction = this.viewPortInstructions[key].childNavigationInstruction;
	      if (childInstruction) {
	        instructions.push.apply(instructions, childInstruction.getAllInstructions());
	      }
	    }

	    return instructions;
	  };

	  NavigationInstruction.prototype.getAllPreviousInstructions = function getAllPreviousInstructions() {
	    return this.getAllInstructions().map(function (c) {
	      return c.previousInstruction;
	    }).filter(function (c) {
	      return c;
	    });
	  };

	  NavigationInstruction.prototype.addViewPortInstruction = function addViewPortInstruction(viewPortName, strategy, moduleId, component) {
	    var viewportInstruction = this.viewPortInstructions[viewPortName] = {
	      name: viewPortName,
	      strategy: strategy,
	      moduleId: moduleId,
	      component: component,
	      childRouter: component.childRouter,
	      lifecycleArgs: this.lifecycleArgs.slice()
	    };

	    return viewportInstruction;
	  };

	  NavigationInstruction.prototype.getWildCardName = function getWildCardName() {
	    var wildcardIndex = this.config.route.lastIndexOf('*');
	    return this.config.route.substr(wildcardIndex + 1);
	  };

	  NavigationInstruction.prototype.getWildcardPath = function getWildcardPath() {
	    var wildcardName = this.getWildCardName();
	    var path = this.params[wildcardName] || '';

	    if (this.queryString) {
	      path += '?' + this.queryString;
	    }

	    return path;
	  };

	  NavigationInstruction.prototype.getBaseUrl = function getBaseUrl() {
	    if (!this.params) {
	      return this.fragment;
	    }

	    var wildcardName = this.getWildCardName();
	    var path = this.params[wildcardName] || '';

	    if (!path) {
	      return this.fragment;
	    }

	    path = encodeURI(path);
	    return this.fragment.substr(0, this.fragment.lastIndexOf(path));
	  };

	  NavigationInstruction.prototype._commitChanges = function _commitChanges(waitToSwap) {
	    var _this = this;

	    var router = this.router;
	    router.currentInstruction = this;

	    if (this.previousInstruction) {
	      this.previousInstruction.config.navModel.isActive = false;
	    }

	    this.config.navModel.isActive = true;

	    router._refreshBaseUrl();
	    router.refreshNavigation();

	    var loads = [];
	    var delaySwaps = [];

	    var _loop = function _loop(viewPortName) {
	      var viewPortInstruction = _this.viewPortInstructions[viewPortName];
	      var viewPort = router.viewPorts[viewPortName];

	      if (!viewPort) {
	        throw new Error('There was no router-view found in the view for ' + viewPortInstruction.moduleId + '.');
	      }

	      if (viewPortInstruction.strategy === activationStrategy.replace) {
	        if (waitToSwap) {
	          delaySwaps.push({ viewPort: viewPort, viewPortInstruction: viewPortInstruction });
	        }

	        loads.push(viewPort.process(viewPortInstruction, waitToSwap).then(function (x) {
	          if (viewPortInstruction.childNavigationInstruction) {
	            return viewPortInstruction.childNavigationInstruction._commitChanges();
	          }

	          return undefined;
	        }));
	      } else {
	        if (viewPortInstruction.childNavigationInstruction) {
	          loads.push(viewPortInstruction.childNavigationInstruction._commitChanges(waitToSwap));
	        }
	      }
	    };

	    for (var viewPortName in this.viewPortInstructions) {
	      _loop(viewPortName);
	    }

	    return Promise.all(loads).then(function () {
	      delaySwaps.forEach(function (x) {
	        return x.viewPort.swap(x.viewPortInstruction);
	      });
	      return null;
	    }).then(function () {
	      return prune(_this);
	    });
	  };

	  NavigationInstruction.prototype._updateTitle = function _updateTitle() {
	    var title = this._buildTitle();
	    if (title) {
	      this.router.history.setTitle(title);
	    }
	  };

	  NavigationInstruction.prototype._buildTitle = function _buildTitle() {
	    var separator = arguments.length <= 0 || arguments[0] === undefined ? ' | ' : arguments[0];

	    var title = this.config.navModel.title || '';
	    var childTitles = [];

	    for (var viewPortName in this.viewPortInstructions) {
	      var _viewPortInstruction = this.viewPortInstructions[viewPortName];

	      if (_viewPortInstruction.childNavigationInstruction) {
	        var childTitle = _viewPortInstruction.childNavigationInstruction._buildTitle(separator);
	        if (childTitle) {
	          childTitles.push(childTitle);
	        }
	      }
	    }

	    if (childTitles.length) {
	      title = childTitles.join(separator) + (title ? separator : '') + title;
	    }

	    if (this.router.title) {
	      title += (title ? separator : '') + this.router.title;
	    }

	    return title;
	  };

	  return NavigationInstruction;
	}();

	function prune(instruction) {
	  instruction.previousInstruction = null;
	  instruction.plan = null;
	}

	var NavModel = exports.NavModel = function () {
	  function NavModel(router, relativeHref) {
	    

	    this.isActive = false;
	    this.title = null;
	    this.href = null;
	    this.relativeHref = null;
	    this.settings = {};
	    this.config = null;

	    this.router = router;
	    this.relativeHref = relativeHref;
	  }

	  NavModel.prototype.setTitle = function setTitle(title) {
	    this.title = title;

	    if (this.isActive) {
	      this.router.updateTitle();
	    }
	  };

	  return NavModel;
	}();

	function isNavigationCommand(obj) {
	  return obj && typeof obj.navigate === 'function';
	}

	var Redirect = exports.Redirect = function () {
	  function Redirect(url) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    

	    this.url = url;
	    this.options = Object.assign({ trigger: true, replace: true }, options);
	    this.shouldContinueProcessing = false;
	  }

	  Redirect.prototype.setRouter = function setRouter(router) {
	    this.router = router;
	  };

	  Redirect.prototype.navigate = function navigate(appRouter) {
	    var navigatingRouter = this.options.useAppRouter ? appRouter : this.router || appRouter;
	    navigatingRouter.navigate(this.url, this.options);
	  };

	  return Redirect;
	}();

	var RedirectToRoute = exports.RedirectToRoute = function () {
	  function RedirectToRoute(route) {
	    var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	    var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	    

	    this.route = route;
	    this.params = params;
	    this.options = Object.assign({ trigger: true, replace: true }, options);
	    this.shouldContinueProcessing = false;
	  }

	  RedirectToRoute.prototype.setRouter = function setRouter(router) {
	    this.router = router;
	  };

	  RedirectToRoute.prototype.navigate = function navigate(appRouter) {
	    var navigatingRouter = this.options.useAppRouter ? appRouter : this.router || appRouter;
	    navigatingRouter.navigateToRoute(this.route, this.params, this.options);
	  };

	  return RedirectToRoute;
	}();

	var RouterConfiguration = exports.RouterConfiguration = function () {
	  function RouterConfiguration() {
	    

	    this.instructions = [];
	    this.options = {};
	    this.pipelineSteps = [];
	  }

	  RouterConfiguration.prototype.addPipelineStep = function addPipelineStep(name, step) {
	    this.pipelineSteps.push({ name: name, step: step });
	    return this;
	  };

	  RouterConfiguration.prototype.addAuthorizeStep = function addAuthorizeStep(step) {
	    return this.addPipelineStep('authorize', step);
	  };

	  RouterConfiguration.prototype.addPreActivateStep = function addPreActivateStep(step) {
	    return this.addPipelineStep('preActivate', step);
	  };

	  RouterConfiguration.prototype.addPreRenderStep = function addPreRenderStep(step) {
	    return this.addPipelineStep('preRender', step);
	  };

	  RouterConfiguration.prototype.addPostRenderStep = function addPostRenderStep(step) {
	    return this.addPipelineStep('postRender', step);
	  };

	  RouterConfiguration.prototype.map = function map(route) {
	    if (Array.isArray(route)) {
	      route.forEach(this.map.bind(this));
	      return this;
	    }

	    return this.mapRoute(route);
	  };

	  RouterConfiguration.prototype.mapRoute = function mapRoute(config) {
	    this.instructions.push(function (router) {
	      var routeConfigs = [];

	      if (Array.isArray(config.route)) {
	        for (var i = 0, ii = config.route.length; i < ii; ++i) {
	          var current = Object.assign({}, config);
	          current.route = config.route[i];
	          routeConfigs.push(current);
	        }
	      } else {
	        routeConfigs.push(Object.assign({}, config));
	      }

	      var navModel = void 0;
	      for (var _i = 0, _ii = routeConfigs.length; _i < _ii; ++_i) {
	        var routeConfig = routeConfigs[_i];
	        routeConfig.settings = routeConfig.settings || {};
	        if (!navModel) {
	          navModel = router.createNavModel(routeConfig);
	        }

	        router.addRoute(routeConfig, navModel);
	      }
	    });

	    return this;
	  };

	  RouterConfiguration.prototype.mapUnknownRoutes = function mapUnknownRoutes(config) {
	    this.unknownRouteConfig = config;
	    return this;
	  };

	  RouterConfiguration.prototype.exportToRouter = function exportToRouter(router) {
	    var instructions = this.instructions;
	    for (var i = 0, ii = instructions.length; i < ii; ++i) {
	      instructions[i](router);
	    }

	    if (this.title) {
	      router.title = this.title;
	    }

	    if (this.unknownRouteConfig) {
	      router.handleUnknownRoutes(this.unknownRouteConfig);
	    }

	    router.options = this.options;

	    var pipelineSteps = this.pipelineSteps;
	    if (pipelineSteps.length) {
	      if (!router.isRoot) {
	        throw new Error('Pipeline steps can only be added to the root router');
	      }

	      var pipelineProvider = router.pipelineProvider;
	      for (var _i2 = 0, _ii2 = pipelineSteps.length; _i2 < _ii2; ++_i2) {
	        var _pipelineSteps$_i = pipelineSteps[_i2];
	        var _name = _pipelineSteps$_i.name;
	        var step = _pipelineSteps$_i.step;

	        pipelineProvider.addStep(_name, step);
	      }
	    }
	  };

	  return RouterConfiguration;
	}();

	var activationStrategy = exports.activationStrategy = {
	  noChange: 'no-change',
	  invokeLifecycle: 'invoke-lifecycle',
	  replace: 'replace'
	};

	var BuildNavigationPlanStep = exports.BuildNavigationPlanStep = function () {
	  function BuildNavigationPlanStep() {
	    
	  }

	  BuildNavigationPlanStep.prototype.run = function run(navigationInstruction, next) {
	    return _buildNavigationPlan(navigationInstruction).then(function (plan) {
	      navigationInstruction.plan = plan;
	      return next();
	    }).catch(next.cancel);
	  };

	  return BuildNavigationPlanStep;
	}();

	function _buildNavigationPlan(instruction, forceLifecycleMinimum) {
	  var prev = instruction.previousInstruction;
	  var config = instruction.config;
	  var plan = {};

	  if ('redirect' in config) {
	    var redirectLocation = _resolveUrl(config.redirect, getInstructionBaseUrl(instruction));
	    if (instruction.queryString) {
	      redirectLocation += '?' + instruction.queryString;
	    }

	    return Promise.reject(new Redirect(redirectLocation));
	  }

	  if (prev) {
	    var newParams = hasDifferentParameterValues(prev, instruction);
	    var pending = [];

	    var _loop2 = function _loop2(viewPortName) {
	      var prevViewPortInstruction = prev.viewPortInstructions[viewPortName];
	      var nextViewPortConfig = config.viewPorts[viewPortName];

	      if (!nextViewPortConfig) throw new Error('Invalid Route Config: Configuration for viewPort "' + viewPortName + '" was not found for route: "' + instruction.config.route + '."');

	      var viewPortPlan = plan[viewPortName] = {
	        name: viewPortName,
	        config: nextViewPortConfig,
	        prevComponent: prevViewPortInstruction.component,
	        prevModuleId: prevViewPortInstruction.moduleId
	      };

	      if (prevViewPortInstruction.moduleId !== nextViewPortConfig.moduleId) {
	        viewPortPlan.strategy = activationStrategy.replace;
	      } else if ('determineActivationStrategy' in prevViewPortInstruction.component.viewModel) {
	        var _prevViewPortInstruct;

	        viewPortPlan.strategy = (_prevViewPortInstruct = prevViewPortInstruction.component.viewModel).determineActivationStrategy.apply(_prevViewPortInstruct, instruction.lifecycleArgs);
	      } else if (config.activationStrategy) {
	        viewPortPlan.strategy = config.activationStrategy;
	      } else if (newParams || forceLifecycleMinimum) {
	        viewPortPlan.strategy = activationStrategy.invokeLifecycle;
	      } else {
	        viewPortPlan.strategy = activationStrategy.noChange;
	      }

	      if (viewPortPlan.strategy !== activationStrategy.replace && prevViewPortInstruction.childRouter) {
	        var path = instruction.getWildcardPath();
	        var task = prevViewPortInstruction.childRouter._createNavigationInstruction(path, instruction).then(function (childInstruction) {
	          viewPortPlan.childNavigationInstruction = childInstruction;

	          return _buildNavigationPlan(childInstruction, viewPortPlan.strategy === activationStrategy.invokeLifecycle).then(function (childPlan) {
	            childInstruction.plan = childPlan;
	          });
	        });

	        pending.push(task);
	      }
	    };

	    for (var viewPortName in prev.viewPortInstructions) {
	      _loop2(viewPortName);
	    }

	    return Promise.all(pending).then(function () {
	      return plan;
	    });
	  }

	  for (var _viewPortName in config.viewPorts) {
	    plan[_viewPortName] = {
	      name: _viewPortName,
	      strategy: activationStrategy.replace,
	      config: instruction.config.viewPorts[_viewPortName]
	    };
	  }

	  return Promise.resolve(plan);
	}

	function hasDifferentParameterValues(prev, next) {
	  var prevParams = prev.params;
	  var nextParams = next.params;
	  var nextWildCardName = next.config.hasChildRouter ? next.getWildCardName() : null;

	  for (var key in nextParams) {
	    if (key === nextWildCardName) {
	      continue;
	    }

	    if (prevParams[key] !== nextParams[key]) {
	      return true;
	    }
	  }

	  for (var _key in prevParams) {
	    if (_key === nextWildCardName) {
	      continue;
	    }

	    if (prevParams[_key] !== nextParams[_key]) {
	      return true;
	    }
	  }

	  if (!next.options.compareQueryParams) {
	    return false;
	  }

	  var prevQueryParams = prev.queryParams;
	  var nextQueryParams = next.queryParams;
	  for (var _key2 in nextQueryParams) {
	    if (prevQueryParams[_key2] !== nextQueryParams[_key2]) {
	      return true;
	    }
	  }

	  for (var _key3 in prevQueryParams) {
	    if (prevQueryParams[_key3] !== nextQueryParams[_key3]) {
	      return true;
	    }
	  }

	  return false;
	}

	function getInstructionBaseUrl(instruction) {
	  var instructionBaseUrlParts = [];
	  instruction = instruction.parentInstruction;

	  while (instruction) {
	    instructionBaseUrlParts.unshift(instruction.getBaseUrl());
	    instruction = instruction.parentInstruction;
	  }

	  instructionBaseUrlParts.unshift('/');
	  return instructionBaseUrlParts.join('');
	}

	var Router = exports.Router = function () {
	  function Router(container, history) {
	    

	    this.parent = null;
	    this.options = {};

	    this.container = container;
	    this.history = history;
	    this.reset();
	  }

	  Router.prototype.reset = function reset() {
	    var _this2 = this;

	    this.viewPorts = {};
	    this.routes = [];
	    this.baseUrl = '';
	    this.isConfigured = false;
	    this.isNavigating = false;
	    this.navigation = [];
	    this.currentInstruction = null;
	    this._fallbackOrder = 100;
	    this._recognizer = new _aureliaRouteRecognizer.RouteRecognizer();
	    this._childRecognizer = new _aureliaRouteRecognizer.RouteRecognizer();
	    this._configuredPromise = new Promise(function (resolve) {
	      _this2._resolveConfiguredPromise = resolve;
	    });
	  };

	  Router.prototype.registerViewPort = function registerViewPort(viewPort, name) {
	    name = name || 'default';
	    this.viewPorts[name] = viewPort;
	  };

	  Router.prototype.ensureConfigured = function ensureConfigured() {
	    return this._configuredPromise;
	  };

	  Router.prototype.configure = function configure(callbackOrConfig) {
	    var _this3 = this;

	    this.isConfigured = true;

	    var result = callbackOrConfig;
	    var config = void 0;
	    if (typeof callbackOrConfig === 'function') {
	      config = new RouterConfiguration();
	      result = callbackOrConfig(config);
	    }

	    return Promise.resolve(result).then(function (c) {
	      if (c && c.exportToRouter) {
	        config = c;
	      }

	      config.exportToRouter(_this3);
	      _this3.isConfigured = true;
	      _this3._resolveConfiguredPromise();
	    });
	  };

	  Router.prototype.navigate = function navigate(fragment, options) {
	    if (!this.isConfigured && this.parent) {
	      return this.parent.navigate(fragment, options);
	    }

	    return this.history.navigate(_resolveUrl(fragment, this.baseUrl, this.history._hasPushState), options);
	  };

	  Router.prototype.navigateToRoute = function navigateToRoute(route, params, options) {
	    var path = this.generate(route, params);
	    return this.navigate(path, options);
	  };

	  Router.prototype.navigateBack = function navigateBack() {
	    this.history.navigateBack();
	  };

	  Router.prototype.createChild = function createChild(container) {
	    var childRouter = new Router(container || this.container.createChild(), this.history);
	    childRouter.parent = this;
	    return childRouter;
	  };

	  Router.prototype.generate = function generate(name, params) {
	    var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	    var hasRoute = this._recognizer.hasRoute(name);
	    if ((!this.isConfigured || !hasRoute) && this.parent) {
	      return this.parent.generate(name, params);
	    }

	    if (!hasRoute) {
	      throw new Error('A route with name \'' + name + '\' could not be found. Check that `name: \'' + name + '\'` was specified in the route\'s config.');
	    }

	    var path = this._recognizer.generate(name, params);
	    var rootedPath = _createRootedPath(path, this.baseUrl, this.history._hasPushState, options.absolute);
	    return options.absolute ? '' + this.history.getAbsoluteRoot() + rootedPath : rootedPath;
	  };

	  Router.prototype.createNavModel = function createNavModel(config) {
	    var navModel = new NavModel(this, 'href' in config ? config.href : config.route);
	    navModel.title = config.title;
	    navModel.order = config.nav;
	    navModel.href = config.href;
	    navModel.settings = config.settings;
	    navModel.config = config;

	    return navModel;
	  };

	  Router.prototype.addRoute = function addRoute(config, navModel) {
	    validateRouteConfig(config);

	    if (!('viewPorts' in config) && !config.navigationStrategy) {
	      config.viewPorts = {
	        'default': {
	          moduleId: config.moduleId,
	          view: config.view
	        }
	      };
	    }

	    if (!navModel) {
	      navModel = this.createNavModel(config);
	    }

	    this.routes.push(config);

	    var path = config.route;
	    if (path.charAt(0) === '/') {
	      path = path.substr(1);
	    }
	    var caseSensitive = config.caseSensitive === true;
	    var state = this._recognizer.add({ path: path, handler: config, caseSensitive: caseSensitive });

	    if (path) {
	      var _settings = config.settings;
	      delete config.settings;
	      var withChild = JSON.parse(JSON.stringify(config));
	      config.settings = _settings;
	      withChild.route = path + '/*childRoute';
	      withChild.hasChildRouter = true;
	      this._childRecognizer.add({
	        path: withChild.route,
	        handler: withChild,
	        caseSensitive: caseSensitive
	      });

	      withChild.navModel = navModel;
	      withChild.settings = config.settings;
	    }

	    config.navModel = navModel;

	    if ((navModel.order || navModel.order === 0) && this.navigation.indexOf(navModel) === -1) {
	      if (!navModel.href && navModel.href !== '' && (state.types.dynamics || state.types.stars)) {
	        throw new Error('Invalid route config: dynamic routes must specify an href to be included in the navigation model.');
	      }

	      if (typeof navModel.order !== 'number') {
	        navModel.order = ++this._fallbackOrder;
	      }

	      this.navigation.push(navModel);
	      this.navigation = this.navigation.sort(function (a, b) {
	        return a.order - b.order;
	      });
	    }
	  };

	  Router.prototype.hasRoute = function hasRoute(name) {
	    return !!(this._recognizer.hasRoute(name) || this.parent && this.parent.hasRoute(name));
	  };

	  Router.prototype.hasOwnRoute = function hasOwnRoute(name) {
	    return this._recognizer.hasRoute(name);
	  };

	  Router.prototype.handleUnknownRoutes = function handleUnknownRoutes(config) {
	    var _this4 = this;

	    if (!config) {
	      throw new Error('Invalid unknown route handler');
	    }

	    this.catchAllHandler = function (instruction) {
	      return _this4._createRouteConfig(config, instruction).then(function (c) {
	        instruction.config = c;
	        return instruction;
	      });
	    };
	  };

	  Router.prototype.updateTitle = function updateTitle() {
	    if (this.parent) {
	      return this.parent.updateTitle();
	    }

	    this.currentInstruction._updateTitle();
	    return undefined;
	  };

	  Router.prototype.refreshNavigation = function refreshNavigation() {
	    var nav = this.navigation;

	    for (var i = 0, length = nav.length; i < length; i++) {
	      var current = nav[i];
	      if (!current.config.href) {
	        current.href = _createRootedPath(current.relativeHref, this.baseUrl, this.history._hasPushState);
	      } else {
	        current.href = _normalizeAbsolutePath(current.config.href, this.history._hasPushState);
	      }
	    }
	  };

	  Router.prototype._refreshBaseUrl = function _refreshBaseUrl() {
	    if (this.parent) {
	      var baseUrl = this.parent.currentInstruction.getBaseUrl();
	      this.baseUrl = this.parent.baseUrl + baseUrl;
	    }
	  };

	  Router.prototype._createNavigationInstruction = function _createNavigationInstruction() {
	    var url = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
	    var parentInstruction = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	    var fragment = url;
	    var queryString = '';

	    var queryIndex = url.indexOf('?');
	    if (queryIndex !== -1) {
	      fragment = url.substr(0, queryIndex);
	      queryString = url.substr(queryIndex + 1);
	    }

	    var results = this._recognizer.recognize(url);
	    if (!results || !results.length) {
	      results = this._childRecognizer.recognize(url);
	    }

	    var instructionInit = {
	      fragment: fragment,
	      queryString: queryString,
	      config: null,
	      parentInstruction: parentInstruction,
	      previousInstruction: this.currentInstruction,
	      router: this,
	      options: {
	        compareQueryParams: this.options.compareQueryParams
	      }
	    };

	    if (results && results.length) {
	      var first = results[0];
	      var _instruction = new NavigationInstruction(Object.assign({}, instructionInit, {
	        params: first.params,
	        queryParams: first.queryParams || results.queryParams,
	        config: first.config || first.handler
	      }));

	      if (typeof first.handler === 'function') {
	        return evaluateNavigationStrategy(_instruction, first.handler, first);
	      } else if (first.handler && 'navigationStrategy' in first.handler) {
	        return evaluateNavigationStrategy(_instruction, first.handler.navigationStrategy, first.handler);
	      }

	      return Promise.resolve(_instruction);
	    } else if (this.catchAllHandler) {
	      var _instruction2 = new NavigationInstruction(Object.assign({}, instructionInit, {
	        params: { path: fragment },
	        queryParams: results && results.queryParams,
	        config: null }));

	      return evaluateNavigationStrategy(_instruction2, this.catchAllHandler);
	    }

	    return Promise.reject(new Error('Route not found: ' + url));
	  };

	  Router.prototype._createRouteConfig = function _createRouteConfig(config, instruction) {
	    var _this5 = this;

	    return Promise.resolve(config).then(function (c) {
	      if (typeof c === 'string') {
	        return { moduleId: c };
	      } else if (typeof c === 'function') {
	        return c(instruction);
	      }

	      return c;
	    }).then(function (c) {
	      return typeof c === 'string' ? { moduleId: c } : c;
	    }).then(function (c) {
	      c.route = instruction.params.path;
	      validateRouteConfig(c);

	      if (!c.navModel) {
	        c.navModel = _this5.createNavModel(c);
	      }

	      return c;
	    });
	  };

	  _createClass(Router, [{
	    key: 'isRoot',
	    get: function get() {
	      return !this.parent;
	    }
	  }]);

	  return Router;
	}();

	function validateRouteConfig(config) {
	  if ((typeof config === 'undefined' ? 'undefined' : _typeof(config)) !== 'object') {
	    throw new Error('Invalid Route Config');
	  }

	  if (typeof config.route !== 'string') {
	    throw new Error('Invalid Route Config: You must specify a route pattern.');
	  }

	  if (!('redirect' in config || config.moduleId || config.navigationStrategy || config.viewPorts)) {
	    throw new Error('Invalid Route Config: You must specify a moduleId, redirect, navigationStrategy, or viewPorts.');
	  }
	}

	function evaluateNavigationStrategy(instruction, evaluator, context) {
	  return Promise.resolve(evaluator.call(context, instruction)).then(function () {
	    if (!('viewPorts' in instruction.config)) {
	      instruction.config.viewPorts = {
	        'default': {
	          moduleId: instruction.config.moduleId
	        }
	      };
	    }

	    return instruction;
	  });
	}

	var CanDeactivatePreviousStep = exports.CanDeactivatePreviousStep = function () {
	  function CanDeactivatePreviousStep() {
	    
	  }

	  CanDeactivatePreviousStep.prototype.run = function run(navigationInstruction, next) {
	    return processDeactivatable(navigationInstruction.plan, 'canDeactivate', next);
	  };

	  return CanDeactivatePreviousStep;
	}();

	var CanActivateNextStep = exports.CanActivateNextStep = function () {
	  function CanActivateNextStep() {
	    
	  }

	  CanActivateNextStep.prototype.run = function run(navigationInstruction, next) {
	    return processActivatable(navigationInstruction, 'canActivate', next);
	  };

	  return CanActivateNextStep;
	}();

	var DeactivatePreviousStep = exports.DeactivatePreviousStep = function () {
	  function DeactivatePreviousStep() {
	    
	  }

	  DeactivatePreviousStep.prototype.run = function run(navigationInstruction, next) {
	    return processDeactivatable(navigationInstruction.plan, 'deactivate', next, true);
	  };

	  return DeactivatePreviousStep;
	}();

	var ActivateNextStep = exports.ActivateNextStep = function () {
	  function ActivateNextStep() {
	    
	  }

	  ActivateNextStep.prototype.run = function run(navigationInstruction, next) {
	    return processActivatable(navigationInstruction, 'activate', next, true);
	  };

	  return ActivateNextStep;
	}();

	function processDeactivatable(plan, callbackName, next, ignoreResult) {
	  var infos = findDeactivatable(plan, callbackName);
	  var i = infos.length;

	  function inspect(val) {
	    if (ignoreResult || shouldContinue(val)) {
	      return iterate();
	    }

	    return next.cancel(val);
	  }

	  function iterate() {
	    if (i--) {
	      try {
	        var viewModel = infos[i];
	        var _result = viewModel[callbackName]();
	        return processPotential(_result, inspect, next.cancel);
	      } catch (error) {
	        return next.cancel(error);
	      }
	    }

	    return next();
	  }

	  return iterate();
	}

	function findDeactivatable(plan, callbackName) {
	  var list = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];

	  for (var viewPortName in plan) {
	    var _viewPortPlan = plan[viewPortName];
	    var prevComponent = _viewPortPlan.prevComponent;

	    if ((_viewPortPlan.strategy === activationStrategy.invokeLifecycle || _viewPortPlan.strategy === activationStrategy.replace) && prevComponent) {
	      var viewModel = prevComponent.viewModel;

	      if (callbackName in viewModel) {
	        list.push(viewModel);
	      }
	    }

	    if (_viewPortPlan.childNavigationInstruction) {
	      findDeactivatable(_viewPortPlan.childNavigationInstruction.plan, callbackName, list);
	    } else if (prevComponent) {
	      addPreviousDeactivatable(prevComponent, callbackName, list);
	    }
	  }

	  return list;
	}

	function addPreviousDeactivatable(component, callbackName, list) {
	  var childRouter = component.childRouter;

	  if (childRouter && childRouter.currentInstruction) {
	    var viewPortInstructions = childRouter.currentInstruction.viewPortInstructions;

	    for (var viewPortName in viewPortInstructions) {
	      var _viewPortInstruction2 = viewPortInstructions[viewPortName];
	      var prevComponent = _viewPortInstruction2.component;
	      var prevViewModel = prevComponent.viewModel;

	      if (callbackName in prevViewModel) {
	        list.push(prevViewModel);
	      }

	      addPreviousDeactivatable(prevComponent, callbackName, list);
	    }
	  }
	}

	function processActivatable(navigationInstruction, callbackName, next, ignoreResult) {
	  var infos = findActivatable(navigationInstruction, callbackName);
	  var length = infos.length;
	  var i = -1;

	  function inspect(val, router) {
	    if (ignoreResult || shouldContinue(val, router)) {
	      return iterate();
	    }

	    return next.cancel(val);
	  }

	  function iterate() {
	    i++;

	    if (i < length) {
	      try {
	        var _ret3 = function () {
	          var _current$viewModel;

	          var current = infos[i];
	          var result = (_current$viewModel = current.viewModel)[callbackName].apply(_current$viewModel, current.lifecycleArgs);
	          return {
	            v: processPotential(result, function (val) {
	              return inspect(val, current.router);
	            }, next.cancel)
	          };
	        }();

	        if ((typeof _ret3 === 'undefined' ? 'undefined' : _typeof(_ret3)) === "object") return _ret3.v;
	      } catch (error) {
	        return next.cancel(error);
	      }
	    }

	    return next();
	  }

	  return iterate();
	}

	function findActivatable(navigationInstruction, callbackName) {
	  var list = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];
	  var router = arguments[3];

	  var plan = navigationInstruction.plan;

	  Object.keys(plan).filter(function (viewPortName) {
	    var viewPortPlan = plan[viewPortName];
	    var viewPortInstruction = navigationInstruction.viewPortInstructions[viewPortName];
	    var viewModel = viewPortInstruction.component.viewModel;

	    if ((viewPortPlan.strategy === activationStrategy.invokeLifecycle || viewPortPlan.strategy === activationStrategy.replace) && callbackName in viewModel) {
	      list.push({
	        viewModel: viewModel,
	        lifecycleArgs: viewPortInstruction.lifecycleArgs,
	        router: router
	      });
	    }

	    if (viewPortPlan.childNavigationInstruction) {
	      findActivatable(viewPortPlan.childNavigationInstruction, callbackName, list, viewPortInstruction.component.childRouter || router);
	    }
	  });

	  return list;
	}

	function shouldContinue(output, router) {
	  if (output instanceof Error) {
	    return false;
	  }

	  if (isNavigationCommand(output)) {
	    if (typeof output.setRouter === 'function') {
	      output.setRouter(router);
	    }

	    return !!output.shouldContinueProcessing;
	  }

	  if (output === undefined) {
	    return true;
	  }

	  return output;
	}

	var SafeSubscription = function () {
	  function SafeSubscription(subscriptionFunc) {
	    

	    this._subscribed = true;
	    this._subscription = subscriptionFunc(this);

	    if (!this._subscribed) this.unsubscribe();
	  }

	  SafeSubscription.prototype.unsubscribe = function unsubscribe() {
	    if (this._subscribed && this._subscription) this._subscription.unsubscribe();

	    this._subscribed = false;
	  };

	  _createClass(SafeSubscription, [{
	    key: 'subscribed',
	    get: function get() {
	      return this._subscribed;
	    }
	  }]);

	  return SafeSubscription;
	}();

	function processPotential(obj, resolve, reject) {
	  if (obj && typeof obj.then === 'function') {
	    return Promise.resolve(obj).then(resolve).catch(reject);
	  }

	  if (obj && typeof obj.subscribe === 'function') {
	    var _ret4 = function () {
	      var obs = obj;
	      return {
	        v: new SafeSubscription(function (sub) {
	          return obs.subscribe({
	            next: function next() {
	              if (sub.subscribed) {
	                sub.unsubscribe();
	                resolve(obj);
	              }
	            },
	            error: function error(_error) {
	              if (sub.subscribed) {
	                sub.unsubscribe();
	                reject(_error);
	              }
	            },
	            complete: function complete() {
	              if (sub.subscribed) {
	                sub.unsubscribe();
	                resolve(obj);
	              }
	            }
	          });
	        })
	      };
	    }();

	    if ((typeof _ret4 === 'undefined' ? 'undefined' : _typeof(_ret4)) === "object") return _ret4.v;
	  }

	  try {
	    return resolve(obj);
	  } catch (error) {
	    return reject(error);
	  }
	}

	var RouteLoader = exports.RouteLoader = function () {
	  function RouteLoader() {
	    
	  }

	  RouteLoader.prototype.loadRoute = function loadRoute(router, config, navigationInstruction) {
	    throw Error('Route loaders must implement "loadRoute(router, config, navigationInstruction)".');
	  };

	  return RouteLoader;
	}();

	var LoadRouteStep = exports.LoadRouteStep = function () {
	  LoadRouteStep.inject = function inject() {
	    return [RouteLoader];
	  };

	  function LoadRouteStep(routeLoader) {
	    

	    this.routeLoader = routeLoader;
	  }

	  LoadRouteStep.prototype.run = function run(navigationInstruction, next) {
	    return loadNewRoute(this.routeLoader, navigationInstruction).then(next).catch(next.cancel);
	  };

	  return LoadRouteStep;
	}();

	function loadNewRoute(routeLoader, navigationInstruction) {
	  var toLoad = determineWhatToLoad(navigationInstruction);
	  var loadPromises = toLoad.map(function (current) {
	    return loadRoute(routeLoader, current.navigationInstruction, current.viewPortPlan);
	  });

	  return Promise.all(loadPromises);
	}

	function determineWhatToLoad(navigationInstruction) {
	  var toLoad = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

	  var plan = navigationInstruction.plan;

	  for (var viewPortName in plan) {
	    var _viewPortPlan2 = plan[viewPortName];

	    if (_viewPortPlan2.strategy === activationStrategy.replace) {
	      toLoad.push({ viewPortPlan: _viewPortPlan2, navigationInstruction: navigationInstruction });

	      if (_viewPortPlan2.childNavigationInstruction) {
	        determineWhatToLoad(_viewPortPlan2.childNavigationInstruction, toLoad);
	      }
	    } else {
	      var _viewPortInstruction3 = navigationInstruction.addViewPortInstruction(viewPortName, _viewPortPlan2.strategy, _viewPortPlan2.prevModuleId, _viewPortPlan2.prevComponent);

	      if (_viewPortPlan2.childNavigationInstruction) {
	        _viewPortInstruction3.childNavigationInstruction = _viewPortPlan2.childNavigationInstruction;
	        determineWhatToLoad(_viewPortPlan2.childNavigationInstruction, toLoad);
	      }
	    }
	  }

	  return toLoad;
	}

	function loadRoute(routeLoader, navigationInstruction, viewPortPlan) {
	  var moduleId = viewPortPlan.config.moduleId;

	  return loadComponent(routeLoader, navigationInstruction, viewPortPlan.config).then(function (component) {
	    var viewPortInstruction = navigationInstruction.addViewPortInstruction(viewPortPlan.name, viewPortPlan.strategy, moduleId, component);

	    var childRouter = component.childRouter;
	    if (childRouter) {
	      var path = navigationInstruction.getWildcardPath();

	      return childRouter._createNavigationInstruction(path, navigationInstruction).then(function (childInstruction) {
	        viewPortPlan.childNavigationInstruction = childInstruction;

	        return _buildNavigationPlan(childInstruction).then(function (childPlan) {
	          childInstruction.plan = childPlan;
	          viewPortInstruction.childNavigationInstruction = childInstruction;

	          return loadNewRoute(routeLoader, childInstruction);
	        });
	      });
	    }

	    return undefined;
	  });
	}

	function loadComponent(routeLoader, navigationInstruction, config) {
	  var router = navigationInstruction.router;
	  var lifecycleArgs = navigationInstruction.lifecycleArgs;

	  return routeLoader.loadRoute(router, config, navigationInstruction).then(function (component) {
	    var viewModel = component.viewModel;
	    var childContainer = component.childContainer;

	    component.router = router;
	    component.config = config;

	    if ('configureRouter' in viewModel) {
	      var _ret5 = function () {
	        var childRouter = childContainer.getChildRouter();
	        component.childRouter = childRouter;

	        return {
	          v: childRouter.configure(function (c) {
	            return viewModel.configureRouter.apply(viewModel, [c, childRouter].concat(lifecycleArgs));
	          }).then(function () {
	            return component;
	          })
	        };
	      }();

	      if ((typeof _ret5 === 'undefined' ? 'undefined' : _typeof(_ret5)) === "object") return _ret5.v;
	    }

	    return component;
	  });
	}

	var PipelineSlot = function () {
	  function PipelineSlot(container, name, alias) {
	    

	    this.steps = [];

	    this.container = container;
	    this.slotName = name;
	    this.slotAlias = alias;
	  }

	  PipelineSlot.prototype.getSteps = function getSteps() {
	    var _this6 = this;

	    return this.steps.map(function (x) {
	      return _this6.container.get(x);
	    });
	  };

	  return PipelineSlot;
	}();

	var PipelineProvider = exports.PipelineProvider = function () {
	  PipelineProvider.inject = function inject() {
	    return [_aureliaDependencyInjection.Container];
	  };

	  function PipelineProvider(container) {
	    

	    this.container = container;
	    this.steps = [BuildNavigationPlanStep, CanDeactivatePreviousStep, LoadRouteStep, this._createPipelineSlot('authorize'), CanActivateNextStep, this._createPipelineSlot('preActivate', 'modelbind'), DeactivatePreviousStep, ActivateNextStep, this._createPipelineSlot('preRender', 'precommit'), CommitChangesStep, this._createPipelineSlot('postRender', 'postcomplete')];
	  }

	  PipelineProvider.prototype.createPipeline = function createPipeline() {
	    var _this7 = this;

	    var pipeline = new Pipeline();
	    this.steps.forEach(function (step) {
	      return pipeline.addStep(_this7.container.get(step));
	    });
	    return pipeline;
	  };

	  PipelineProvider.prototype._findStep = function _findStep(name) {
	    return this.steps.find(function (x) {
	      return x.slotName === name || x.slotAlias === name;
	    });
	  };

	  PipelineProvider.prototype.addStep = function addStep(name, step) {
	    var found = this._findStep(name);
	    if (found) {
	      if (!found.steps.includes(step)) {
	        found.steps.push(step);
	      }
	    } else {
	      throw new Error('Invalid pipeline slot name: ' + name + '.');
	    }
	  };

	  PipelineProvider.prototype.removeStep = function removeStep(name, step) {
	    var slot = this._findStep(name);
	    if (slot) {
	      slot.steps.splice(slot.steps.indexOf(step), 1);
	    }
	  };

	  PipelineProvider.prototype._clearSteps = function _clearSteps() {
	    var name = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

	    var slot = this._findStep(name);
	    if (slot) {
	      slot.steps = [];
	    }
	  };

	  PipelineProvider.prototype.reset = function reset() {
	    this._clearSteps('authorize');
	    this._clearSteps('preActivate');
	    this._clearSteps('preRender');
	    this._clearSteps('postRender');
	  };

	  PipelineProvider.prototype._createPipelineSlot = function _createPipelineSlot(name, alias) {
	    return new PipelineSlot(this.container, name, alias);
	  };

	  return PipelineProvider;
	}();

	var logger = LogManager.getLogger('app-router');

	var AppRouter = exports.AppRouter = function (_Router) {
	  _inherits(AppRouter, _Router);

	  AppRouter.inject = function inject() {
	    return [_aureliaDependencyInjection.Container, _aureliaHistory.History, PipelineProvider, _aureliaEventAggregator.EventAggregator];
	  };

	  function AppRouter(container, history, pipelineProvider, events) {
	    

	    var _this8 = _possibleConstructorReturn(this, _Router.call(this, container, history));

	    _this8.pipelineProvider = pipelineProvider;
	    _this8.events = events;
	    return _this8;
	  }

	  AppRouter.prototype.reset = function reset() {
	    _Router.prototype.reset.call(this);
	    this.maxInstructionCount = 10;
	    if (!this._queue) {
	      this._queue = [];
	    } else {
	      this._queue.length = 0;
	    }
	  };

	  AppRouter.prototype.loadUrl = function loadUrl(url) {
	    var _this9 = this;

	    return this._createNavigationInstruction(url).then(function (instruction) {
	      return _this9._queueInstruction(instruction);
	    }).catch(function (error) {
	      logger.error(error);
	      restorePreviousLocation(_this9);
	    });
	  };

	  AppRouter.prototype.registerViewPort = function registerViewPort(viewPort, name) {
	    var _this10 = this;

	    _Router.prototype.registerViewPort.call(this, viewPort, name);

	    if (!this.isActive) {
	      var _ret6 = function () {
	        var viewModel = _this10._findViewModel(viewPort);
	        if ('configureRouter' in viewModel) {
	          if (!_this10.isConfigured) {
	            var _ret7 = function () {
	              var resolveConfiguredPromise = _this10._resolveConfiguredPromise;
	              _this10._resolveConfiguredPromise = function () {};
	              return {
	                v: {
	                  v: _this10.configure(function (config) {
	                    return viewModel.configureRouter(config, _this10);
	                  }).then(function () {
	                    _this10.activate();
	                    resolveConfiguredPromise();
	                  })
	                }
	              };
	            }();

	            if ((typeof _ret7 === 'undefined' ? 'undefined' : _typeof(_ret7)) === "object") return _ret7.v;
	          }
	        } else {
	          _this10.activate();
	        }
	      }();

	      if ((typeof _ret6 === 'undefined' ? 'undefined' : _typeof(_ret6)) === "object") return _ret6.v;
	    } else {
	      this._dequeueInstruction();
	    }

	    return Promise.resolve();
	  };

	  AppRouter.prototype.activate = function activate(options) {
	    if (this.isActive) {
	      return;
	    }

	    this.isActive = true;
	    this.options = Object.assign({ routeHandler: this.loadUrl.bind(this) }, this.options, options);
	    this.history.activate(this.options);
	    this._dequeueInstruction();
	  };

	  AppRouter.prototype.deactivate = function deactivate() {
	    this.isActive = false;
	    this.history.deactivate();
	  };

	  AppRouter.prototype._queueInstruction = function _queueInstruction(instruction) {
	    var _this11 = this;

	    return new Promise(function (resolve) {
	      instruction.resolve = resolve;
	      _this11._queue.unshift(instruction);
	      _this11._dequeueInstruction();
	    });
	  };

	  AppRouter.prototype._dequeueInstruction = function _dequeueInstruction() {
	    var _this12 = this;

	    var instructionCount = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

	    return Promise.resolve().then(function () {
	      if (_this12.isNavigating && !instructionCount) {
	        return undefined;
	      }

	      var instruction = _this12._queue.shift();
	      _this12._queue.length = 0;

	      if (!instruction) {
	        return undefined;
	      }

	      _this12.isNavigating = true;
	      instruction.previousInstruction = _this12.currentInstruction;

	      if (!instructionCount) {
	        _this12.events.publish('router:navigation:processing', { instruction: instruction });
	      } else if (instructionCount === _this12.maxInstructionCount - 1) {
	        logger.error(instructionCount + 1 + ' navigation instructions have been attempted without success. Restoring last known good location.');
	        restorePreviousLocation(_this12);
	        return _this12._dequeueInstruction(instructionCount + 1);
	      } else if (instructionCount > _this12.maxInstructionCount) {
	        throw new Error('Maximum navigation attempts exceeded. Giving up.');
	      }

	      var pipeline = _this12.pipelineProvider.createPipeline();

	      return pipeline.run(instruction).then(function (result) {
	        return processResult(instruction, result, instructionCount, _this12);
	      }).catch(function (error) {
	        return { output: error instanceof Error ? error : new Error(error) };
	      }).then(function (result) {
	        return resolveInstruction(instruction, result, !!instructionCount, _this12);
	      });
	    });
	  };

	  AppRouter.prototype._findViewModel = function _findViewModel(viewPort) {
	    if (this.container.viewModel) {
	      return this.container.viewModel;
	    }

	    if (viewPort.container) {
	      var container = viewPort.container;

	      while (container) {
	        if (container.viewModel) {
	          this.container.viewModel = container.viewModel;
	          return container.viewModel;
	        }

	        container = container.parent;
	      }
	    }

	    return undefined;
	  };

	  return AppRouter;
	}(Router);

	function processResult(instruction, result, instructionCount, router) {
	  if (!(result && 'completed' in result && 'output' in result)) {
	    result = result || {};
	    result.output = new Error('Expected router pipeline to return a navigation result, but got [' + JSON.stringify(result) + '] instead.');
	  }

	  var finalResult = null;
	  if (isNavigationCommand(result.output)) {
	    result.output.navigate(router);
	  } else {
	    finalResult = result;

	    if (!result.completed) {
	      if (result.output instanceof Error) {
	        logger.error(result.output);
	      }

	      restorePreviousLocation(router);
	    }
	  }

	  return router._dequeueInstruction(instructionCount + 1).then(function (innerResult) {
	    return finalResult || innerResult || result;
	  });
	}

	function resolveInstruction(instruction, result, isInnerInstruction, router) {
	  instruction.resolve(result);

	  if (!isInnerInstruction) {
	    router.isNavigating = false;
	    var eventArgs = { instruction: instruction, result: result };
	    var eventName = void 0;

	    if (result.output instanceof Error) {
	      eventName = 'error';
	    } else if (!result.completed) {
	      eventName = 'canceled';
	    } else {
	      var _queryString = instruction.queryString ? '?' + instruction.queryString : '';
	      router.history.previousLocation = instruction.fragment + _queryString;
	      eventName = 'success';
	    }

	    router.events.publish('router:navigation:' + eventName, eventArgs);
	    router.events.publish('router:navigation:complete', eventArgs);
	  }

	  return result;
	}

	function restorePreviousLocation(router) {
	  var previousLocation = router.history.previousLocation;
	  if (previousLocation) {
	    router.navigate(router.history.previousLocation, { trigger: false, replace: true });
	  } else {
	    logger.error('Router navigation failed, and no previous location could be restored.');
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TemplatingBindingLanguage = exports.SyntaxInterpreter = exports.ChildInterpolationBinding = exports.InterpolationBinding = exports.InterpolationBindingExpression = exports.AttributeMap = undefined;

	var _class, _temp, _dec, _class2, _class3, _temp2, _class4, _temp3;

	exports.configure = configure;

	var _aureliaLogging = __webpack_require__(21);

	var LogManager = _interopRequireWildcard(_aureliaLogging);

	var _aureliaBinding = __webpack_require__(20);

	var _aureliaTemplating = __webpack_require__(23);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



	var AttributeMap = exports.AttributeMap = (_temp = _class = function () {
	  function AttributeMap(svg) {
	    

	    this.elements = Object.create(null);
	    this.allElements = Object.create(null);

	    this.svg = svg;

	    this.registerUniversal('accesskey', 'accessKey');
	    this.registerUniversal('contenteditable', 'contentEditable');
	    this.registerUniversal('tabindex', 'tabIndex');
	    this.registerUniversal('textcontent', 'textContent');
	    this.registerUniversal('innerhtml', 'innerHTML');
	    this.registerUniversal('scrolltop', 'scrollTop');
	    this.registerUniversal('scrollleft', 'scrollLeft');
	    this.registerUniversal('readonly', 'readOnly');

	    this.register('label', 'for', 'htmlFor');

	    this.register('input', 'maxlength', 'maxLength');
	    this.register('input', 'minlength', 'minLength');
	    this.register('input', 'formaction', 'formAction');
	    this.register('input', 'formenctype', 'formEncType');
	    this.register('input', 'formmethod', 'formMethod');
	    this.register('input', 'formnovalidate', 'formNoValidate');
	    this.register('input', 'formtarget', 'formTarget');

	    this.register('textarea', 'maxlength', 'maxLength');

	    this.register('td', 'rowspan', 'rowSpan');
	    this.register('td', 'colspan', 'colSpan');
	    this.register('th', 'rowspan', 'rowSpan');
	    this.register('th', 'colspan', 'colSpan');
	  }

	  AttributeMap.prototype.register = function register(elementName, attributeName, propertyName) {
	    elementName = elementName.toLowerCase();
	    attributeName = attributeName.toLowerCase();
	    var element = this.elements[elementName] = this.elements[elementName] || Object.create(null);
	    element[attributeName] = propertyName;
	  };

	  AttributeMap.prototype.registerUniversal = function registerUniversal(attributeName, propertyName) {
	    attributeName = attributeName.toLowerCase();
	    this.allElements[attributeName] = propertyName;
	  };

	  AttributeMap.prototype.map = function map(elementName, attributeName) {
	    if (this.svg.isStandardSvgAttribute(elementName, attributeName)) {
	      return attributeName;
	    }
	    elementName = elementName.toLowerCase();
	    attributeName = attributeName.toLowerCase();
	    var element = this.elements[elementName];
	    if (element !== undefined && attributeName in element) {
	      return element[attributeName];
	    }
	    if (attributeName in this.allElements) {
	      return this.allElements[attributeName];
	    }

	    if (/(^data-)|(^aria-)|:/.test(attributeName)) {
	      return attributeName;
	    }
	    return (0, _aureliaBinding.camelCase)(attributeName);
	  };

	  return AttributeMap;
	}(), _class.inject = [_aureliaBinding.SVGAnalyzer], _temp);

	var InterpolationBindingExpression = exports.InterpolationBindingExpression = function () {
	  function InterpolationBindingExpression(observerLocator, targetProperty, parts, mode, lookupFunctions, attribute) {
	    

	    this.observerLocator = observerLocator;
	    this.targetProperty = targetProperty;
	    this.parts = parts;
	    this.mode = mode;
	    this.lookupFunctions = lookupFunctions;
	    this.attribute = this.attrToRemove = attribute;
	    this.discrete = false;
	  }

	  InterpolationBindingExpression.prototype.createBinding = function createBinding(target) {
	    if (this.parts.length === 3) {
	      return new ChildInterpolationBinding(target, this.observerLocator, this.parts[1], this.mode, this.lookupFunctions, this.targetProperty, this.parts[0], this.parts[2]);
	    }
	    return new InterpolationBinding(this.observerLocator, this.parts, target, this.targetProperty, this.mode, this.lookupFunctions);
	  };

	  return InterpolationBindingExpression;
	}();

	function validateTarget(target, propertyName) {
	  if (propertyName === 'style') {
	    LogManager.getLogger('templating-binding').info('Internet Explorer does not support interpolation in "style" attributes.  Use the style attribute\'s alias, "css" instead.');
	  } else if (target.parentElement && target.parentElement.nodeName === 'TEXTAREA' && propertyName === 'textContent') {
	    throw new Error('Interpolation binding cannot be used in the content of a textarea element.  Use <textarea value.bind="expression"></textarea> instead.');
	  }
	}

	var InterpolationBinding = exports.InterpolationBinding = function () {
	  function InterpolationBinding(observerLocator, parts, target, targetProperty, mode, lookupFunctions) {
	    

	    validateTarget(target, targetProperty);
	    this.observerLocator = observerLocator;
	    this.parts = parts;
	    this.target = target;
	    this.targetProperty = targetProperty;
	    this.targetAccessor = observerLocator.getAccessor(target, targetProperty);
	    this.mode = mode;
	    this.lookupFunctions = lookupFunctions;
	  }

	  InterpolationBinding.prototype.interpolate = function interpolate() {
	    if (this.isBound) {
	      var value = '';
	      var parts = this.parts;
	      for (var i = 0, ii = parts.length; i < ii; i++) {
	        value += i % 2 === 0 ? parts[i] : this['childBinding' + i].value;
	      }
	      this.targetAccessor.setValue(value, this.target, this.targetProperty);
	    }
	  };

	  InterpolationBinding.prototype.updateOneTimeBindings = function updateOneTimeBindings() {
	    for (var i = 1, ii = this.parts.length; i < ii; i += 2) {
	      var child = this['childBinding' + i];
	      if (child.mode === _aureliaBinding.bindingMode.oneTime) {
	        child.call();
	      }
	    }
	  };

	  InterpolationBinding.prototype.bind = function bind(source) {
	    if (this.isBound) {
	      if (this.source === source) {
	        return;
	      }
	      this.unbind();
	    }
	    this.source = source;

	    var parts = this.parts;
	    for (var i = 1, ii = parts.length; i < ii; i += 2) {
	      var binding = new ChildInterpolationBinding(this, this.observerLocator, parts[i], this.mode, this.lookupFunctions);
	      binding.bind(source);
	      this['childBinding' + i] = binding;
	    }

	    this.isBound = true;
	    this.interpolate();
	  };

	  InterpolationBinding.prototype.unbind = function unbind() {
	    if (!this.isBound) {
	      return;
	    }
	    this.isBound = false;
	    this.source = null;
	    var parts = this.parts;
	    for (var i = 1, ii = parts.length; i < ii; i += 2) {
	      var name = 'childBinding' + i;
	      this[name].unbind();
	    }
	  };

	  return InterpolationBinding;
	}();

	var ChildInterpolationBinding = exports.ChildInterpolationBinding = (_dec = (0, _aureliaBinding.connectable)(), _dec(_class2 = function () {
	  function ChildInterpolationBinding(target, observerLocator, sourceExpression, mode, lookupFunctions, targetProperty, left, right) {
	    

	    if (target instanceof InterpolationBinding) {
	      this.parent = target;
	    } else {
	      validateTarget(target, targetProperty);
	      this.target = target;
	      this.targetProperty = targetProperty;
	      this.targetAccessor = observerLocator.getAccessor(target, targetProperty);
	    }
	    this.observerLocator = observerLocator;
	    this.sourceExpression = sourceExpression;
	    this.mode = mode;
	    this.lookupFunctions = lookupFunctions;
	    this.left = left;
	    this.right = right;
	  }

	  ChildInterpolationBinding.prototype.updateTarget = function updateTarget(value) {
	    value = value === null || value === undefined ? '' : value.toString();
	    if (value !== this.value) {
	      this.value = value;
	      if (this.parent) {
	        this.parent.interpolate();
	      } else {
	        this.targetAccessor.setValue(this.left + value + this.right, this.target, this.targetProperty);
	      }
	    }
	  };

	  ChildInterpolationBinding.prototype.call = function call() {
	    if (!this.isBound) {
	      return;
	    }

	    this.rawValue = this.sourceExpression.evaluate(this.source, this.lookupFunctions);
	    this.updateTarget(this.rawValue);

	    if (this.mode !== _aureliaBinding.bindingMode.oneTime) {
	      this._version++;
	      this.sourceExpression.connect(this, this.source);
	      if (this.rawValue instanceof Array) {
	        this.observeArray(this.rawValue);
	      }
	      this.unobserve(false);
	    }
	  };

	  ChildInterpolationBinding.prototype.bind = function bind(source) {
	    if (this.isBound) {
	      if (this.source === source) {
	        return;
	      }
	      this.unbind();
	    }
	    this.isBound = true;
	    this.source = source;

	    var sourceExpression = this.sourceExpression;
	    if (sourceExpression.bind) {
	      sourceExpression.bind(this, source, this.lookupFunctions);
	    }

	    this.rawValue = sourceExpression.evaluate(source, this.lookupFunctions);
	    this.updateTarget(this.rawValue);

	    if (this.mode === _aureliaBinding.bindingMode.oneWay) {
	      (0, _aureliaBinding.enqueueBindingConnect)(this);
	    }
	  };

	  ChildInterpolationBinding.prototype.unbind = function unbind() {
	    if (!this.isBound) {
	      return;
	    }
	    this.isBound = false;
	    var sourceExpression = this.sourceExpression;
	    if (sourceExpression.unbind) {
	      sourceExpression.unbind(this, this.source);
	    }
	    this.source = null;
	    this.value = null;
	    this.rawValue = null;
	    this.unobserve(true);
	  };

	  ChildInterpolationBinding.prototype.connect = function connect(evaluate) {
	    if (!this.isBound) {
	      return;
	    }
	    if (evaluate) {
	      this.rawValue = this.sourceExpression.evaluate(this.source, this.lookupFunctions);
	      this.updateTarget(this.rawValue);
	    }
	    this.sourceExpression.connect(this, this.source);
	    if (this.rawValue instanceof Array) {
	      this.observeArray(this.rawValue);
	    }
	  };

	  return ChildInterpolationBinding;
	}()) || _class2);
	var SyntaxInterpreter = exports.SyntaxInterpreter = (_temp2 = _class3 = function () {
	  function SyntaxInterpreter(parser, observerLocator, eventManager, attributeMap) {
	    

	    this.parser = parser;
	    this.observerLocator = observerLocator;
	    this.eventManager = eventManager;
	    this.attributeMap = attributeMap;
	  }

	  SyntaxInterpreter.prototype.interpret = function interpret(resources, element, info, existingInstruction, context) {
	    if (info.command in this) {
	      return this[info.command](resources, element, info, existingInstruction, context);
	    }

	    return this.handleUnknownCommand(resources, element, info, existingInstruction, context);
	  };

	  SyntaxInterpreter.prototype.handleUnknownCommand = function handleUnknownCommand(resources, element, info, existingInstruction, context) {
	    LogManager.getLogger('templating-binding').warn('Unknown binding command.', info);
	    return existingInstruction;
	  };

	  SyntaxInterpreter.prototype.determineDefaultBindingMode = function determineDefaultBindingMode(element, attrName, context) {
	    var tagName = element.tagName.toLowerCase();

	    if (tagName === 'input' && (attrName === 'value' || attrName === 'files') && element.type !== 'checkbox' && element.type !== 'radio' || tagName === 'input' && attrName === 'checked' && (element.type === 'checkbox' || element.type === 'radio') || (tagName === 'textarea' || tagName === 'select') && attrName === 'value' || (attrName === 'textcontent' || attrName === 'innerhtml') && element.contentEditable === 'true' || attrName === 'scrolltop' || attrName === 'scrollleft') {
	      return _aureliaBinding.bindingMode.twoWay;
	    }

	    if (context && attrName in context.attributes && context.attributes[attrName] && context.attributes[attrName].defaultBindingMode >= _aureliaBinding.bindingMode.oneTime) {
	      return context.attributes[attrName].defaultBindingMode;
	    }

	    return _aureliaBinding.bindingMode.oneWay;
	  };

	  SyntaxInterpreter.prototype.bind = function bind(resources, element, info, existingInstruction, context) {
	    var instruction = existingInstruction || _aureliaTemplating.BehaviorInstruction.attribute(info.attrName);

	    instruction.attributes[info.attrName] = new _aureliaBinding.BindingExpression(this.observerLocator, this.attributeMap.map(element.tagName, info.attrName), this.parser.parse(info.attrValue), info.defaultBindingMode || this.determineDefaultBindingMode(element, info.attrName, context), resources.lookupFunctions);

	    return instruction;
	  };

	  SyntaxInterpreter.prototype.trigger = function trigger(resources, element, info) {
	    return new _aureliaBinding.ListenerExpression(this.eventManager, info.attrName, this.parser.parse(info.attrValue), false, true, resources.lookupFunctions);
	  };

	  SyntaxInterpreter.prototype.delegate = function delegate(resources, element, info) {
	    return new _aureliaBinding.ListenerExpression(this.eventManager, info.attrName, this.parser.parse(info.attrValue), true, true, resources.lookupFunctions);
	  };

	  SyntaxInterpreter.prototype.call = function call(resources, element, info, existingInstruction) {
	    var instruction = existingInstruction || _aureliaTemplating.BehaviorInstruction.attribute(info.attrName);

	    instruction.attributes[info.attrName] = new _aureliaBinding.CallExpression(this.observerLocator, info.attrName, this.parser.parse(info.attrValue), resources.lookupFunctions);

	    return instruction;
	  };

	  SyntaxInterpreter.prototype.options = function options(resources, element, info, existingInstruction, context) {
	    var instruction = existingInstruction || _aureliaTemplating.BehaviorInstruction.attribute(info.attrName);
	    var attrValue = info.attrValue;
	    var language = this.language;
	    var name = null;
	    var target = '';
	    var current = void 0;
	    var i = void 0;
	    var ii = void 0;
	    var inString = false;
	    var inEscape = false;

	    for (i = 0, ii = attrValue.length; i < ii; ++i) {
	      current = attrValue[i];

	      if (current === ';' && !inString) {
	        info = language.inspectAttribute(resources, '?', name, target.trim());
	        language.createAttributeInstruction(resources, element, info, instruction, context);

	        if (!instruction.attributes[info.attrName]) {
	          instruction.attributes[info.attrName] = info.attrValue;
	        }

	        target = '';
	        name = null;
	      } else if (current === ':' && name === null) {
	        name = target.trim();
	        target = '';
	      } else if (current === '\\') {
	        target += current;
	        inEscape = true;
	        continue;
	      } else {
	        target += current;

	        if (name !== null && inEscape === false && current === '\'') {
	          inString = !inString;
	        }
	      }

	      inEscape = false;
	    }

	    if (name !== null) {
	      info = language.inspectAttribute(resources, '?', name, target.trim());
	      language.createAttributeInstruction(resources, element, info, instruction, context);

	      if (!instruction.attributes[info.attrName]) {
	        instruction.attributes[info.attrName] = info.attrValue;
	      }
	    }

	    return instruction;
	  };

	  SyntaxInterpreter.prototype['for'] = function _for(resources, element, info, existingInstruction) {
	    var parts = void 0;
	    var keyValue = void 0;
	    var instruction = void 0;
	    var attrValue = void 0;
	    var isDestructuring = void 0;

	    attrValue = info.attrValue;
	    isDestructuring = attrValue.match(/^ *[[].+[\]]/);
	    parts = isDestructuring ? attrValue.split('of ') : attrValue.split(' of ');

	    if (parts.length !== 2) {
	      throw new Error('Incorrect syntax for "for". The form is: "$local of $items" or "[$key, $value] of $items".');
	    }

	    instruction = existingInstruction || _aureliaTemplating.BehaviorInstruction.attribute(info.attrName);

	    if (isDestructuring) {
	      keyValue = parts[0].replace(/[[\]]/g, '').replace(/,/g, ' ').replace(/\s+/g, ' ').trim().split(' ');
	      instruction.attributes.key = keyValue[0];
	      instruction.attributes.value = keyValue[1];
	    } else {
	      instruction.attributes.local = parts[0];
	    }

	    instruction.attributes.items = new _aureliaBinding.BindingExpression(this.observerLocator, 'items', this.parser.parse(parts[1]), _aureliaBinding.bindingMode.oneWay, resources.lookupFunctions);

	    return instruction;
	  };

	  SyntaxInterpreter.prototype['two-way'] = function twoWay(resources, element, info, existingInstruction) {
	    var instruction = existingInstruction || _aureliaTemplating.BehaviorInstruction.attribute(info.attrName);

	    instruction.attributes[info.attrName] = new _aureliaBinding.BindingExpression(this.observerLocator, this.attributeMap.map(element.tagName, info.attrName), this.parser.parse(info.attrValue), _aureliaBinding.bindingMode.twoWay, resources.lookupFunctions);

	    return instruction;
	  };

	  SyntaxInterpreter.prototype['one-way'] = function oneWay(resources, element, info, existingInstruction) {
	    var instruction = existingInstruction || _aureliaTemplating.BehaviorInstruction.attribute(info.attrName);

	    instruction.attributes[info.attrName] = new _aureliaBinding.BindingExpression(this.observerLocator, this.attributeMap.map(element.tagName, info.attrName), this.parser.parse(info.attrValue), _aureliaBinding.bindingMode.oneWay, resources.lookupFunctions);

	    return instruction;
	  };

	  SyntaxInterpreter.prototype['one-time'] = function oneTime(resources, element, info, existingInstruction) {
	    var instruction = existingInstruction || _aureliaTemplating.BehaviorInstruction.attribute(info.attrName);

	    instruction.attributes[info.attrName] = new _aureliaBinding.BindingExpression(this.observerLocator, this.attributeMap.map(element.tagName, info.attrName), this.parser.parse(info.attrValue), _aureliaBinding.bindingMode.oneTime, resources.lookupFunctions);

	    return instruction;
	  };

	  return SyntaxInterpreter;
	}(), _class3.inject = [_aureliaBinding.Parser, _aureliaBinding.ObserverLocator, _aureliaBinding.EventManager, AttributeMap], _temp2);

	var info = {};

	var TemplatingBindingLanguage = exports.TemplatingBindingLanguage = (_temp3 = _class4 = function (_BindingLanguage) {
	  _inherits(TemplatingBindingLanguage, _BindingLanguage);

	  function TemplatingBindingLanguage(parser, observerLocator, syntaxInterpreter, attributeMap) {
	    

	    var _this = _possibleConstructorReturn(this, _BindingLanguage.call(this));

	    _this.parser = parser;
	    _this.observerLocator = observerLocator;
	    _this.syntaxInterpreter = syntaxInterpreter;
	    _this.emptyStringExpression = _this.parser.parse('\'\'');
	    syntaxInterpreter.language = _this;
	    _this.attributeMap = attributeMap;
	    return _this;
	  }

	  TemplatingBindingLanguage.prototype.inspectAttribute = function inspectAttribute(resources, elementName, attrName, attrValue) {
	    var parts = attrName.split('.');

	    info.defaultBindingMode = null;

	    if (parts.length === 2) {
	      info.attrName = parts[0].trim();
	      info.attrValue = attrValue;
	      info.command = parts[1].trim();

	      if (info.command === 'ref') {
	        info.expression = new _aureliaBinding.NameExpression(this.parser.parse(attrValue), info.attrName, resources.lookupFunctions);
	        info.command = null;
	        info.attrName = 'ref';
	      } else {
	        info.expression = null;
	      }
	    } else if (attrName === 'ref') {
	      info.attrName = attrName;
	      info.attrValue = attrValue;
	      info.command = null;
	      info.expression = new _aureliaBinding.NameExpression(this.parser.parse(attrValue), 'element', resources.lookupFunctions);
	    } else {
	      info.attrName = attrName;
	      info.attrValue = attrValue;
	      info.command = null;
	      var interpolationParts = this.parseInterpolation(resources, attrValue);
	      if (interpolationParts === null) {
	        info.expression = null;
	      } else {
	        info.expression = new InterpolationBindingExpression(this.observerLocator, this.attributeMap.map(elementName, attrName), interpolationParts, _aureliaBinding.bindingMode.oneWay, resources.lookupFunctions, attrName);
	      }
	    }

	    return info;
	  };

	  TemplatingBindingLanguage.prototype.createAttributeInstruction = function createAttributeInstruction(resources, element, theInfo, existingInstruction, context) {
	    var instruction = void 0;

	    if (theInfo.expression) {
	      if (theInfo.attrName === 'ref') {
	        return theInfo.expression;
	      }

	      instruction = existingInstruction || _aureliaTemplating.BehaviorInstruction.attribute(theInfo.attrName);
	      instruction.attributes[theInfo.attrName] = theInfo.expression;
	    } else if (theInfo.command) {
	      instruction = this.syntaxInterpreter.interpret(resources, element, theInfo, existingInstruction, context);
	    }

	    return instruction;
	  };

	  TemplatingBindingLanguage.prototype.inspectTextContent = function inspectTextContent(resources, value) {
	    var parts = this.parseInterpolation(resources, value);
	    if (parts === null) {
	      return null;
	    }
	    return new InterpolationBindingExpression(this.observerLocator, 'textContent', parts, _aureliaBinding.bindingMode.oneWay, resources.lookupFunctions, 'textContent');
	  };

	  TemplatingBindingLanguage.prototype.parseInterpolation = function parseInterpolation(resources, value) {
	    var i = value.indexOf('${', 0);
	    var ii = value.length;
	    var char = void 0;
	    var pos = 0;
	    var open = 0;
	    var quote = null;
	    var interpolationStart = void 0;
	    var parts = void 0;
	    var partIndex = 0;

	    while (i >= 0 && i < ii - 2) {
	      open = 1;
	      interpolationStart = i;
	      i += 2;

	      do {
	        char = value[i];
	        i++;

	        if (char === "'" || char === '"') {
	          if (quote === null) {
	            quote = char;
	          } else if (quote === char) {
	            quote = null;
	          }
	          continue;
	        }

	        if (char === '\\') {
	          i++;
	          continue;
	        }

	        if (quote !== null) {
	          continue;
	        }

	        if (char === '{') {
	          open++;
	        } else if (char === '}') {
	          open--;
	        }
	      } while (open > 0 && i < ii);

	      if (open === 0) {
	        parts = parts || [];
	        if (value[interpolationStart - 1] === '\\' && value[interpolationStart - 2] !== '\\') {
	          parts[partIndex] = value.substring(pos, interpolationStart - 1) + value.substring(interpolationStart, i);
	          partIndex++;
	          parts[partIndex] = this.emptyStringExpression;
	          partIndex++;
	        } else {
	          parts[partIndex] = value.substring(pos, interpolationStart);
	          partIndex++;
	          parts[partIndex] = this.parser.parse(value.substring(interpolationStart + 2, i - 1));
	          partIndex++;
	        }
	        pos = i;
	        i = value.indexOf('${', i);
	      } else {
	        break;
	      }
	    }

	    if (partIndex === 0) {
	      return null;
	    }

	    parts[partIndex] = value.substr(pos);
	    return parts;
	  };

	  return TemplatingBindingLanguage;
	}(_aureliaTemplating.BindingLanguage), _class4.inject = [_aureliaBinding.Parser, _aureliaBinding.ObserverLocator, SyntaxInterpreter, AttributeMap], _temp3);
	function configure(config) {
	  config.container.registerSingleton(_aureliaTemplating.BindingLanguage, TemplatingBindingLanguage);
	  config.container.registerAlias(_aureliaTemplating.BindingLanguage, TemplatingBindingLanguage);
	}

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.viewsRequireLifecycle = exports.unwrapExpression = exports.updateOneTimeBinding = exports.isOneTime = exports.getItemsSourceExpression = exports.updateOverrideContext = exports.createFullOverrideContext = exports.NumberRepeatStrategy = exports.SetRepeatStrategy = exports.MapRepeatStrategy = exports.ArrayRepeatStrategy = exports.NullRepeatStrategy = exports.RepeatStrategyLocator = exports.AbstractRepeater = exports.UpdateTriggerBindingBehavior = exports.BindingSignaler = exports.SignalBindingBehavior = exports.DebounceBindingBehavior = exports.ThrottleBindingBehavior = exports.TwoWayBindingBehavior = exports.OneWayBindingBehavior = exports.OneTimeBindingBehavior = exports.configure = exports.Focus = exports.Replaceable = exports.SanitizeHTMLValueConverter = exports.HTMLSanitizer = exports.Hide = exports.Show = exports.Repeat = exports.With = exports.If = exports.Compose = undefined;

	var _compose = __webpack_require__(182);

	var _if = __webpack_require__(183);

	var _with = __webpack_require__(184);

	var _repeat = __webpack_require__(185);

	var _show = __webpack_require__(195);

	var _hide = __webpack_require__(197);

	var _sanitizeHtml = __webpack_require__(198);

	var _replaceable = __webpack_require__(200);

	var _focus = __webpack_require__(201);

	var _aureliaTemplating = __webpack_require__(23);

	var _cssResource = __webpack_require__(202);

	var _htmlSanitizer = __webpack_require__(199);

	var _bindingModeBehaviors = __webpack_require__(203);

	var _throttleBindingBehavior = __webpack_require__(204);

	var _debounceBindingBehavior = __webpack_require__(205);

	var _signalBindingBehavior = __webpack_require__(206);

	var _bindingSignaler = __webpack_require__(207);

	var _updateTriggerBindingBehavior = __webpack_require__(208);

	var _abstractRepeater = __webpack_require__(194);

	var _repeatStrategyLocator = __webpack_require__(186);

	var _htmlResourcePlugin = __webpack_require__(209);

	var _nullRepeatStrategy = __webpack_require__(187);

	var _arrayRepeatStrategy = __webpack_require__(188);

	var _mapRepeatStrategy = __webpack_require__(190);

	var _setRepeatStrategy = __webpack_require__(191);

	var _numberRepeatStrategy = __webpack_require__(192);

	var _repeatUtilities = __webpack_require__(189);

	var _analyzeViewFactory = __webpack_require__(193);

	var _aureliaHideStyle = __webpack_require__(196);

	function configure(config) {
	  (0, _aureliaHideStyle.injectAureliaHideStyleAtHead)();

	  config.globalResources('./compose', './if', './with', './repeat', './show', './hide', './replaceable', './sanitize-html', './focus', './binding-mode-behaviors', './throttle-binding-behavior', './debounce-binding-behavior', './signal-binding-behavior', './update-trigger-binding-behavior');

	  (0, _htmlResourcePlugin.configure)(config);

	  var viewEngine = config.container.get(_aureliaTemplating.ViewEngine);
	  viewEngine.addResourcePlugin('.css', {
	    'fetch': function fetch(address) {
	      var _ref;

	      return _ref = {}, _ref[address] = (0, _cssResource._createCSSResource)(address), _ref;
	    }
	  });
	}

	exports.Compose = _compose.Compose;
	exports.If = _if.If;
	exports.With = _with.With;
	exports.Repeat = _repeat.Repeat;
	exports.Show = _show.Show;
	exports.Hide = _hide.Hide;
	exports.HTMLSanitizer = _htmlSanitizer.HTMLSanitizer;
	exports.SanitizeHTMLValueConverter = _sanitizeHtml.SanitizeHTMLValueConverter;
	exports.Replaceable = _replaceable.Replaceable;
	exports.Focus = _focus.Focus;
	exports.configure = configure;
	exports.OneTimeBindingBehavior = _bindingModeBehaviors.OneTimeBindingBehavior;
	exports.OneWayBindingBehavior = _bindingModeBehaviors.OneWayBindingBehavior;
	exports.TwoWayBindingBehavior = _bindingModeBehaviors.TwoWayBindingBehavior;
	exports.ThrottleBindingBehavior = _throttleBindingBehavior.ThrottleBindingBehavior;
	exports.DebounceBindingBehavior = _debounceBindingBehavior.DebounceBindingBehavior;
	exports.SignalBindingBehavior = _signalBindingBehavior.SignalBindingBehavior;
	exports.BindingSignaler = _bindingSignaler.BindingSignaler;
	exports.UpdateTriggerBindingBehavior = _updateTriggerBindingBehavior.UpdateTriggerBindingBehavior;
	exports.AbstractRepeater = _abstractRepeater.AbstractRepeater;
	exports.RepeatStrategyLocator = _repeatStrategyLocator.RepeatStrategyLocator;
	exports.NullRepeatStrategy = _nullRepeatStrategy.NullRepeatStrategy;
	exports.ArrayRepeatStrategy = _arrayRepeatStrategy.ArrayRepeatStrategy;
	exports.MapRepeatStrategy = _mapRepeatStrategy.MapRepeatStrategy;
	exports.SetRepeatStrategy = _setRepeatStrategy.SetRepeatStrategy;
	exports.NumberRepeatStrategy = _numberRepeatStrategy.NumberRepeatStrategy;
	exports.createFullOverrideContext = _repeatUtilities.createFullOverrideContext;
	exports.updateOverrideContext = _repeatUtilities.updateOverrideContext;
	exports.getItemsSourceExpression = _repeatUtilities.getItemsSourceExpression;
	exports.isOneTime = _repeatUtilities.isOneTime;
	exports.updateOneTimeBinding = _repeatUtilities.updateOneTimeBinding;
	exports.unwrapExpression = _repeatUtilities.unwrapExpression;
	exports.viewsRequireLifecycle = _analyzeViewFactory.viewsRequireLifecycle;

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Compose = undefined;

	var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3;

	var _aureliaDependencyInjection = __webpack_require__(19);

	var _aureliaTaskQueue = __webpack_require__(22);

	var _aureliaTemplating = __webpack_require__(23);

	var _aureliaPal = __webpack_require__(7);

	function _initDefineProp(target, property, descriptor, context) {
	  if (!descriptor) return;
	  Object.defineProperty(target, property, {
	    enumerable: descriptor.enumerable,
	    configurable: descriptor.configurable,
	    writable: descriptor.writable,
	    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	  });
	}



	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;

	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }

	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);

	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }

	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }

	  return desc;
	}

	function _initializerWarningHelper(descriptor, context) {
	  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
	}

	var Compose = exports.Compose = (_dec = (0, _aureliaTemplating.customElement)('compose'), _dec2 = (0, _aureliaDependencyInjection.inject)(_aureliaPal.DOM.Element, _aureliaDependencyInjection.Container, _aureliaTemplating.CompositionEngine, _aureliaTemplating.ViewSlot, _aureliaTemplating.ViewResources, _aureliaTaskQueue.TaskQueue), _dec(_class = (0, _aureliaTemplating.noView)(_class = _dec2(_class = (_class2 = function () {
	  function Compose(element, container, compositionEngine, viewSlot, viewResources, taskQueue) {
	    

	    _initDefineProp(this, 'model', _descriptor, this);

	    _initDefineProp(this, 'view', _descriptor2, this);

	    _initDefineProp(this, 'viewModel', _descriptor3, this);

	    this.element = element;
	    this.container = container;
	    this.compositionEngine = compositionEngine;
	    this.viewSlot = viewSlot;
	    this.viewResources = viewResources;
	    this.taskQueue = taskQueue;
	    this.currentController = null;
	    this.currentViewModel = null;
	  }

	  Compose.prototype.created = function created(owningView) {
	    this.owningView = owningView;
	  };

	  Compose.prototype.bind = function bind(bindingContext, overrideContext) {
	    this.bindingContext = bindingContext;
	    this.overrideContext = overrideContext;
	    processInstruction(this, createInstruction(this, {
	      view: this.view,
	      viewModel: this.viewModel,
	      model: this.model
	    }));
	  };

	  Compose.prototype.unbind = function unbind(bindingContext, overrideContext) {
	    this.bindingContext = null;
	    this.overrideContext = null;
	    var returnToCache = true;
	    var skipAnimation = true;
	    this.viewSlot.removeAll(returnToCache, skipAnimation);
	  };

	  Compose.prototype.modelChanged = function modelChanged(newValue, oldValue) {
	    var _this = this;

	    if (this.currentInstruction) {
	      this.currentInstruction.model = newValue;
	      return;
	    }

	    this.taskQueue.queueMicroTask(function () {
	      if (_this.currentInstruction) {
	        _this.currentInstruction.model = newValue;
	        return;
	      }

	      var vm = _this.currentViewModel;

	      if (vm && typeof vm.activate === 'function') {
	        vm.activate(newValue);
	      }
	    });
	  };

	  Compose.prototype.viewChanged = function viewChanged(newValue, oldValue) {
	    var _this2 = this;

	    var instruction = createInstruction(this, {
	      view: newValue,
	      viewModel: this.currentViewModel || this.viewModel,
	      model: this.model
	    });

	    if (this.currentInstruction) {
	      this.currentInstruction = instruction;
	      return;
	    }

	    this.currentInstruction = instruction;
	    this.taskQueue.queueMicroTask(function () {
	      return processInstruction(_this2, _this2.currentInstruction);
	    });
	  };

	  Compose.prototype.viewModelChanged = function viewModelChanged(newValue, oldValue) {
	    var _this3 = this;

	    var instruction = createInstruction(this, {
	      viewModel: newValue,
	      view: this.view,
	      model: this.model
	    });

	    if (this.currentInstruction) {
	      this.currentInstruction = instruction;
	      return;
	    }

	    this.currentInstruction = instruction;
	    this.taskQueue.queueMicroTask(function () {
	      return processInstruction(_this3, _this3.currentInstruction);
	    });
	  };

	  return Compose;
	}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'model', [_aureliaTemplating.bindable], {
	  enumerable: true,
	  initializer: null
	}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'view', [_aureliaTemplating.bindable], {
	  enumerable: true,
	  initializer: null
	}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'viewModel', [_aureliaTemplating.bindable], {
	  enumerable: true,
	  initializer: null
	})), _class2)) || _class) || _class) || _class);


	function createInstruction(composer, instruction) {
	  return Object.assign(instruction, {
	    bindingContext: composer.bindingContext,
	    overrideContext: composer.overrideContext,
	    owningView: composer.owningView,
	    container: composer.container,
	    viewSlot: composer.viewSlot,
	    viewResources: composer.viewResources,
	    currentController: composer.currentController,
	    host: composer.element
	  });
	}

	function processInstruction(composer, instruction) {
	  composer.currentInstruction = null;
	  composer.compositionEngine.compose(instruction).then(function (controller) {
	    composer.currentController = controller;
	    composer.currentViewModel = controller ? controller.viewModel : null;
	  });
	}

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Promise) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.If = undefined;

	var _dec, _dec2, _class;

	var _aureliaTemplating = __webpack_require__(23);

	var _aureliaDependencyInjection = __webpack_require__(19);



	var If = exports.If = (_dec = (0, _aureliaTemplating.customAttribute)('if'), _dec2 = (0, _aureliaDependencyInjection.inject)(_aureliaTemplating.BoundViewFactory, _aureliaTemplating.ViewSlot), _dec(_class = (0, _aureliaTemplating.templateController)(_class = _dec2(_class = function () {
	  function If(viewFactory, viewSlot) {
	    

	    this.viewFactory = viewFactory;
	    this.viewSlot = viewSlot;
	    this.showing = false;
	    this.view = null;
	    this.bindingContext = null;
	    this.overrideContext = null;
	  }

	  If.prototype.bind = function bind(bindingContext, overrideContext) {
	    this.bindingContext = bindingContext;
	    this.overrideContext = overrideContext;
	    this.valueChanged(this.value);
	  };

	  If.prototype.valueChanged = function valueChanged(newValue) {
	    var _this = this;

	    if (this.__queuedChanges) {
	      this.__queuedChanges.push(newValue);
	      return;
	    }

	    var maybePromise = this._runValueChanged(newValue);
	    if (maybePromise instanceof Promise) {
	      (function () {
	        var queuedChanges = _this.__queuedChanges = [];

	        var runQueuedChanges = function runQueuedChanges() {
	          if (!queuedChanges.length) {
	            _this.__queuedChanges = undefined;
	            return;
	          }

	          var nextPromise = _this._runValueChanged(queuedChanges.shift()) || Promise.resolve();
	          nextPromise.then(runQueuedChanges);
	        };

	        maybePromise.then(runQueuedChanges);
	      })();
	    }
	  };

	  If.prototype._runValueChanged = function _runValueChanged(newValue) {
	    var _this2 = this;

	    if (!newValue) {
	      var viewOrPromise = void 0;
	      if (this.view !== null && this.showing) {
	        viewOrPromise = this.viewSlot.remove(this.view);
	        if (viewOrPromise instanceof Promise) {
	          viewOrPromise.then(function () {
	            return _this2.view.unbind();
	          });
	        } else {
	          this.view.unbind();
	        }
	      }

	      this.showing = false;
	      return viewOrPromise;
	    }

	    if (this.view === null) {
	      this.view = this.viewFactory.create();
	    }

	    if (!this.view.isBound) {
	      this.view.bind(this.bindingContext, this.overrideContext);
	    }

	    if (!this.showing) {
	      this.showing = true;
	      return this.viewSlot.add(this.view);
	    }

	    return undefined;
	  };

	  If.prototype.unbind = function unbind() {
	    if (this.view === null) {
	      return;
	    }

	    this.view.unbind();

	    if (!this.viewFactory.isCaching) {
	      return;
	    }

	    if (this.showing) {
	      this.showing = false;
	      this.viewSlot.remove(this.view, true, true);
	    }
	    this.view.returnToCache();
	    this.view = null;
	  };

	  return If;
	}()) || _class) || _class) || _class);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.With = undefined;

	var _dec, _dec2, _class;

	var _aureliaDependencyInjection = __webpack_require__(19);

	var _aureliaTemplating = __webpack_require__(23);

	var _aureliaBinding = __webpack_require__(20);



	var With = exports.With = (_dec = (0, _aureliaTemplating.customAttribute)('with'), _dec2 = (0, _aureliaDependencyInjection.inject)(_aureliaTemplating.BoundViewFactory, _aureliaTemplating.ViewSlot), _dec(_class = (0, _aureliaTemplating.templateController)(_class = _dec2(_class = function () {
	  function With(viewFactory, viewSlot) {
	    

	    this.viewFactory = viewFactory;
	    this.viewSlot = viewSlot;
	    this.parentOverrideContext = null;
	    this.view = null;
	  }

	  With.prototype.bind = function bind(bindingContext, overrideContext) {
	    this.parentOverrideContext = overrideContext;
	    this.valueChanged(this.value);
	  };

	  With.prototype.valueChanged = function valueChanged(newValue) {
	    var overrideContext = (0, _aureliaBinding.createOverrideContext)(newValue, this.parentOverrideContext);
	    if (!this.view) {
	      this.view = this.viewFactory.create();
	      this.view.bind(newValue, overrideContext);
	      this.viewSlot.add(this.view);
	    } else {
	      this.view.bind(newValue, overrideContext);
	    }
	  };

	  With.prototype.unbind = function unbind() {
	    this.parentOverrideContext = null;

	    if (this.view) {
	      this.view.unbind();
	    }
	  };

	  return With;
	}()) || _class) || _class) || _class);

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Repeat = undefined;

	var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

	var _aureliaDependencyInjection = __webpack_require__(19);

	var _aureliaBinding = __webpack_require__(20);

	var _aureliaTemplating = __webpack_require__(23);

	var _repeatStrategyLocator = __webpack_require__(186);

	var _repeatUtilities = __webpack_require__(189);

	var _analyzeViewFactory = __webpack_require__(193);

	var _abstractRepeater = __webpack_require__(194);

	function _initDefineProp(target, property, descriptor, context) {
	  if (!descriptor) return;
	  Object.defineProperty(target, property, {
	    enumerable: descriptor.enumerable,
	    configurable: descriptor.configurable,
	    writable: descriptor.writable,
	    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	  });
	}



	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;

	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }

	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);

	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }

	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }

	  return desc;
	}

	function _initializerWarningHelper(descriptor, context) {
	  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
	}

	var Repeat = exports.Repeat = (_dec = (0, _aureliaTemplating.customAttribute)('repeat'), _dec2 = (0, _aureliaDependencyInjection.inject)(_aureliaTemplating.BoundViewFactory, _aureliaTemplating.TargetInstruction, _aureliaTemplating.ViewSlot, _aureliaTemplating.ViewResources, _aureliaBinding.ObserverLocator, _repeatStrategyLocator.RepeatStrategyLocator), _dec(_class = (0, _aureliaTemplating.templateController)(_class = _dec2(_class = (_class2 = function (_AbstractRepeater) {
	  _inherits(Repeat, _AbstractRepeater);

	  function Repeat(viewFactory, instruction, viewSlot, viewResources, observerLocator, strategyLocator) {
	    

	    var _this = _possibleConstructorReturn(this, _AbstractRepeater.call(this, {
	      local: 'item',
	      viewsRequireLifecycle: (0, _analyzeViewFactory.viewsRequireLifecycle)(viewFactory)
	    }));

	    _initDefineProp(_this, 'items', _descriptor, _this);

	    _initDefineProp(_this, 'local', _descriptor2, _this);

	    _initDefineProp(_this, 'key', _descriptor3, _this);

	    _initDefineProp(_this, 'value', _descriptor4, _this);

	    _this.viewFactory = viewFactory;
	    _this.instruction = instruction;
	    _this.viewSlot = viewSlot;
	    _this.lookupFunctions = viewResources.lookupFunctions;
	    _this.observerLocator = observerLocator;
	    _this.key = 'key';
	    _this.value = 'value';
	    _this.strategyLocator = strategyLocator;
	    _this.ignoreMutation = false;
	    _this.sourceExpression = (0, _repeatUtilities.getItemsSourceExpression)(_this.instruction, 'repeat.for');
	    _this.isOneTime = (0, _repeatUtilities.isOneTime)(_this.sourceExpression);
	    _this.viewsRequireLifecycle = (0, _analyzeViewFactory.viewsRequireLifecycle)(viewFactory);
	    return _this;
	  }

	  Repeat.prototype.call = function call(context, changes) {
	    this[context](this.items, changes);
	  };

	  Repeat.prototype.bind = function bind(bindingContext, overrideContext) {
	    this.scope = { bindingContext: bindingContext, overrideContext: overrideContext };
	    this.matcherBinding = this._captureAndRemoveMatcherBinding();
	    this.itemsChanged();
	  };

	  Repeat.prototype.unbind = function unbind() {
	    this.scope = null;
	    this.items = null;
	    this.matcherBinding = null;
	    this.viewSlot.removeAll(true);
	    this._unsubscribeCollection();
	  };

	  Repeat.prototype._unsubscribeCollection = function _unsubscribeCollection() {
	    if (this.collectionObserver) {
	      this.collectionObserver.unsubscribe(this.callContext, this);
	      this.collectionObserver = null;
	      this.callContext = null;
	    }
	  };

	  Repeat.prototype.itemsChanged = function itemsChanged() {
	    this._unsubscribeCollection();

	    if (!this.scope) {
	      return;
	    }

	    var items = this.items;
	    this.strategy = this.strategyLocator.getStrategy(items);
	    if (!this.strategy) {
	      throw new Error('Value for \'' + this.sourceExpression + '\' is non-repeatable');
	    }

	    if (!this.isOneTime && !this._observeInnerCollection()) {
	      this._observeCollection();
	    }
	    this.strategy.instanceChanged(this, items);
	  };

	  Repeat.prototype._getInnerCollection = function _getInnerCollection() {
	    var expression = (0, _repeatUtilities.unwrapExpression)(this.sourceExpression);
	    if (!expression) {
	      return null;
	    }
	    return expression.evaluate(this.scope, null);
	  };

	  Repeat.prototype.handleCollectionMutated = function handleCollectionMutated(collection, changes) {
	    if (!this.collectionObserver) {
	      return;
	    }
	    this.strategy.instanceMutated(this, collection, changes);
	  };

	  Repeat.prototype.handleInnerCollectionMutated = function handleInnerCollectionMutated(collection, changes) {
	    var _this2 = this;

	    if (!this.collectionObserver) {
	      return;
	    }

	    if (this.ignoreMutation) {
	      return;
	    }
	    this.ignoreMutation = true;
	    var newItems = this.sourceExpression.evaluate(this.scope, this.lookupFunctions);
	    this.observerLocator.taskQueue.queueMicroTask(function () {
	      return _this2.ignoreMutation = false;
	    });

	    if (newItems === this.items) {
	      this.itemsChanged();
	    } else {
	      this.items = newItems;
	    }
	  };

	  Repeat.prototype._observeInnerCollection = function _observeInnerCollection() {
	    var items = this._getInnerCollection();
	    var strategy = this.strategyLocator.getStrategy(items);
	    if (!strategy) {
	      return false;
	    }
	    this.collectionObserver = strategy.getCollectionObserver(this.observerLocator, items);
	    if (!this.collectionObserver) {
	      return false;
	    }
	    this.callContext = 'handleInnerCollectionMutated';
	    this.collectionObserver.subscribe(this.callContext, this);
	    return true;
	  };

	  Repeat.prototype._observeCollection = function _observeCollection() {
	    var items = this.items;
	    this.collectionObserver = this.strategy.getCollectionObserver(this.observerLocator, items);
	    if (this.collectionObserver) {
	      this.callContext = 'handleCollectionMutated';
	      this.collectionObserver.subscribe(this.callContext, this);
	    }
	  };

	  Repeat.prototype._captureAndRemoveMatcherBinding = function _captureAndRemoveMatcherBinding() {
	    if (this.viewFactory.viewFactory) {
	      var instructions = this.viewFactory.viewFactory.instructions;
	      var instructionIds = Object.keys(instructions);
	      for (var i = 0; i < instructionIds.length; i++) {
	        var expressions = instructions[instructionIds[i]].expressions;
	        if (expressions) {
	          for (var ii = 0; i < expressions.length; i++) {
	            if (expressions[ii].targetProperty === 'matcher') {
	              var matcherBinding = expressions[ii];
	              expressions.splice(ii, 1);
	              return matcherBinding;
	            }
	          }
	        }
	      }
	    }

	    return undefined;
	  };

	  Repeat.prototype.viewCount = function viewCount() {
	    return this.viewSlot.children.length;
	  };

	  Repeat.prototype.views = function views() {
	    return this.viewSlot.children;
	  };

	  Repeat.prototype.view = function view(index) {
	    return this.viewSlot.children[index];
	  };

	  Repeat.prototype.matcher = function matcher() {
	    return this.matcherBinding ? this.matcherBinding.sourceExpression.evaluate(this.scope, this.matcherBinding.lookupFunctions) : null;
	  };

	  Repeat.prototype.addView = function addView(bindingContext, overrideContext) {
	    var view = this.viewFactory.create();
	    view.bind(bindingContext, overrideContext);
	    this.viewSlot.add(view);
	  };

	  Repeat.prototype.insertView = function insertView(index, bindingContext, overrideContext) {
	    var view = this.viewFactory.create();
	    view.bind(bindingContext, overrideContext);
	    this.viewSlot.insert(index, view);
	  };

	  Repeat.prototype.moveView = function moveView(sourceIndex, targetIndex) {
	    this.viewSlot.move(sourceIndex, targetIndex);
	  };

	  Repeat.prototype.removeAllViews = function removeAllViews(returnToCache, skipAnimation) {
	    return this.viewSlot.removeAll(returnToCache, skipAnimation);
	  };

	  Repeat.prototype.removeViews = function removeViews(viewsToRemove, returnToCache, skipAnimation) {
	    return this.viewSlot.removeMany(viewsToRemove, returnToCache, skipAnimation);
	  };

	  Repeat.prototype.removeView = function removeView(index, returnToCache, skipAnimation) {
	    return this.viewSlot.removeAt(index, returnToCache, skipAnimation);
	  };

	  Repeat.prototype.updateBindings = function updateBindings(view) {
	    var j = view.bindings.length;
	    while (j--) {
	      (0, _repeatUtilities.updateOneTimeBinding)(view.bindings[j]);
	    }
	    j = view.controllers.length;
	    while (j--) {
	      var k = view.controllers[j].boundProperties.length;
	      while (k--) {
	        var binding = view.controllers[j].boundProperties[k].binding;
	        (0, _repeatUtilities.updateOneTimeBinding)(binding);
	      }
	    }
	  };

	  return Repeat;
	}(_abstractRepeater.AbstractRepeater), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'items', [_aureliaTemplating.bindable], {
	  enumerable: true,
	  initializer: null
	}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'local', [_aureliaTemplating.bindable], {
	  enumerable: true,
	  initializer: null
	}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'key', [_aureliaTemplating.bindable], {
	  enumerable: true,
	  initializer: null
	}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'value', [_aureliaTemplating.bindable], {
	  enumerable: true,
	  initializer: null
	})), _class2)) || _class) || _class) || _class);

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.RepeatStrategyLocator = undefined;

	var _nullRepeatStrategy = __webpack_require__(187);

	var _arrayRepeatStrategy = __webpack_require__(188);

	var _mapRepeatStrategy = __webpack_require__(190);

	var _setRepeatStrategy = __webpack_require__(191);

	var _numberRepeatStrategy = __webpack_require__(192);



	var RepeatStrategyLocator = exports.RepeatStrategyLocator = function () {
	  function RepeatStrategyLocator() {
	    

	    this.matchers = [];
	    this.strategies = [];

	    this.addStrategy(function (items) {
	      return items === null || items === undefined;
	    }, new _nullRepeatStrategy.NullRepeatStrategy());
	    this.addStrategy(function (items) {
	      return items instanceof Array;
	    }, new _arrayRepeatStrategy.ArrayRepeatStrategy());
	    this.addStrategy(function (items) {
	      return items instanceof Map;
	    }, new _mapRepeatStrategy.MapRepeatStrategy());
	    this.addStrategy(function (items) {
	      return items instanceof Set;
	    }, new _setRepeatStrategy.SetRepeatStrategy());
	    this.addStrategy(function (items) {
	      return typeof items === 'number';
	    }, new _numberRepeatStrategy.NumberRepeatStrategy());
	  }

	  RepeatStrategyLocator.prototype.addStrategy = function addStrategy(matcher, strategy) {
	    this.matchers.push(matcher);
	    this.strategies.push(strategy);
	  };

	  RepeatStrategyLocator.prototype.getStrategy = function getStrategy(items) {
	    var matchers = this.matchers;

	    for (var i = 0, ii = matchers.length; i < ii; ++i) {
	      if (matchers[i](items)) {
	        return this.strategies[i];
	      }
	    }

	    return null;
	  };

	  return RepeatStrategyLocator;
	}();

/***/ },
/* 187 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});



	var NullRepeatStrategy = exports.NullRepeatStrategy = function () {
	  function NullRepeatStrategy() {
	    
	  }

	  NullRepeatStrategy.prototype.instanceChanged = function instanceChanged(repeat, items) {
	    repeat.removeAllViews(true);
	  };

	  NullRepeatStrategy.prototype.getCollectionObserver = function getCollectionObserver(observerLocator, items) {};

	  return NullRepeatStrategy;
	}();

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Promise) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ArrayRepeatStrategy = undefined;

	var _repeatUtilities = __webpack_require__(189);

	var _aureliaBinding = __webpack_require__(20);



	var ArrayRepeatStrategy = exports.ArrayRepeatStrategy = function () {
	  function ArrayRepeatStrategy() {
	    
	  }

	  ArrayRepeatStrategy.prototype.getCollectionObserver = function getCollectionObserver(observerLocator, items) {
	    return observerLocator.getArrayObserver(items);
	  };

	  ArrayRepeatStrategy.prototype.instanceChanged = function instanceChanged(repeat, items) {
	    var _this = this;

	    var itemsLength = items.length;

	    if (!items || itemsLength === 0) {
	      repeat.removeAllViews(true, !repeat.viewsRequireLifecycle);
	      return;
	    }

	    var children = repeat.views();
	    var viewsLength = children.length;

	    if (viewsLength === 0) {
	      this._standardProcessInstanceChanged(repeat, items);
	      return;
	    }

	    if (repeat.viewsRequireLifecycle) {
	      (function () {
	        var childrenSnapshot = children.slice(0);
	        var itemNameInBindingContext = repeat.local;
	        var matcher = repeat.matcher();

	        var itemsPreviouslyInViews = [];
	        var viewsToRemove = [];

	        for (var index = 0; index < viewsLength; index++) {
	          var view = childrenSnapshot[index];
	          var oldItem = view.bindingContext[itemNameInBindingContext];

	          if ((0, _repeatUtilities.indexOf)(items, oldItem, matcher) === -1) {
	            viewsToRemove.push(view);
	          } else {
	            itemsPreviouslyInViews.push(oldItem);
	          }
	        }

	        var updateViews = void 0;
	        var removePromise = void 0;

	        if (itemsPreviouslyInViews.length > 0) {
	          removePromise = repeat.removeViews(viewsToRemove, true, !repeat.viewsRequireLifecycle);
	          updateViews = function updateViews() {
	            for (var _index = 0; _index < itemsLength; _index++) {
	              var item = items[_index];
	              var indexOfView = (0, _repeatUtilities.indexOf)(itemsPreviouslyInViews, item, matcher, _index);
	              var _view = void 0;

	              if (indexOfView === -1) {
	                var overrideContext = (0, _repeatUtilities.createFullOverrideContext)(repeat, items[_index], _index, itemsLength);
	                repeat.insertView(_index, overrideContext.bindingContext, overrideContext);

	                itemsPreviouslyInViews.splice(_index, 0, undefined);
	              } else if (indexOfView === _index) {
	                _view = children[indexOfView];
	                itemsPreviouslyInViews[indexOfView] = undefined;
	              } else {
	                _view = children[indexOfView];
	                repeat.moveView(indexOfView, _index);
	                itemsPreviouslyInViews.splice(indexOfView, 1);
	                itemsPreviouslyInViews.splice(_index, 0, undefined);
	              }

	              if (_view) {
	                (0, _repeatUtilities.updateOverrideContext)(_view.overrideContext, _index, itemsLength);
	              }
	            }

	            _this._inPlaceProcessItems(repeat, items);
	          };
	        } else {
	          removePromise = repeat.removeAllViews(true, !repeat.viewsRequireLifecycle);
	          updateViews = function updateViews() {
	            return _this._standardProcessInstanceChanged(repeat, items);
	          };
	        }

	        if (removePromise instanceof Promise) {
	          removePromise.then(updateViews);
	        } else {
	          updateViews();
	        }
	      })();
	    } else {
	      this._inPlaceProcessItems(repeat, items);
	    }
	  };

	  ArrayRepeatStrategy.prototype._standardProcessInstanceChanged = function _standardProcessInstanceChanged(repeat, items) {
	    for (var i = 0, ii = items.length; i < ii; i++) {
	      var overrideContext = (0, _repeatUtilities.createFullOverrideContext)(repeat, items[i], i, ii);
	      repeat.addView(overrideContext.bindingContext, overrideContext);
	    }
	  };

	  ArrayRepeatStrategy.prototype._inPlaceProcessItems = function _inPlaceProcessItems(repeat, items) {
	    var itemsLength = items.length;
	    var viewsLength = repeat.viewCount();

	    while (viewsLength > itemsLength) {
	      viewsLength--;
	      repeat.removeView(viewsLength, true, !repeat.viewsRequireLifecycle);
	    }

	    var local = repeat.local;

	    for (var i = 0; i < viewsLength; i++) {
	      var view = repeat.view(i);
	      var last = i === itemsLength - 1;
	      var middle = i !== 0 && !last;

	      if (view.bindingContext[local] === items[i] && view.overrideContext.$middle === middle && view.overrideContext.$last === last) {
	        continue;
	      }

	      view.bindingContext[local] = items[i];
	      view.overrideContext.$middle = middle;
	      view.overrideContext.$last = last;
	      repeat.updateBindings(view);
	    }

	    for (var _i = viewsLength; _i < itemsLength; _i++) {
	      var overrideContext = (0, _repeatUtilities.createFullOverrideContext)(repeat, items[_i], _i, itemsLength);
	      repeat.addView(overrideContext.bindingContext, overrideContext);
	    }
	  };

	  ArrayRepeatStrategy.prototype.instanceMutated = function instanceMutated(repeat, array, splices) {
	    var _this2 = this;

	    if (repeat.__queuedSplices) {
	      for (var i = 0, ii = splices.length; i < ii; ++i) {
	        var _splices$i = splices[i];
	        var index = _splices$i.index;
	        var removed = _splices$i.removed;
	        var addedCount = _splices$i.addedCount;

	        (0, _aureliaBinding.mergeSplice)(repeat.__queuedSplices, index, removed, addedCount);
	      }

	      repeat.__array = array.slice(0);
	      return;
	    }

	    var maybePromise = this._runSplices(repeat, array.slice(0), splices);
	    if (maybePromise instanceof Promise) {
	      (function () {
	        var queuedSplices = repeat.__queuedSplices = [];

	        var runQueuedSplices = function runQueuedSplices() {
	          if (!queuedSplices.length) {
	            repeat.__queuedSplices = undefined;
	            repeat.__array = undefined;
	            return;
	          }

	          var nextPromise = _this2._runSplices(repeat, repeat.__array, queuedSplices) || Promise.resolve();
	          queuedSplices = repeat.__queuedSplices = [];
	          nextPromise.then(runQueuedSplices);
	        };

	        maybePromise.then(runQueuedSplices);
	      })();
	    }
	  };

	  ArrayRepeatStrategy.prototype._runSplices = function _runSplices(repeat, array, splices) {
	    var _this3 = this;

	    var removeDelta = 0;
	    var rmPromises = [];

	    for (var i = 0, ii = splices.length; i < ii; ++i) {
	      var splice = splices[i];
	      var removed = splice.removed;

	      for (var j = 0, jj = removed.length; j < jj; ++j) {
	        var viewOrPromise = repeat.removeView(splice.index + removeDelta + rmPromises.length, true);
	        if (viewOrPromise instanceof Promise) {
	          rmPromises.push(viewOrPromise);
	        }
	      }
	      removeDelta -= splice.addedCount;
	    }

	    if (rmPromises.length > 0) {
	      return Promise.all(rmPromises).then(function () {
	        var spliceIndexLow = _this3._handleAddedSplices(repeat, array, splices);
	        (0, _repeatUtilities.updateOverrideContexts)(repeat.views(), spliceIndexLow);
	      });
	    }

	    var spliceIndexLow = this._handleAddedSplices(repeat, array, splices);
	    (0, _repeatUtilities.updateOverrideContexts)(repeat.views(), spliceIndexLow);

	    return undefined;
	  };

	  ArrayRepeatStrategy.prototype._handleAddedSplices = function _handleAddedSplices(repeat, array, splices) {
	    var spliceIndex = void 0;
	    var spliceIndexLow = void 0;
	    var arrayLength = array.length;
	    for (var i = 0, ii = splices.length; i < ii; ++i) {
	      var splice = splices[i];
	      var addIndex = spliceIndex = splice.index;
	      var end = splice.index + splice.addedCount;

	      if (typeof spliceIndexLow === 'undefined' || spliceIndexLow === null || spliceIndexLow > splice.index) {
	        spliceIndexLow = spliceIndex;
	      }

	      for (; addIndex < end; ++addIndex) {
	        var overrideContext = (0, _repeatUtilities.createFullOverrideContext)(repeat, array[addIndex], addIndex, arrayLength);
	        repeat.insertView(addIndex, overrideContext.bindingContext, overrideContext);
	      }
	    }

	    return spliceIndexLow;
	  };

	  return ArrayRepeatStrategy;
	}();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.updateOverrideContexts = updateOverrideContexts;
	exports.createFullOverrideContext = createFullOverrideContext;
	exports.updateOverrideContext = updateOverrideContext;
	exports.getItemsSourceExpression = getItemsSourceExpression;
	exports.unwrapExpression = unwrapExpression;
	exports.isOneTime = isOneTime;
	exports.updateOneTimeBinding = updateOneTimeBinding;
	exports.indexOf = indexOf;

	var _aureliaBinding = __webpack_require__(20);

	var oneTime = _aureliaBinding.bindingMode.oneTime;

	function updateOverrideContexts(views, startIndex) {
	  var length = views.length;

	  if (startIndex > 0) {
	    startIndex = startIndex - 1;
	  }

	  for (; startIndex < length; ++startIndex) {
	    updateOverrideContext(views[startIndex].overrideContext, startIndex, length);
	  }
	}

	function createFullOverrideContext(repeat, data, index, length, key) {
	  var bindingContext = {};
	  var overrideContext = (0, _aureliaBinding.createOverrideContext)(bindingContext, repeat.scope.overrideContext);

	  if (typeof key !== 'undefined') {
	    bindingContext[repeat.key] = key;
	    bindingContext[repeat.value] = data;
	  } else {
	    bindingContext[repeat.local] = data;
	  }
	  updateOverrideContext(overrideContext, index, length);
	  return overrideContext;
	}

	function updateOverrideContext(overrideContext, index, length) {
	  var first = index === 0;
	  var last = index === length - 1;
	  var even = index % 2 === 0;

	  overrideContext.$index = index;
	  overrideContext.$first = first;
	  overrideContext.$last = last;
	  overrideContext.$middle = !(first || last);
	  overrideContext.$odd = !even;
	  overrideContext.$even = even;
	}

	function getItemsSourceExpression(instruction, attrName) {
	  return instruction.behaviorInstructions.filter(function (bi) {
	    return bi.originalAttrName === attrName;
	  })[0].attributes.items.sourceExpression;
	}

	function unwrapExpression(expression) {
	  var unwrapped = false;
	  while (expression instanceof _aureliaBinding.BindingBehavior) {
	    expression = expression.expression;
	  }
	  while (expression instanceof _aureliaBinding.ValueConverter) {
	    expression = expression.expression;
	    unwrapped = true;
	  }
	  return unwrapped ? expression : null;
	}

	function isOneTime(expression) {
	  while (expression instanceof _aureliaBinding.BindingBehavior) {
	    if (expression.name === 'oneTime') {
	      return true;
	    }
	    expression = expression.expression;
	  }
	  return false;
	}

	function updateOneTimeBinding(binding) {
	  if (binding.call && binding.mode === oneTime) {
	    binding.call(_aureliaBinding.sourceContext);
	  } else if (binding.updateOneTimeBindings) {
	    binding.updateOneTimeBindings();
	  }
	}

	function indexOf(array, item, matcher, startIndex) {
	  if (!matcher) {
	    return array.indexOf(item);
	  }
	  var length = array.length;
	  for (var index = startIndex || 0; index < length; index++) {
	    if (matcher(array[index], item)) {
	      return index;
	    }
	  }
	  return -1;
	}

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Promise) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MapRepeatStrategy = undefined;

	var _repeatUtilities = __webpack_require__(189);



	var MapRepeatStrategy = exports.MapRepeatStrategy = function () {
	  function MapRepeatStrategy() {
	    
	  }

	  MapRepeatStrategy.prototype.getCollectionObserver = function getCollectionObserver(observerLocator, items) {
	    return observerLocator.getMapObserver(items);
	  };

	  MapRepeatStrategy.prototype.instanceChanged = function instanceChanged(repeat, items) {
	    var _this = this;

	    var removePromise = repeat.removeAllViews(true, !repeat.viewsRequireLifecycle);
	    if (removePromise instanceof Promise) {
	      removePromise.then(function () {
	        return _this._standardProcessItems(repeat, items);
	      });
	      return;
	    }
	    this._standardProcessItems(repeat, items);
	  };

	  MapRepeatStrategy.prototype._standardProcessItems = function _standardProcessItems(repeat, items) {
	    var index = 0;
	    var overrideContext = void 0;

	    items.forEach(function (value, key) {
	      overrideContext = (0, _repeatUtilities.createFullOverrideContext)(repeat, value, index, items.size, key);
	      repeat.addView(overrideContext.bindingContext, overrideContext);
	      ++index;
	    });
	  };

	  MapRepeatStrategy.prototype.instanceMutated = function instanceMutated(repeat, map, records) {
	    var key = void 0;
	    var i = void 0;
	    var ii = void 0;
	    var overrideContext = void 0;
	    var removeIndex = void 0;
	    var record = void 0;
	    var rmPromises = [];
	    var viewOrPromise = void 0;

	    for (i = 0, ii = records.length; i < ii; ++i) {
	      record = records[i];
	      key = record.key;
	      switch (record.type) {
	        case 'update':
	          removeIndex = this._getViewIndexByKey(repeat, key);
	          viewOrPromise = repeat.removeView(removeIndex, true, !repeat.viewsRequireLifecycle);
	          if (viewOrPromise instanceof Promise) {
	            rmPromises.push(viewOrPromise);
	          }
	          overrideContext = (0, _repeatUtilities.createFullOverrideContext)(repeat, map.get(key), removeIndex, map.size, key);
	          repeat.insertView(removeIndex, overrideContext.bindingContext, overrideContext);
	          break;
	        case 'add':
	          overrideContext = (0, _repeatUtilities.createFullOverrideContext)(repeat, map.get(key), map.size - 1, map.size, key);
	          repeat.insertView(map.size - 1, overrideContext.bindingContext, overrideContext);
	          break;
	        case 'delete':
	          if (record.oldValue === undefined) {
	            return;
	          }
	          removeIndex = this._getViewIndexByKey(repeat, key);
	          viewOrPromise = repeat.removeView(removeIndex, true, !repeat.viewsRequireLifecycle);
	          if (viewOrPromise instanceof Promise) {
	            rmPromises.push(viewOrPromise);
	          }
	          break;
	        case 'clear':
	          repeat.removeAllViews(true, !repeat.viewsRequireLifecycle);
	          break;
	        default:
	          continue;
	      }
	    }

	    if (rmPromises.length > 0) {
	      Promise.all(rmPromises).then(function () {
	        (0, _repeatUtilities.updateOverrideContexts)(repeat.views(), 0);
	      });
	    } else {
	      (0, _repeatUtilities.updateOverrideContexts)(repeat.views(), 0);
	    }
	  };

	  MapRepeatStrategy.prototype._getViewIndexByKey = function _getViewIndexByKey(repeat, key) {
	    var i = void 0;
	    var ii = void 0;
	    var child = void 0;

	    for (i = 0, ii = repeat.viewCount(); i < ii; ++i) {
	      child = repeat.view(i);
	      if (child.bindingContext[repeat.key] === key) {
	        return i;
	      }
	    }

	    return undefined;
	  };

	  return MapRepeatStrategy;
	}();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Promise) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SetRepeatStrategy = undefined;

	var _repeatUtilities = __webpack_require__(189);



	var SetRepeatStrategy = exports.SetRepeatStrategy = function () {
	  function SetRepeatStrategy() {
	    
	  }

	  SetRepeatStrategy.prototype.getCollectionObserver = function getCollectionObserver(observerLocator, items) {
	    return observerLocator.getSetObserver(items);
	  };

	  SetRepeatStrategy.prototype.instanceChanged = function instanceChanged(repeat, items) {
	    var _this = this;

	    var removePromise = repeat.removeAllViews(true, !repeat.viewsRequireLifecycle);
	    if (removePromise instanceof Promise) {
	      removePromise.then(function () {
	        return _this._standardProcessItems(repeat, items);
	      });
	      return;
	    }
	    this._standardProcessItems(repeat, items);
	  };

	  SetRepeatStrategy.prototype._standardProcessItems = function _standardProcessItems(repeat, items) {
	    var index = 0;
	    var overrideContext = void 0;

	    items.forEach(function (value) {
	      overrideContext = (0, _repeatUtilities.createFullOverrideContext)(repeat, value, index, items.size);
	      repeat.addView(overrideContext.bindingContext, overrideContext);
	      ++index;
	    });
	  };

	  SetRepeatStrategy.prototype.instanceMutated = function instanceMutated(repeat, set, records) {
	    var value = void 0;
	    var i = void 0;
	    var ii = void 0;
	    var overrideContext = void 0;
	    var removeIndex = void 0;
	    var record = void 0;
	    var rmPromises = [];
	    var viewOrPromise = void 0;

	    for (i = 0, ii = records.length; i < ii; ++i) {
	      record = records[i];
	      value = record.value;
	      switch (record.type) {
	        case 'add':
	          overrideContext = (0, _repeatUtilities.createFullOverrideContext)(repeat, value, set.size - 1, set.size);
	          repeat.insertView(set.size - 1, overrideContext.bindingContext, overrideContext);
	          break;
	        case 'delete':
	          removeIndex = this._getViewIndexByValue(repeat, value);
	          viewOrPromise = repeat.removeView(removeIndex, true, !repeat.viewsRequireLifecycle);
	          if (viewOrPromise instanceof Promise) {
	            rmPromises.push(viewOrPromise);
	          }
	          break;
	        case 'clear':
	          repeat.removeAllViews(true, !repeat.viewsRequireLifecycle);
	          break;
	        default:
	          continue;
	      }
	    }

	    if (rmPromises.length > 0) {
	      Promise.all(rmPromises).then(function () {
	        (0, _repeatUtilities.updateOverrideContexts)(repeat.views(), 0);
	      });
	    } else {
	      (0, _repeatUtilities.updateOverrideContexts)(repeat.views(), 0);
	    }
	  };

	  SetRepeatStrategy.prototype._getViewIndexByValue = function _getViewIndexByValue(repeat, value) {
	    var i = void 0;
	    var ii = void 0;
	    var child = void 0;

	    for (i = 0, ii = repeat.viewCount(); i < ii; ++i) {
	      child = repeat.view(i);
	      if (child.bindingContext[repeat.local] === value) {
	        return i;
	      }
	    }

	    return undefined;
	  };

	  return SetRepeatStrategy;
	}();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Promise) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.NumberRepeatStrategy = undefined;

	var _repeatUtilities = __webpack_require__(189);



	var NumberRepeatStrategy = exports.NumberRepeatStrategy = function () {
	  function NumberRepeatStrategy() {
	    
	  }

	  NumberRepeatStrategy.prototype.getCollectionObserver = function getCollectionObserver() {
	    return null;
	  };

	  NumberRepeatStrategy.prototype.instanceChanged = function instanceChanged(repeat, value) {
	    var _this = this;

	    var removePromise = repeat.removeAllViews(true, !repeat.viewsRequireLifecycle);
	    if (removePromise instanceof Promise) {
	      removePromise.then(function () {
	        return _this._standardProcessItems(repeat, value);
	      });
	      return;
	    }
	    this._standardProcessItems(repeat, value);
	  };

	  NumberRepeatStrategy.prototype._standardProcessItems = function _standardProcessItems(repeat, value) {
	    var childrenLength = repeat.viewCount();
	    var i = void 0;
	    var ii = void 0;
	    var overrideContext = void 0;
	    var viewsToRemove = void 0;

	    value = Math.floor(value);
	    viewsToRemove = childrenLength - value;

	    if (viewsToRemove > 0) {
	      if (viewsToRemove > childrenLength) {
	        viewsToRemove = childrenLength;
	      }

	      for (i = 0, ii = viewsToRemove; i < ii; ++i) {
	        repeat.removeView(childrenLength - (i + 1), true, !repeat.viewsRequireLifecycle);
	      }

	      return;
	    }

	    for (i = childrenLength, ii = value; i < ii; ++i) {
	      overrideContext = (0, _repeatUtilities.createFullOverrideContext)(repeat, i, i, ii);
	      repeat.addView(overrideContext.bindingContext, overrideContext);
	    }

	    (0, _repeatUtilities.updateOverrideContexts)(repeat.views(), 0);
	  };

	  return NumberRepeatStrategy;
	}();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 193 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.viewsRequireLifecycle = viewsRequireLifecycle;
	var lifecycleOptionalBehaviors = exports.lifecycleOptionalBehaviors = ['focus', 'if', 'repeat', 'show', 'with'];

	function behaviorRequiresLifecycle(instruction) {
	  var t = instruction.type;
	  var name = t.elementName !== null ? t.elementName : t.attributeName;
	  return lifecycleOptionalBehaviors.indexOf(name) === -1 && (t.handlesAttached || t.handlesBind || t.handlesCreated || t.handlesDetached || t.handlesUnbind) || t.viewFactory && viewsRequireLifecycle(t.viewFactory) || instruction.viewFactory && viewsRequireLifecycle(instruction.viewFactory);
	}

	function targetRequiresLifecycle(instruction) {
	  var behaviors = instruction.behaviorInstructions;
	  if (behaviors) {
	    var i = behaviors.length;
	    while (i--) {
	      if (behaviorRequiresLifecycle(behaviors[i])) {
	        return true;
	      }
	    }
	  }

	  return instruction.viewFactory && viewsRequireLifecycle(instruction.viewFactory);
	}

	function viewsRequireLifecycle(viewFactory) {
	  if ('_viewsRequireLifecycle' in viewFactory) {
	    return viewFactory._viewsRequireLifecycle;
	  }

	  viewFactory._viewsRequireLifecycle = false;

	  if (viewFactory.viewFactory) {
	    viewFactory._viewsRequireLifecycle = viewsRequireLifecycle(viewFactory.viewFactory);
	    return viewFactory._viewsRequireLifecycle;
	  }

	  if (viewFactory.template.querySelector('.au-animate')) {
	    viewFactory._viewsRequireLifecycle = true;
	    return true;
	  }

	  for (var id in viewFactory.instructions) {
	    if (targetRequiresLifecycle(viewFactory.instructions[id])) {
	      viewFactory._viewsRequireLifecycle = true;
	      return true;
	    }
	  }

	  viewFactory._viewsRequireLifecycle = false;
	  return false;
	}

/***/ },
/* 194 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});



	var AbstractRepeater = exports.AbstractRepeater = function () {
	  function AbstractRepeater(options) {
	    

	    Object.assign(this, {
	      local: 'items',
	      viewsRequireLifecycle: true
	    }, options);
	  }

	  AbstractRepeater.prototype.viewCount = function viewCount() {
	    throw new Error('subclass must implement `viewCount`');
	  };

	  AbstractRepeater.prototype.views = function views() {
	    throw new Error('subclass must implement `views`');
	  };

	  AbstractRepeater.prototype.view = function view(index) {
	    throw new Error('subclass must implement `view`');
	  };

	  AbstractRepeater.prototype.matcher = function matcher() {
	    throw new Error('subclass must implement `matcher`');
	  };

	  AbstractRepeater.prototype.addView = function addView(bindingContext, overrideContext) {
	    throw new Error('subclass must implement `addView`');
	  };

	  AbstractRepeater.prototype.insertView = function insertView(index, bindingContext, overrideContext) {
	    throw new Error('subclass must implement `insertView`');
	  };

	  AbstractRepeater.prototype.moveView = function moveView(sourceIndex, targetIndex) {
	    throw new Error('subclass must implement `moveView`');
	  };

	  AbstractRepeater.prototype.removeAllViews = function removeAllViews(returnToCache, skipAnimation) {
	    throw new Error('subclass must implement `removeAllViews`');
	  };

	  AbstractRepeater.prototype.removeViews = function removeViews(viewsToRemove, returnToCache, skipAnimation) {
	    throw new Error('subclass must implement `removeView`');
	  };

	  AbstractRepeater.prototype.removeView = function removeView(index, returnToCache, skipAnimation) {
	    throw new Error('subclass must implement `removeView`');
	  };

	  AbstractRepeater.prototype.updateBindings = function updateBindings(view) {
	    throw new Error('subclass must implement `updateBindings`');
	  };

	  return AbstractRepeater;
	}();

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Show = undefined;

	var _dec, _dec2, _class;

	var _aureliaDependencyInjection = __webpack_require__(19);

	var _aureliaTemplating = __webpack_require__(23);

	var _aureliaPal = __webpack_require__(7);

	var _aureliaHideStyle = __webpack_require__(196);



	var Show = exports.Show = (_dec = (0, _aureliaTemplating.customAttribute)('show'), _dec2 = (0, _aureliaDependencyInjection.inject)(_aureliaPal.DOM.Element, _aureliaTemplating.Animator, _aureliaDependencyInjection.Optional.of(_aureliaPal.DOM.boundary, true)), _dec(_class = _dec2(_class = function () {
	  function Show(element, animator, domBoundary) {
	    

	    this.element = element;
	    this.animator = animator;
	    this.domBoundary = domBoundary;
	  }

	  Show.prototype.created = function created() {
	    (0, _aureliaHideStyle.injectAureliaHideStyleAtBoundary)(this.domBoundary);
	  };

	  Show.prototype.valueChanged = function valueChanged(newValue) {
	    if (newValue) {
	      this.animator.removeClass(this.element, _aureliaHideStyle.aureliaHideClassName);
	    } else {
	      this.animator.addClass(this.element, _aureliaHideStyle.aureliaHideClassName);
	    }
	  };

	  Show.prototype.bind = function bind(bindingContext) {
	    this.valueChanged(this.value);
	  };

	  return Show;
	}()) || _class) || _class);

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.aureliaHideClassName = undefined;
	exports.injectAureliaHideStyleAtHead = injectAureliaHideStyleAtHead;
	exports.injectAureliaHideStyleAtBoundary = injectAureliaHideStyleAtBoundary;

	var _aureliaPal = __webpack_require__(7);

	var aureliaHideClassName = exports.aureliaHideClassName = 'aurelia-hide';

	var aureliaHideClass = '.' + aureliaHideClassName + ' { display:none !important; }';

	function injectAureliaHideStyleAtHead() {
	  _aureliaPal.DOM.injectStyles(aureliaHideClass);
	}

	function injectAureliaHideStyleAtBoundary(domBoundary) {
	  if (_aureliaPal.FEATURE.shadowDOM && domBoundary && !domBoundary.hasAureliaHideStyle) {
	    domBoundary.hasAureliaHideStyle = true;
	    _aureliaPal.DOM.injectStyles(aureliaHideClass, domBoundary);
	  }
	}

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Hide = undefined;

	var _dec, _dec2, _class;

	var _aureliaDependencyInjection = __webpack_require__(19);

	var _aureliaTemplating = __webpack_require__(23);

	var _aureliaPal = __webpack_require__(7);

	var _aureliaHideStyle = __webpack_require__(196);



	var Hide = exports.Hide = (_dec = (0, _aureliaTemplating.customAttribute)('hide'), _dec2 = (0, _aureliaDependencyInjection.inject)(_aureliaPal.DOM.Element, _aureliaTemplating.Animator, _aureliaDependencyInjection.Optional.of(_aureliaPal.DOM.boundary, true)), _dec(_class = _dec2(_class = function () {
	  function Hide(element, animator, domBoundary) {
	    

	    this.element = element;
	    this.animator = animator;
	    this.domBoundary = domBoundary;
	  }

	  Hide.prototype.created = function created() {
	    (0, _aureliaHideStyle.injectAureliaHideStyleAtBoundary)(this.domBoundary);
	  };

	  Hide.prototype.valueChanged = function valueChanged(newValue) {
	    if (newValue) {
	      this.animator.addClass(this.element, _aureliaHideStyle.aureliaHideClassName);
	    } else {
	      this.animator.removeClass(this.element, _aureliaHideStyle.aureliaHideClassName);
	    }
	  };

	  Hide.prototype.bind = function bind(bindingContext) {
	    this.valueChanged(this.value);
	  };

	  return Hide;
	}()) || _class) || _class);

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SanitizeHTMLValueConverter = undefined;

	var _dec, _dec2, _class;

	var _aureliaBinding = __webpack_require__(20);

	var _aureliaDependencyInjection = __webpack_require__(19);

	var _htmlSanitizer = __webpack_require__(199);



	var SanitizeHTMLValueConverter = exports.SanitizeHTMLValueConverter = (_dec = (0, _aureliaBinding.valueConverter)('sanitizeHTML'), _dec2 = (0, _aureliaDependencyInjection.inject)(_htmlSanitizer.HTMLSanitizer), _dec(_class = _dec2(_class = function () {
	  function SanitizeHTMLValueConverter(sanitizer) {
	    

	    this.sanitizer = sanitizer;
	  }

	  SanitizeHTMLValueConverter.prototype.toView = function toView(untrustedMarkup) {
	    if (untrustedMarkup === null || untrustedMarkup === undefined) {
	      return null;
	    }

	    return this.sanitizer.sanitize(untrustedMarkup);
	  };

	  return SanitizeHTMLValueConverter;
	}()) || _class) || _class);

/***/ },
/* 199 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});



	var SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

	var HTMLSanitizer = exports.HTMLSanitizer = function () {
	  function HTMLSanitizer() {
	    
	  }

	  HTMLSanitizer.prototype.sanitize = function sanitize(input) {
	    return input.replace(SCRIPT_REGEX, '');
	  };

	  return HTMLSanitizer;
	}();

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Replaceable = undefined;

	var _dec, _dec2, _class;

	var _aureliaDependencyInjection = __webpack_require__(19);

	var _aureliaTemplating = __webpack_require__(23);



	var Replaceable = exports.Replaceable = (_dec = (0, _aureliaTemplating.customAttribute)('replaceable'), _dec2 = (0, _aureliaDependencyInjection.inject)(_aureliaTemplating.BoundViewFactory, _aureliaTemplating.ViewSlot), _dec(_class = (0, _aureliaTemplating.templateController)(_class = _dec2(_class = function () {
	  function Replaceable(viewFactory, viewSlot) {
	    

	    this.viewFactory = viewFactory;
	    this.viewSlot = viewSlot;
	    this.view = null;
	  }

	  Replaceable.prototype.bind = function bind(bindingContext, overrideContext) {
	    if (this.view === null) {
	      this.view = this.viewFactory.create();
	      this.viewSlot.add(this.view);
	    }

	    this.view.bind(bindingContext, overrideContext);
	  };

	  Replaceable.prototype.unbind = function unbind() {
	    this.view.unbind();
	  };

	  return Replaceable;
	}()) || _class) || _class) || _class);

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Focus = undefined;

	var _dec, _dec2, _class;

	var _aureliaTemplating = __webpack_require__(23);

	var _aureliaBinding = __webpack_require__(20);

	var _aureliaDependencyInjection = __webpack_require__(19);

	var _aureliaTaskQueue = __webpack_require__(22);

	var _aureliaPal = __webpack_require__(7);



	var Focus = exports.Focus = (_dec = (0, _aureliaTemplating.customAttribute)('focus', _aureliaBinding.bindingMode.twoWay), _dec2 = (0, _aureliaDependencyInjection.inject)(_aureliaPal.DOM.Element, _aureliaTaskQueue.TaskQueue), _dec(_class = _dec2(_class = function () {
	  function Focus(element, taskQueue) {
	    var _this = this;

	    

	    this.element = element;
	    this.taskQueue = taskQueue;
	    this.isAttached = false;
	    this.needsApply = false;

	    this.focusListener = function (e) {
	      _this.value = true;
	    };
	    this.blurListener = function (e) {
	      if (_aureliaPal.DOM.activeElement !== _this.element) {
	        _this.value = false;
	      }
	    };
	  }

	  Focus.prototype.valueChanged = function valueChanged(newValue) {
	    if (this.isAttached) {
	      this._apply();
	    } else {
	      this.needsApply = true;
	    }
	  };

	  Focus.prototype._apply = function _apply() {
	    var _this2 = this;

	    if (this.value) {
	      this.taskQueue.queueMicroTask(function () {
	        if (_this2.value) {
	          _this2.element.focus();
	        }
	      });
	    } else {
	      this.element.blur();
	    }
	  };

	  Focus.prototype.attached = function attached() {
	    this.isAttached = true;
	    if (this.needsApply) {
	      this.needsApply = false;
	      this._apply();
	    }
	    this.element.addEventListener('focus', this.focusListener);
	    this.element.addEventListener('blur', this.blurListener);
	  };

	  Focus.prototype.detached = function detached() {
	    this.isAttached = false;
	    this.element.removeEventListener('focus', this.focusListener);
	    this.element.removeEventListener('blur', this.blurListener);
	  };

	  return Focus;
	}()) || _class) || _class);

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports._createCSSResource = _createCSSResource;

	var _aureliaTemplating = __webpack_require__(23);

	var _aureliaLoader = __webpack_require__(11);

	var _aureliaDependencyInjection = __webpack_require__(19);

	var _aureliaPath = __webpack_require__(12);

	var _aureliaPal = __webpack_require__(7);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



	var cssUrlMatcher = /url\((?!['"]data)([^)]+)\)/gi;

	function fixupCSSUrls(address, css) {
	  if (typeof css !== 'string') {
	    throw new Error('Failed loading required CSS file: ' + address);
	  }
	  return css.replace(cssUrlMatcher, function (match, p1) {
	    var quote = p1.charAt(0);
	    if (quote === '\'' || quote === '"') {
	      p1 = p1.substr(1, p1.length - 2);
	    }
	    return 'url(\'' + (0, _aureliaPath.relativeToFile)(p1, address) + '\')';
	  });
	}

	var CSSResource = function () {
	  function CSSResource(address) {
	    

	    this.address = address;
	    this._global = null;
	    this._scoped = null;
	  }

	  CSSResource.prototype.initialize = function initialize(container, target) {
	    this._global = new target('global');
	    this._scoped = new target('scoped');
	  };

	  CSSResource.prototype.register = function register(registry, name) {
	    registry.registerViewEngineHooks(name === 'scoped' ? this._scoped : this._global);
	  };

	  CSSResource.prototype.load = function load(container) {
	    var _this = this;

	    return container.get(_aureliaLoader.Loader).loadText(this.address).catch(function (err) {
	      return null;
	    }).then(function (text) {
	      text = fixupCSSUrls(_this.address, text);
	      _this._global.css = text;
	      _this._scoped.css = text;
	    });
	  };

	  return CSSResource;
	}();

	var CSSViewEngineHooks = function () {
	  function CSSViewEngineHooks(mode) {
	    

	    this.mode = mode;
	    this.css = null;
	    this._alreadyGloballyInjected = false;
	  }

	  CSSViewEngineHooks.prototype.beforeCompile = function beforeCompile(content, resources, instruction) {
	    if (this.mode === 'scoped') {
	      if (instruction.targetShadowDOM) {
	        _aureliaPal.DOM.injectStyles(this.css, content, true);
	      } else if (_aureliaPal.FEATURE.scopedCSS) {
	        var styleNode = _aureliaPal.DOM.injectStyles(this.css, content, true);
	        styleNode.setAttribute('scoped', 'scoped');
	      } else if (!this._alreadyGloballyInjected) {
	        _aureliaPal.DOM.injectStyles(this.css);
	        this._alreadyGloballyInjected = true;
	      }
	    } else if (!this._alreadyGloballyInjected) {
	      _aureliaPal.DOM.injectStyles(this.css);
	      this._alreadyGloballyInjected = true;
	    }
	  };

	  return CSSViewEngineHooks;
	}();

	function _createCSSResource(address) {
	  var _dec, _class;

	  var ViewCSS = (_dec = (0, _aureliaTemplating.resource)(new CSSResource(address)), _dec(_class = function (_CSSViewEngineHooks) {
	    _inherits(ViewCSS, _CSSViewEngineHooks);

	    function ViewCSS() {
	      

	      return _possibleConstructorReturn(this, _CSSViewEngineHooks.apply(this, arguments));
	    }

	    return ViewCSS;
	  }(CSSViewEngineHooks)) || _class);

	  return ViewCSS;
	}

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TwoWayBindingBehavior = exports.OneWayBindingBehavior = exports.OneTimeBindingBehavior = undefined;

	var _dec, _class, _dec2, _class2, _dec3, _class3;

	var _aureliaBinding = __webpack_require__(20);

	var _aureliaMetadata = __webpack_require__(10);



	var modeBindingBehavior = {
	  bind: function bind(binding, source, lookupFunctions) {
	    binding.originalMode = binding.mode;
	    binding.mode = this.mode;
	  },
	  unbind: function unbind(binding, source) {
	    binding.mode = binding.originalMode;
	    binding.originalMode = null;
	  }
	};

	var OneTimeBindingBehavior = exports.OneTimeBindingBehavior = (_dec = (0, _aureliaMetadata.mixin)(modeBindingBehavior), _dec(_class = function OneTimeBindingBehavior() {
	  

	  this.mode = _aureliaBinding.bindingMode.oneTime;
	}) || _class);
	var OneWayBindingBehavior = exports.OneWayBindingBehavior = (_dec2 = (0, _aureliaMetadata.mixin)(modeBindingBehavior), _dec2(_class2 = function OneWayBindingBehavior() {
	  

	  this.mode = _aureliaBinding.bindingMode.oneWay;
	}) || _class2);
	var TwoWayBindingBehavior = exports.TwoWayBindingBehavior = (_dec3 = (0, _aureliaMetadata.mixin)(modeBindingBehavior), _dec3(_class3 = function TwoWayBindingBehavior() {
	  

	  this.mode = _aureliaBinding.bindingMode.twoWay;
	}) || _class3);

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ThrottleBindingBehavior = undefined;

	var _aureliaBinding = __webpack_require__(20);



	function throttle(newValue) {
	  var _this = this;

	  var state = this.throttleState;
	  var elapsed = +new Date() - state.last;
	  if (elapsed >= state.delay) {
	    clearTimeout(state.timeoutId);
	    state.timeoutId = null;
	    state.last = +new Date();
	    this.throttledMethod(newValue);
	    return;
	  }
	  state.newValue = newValue;
	  if (state.timeoutId === null) {
	    state.timeoutId = setTimeout(function () {
	      state.timeoutId = null;
	      state.last = +new Date();
	      _this.throttledMethod(state.newValue);
	    }, state.delay - elapsed);
	  }
	}

	var ThrottleBindingBehavior = exports.ThrottleBindingBehavior = function () {
	  function ThrottleBindingBehavior() {
	    
	  }

	  ThrottleBindingBehavior.prototype.bind = function bind(binding, source) {
	    var delay = arguments.length <= 2 || arguments[2] === undefined ? 200 : arguments[2];

	    var methodToThrottle = 'updateTarget';
	    if (binding.callSource) {
	      methodToThrottle = 'callSource';
	    } else if (binding.updateSource && binding.mode === _aureliaBinding.bindingMode.twoWay) {
	        methodToThrottle = 'updateSource';
	      }

	    binding.throttledMethod = binding[methodToThrottle];
	    binding.throttledMethod.originalName = methodToThrottle;

	    binding[methodToThrottle] = throttle;

	    binding.throttleState = {
	      delay: delay,
	      last: 0,
	      timeoutId: null
	    };
	  };

	  ThrottleBindingBehavior.prototype.unbind = function unbind(binding, source) {
	    var methodToRestore = binding.throttledMethod.originalName;
	    binding[methodToRestore] = binding.throttledMethod;
	    binding.throttledMethod = null;
	    clearTimeout(binding.throttleState.timeoutId);
	    binding.throttleState = null;
	  };

	  return ThrottleBindingBehavior;
	}();

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DebounceBindingBehavior = undefined;

	var _aureliaBinding = __webpack_require__(20);



	function debounce(newValue) {
	  var _this = this;

	  var state = this.debounceState;
	  if (state.immediate) {
	    state.immediate = false;
	    this.debouncedMethod(newValue);
	    return;
	  }
	  clearTimeout(state.timeoutId);
	  state.timeoutId = setTimeout(function () {
	    return _this.debouncedMethod(newValue);
	  }, state.delay);
	}

	var DebounceBindingBehavior = exports.DebounceBindingBehavior = function () {
	  function DebounceBindingBehavior() {
	    
	  }

	  DebounceBindingBehavior.prototype.bind = function bind(binding, source) {
	    var delay = arguments.length <= 2 || arguments[2] === undefined ? 200 : arguments[2];

	    var methodToDebounce = 'updateTarget';
	    if (binding.callSource) {
	      methodToDebounce = 'callSource';
	    } else if (binding.updateSource && binding.mode === _aureliaBinding.bindingMode.twoWay) {
	        methodToDebounce = 'updateSource';
	      }

	    binding.debouncedMethod = binding[methodToDebounce];
	    binding.debouncedMethod.originalName = methodToDebounce;

	    binding[methodToDebounce] = debounce;

	    binding.debounceState = {
	      delay: delay,
	      timeoutId: null,
	      immediate: methodToDebounce === 'updateTarget' };
	  };

	  DebounceBindingBehavior.prototype.unbind = function unbind(binding, source) {
	    var methodToRestore = binding.debouncedMethod.originalName;
	    binding[methodToRestore] = binding.debouncedMethod;
	    binding.debouncedMethod = null;
	    clearTimeout(binding.debounceState.timeoutId);
	    binding.debounceState = null;
	  };

	  return DebounceBindingBehavior;
	}();

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SignalBindingBehavior = undefined;

	var _bindingSignaler = __webpack_require__(207);



	var SignalBindingBehavior = exports.SignalBindingBehavior = function () {
	  SignalBindingBehavior.inject = function inject() {
	    return [_bindingSignaler.BindingSignaler];
	  };

	  function SignalBindingBehavior(bindingSignaler) {
	    

	    this.signals = bindingSignaler.signals;
	  }

	  SignalBindingBehavior.prototype.bind = function bind(binding, source) {
	    if (!binding.updateTarget) {
	      throw new Error('Only property bindings and string interpolation bindings can be signaled.  Trigger, delegate and call bindings cannot be signaled.');
	    }
	    if (arguments.length === 3) {
	      var name = arguments[2];
	      var bindings = this.signals[name] || (this.signals[name] = []);
	      bindings.push(binding);
	      binding.signalName = name;
	    } else if (arguments.length > 3) {
	      var names = Array.prototype.slice.call(arguments, 2);
	      var i = names.length;
	      while (i--) {
	        var _name = names[i];
	        var _bindings = this.signals[_name] || (this.signals[_name] = []);
	        _bindings.push(binding);
	      }
	      binding.signalName = names;
	    } else {
	      throw new Error('Signal name is required.');
	    }
	  };

	  SignalBindingBehavior.prototype.unbind = function unbind(binding, source) {
	    var name = binding.signalName;
	    binding.signalName = null;
	    if (Array.isArray(name)) {
	      var names = name;
	      var i = names.length;
	      while (i--) {
	        var n = names[i];
	        var bindings = this.signals[n];
	        bindings.splice(bindings.indexOf(binding), 1);
	      }
	    } else {
	      var _bindings2 = this.signals[name];
	      _bindings2.splice(_bindings2.indexOf(binding), 1);
	    }
	  };

	  return SignalBindingBehavior;
	}();

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BindingSignaler = undefined;

	var _aureliaBinding = __webpack_require__(20);



	var BindingSignaler = exports.BindingSignaler = function () {
	  function BindingSignaler() {
	    

	    this.signals = {};
	  }

	  BindingSignaler.prototype.signal = function signal(name) {
	    var bindings = this.signals[name];
	    if (!bindings) {
	      return;
	    }
	    var i = bindings.length;
	    while (i--) {
	      bindings[i].call(_aureliaBinding.sourceContext);
	    }
	  };

	  return BindingSignaler;
	}();

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.UpdateTriggerBindingBehavior = undefined;

	var _class, _temp;

	var _aureliaBinding = __webpack_require__(20);



	var eventNamesRequired = 'The updateTrigger binding behavior requires at least one event name argument: eg <input value.bind="firstName & updateTrigger:\'blur\'">';
	var notApplicableMessage = 'The updateTrigger binding behavior can only be applied to two-way bindings on input/select elements.';

	var UpdateTriggerBindingBehavior = exports.UpdateTriggerBindingBehavior = (_temp = _class = function () {
	  function UpdateTriggerBindingBehavior(eventManager) {
	    

	    this.eventManager = eventManager;
	  }

	  UpdateTriggerBindingBehavior.prototype.bind = function bind(binding, source) {
	    for (var _len = arguments.length, events = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	      events[_key - 2] = arguments[_key];
	    }

	    if (events.length === 0) {
	      throw new Error(eventNamesRequired);
	    }
	    if (binding.mode !== _aureliaBinding.bindingMode.twoWay) {
	      throw new Error(notApplicableMessage);
	    }

	    var targetObserver = binding.observerLocator.getObserver(binding.target, binding.targetProperty);
	    if (!targetObserver.handler) {
	      throw new Error(notApplicableMessage);
	    }
	    binding.targetObserver = targetObserver;

	    targetObserver.originalHandler = binding.targetObserver.handler;

	    var handler = this.eventManager.createElementHandler(events);
	    targetObserver.handler = handler;
	  };

	  UpdateTriggerBindingBehavior.prototype.unbind = function unbind(binding, source) {
	    binding.targetObserver.handler = binding.targetObserver.originalHandler;
	    binding.targetObserver.originalHandler = null;
	  };

	  return UpdateTriggerBindingBehavior;
	}(), _class.inject = [_aureliaBinding.EventManager], _temp);

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getElementName = getElementName;
	exports.configure = configure;

	var _aureliaTemplating = __webpack_require__(23);

	var _dynamicElement = __webpack_require__(210);

	function getElementName(address) {
	  return (/([^\/^\?]+)\.html/i.exec(address)[1].toLowerCase()
	  );
	}

	function configure(config) {
	  var viewEngine = config.container.get(_aureliaTemplating.ViewEngine);
	  var loader = config.aurelia.loader;

	  viewEngine.addResourcePlugin('.html', {
	    'fetch': function fetch(address) {
	      return loader.loadTemplate(address).then(function (registryEntry) {
	        var _ref;

	        var bindable = registryEntry.template.getAttribute('bindable');
	        var elementName = getElementName(address);

	        if (bindable) {
	          bindable = bindable.split(',').map(function (x) {
	            return x.trim();
	          });
	          registryEntry.template.removeAttribute('bindable');
	        } else {
	          bindable = [];
	        }

	        return _ref = {}, _ref[elementName] = (0, _dynamicElement._createDynamicElement)(elementName, address, bindable), _ref;
	      });
	    }
	  });
	}

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports._createDynamicElement = _createDynamicElement;

	var _aureliaTemplating = __webpack_require__(23);



	function _createDynamicElement(name, viewUrl, bindableNames) {
	  var _dec, _dec2, _class;

	  var DynamicElement = (_dec = (0, _aureliaTemplating.customElement)(name), _dec2 = (0, _aureliaTemplating.useView)(viewUrl), _dec(_class = _dec2(_class = function () {
	    function DynamicElement() {
	      
	    }

	    DynamicElement.prototype.bind = function bind(bindingContext) {
	      this.$parent = bindingContext;
	    };

	    return DynamicElement;
	  }()) || _class) || _class);

	  for (var i = 0, ii = bindableNames.length; i < ii; ++i) {
	    (0, _aureliaTemplating.bindable)(bindableNames[i])(DynamicElement);
	  }
	  return DynamicElement;
	}

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.configure = exports.RouteHref = exports.RouterView = exports.TemplatingRouteLoader = undefined;

	var _aureliaRouter = __webpack_require__(179);

	var _routeLoader = __webpack_require__(212);

	var _routerView = __webpack_require__(213);

	var _routeHref = __webpack_require__(214);

	function configure(config) {
	  config.singleton(_aureliaRouter.RouteLoader, _routeLoader.TemplatingRouteLoader).singleton(_aureliaRouter.Router, _aureliaRouter.AppRouter).globalResources('./router-view', './route-href');

	  config.container.registerAlias(_aureliaRouter.Router, _aureliaRouter.AppRouter);
	}

	exports.TemplatingRouteLoader = _routeLoader.TemplatingRouteLoader;
	exports.RouterView = _routerView.RouterView;
	exports.RouteHref = _routeHref.RouteHref;
	exports.configure = configure;

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TemplatingRouteLoader = undefined;

	var _dec, _class;

	var _aureliaDependencyInjection = __webpack_require__(19);

	var _aureliaTemplating = __webpack_require__(23);

	var _aureliaRouter = __webpack_require__(179);

	var _aureliaPath = __webpack_require__(12);

	var _aureliaMetadata = __webpack_require__(10);



	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TemplatingRouteLoader = exports.TemplatingRouteLoader = (_dec = (0, _aureliaDependencyInjection.inject)(_aureliaTemplating.CompositionEngine), _dec(_class = function (_RouteLoader) {
	  _inherits(TemplatingRouteLoader, _RouteLoader);

	  function TemplatingRouteLoader(compositionEngine) {
	    

	    var _this = _possibleConstructorReturn(this, _RouteLoader.call(this));

	    _this.compositionEngine = compositionEngine;
	    return _this;
	  }

	  TemplatingRouteLoader.prototype.loadRoute = function loadRoute(router, config) {
	    var childContainer = router.container.createChild();
	    var instruction = {
	      viewModel: (0, _aureliaPath.relativeToFile)(config.moduleId, _aureliaMetadata.Origin.get(router.container.viewModel.constructor).moduleId),
	      childContainer: childContainer,
	      view: config.view || config.viewStrategy,
	      router: router
	    };

	    childContainer.getChildRouter = function () {
	      var childRouter = void 0;

	      childContainer.registerHandler(_aureliaRouter.Router, function (c) {
	        return childRouter || (childRouter = router.createChild(childContainer));
	      });

	      return childContainer.get(_aureliaRouter.Router);
	    };

	    return this.compositionEngine.ensureViewModel(instruction);
	  };

	  return TemplatingRouteLoader;
	}(_aureliaRouter.RouteLoader)) || _class);

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Promise) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.RouterView = undefined;

	var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

	var _aureliaDependencyInjection = __webpack_require__(19);

	var _aureliaTemplating = __webpack_require__(23);

	var _aureliaRouter = __webpack_require__(179);

	var _aureliaMetadata = __webpack_require__(10);

	var _aureliaPal = __webpack_require__(7);

	function _initDefineProp(target, property, descriptor, context) {
	  if (!descriptor) return;
	  Object.defineProperty(target, property, {
	    enumerable: descriptor.enumerable,
	    configurable: descriptor.configurable,
	    writable: descriptor.writable,
	    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	  });
	}

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;

	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }

	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);

	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }

	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }

	  return desc;
	}

	function _initializerWarningHelper(descriptor, context) {
	  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
	}



	var SwapStrategies = function () {
	  function SwapStrategies() {
	    
	  }

	  SwapStrategies.prototype.before = function before(viewSlot, previousView, callback) {
	    var promise = Promise.resolve(callback());

	    if (previousView !== undefined) {
	      return promise.then(function () {
	        return viewSlot.remove(previousView, true);
	      });
	    }

	    return promise;
	  };

	  SwapStrategies.prototype.with = function _with(viewSlot, previousView, callback) {
	    var promise = Promise.resolve(callback());

	    if (previousView !== undefined) {
	      return Promise.all([viewSlot.remove(previousView, true), promise]);
	    }

	    return promise;
	  };

	  SwapStrategies.prototype.after = function after(viewSlot, previousView, callback) {
	    return Promise.resolve(viewSlot.removeAll(true)).then(callback);
	  };

	  return SwapStrategies;
	}();

	var swapStrategies = new SwapStrategies();

	var RouterView = exports.RouterView = (_dec = (0, _aureliaTemplating.customElement)('router-view'), _dec2 = (0, _aureliaDependencyInjection.inject)(_aureliaPal.DOM.Element, _aureliaDependencyInjection.Container, _aureliaTemplating.ViewSlot, _aureliaRouter.Router, _aureliaTemplating.ViewLocator, _aureliaTemplating.CompositionTransaction, _aureliaTemplating.CompositionEngine), _dec(_class = (0, _aureliaTemplating.noView)(_class = _dec2(_class = (_class2 = function () {
	  function RouterView(element, container, viewSlot, router, viewLocator, compositionTransaction, compositionEngine) {
	    

	    _initDefineProp(this, 'swapOrder', _descriptor, this);

	    _initDefineProp(this, 'layoutView', _descriptor2, this);

	    _initDefineProp(this, 'layoutViewModel', _descriptor3, this);

	    _initDefineProp(this, 'layoutModel', _descriptor4, this);

	    this.element = element;
	    this.container = container;
	    this.viewSlot = viewSlot;
	    this.router = router;
	    this.viewLocator = viewLocator;
	    this.compositionTransaction = compositionTransaction;
	    this.compositionEngine = compositionEngine;
	    this.router.registerViewPort(this, this.element.getAttribute('name'));

	    if (!('initialComposition' in compositionTransaction)) {
	      compositionTransaction.initialComposition = true;
	      this.compositionTransactionNotifier = compositionTransaction.enlist();
	    }
	  }

	  RouterView.prototype.created = function created(owningView) {
	    this.owningView = owningView;
	  };

	  RouterView.prototype.bind = function bind(bindingContext, overrideContext) {
	    this.container.viewModel = bindingContext;
	    this.overrideContext = overrideContext;
	  };

	  RouterView.prototype.process = function process(viewPortInstruction, waitToSwap) {
	    var _this = this;

	    var component = viewPortInstruction.component;
	    var childContainer = component.childContainer;
	    var viewModel = component.viewModel;
	    var viewModelResource = component.viewModelResource;
	    var metadata = viewModelResource.metadata;
	    var config = component.router.currentInstruction.config;
	    var viewPort = config.viewPorts ? config.viewPorts[viewPortInstruction.name] : {};

	    var layoutInstruction = {
	      viewModel: viewPort.layoutViewModel || config.layoutViewModel || this.layoutViewModel,
	      view: viewPort.layoutView || config.layoutView || this.layoutView,
	      model: viewPort.layoutModel || config.layoutModel || this.layoutModel,
	      router: viewPortInstruction.component.router,
	      childContainer: childContainer,
	      viewSlot: this.viewSlot
	    };

	    var viewStrategy = this.viewLocator.getViewStrategy(component.view || viewModel);
	    if (viewStrategy && component.view) {
	      viewStrategy.makeRelativeTo(_aureliaMetadata.Origin.get(component.router.container.viewModel.constructor).moduleId);
	    }

	    return metadata.load(childContainer, viewModelResource.value, null, viewStrategy, true).then(function (viewFactory) {
	      if (!_this.compositionTransactionNotifier) {
	        _this.compositionTransactionOwnershipToken = _this.compositionTransaction.tryCapture();
	      }

	      if (layoutInstruction.viewModel || layoutInstruction.view) {
	        viewPortInstruction.layoutInstruction = layoutInstruction;
	      }

	      viewPortInstruction.controller = metadata.create(childContainer, _aureliaTemplating.BehaviorInstruction.dynamic(_this.element, viewModel, viewFactory));

	      if (waitToSwap) {
	        return;
	      }

	      _this.swap(viewPortInstruction);
	    });
	  };

	  RouterView.prototype.swap = function swap(viewPortInstruction) {
	    var _this2 = this;

	    var work = function work() {
	      var previousView = _this2.view;
	      var swapStrategy = void 0;
	      var viewSlot = _this2.viewSlot;
	      var layoutInstruction = viewPortInstruction.layoutInstruction;

	      swapStrategy = _this2.swapOrder in swapStrategies ? swapStrategies[_this2.swapOrder] : swapStrategies.after;

	      swapStrategy(viewSlot, previousView, function () {
	        var waitForView = void 0;

	        if (layoutInstruction) {
	          if (!layoutInstruction.viewModel) {
	            layoutInstruction.viewModel = {};
	          }

	          waitForView = _this2.compositionEngine.createController(layoutInstruction).then(function (layout) {
	            _aureliaTemplating.ShadowDOM.distributeView(viewPortInstruction.controller.view, layout.slots || layout.view.slots);
	            return layout.view || layout;
	          });
	        } else {
	          waitForView = Promise.resolve(viewPortInstruction.controller.view);
	        }

	        return waitForView.then(function (newView) {
	          _this2.view = newView;
	          return viewSlot.add(newView);
	        }).then(function () {
	          _this2._notify();
	        });
	      });
	    };

	    viewPortInstruction.controller.automate(this.overrideContext, this.owningView);

	    if (this.compositionTransactionOwnershipToken) {
	      return this.compositionTransactionOwnershipToken.waitForCompositionComplete().then(function () {
	        _this2.compositionTransactionOwnershipToken = null;
	        return work();
	      });
	    }

	    return work();
	  };

	  RouterView.prototype._notify = function _notify() {
	    if (this.compositionTransactionNotifier) {
	      this.compositionTransactionNotifier.done();
	      this.compositionTransactionNotifier = null;
	    }
	  };

	  return RouterView;
	}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'swapOrder', [_aureliaTemplating.bindable], {
	  enumerable: true,
	  initializer: null
	}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'layoutView', [_aureliaTemplating.bindable], {
	  enumerable: true,
	  initializer: null
	}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'layoutViewModel', [_aureliaTemplating.bindable], {
	  enumerable: true,
	  initializer: null
	}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'layoutModel', [_aureliaTemplating.bindable], {
	  enumerable: true,
	  initializer: null
	})), _class2)) || _class) || _class) || _class);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.RouteHref = undefined;

	var _dec, _dec2, _dec3, _dec4, _dec5, _class;

	var _aureliaTemplating = __webpack_require__(23);

	var _aureliaDependencyInjection = __webpack_require__(19);

	var _aureliaRouter = __webpack_require__(179);

	var _aureliaPal = __webpack_require__(7);

	var _aureliaLogging = __webpack_require__(21);

	var LogManager = _interopRequireWildcard(_aureliaLogging);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }



	var logger = LogManager.getLogger('route-href');

	var RouteHref = exports.RouteHref = (_dec = (0, _aureliaTemplating.customAttribute)('route-href'), _dec2 = (0, _aureliaTemplating.bindable)({ name: 'route', changeHandler: 'processChange' }), _dec3 = (0, _aureliaTemplating.bindable)({ name: 'params', changeHandler: 'processChange' }), _dec4 = (0, _aureliaTemplating.bindable)({ name: 'attribute', defaultValue: 'href' }), _dec5 = (0, _aureliaDependencyInjection.inject)(_aureliaRouter.Router, _aureliaPal.DOM.Element), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = function () {
	  function RouteHref(router, element) {
	    

	    this.router = router;
	    this.element = element;
	  }

	  RouteHref.prototype.bind = function bind() {
	    this.isActive = true;
	    this.processChange();
	  };

	  RouteHref.prototype.unbind = function unbind() {
	    this.isActive = false;
	  };

	  RouteHref.prototype.attributeChanged = function attributeChanged(value, previous) {
	    if (previous) {
	      this.element.removeAttribute(previous);
	    }

	    this.processChange();
	  };

	  RouteHref.prototype.processChange = function processChange() {
	    var _this = this;

	    return this.router.ensureConfigured().then(function () {
	      if (!_this.isActive) {
	        return null;
	      }

	      var href = _this.router.generate(_this.route, _this.params);
	      _this.element.setAttribute(_this.attribute, href);
	      return null;
	    }).catch(function (reason) {
	      logger.error(reason);
	    });
	  };

	  return RouteHref;
	}()) || _class) || _class) || _class) || _class) || _class);

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	// This file is autogenerated via the `commonjs` Grunt task. You can require() this file in a CommonJS environment.
	__webpack_require__(216)
	__webpack_require__(218)
	__webpack_require__(219)
	__webpack_require__(220)
	__webpack_require__(221)
	__webpack_require__(222)
	__webpack_require__(223)
	__webpack_require__(224)
	__webpack_require__(225)
	__webpack_require__(226)
	__webpack_require__(227)
	__webpack_require__(228)

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
	 * Bootstrap: transition.js v3.3.6
	 * http://getbootstrap.com/javascript/#transitions
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
	  // ============================================================

	  function transitionEnd() {
	    var el = document.createElement('bootstrap')

	    var transEndEventNames = {
	      WebkitTransition : 'webkitTransitionEnd',
	      MozTransition    : 'transitionend',
	      OTransition      : 'oTransitionEnd otransitionend',
	      transition       : 'transitionend'
	    }

	    for (var name in transEndEventNames) {
	      if (el.style[name] !== undefined) {
	        return { end: transEndEventNames[name] }
	      }
	    }

	    return false // explicit for ie8 (  ._.)
	  }

	  // http://blog.alexmaccaw.com/css-transitions
	  $.fn.emulateTransitionEnd = function (duration) {
	    var called = false
	    var $el = this
	    $(this).one('bsTransitionEnd', function () { called = true })
	    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
	    setTimeout(callback, duration)
	    return this
	  }

	  $(function () {
	    $.support.transition = transitionEnd()

	    if (!$.support.transition) return

	    $.event.special.bsTransitionEnd = {
	      bindType: $.support.transition.end,
	      delegateType: $.support.transition.end,
	      handle: function (e) {
	        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
	      }
	    }
	  })

	}(jQuery);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(217)))

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v2.2.4
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-05-20T17:23Z
	 */

	(function( global, factory ) {

		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//"use strict";
	var arr = [];

	var document = window.document;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var support = {};



	var
		version = "2.2.4",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android<4.1
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// Start with an empty selector
		selector: "",

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?

				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :

				// Return all the elements in a clean array
				slice.call( this );
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {

			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			var realStringObj = obj && obj.toString();
			return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
		},

		isPlainObject: function( obj ) {
			var key;

			// Not plain objects:
			// - Any object or value whose internal [[Class]] property is not "[object Object]"
			// - DOM nodes
			// - window
			if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}

			// Not own constructor property must be Object
			if ( obj.constructor &&
					!hasOwn.call( obj, "constructor" ) &&
					!hasOwn.call( obj.constructor.prototype || {}, "isPrototypeOf" ) ) {
				return false;
			}

			// Own properties are enumerated firstly, so to speed up,
			// if last one is own, then all properties are own
			for ( key in obj ) {}

			return key === undefined || hasOwn.call( obj, key );
		},

		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}

			// Support: Android<4.0, iOS<6 (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			var script,
				indirect = eval;

			code = jQuery.trim( code );

			if ( code ) {

				// If the code includes a valid, prologue position
				// strict mode pragma, execute code by injecting a
				// script tag into the document.
				if ( code.indexOf( "use strict" ) === 1 ) {
					script = document.createElement( "script" );
					script.text = code;
					document.head.appendChild( script ).parentNode.removeChild( script );
				} else {

					// Otherwise, avoid the DOM node creation, insertion
					// and removal by using an indirect global eval

					indirect( code );
				}
			}
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE9-11+
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android<4.1
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	// JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}
	/* jshint ignore: end */

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: iOS 8.2 (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.2.1
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-10-17
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,
		rescape = /'|\\/g,

		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		};

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, nidselect, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rescape, "\\$&" );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
						while ( i-- ) {
							groups[i] = nidselect + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");

		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, parent,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( (parent = document.defaultView) && parent.top !== parent ) {
			// Support: IE 11
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( document.createComment("") );
			return !div.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];

			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibing-combinator selector` fails
				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},

			"disabled": function( elem ) {
				return elem.disabled === true;
			},

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( (oldCache = uniqueCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ dir ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;



	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			} );

		}

		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );

		}

		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}

			qualifier = jQuery.filter( qualifier, elements );
		}

		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i,
				len = this.length,
				ret = [],
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						// Support: Blackberry 4.6
						// gEBID returns nodes no longer in the document (#6963)
						if ( elem && elem.parentNode ) {

							// Inject the element directly into the jQuery object
							this.length = 1;
							this[ 0 ] = elem;
						}

						this.context = document;
						this.selector = selector;
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;

			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( pos ?
						pos.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnotwhite = ( /\S+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this === promise ? newDefer.promise() : this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Keep pipe for back-compat
			promise.pipe = promise.then;

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];

				// promise[ done | fail | progress ] = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add( function() {

						// state = [ resolved | rejected ]
						state = stateString;

					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}

				// deferred[ resolve | reject | notify ]
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,

				// the count of uncompleted subordinates
				remaining = length !== 1 ||
					( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

				// the master Deferred.
				// If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );
						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},

				progressValues, progressContexts, resolveContexts;

			// Add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.progress( updateFunc( i, progressContexts, progressValues ) )
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject );
					} else {
						--remaining;
					}
				}
			}

			// If we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}

			return deferred.promise();
		}
	} );


	// The deferred used on DOM ready
	var readyList;

	jQuery.fn.ready = function( fn ) {

		// Add the callback
		jQuery.ready.promise().done( fn );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );

			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	} );

	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {

			readyList = jQuery.Deferred();

			// Catch cases where $(document).ready() is called
			// after the browser event has already occurred.
			// Support: IE9-10 only
			// Older IE sometimes signals "interactive" too soon
			if ( document.readyState === "complete" ||
				( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

				// Handle it asynchronously to allow scripts the opportunity to delay ready
				window.setTimeout( jQuery.ready );

			} else {

				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed );

				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed );
			}
		}
		return readyList.promise( obj );
	};

	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		/* jshint -W018 */
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		register: function( owner, initial ) {
			var value = initial || {};

			// If it is a node unlikely to be stringify-ed or looped over
			// use plain assignment
			if ( owner.nodeType ) {
				owner[ this.expando ] = value;

			// Otherwise secure it in a non-enumerable, non-writable property
			// configurability must be true to allow the property to be
			// deleted with the delete operator
			} else {
				Object.defineProperty( owner, this.expando, {
					value: value,
					writable: true,
					configurable: true
				} );
			}
			return owner[ this.expando ];
		},
		cache: function( owner ) {

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( !acceptData( owner ) ) {
				return {};
			}

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			if ( typeof data === "string" ) {
				cache[ data ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :
				owner[ this.expando ] && owner[ this.expando ][ key ];
		},
		access: function( owner, key, value ) {
			var stored;

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				stored = this.get( owner, key );

				return stored !== undefined ?
					stored : this.get( owner, jQuery.camelCase( key ) );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i, name, camel,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key === undefined ) {
				this.register( owner );

			} else {

				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {

					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = key.concat( key.map( jQuery.camelCase ) );
				} else {
					camel = jQuery.camelCase( key );

					// Try the string as a key before any manipulation
					if ( key in cache ) {
						name = [ key, camel ];
					} else {

						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						name = camel;
						name = name in cache ?
							[ name ] : ( name.match( rnotwhite ) || [] );
					}
				}

				i = name.length;

				while ( i-- ) {
					delete cache[ name[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <= 35-45+
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://code.google.com/p/chromium/issues/detail?id=378607
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :

						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data, camelKey;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// with the key as-is
					data = dataUser.get( elem, key ) ||

						// Try to find dashed key if it exists (gh-2779)
						// This is for 2.2.x only
						dataUser.get( elem, key.replace( rmultiDash, "-$&" ).toLowerCase() );

					if ( data !== undefined ) {
						return data;
					}

					camelKey = jQuery.camelCase( key );

					// Attempt to get data from the cache
					// with the key camelized
					data = dataUser.get( elem, camelKey );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, camelKey, undefined );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				camelKey = jQuery.camelCase( key );
				this.each( function() {

					// First, attempt to store a copy or reference of any
					// data that might've been store with a camelCased key.
					var data = dataUser.get( this, camelKey );

					// For HTML5 data-* attribute interop, we have to
					// store property names with dashes in a camelCase form.
					// This might not apply to all properties...*
					dataUser.set( this, camelKey, value );

					// *... In the case of properties that might _actually_
					// have dashes, we need to also store a copy of that
					// unchanged property.
					if ( key.indexOf( "-" ) > -1 && data !== undefined ) {
						dataUser.set( this, key, value );
					}
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHidden = function( elem, el ) {

			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" ||
				!jQuery.contains( elem.ownerDocument, elem );
		};



	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() { return tween.cur(); } :
				function() { return jQuery.css( elem, prop, "" ); },
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );

			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([\w:-]+)/ );

	var rscriptType = ( /^$|\/(?:java|ecma)script/i );



	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	// Support: IE9
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {

		// Support: IE9-11+
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
				[];

		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {

					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0-4.3, Safari<=5.1
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Safari<=5.1, Android<4.2
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE<=11+
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();


	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE9
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( event ) {

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );

			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Support (at least): Chrome, IE9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox<=42+
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		// Includes some event props shared by KeyEvent and MouseEvent
		props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
			"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

		fixHooks: {},

		keyHooks: {
			props: "char charCode key keyCode".split( " " ),
			filter: function( event, original ) {

				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}

				return event;
			}
		},

		mouseHooks: {
			props: ( "button buttons clientX clientY offsetX offsetY pageX pageY " +
				"screenX screenY toElement" ).split( " " ),
			filter: function( event, original ) {
				var eventDoc, doc, body,
					button = original.button;

				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;

					event.pageX = original.clientX +
						( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
						( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY +
						( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
						( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}

				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}

				return event;
			}
		},

		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}

			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];

			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

			event = new jQuery.Event( originalEvent );

			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}

			// Support: Cordova 2.5 (WebKit) (#13255)
			// All events should have a target; Cordova deviceready doesn't
			if ( !event.target ) {
				event.target = document;
			}

			// Support: Safari 6.0+, Chrome<28
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}

			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android<4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://code.google.com/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {
		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

		// Support: IE 10-11, Edge 10240+
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

			elem.getElementsByTagName( "tbody" )[ 0 ] ||
				elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
			elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android<4.1, PhantomJS<2
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {

		// Keep domManip exposed until 3.0 (gh-2225)
		domManip: domManip,

		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: QtWebKit
				// .get() because push.apply(_, arraylike) throws
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );


	var iframe,
		elemdisplay = {

			// Support: Firefox
			// We have to pre-define these values for FF (#10227)
			HTML: "block",
			BODY: "block"
		};

	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */

	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

			display = jQuery.css( elem[ 0 ], "display" );

		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();

		return display;
	}

	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];

		if ( !display ) {
			display = actualDisplay( nodeName, doc );

			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {

				// Use the already-created iframe if possible
				iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
					.appendTo( doc.documentElement );

				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = iframe[ 0 ].contentDocument;

				// Support: IE
				doc.write();
				doc.close();

				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}

			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}

		return display;
	}
	var rmargin = ( /^margin/ );

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};


	var documentElement = document.documentElement;



	( function() {
		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE9-11+
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {
			div.style.cssText =

				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild( container );
		}

		jQuery.extend( support, {
			pixelPosition: function() {

				// This test is executed only once but we still do memoizing
				// since we can use the boxSizingReliable pre-computing.
				// No need to check if the test was already performed, though.
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {

				// Support: Android 4.0-4.3
				// We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
				// since that compresses better and they're computed together anyway.
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {

				// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return reliableMarginLeftVal;
			},
			reliableMarginRight: function() {

				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// This support function is only executed once so no memoizing is needed.
				var ret,
					marginDiv = div.appendChild( document.createElement( "div" ) );

				// Reset CSS: box-sizing; display; margin; border; padding
				marginDiv.style.cssText = div.style.cssText =

					// Support: Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;box-sizing:content-box;" +
					"display:block;margin:0;border:0;padding:0";
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				documentElement.appendChild( container );

				ret = !parseFloat( window.getComputedStyle( marginDiv ).marginRight );

				documentElement.removeChild( container );
				div.removeChild( marginDiv );

				return ret;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

		// Support: Opera 12.1x only
		// Fall back to style even without computed
		// computed is undefined for elems on document fragments
		if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// Support: IE9
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// http://dev.w3.org/csswg/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE9-11+
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,

		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	function setPositiveNumber( elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?

			// If we already have the right measurement, avoid augmentation
			4 :

			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {

				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {

			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;

		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			values[ index ] = dataPriv.get( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {

				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}

				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] = dataPriv.access(
						elem,
						"olddisplay",
						defaultDisplay( elem.nodeName )
					);
				}
			} else {
				hidden = isHidden( elem );

				if ( display !== "none" || !hidden ) {
					dataPriv.set(
						elem,
						"olddisplay",
						hidden ? display : jQuery.css( elem, "display" )
					);
				}
			}
		}

		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}

		return elements;
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// Support: IE9-11+
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					style[ name ] = value;
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
						elem.offsetWidth === 0 ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	// Support: Android 2.3
	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				return swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back Compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE9-10 do not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );

			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				dataPriv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
				style.display = "inline-block";
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// If there is dataShow left over from a stopped hide or show
					// and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

			// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}

		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", {} );
			}

			// Store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done( function() {
					jQuery( elem ).hide();
				} );
			}
			anim.done( function() {
				var prop;

				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}

		// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
			style.display = display;
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length ; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {
		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ?
			opt.duration : opt.duration in jQuery.fx.speeds ?
				jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		window.clearInterval( timerId );

		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: iOS<=5.1, Android<=4.2+
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE<=11+
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: Android<=2.3
		// Options inside disabled selects are incorrectly marked as disabled
		select.disabled = true;
		support.optDisabled = !opt.disabled;

		// Support: IE<=11+
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					propName = jQuery.propFix[ name ] || name;

					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {

						// Set corresponding property to false
						elem[ propName ] = false;
					}

					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




	var rclass = /[\t\r\n\f]/g;

	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( type === "string" ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g,
		rspaces = /[\x20\t\r\n\f]+/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?

						// Handle most common string cases
						ret.replace( rreturn, "" ) :

						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE10-11+
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ?
									!option.disabled : option.getAttribute( "disabled" ) === null ) &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];
						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);

			jQuery.event.trigger( e, null, elem );
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );




	support.focusin = "onfocusin" in window;


	// Support: Firefox
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome, Safari
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = ( /\?/ );



	// Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON = function( data ) {
		return JSON.parse( data + "" );
	};


	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE9
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

			if ( jQuery.isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

			// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// The jqXHR state
				state = 0,

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {

									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;

			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" ).replace( rhash, "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE8-11+
				// IE throws exception if url is malformed, e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE8-11+
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?

						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :

						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( state === 2 ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );

					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Called once
				if ( state === 2 ) {
					return;
				}

				// State is "done" now
				state = 2;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapAll( html.call( this, i ) );
				} );
			}

			if ( this[ 0 ] ) {

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function() {
			return this.parent().each( function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			} ).end();
		}
	} );


	jQuery.expr.filters.hidden = function( elem ) {
		return !jQuery.expr.filters.visible( elem );
	};
	jQuery.expr.filters.visible = function( elem ) {

		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		// Use OR instead of AND as the element is not visible if either is true
		// See tickets #10406 and #13132
		return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
	};




	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {

				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE9
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE9
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );

					// Support: IE9
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;

		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	// Keep a copy of the old load method
	var _load = jQuery.fn.load;

	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}

		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var docElem, win,
				elem = this[ 0 ],
				box = { top: 0, left: 0 },
				doc = elem && elem.ownerDocument;

			if ( !doc ) {
				return;
			}

			docElem = doc.documentElement;

			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}

			box = elem.getBoundingClientRect();
			win = getWindow( doc );
			return {
				top: box.top + win.pageYOffset - docElem.clientTop,
				left: box.left + win.pageXOffset - docElem.clientLeft
			};
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari<7-8+, Chrome<37-44+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {

						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		} );
	} );


	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		},
		size: function() {
			return this.length;
		}
	} );

	jQuery.fn.andSelf = jQuery.fn.addBack;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}



	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}

	return jQuery;
	}));


/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
	 * Bootstrap: alert.js v3.3.6
	 * http://getbootstrap.com/javascript/#alerts
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // ALERT CLASS DEFINITION
	  // ======================

	  var dismiss = '[data-dismiss="alert"]'
	  var Alert   = function (el) {
	    $(el).on('click', dismiss, this.close)
	  }

	  Alert.VERSION = '3.3.6'

	  Alert.TRANSITION_DURATION = 150

	  Alert.prototype.close = function (e) {
	    var $this    = $(this)
	    var selector = $this.attr('data-target')

	    if (!selector) {
	      selector = $this.attr('href')
	      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
	    }

	    var $parent = $(selector)

	    if (e) e.preventDefault()

	    if (!$parent.length) {
	      $parent = $this.closest('.alert')
	    }

	    $parent.trigger(e = $.Event('close.bs.alert'))

	    if (e.isDefaultPrevented()) return

	    $parent.removeClass('in')

	    function removeElement() {
	      // detach from parent, fire event then clean up data
	      $parent.detach().trigger('closed.bs.alert').remove()
	    }

	    $.support.transition && $parent.hasClass('fade') ?
	      $parent
	        .one('bsTransitionEnd', removeElement)
	        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
	      removeElement()
	  }


	  // ALERT PLUGIN DEFINITION
	  // =======================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this)
	      var data  = $this.data('bs.alert')

	      if (!data) $this.data('bs.alert', (data = new Alert(this)))
	      if (typeof option == 'string') data[option].call($this)
	    })
	  }

	  var old = $.fn.alert

	  $.fn.alert             = Plugin
	  $.fn.alert.Constructor = Alert


	  // ALERT NO CONFLICT
	  // =================

	  $.fn.alert.noConflict = function () {
	    $.fn.alert = old
	    return this
	  }


	  // ALERT DATA-API
	  // ==============

	  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

	}(jQuery);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(217)))

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
	 * Bootstrap: button.js v3.3.6
	 * http://getbootstrap.com/javascript/#buttons
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // BUTTON PUBLIC CLASS DEFINITION
	  // ==============================

	  var Button = function (element, options) {
	    this.$element  = $(element)
	    this.options   = $.extend({}, Button.DEFAULTS, options)
	    this.isLoading = false
	  }

	  Button.VERSION  = '3.3.6'

	  Button.DEFAULTS = {
	    loadingText: 'loading...'
	  }

	  Button.prototype.setState = function (state) {
	    var d    = 'disabled'
	    var $el  = this.$element
	    var val  = $el.is('input') ? 'val' : 'html'
	    var data = $el.data()

	    state += 'Text'

	    if (data.resetText == null) $el.data('resetText', $el[val]())

	    // push to event loop to allow forms to submit
	    setTimeout($.proxy(function () {
	      $el[val](data[state] == null ? this.options[state] : data[state])

	      if (state == 'loadingText') {
	        this.isLoading = true
	        $el.addClass(d).attr(d, d)
	      } else if (this.isLoading) {
	        this.isLoading = false
	        $el.removeClass(d).removeAttr(d)
	      }
	    }, this), 0)
	  }

	  Button.prototype.toggle = function () {
	    var changed = true
	    var $parent = this.$element.closest('[data-toggle="buttons"]')

	    if ($parent.length) {
	      var $input = this.$element.find('input')
	      if ($input.prop('type') == 'radio') {
	        if ($input.prop('checked')) changed = false
	        $parent.find('.active').removeClass('active')
	        this.$element.addClass('active')
	      } else if ($input.prop('type') == 'checkbox') {
	        if (($input.prop('checked')) !== this.$element.hasClass('active')) changed = false
	        this.$element.toggleClass('active')
	      }
	      $input.prop('checked', this.$element.hasClass('active'))
	      if (changed) $input.trigger('change')
	    } else {
	      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
	      this.$element.toggleClass('active')
	    }
	  }


	  // BUTTON PLUGIN DEFINITION
	  // ========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.button')
	      var options = typeof option == 'object' && option

	      if (!data) $this.data('bs.button', (data = new Button(this, options)))

	      if (option == 'toggle') data.toggle()
	      else if (option) data.setState(option)
	    })
	  }

	  var old = $.fn.button

	  $.fn.button             = Plugin
	  $.fn.button.Constructor = Button


	  // BUTTON NO CONFLICT
	  // ==================

	  $.fn.button.noConflict = function () {
	    $.fn.button = old
	    return this
	  }


	  // BUTTON DATA-API
	  // ===============

	  $(document)
	    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
	      var $btn = $(e.target)
	      if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
	      Plugin.call($btn, 'toggle')
	      if (!($(e.target).is('input[type="radio"]') || $(e.target).is('input[type="checkbox"]'))) e.preventDefault()
	    })
	    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
	      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
	    })

	}(jQuery);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(217)))

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
	 * Bootstrap: carousel.js v3.3.6
	 * http://getbootstrap.com/javascript/#carousel
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // CAROUSEL CLASS DEFINITION
	  // =========================

	  var Carousel = function (element, options) {
	    this.$element    = $(element)
	    this.$indicators = this.$element.find('.carousel-indicators')
	    this.options     = options
	    this.paused      = null
	    this.sliding     = null
	    this.interval    = null
	    this.$active     = null
	    this.$items      = null

	    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

	    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
	      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
	      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
	  }

	  Carousel.VERSION  = '3.3.6'

	  Carousel.TRANSITION_DURATION = 600

	  Carousel.DEFAULTS = {
	    interval: 5000,
	    pause: 'hover',
	    wrap: true,
	    keyboard: true
	  }

	  Carousel.prototype.keydown = function (e) {
	    if (/input|textarea/i.test(e.target.tagName)) return
	    switch (e.which) {
	      case 37: this.prev(); break
	      case 39: this.next(); break
	      default: return
	    }

	    e.preventDefault()
	  }

	  Carousel.prototype.cycle = function (e) {
	    e || (this.paused = false)

	    this.interval && clearInterval(this.interval)

	    this.options.interval
	      && !this.paused
	      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

	    return this
	  }

	  Carousel.prototype.getItemIndex = function (item) {
	    this.$items = item.parent().children('.item')
	    return this.$items.index(item || this.$active)
	  }

	  Carousel.prototype.getItemForDirection = function (direction, active) {
	    var activeIndex = this.getItemIndex(active)
	    var willWrap = (direction == 'prev' && activeIndex === 0)
	                || (direction == 'next' && activeIndex == (this.$items.length - 1))
	    if (willWrap && !this.options.wrap) return active
	    var delta = direction == 'prev' ? -1 : 1
	    var itemIndex = (activeIndex + delta) % this.$items.length
	    return this.$items.eq(itemIndex)
	  }

	  Carousel.prototype.to = function (pos) {
	    var that        = this
	    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

	    if (pos > (this.$items.length - 1) || pos < 0) return

	    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
	    if (activeIndex == pos) return this.pause().cycle()

	    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
	  }

	  Carousel.prototype.pause = function (e) {
	    e || (this.paused = true)

	    if (this.$element.find('.next, .prev').length && $.support.transition) {
	      this.$element.trigger($.support.transition.end)
	      this.cycle(true)
	    }

	    this.interval = clearInterval(this.interval)

	    return this
	  }

	  Carousel.prototype.next = function () {
	    if (this.sliding) return
	    return this.slide('next')
	  }

	  Carousel.prototype.prev = function () {
	    if (this.sliding) return
	    return this.slide('prev')
	  }

	  Carousel.prototype.slide = function (type, next) {
	    var $active   = this.$element.find('.item.active')
	    var $next     = next || this.getItemForDirection(type, $active)
	    var isCycling = this.interval
	    var direction = type == 'next' ? 'left' : 'right'
	    var that      = this

	    if ($next.hasClass('active')) return (this.sliding = false)

	    var relatedTarget = $next[0]
	    var slideEvent = $.Event('slide.bs.carousel', {
	      relatedTarget: relatedTarget,
	      direction: direction
	    })
	    this.$element.trigger(slideEvent)
	    if (slideEvent.isDefaultPrevented()) return

	    this.sliding = true

	    isCycling && this.pause()

	    if (this.$indicators.length) {
	      this.$indicators.find('.active').removeClass('active')
	      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
	      $nextIndicator && $nextIndicator.addClass('active')
	    }

	    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
	    if ($.support.transition && this.$element.hasClass('slide')) {
	      $next.addClass(type)
	      $next[0].offsetWidth // force reflow
	      $active.addClass(direction)
	      $next.addClass(direction)
	      $active
	        .one('bsTransitionEnd', function () {
	          $next.removeClass([type, direction].join(' ')).addClass('active')
	          $active.removeClass(['active', direction].join(' '))
	          that.sliding = false
	          setTimeout(function () {
	            that.$element.trigger(slidEvent)
	          }, 0)
	        })
	        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
	    } else {
	      $active.removeClass('active')
	      $next.addClass('active')
	      this.sliding = false
	      this.$element.trigger(slidEvent)
	    }

	    isCycling && this.cycle()

	    return this
	  }


	  // CAROUSEL PLUGIN DEFINITION
	  // ==========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.carousel')
	      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
	      var action  = typeof option == 'string' ? option : options.slide

	      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
	      if (typeof option == 'number') data.to(option)
	      else if (action) data[action]()
	      else if (options.interval) data.pause().cycle()
	    })
	  }

	  var old = $.fn.carousel

	  $.fn.carousel             = Plugin
	  $.fn.carousel.Constructor = Carousel


	  // CAROUSEL NO CONFLICT
	  // ====================

	  $.fn.carousel.noConflict = function () {
	    $.fn.carousel = old
	    return this
	  }


	  // CAROUSEL DATA-API
	  // =================

	  var clickHandler = function (e) {
	    var href
	    var $this   = $(this)
	    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
	    if (!$target.hasClass('carousel')) return
	    var options = $.extend({}, $target.data(), $this.data())
	    var slideIndex = $this.attr('data-slide-to')
	    if (slideIndex) options.interval = false

	    Plugin.call($target, options)

	    if (slideIndex) {
	      $target.data('bs.carousel').to(slideIndex)
	    }

	    e.preventDefault()
	  }

	  $(document)
	    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
	    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

	  $(window).on('load', function () {
	    $('[data-ride="carousel"]').each(function () {
	      var $carousel = $(this)
	      Plugin.call($carousel, $carousel.data())
	    })
	  })

	}(jQuery);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(217)))

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
	 * Bootstrap: collapse.js v3.3.6
	 * http://getbootstrap.com/javascript/#collapse
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // COLLAPSE PUBLIC CLASS DEFINITION
	  // ================================

	  var Collapse = function (element, options) {
	    this.$element      = $(element)
	    this.options       = $.extend({}, Collapse.DEFAULTS, options)
	    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
	                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
	    this.transitioning = null

	    if (this.options.parent) {
	      this.$parent = this.getParent()
	    } else {
	      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
	    }

	    if (this.options.toggle) this.toggle()
	  }

	  Collapse.VERSION  = '3.3.6'

	  Collapse.TRANSITION_DURATION = 350

	  Collapse.DEFAULTS = {
	    toggle: true
	  }

	  Collapse.prototype.dimension = function () {
	    var hasWidth = this.$element.hasClass('width')
	    return hasWidth ? 'width' : 'height'
	  }

	  Collapse.prototype.show = function () {
	    if (this.transitioning || this.$element.hasClass('in')) return

	    var activesData
	    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

	    if (actives && actives.length) {
	      activesData = actives.data('bs.collapse')
	      if (activesData && activesData.transitioning) return
	    }

	    var startEvent = $.Event('show.bs.collapse')
	    this.$element.trigger(startEvent)
	    if (startEvent.isDefaultPrevented()) return

	    if (actives && actives.length) {
	      Plugin.call(actives, 'hide')
	      activesData || actives.data('bs.collapse', null)
	    }

	    var dimension = this.dimension()

	    this.$element
	      .removeClass('collapse')
	      .addClass('collapsing')[dimension](0)
	      .attr('aria-expanded', true)

	    this.$trigger
	      .removeClass('collapsed')
	      .attr('aria-expanded', true)

	    this.transitioning = 1

	    var complete = function () {
	      this.$element
	        .removeClass('collapsing')
	        .addClass('collapse in')[dimension]('')
	      this.transitioning = 0
	      this.$element
	        .trigger('shown.bs.collapse')
	    }

	    if (!$.support.transition) return complete.call(this)

	    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

	    this.$element
	      .one('bsTransitionEnd', $.proxy(complete, this))
	      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
	  }

	  Collapse.prototype.hide = function () {
	    if (this.transitioning || !this.$element.hasClass('in')) return

	    var startEvent = $.Event('hide.bs.collapse')
	    this.$element.trigger(startEvent)
	    if (startEvent.isDefaultPrevented()) return

	    var dimension = this.dimension()

	    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

	    this.$element
	      .addClass('collapsing')
	      .removeClass('collapse in')
	      .attr('aria-expanded', false)

	    this.$trigger
	      .addClass('collapsed')
	      .attr('aria-expanded', false)

	    this.transitioning = 1

	    var complete = function () {
	      this.transitioning = 0
	      this.$element
	        .removeClass('collapsing')
	        .addClass('collapse')
	        .trigger('hidden.bs.collapse')
	    }

	    if (!$.support.transition) return complete.call(this)

	    this.$element
	      [dimension](0)
	      .one('bsTransitionEnd', $.proxy(complete, this))
	      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
	  }

	  Collapse.prototype.toggle = function () {
	    this[this.$element.hasClass('in') ? 'hide' : 'show']()
	  }

	  Collapse.prototype.getParent = function () {
	    return $(this.options.parent)
	      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
	      .each($.proxy(function (i, element) {
	        var $element = $(element)
	        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
	      }, this))
	      .end()
	  }

	  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
	    var isOpen = $element.hasClass('in')

	    $element.attr('aria-expanded', isOpen)
	    $trigger
	      .toggleClass('collapsed', !isOpen)
	      .attr('aria-expanded', isOpen)
	  }

	  function getTargetFromTrigger($trigger) {
	    var href
	    var target = $trigger.attr('data-target')
	      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

	    return $(target)
	  }


	  // COLLAPSE PLUGIN DEFINITION
	  // ==========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.collapse')
	      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

	      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
	      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
	      if (typeof option == 'string') data[option]()
	    })
	  }

	  var old = $.fn.collapse

	  $.fn.collapse             = Plugin
	  $.fn.collapse.Constructor = Collapse


	  // COLLAPSE NO CONFLICT
	  // ====================

	  $.fn.collapse.noConflict = function () {
	    $.fn.collapse = old
	    return this
	  }


	  // COLLAPSE DATA-API
	  // =================

	  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
	    var $this   = $(this)

	    if (!$this.attr('data-target')) e.preventDefault()

	    var $target = getTargetFromTrigger($this)
	    var data    = $target.data('bs.collapse')
	    var option  = data ? 'toggle' : $this.data()

	    Plugin.call($target, option)
	  })

	}(jQuery);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(217)))

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
	 * Bootstrap: dropdown.js v3.3.6
	 * http://getbootstrap.com/javascript/#dropdowns
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // DROPDOWN CLASS DEFINITION
	  // =========================

	  var backdrop = '.dropdown-backdrop'
	  var toggle   = '[data-toggle="dropdown"]'
	  var Dropdown = function (element) {
	    $(element).on('click.bs.dropdown', this.toggle)
	  }

	  Dropdown.VERSION = '3.3.6'

	  function getParent($this) {
	    var selector = $this.attr('data-target')

	    if (!selector) {
	      selector = $this.attr('href')
	      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
	    }

	    var $parent = selector && $(selector)

	    return $parent && $parent.length ? $parent : $this.parent()
	  }

	  function clearMenus(e) {
	    if (e && e.which === 3) return
	    $(backdrop).remove()
	    $(toggle).each(function () {
	      var $this         = $(this)
	      var $parent       = getParent($this)
	      var relatedTarget = { relatedTarget: this }

	      if (!$parent.hasClass('open')) return

	      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

	      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

	      if (e.isDefaultPrevented()) return

	      $this.attr('aria-expanded', 'false')
	      $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget))
	    })
	  }

	  Dropdown.prototype.toggle = function (e) {
	    var $this = $(this)

	    if ($this.is('.disabled, :disabled')) return

	    var $parent  = getParent($this)
	    var isActive = $parent.hasClass('open')

	    clearMenus()

	    if (!isActive) {
	      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
	        // if mobile we use a backdrop because click events don't delegate
	        $(document.createElement('div'))
	          .addClass('dropdown-backdrop')
	          .insertAfter($(this))
	          .on('click', clearMenus)
	      }

	      var relatedTarget = { relatedTarget: this }
	      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

	      if (e.isDefaultPrevented()) return

	      $this
	        .trigger('focus')
	        .attr('aria-expanded', 'true')

	      $parent
	        .toggleClass('open')
	        .trigger($.Event('shown.bs.dropdown', relatedTarget))
	    }

	    return false
	  }

	  Dropdown.prototype.keydown = function (e) {
	    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

	    var $this = $(this)

	    e.preventDefault()
	    e.stopPropagation()

	    if ($this.is('.disabled, :disabled')) return

	    var $parent  = getParent($this)
	    var isActive = $parent.hasClass('open')

	    if (!isActive && e.which != 27 || isActive && e.which == 27) {
	      if (e.which == 27) $parent.find(toggle).trigger('focus')
	      return $this.trigger('click')
	    }

	    var desc = ' li:not(.disabled):visible a'
	    var $items = $parent.find('.dropdown-menu' + desc)

	    if (!$items.length) return

	    var index = $items.index(e.target)

	    if (e.which == 38 && index > 0)                 index--         // up
	    if (e.which == 40 && index < $items.length - 1) index++         // down
	    if (!~index)                                    index = 0

	    $items.eq(index).trigger('focus')
	  }


	  // DROPDOWN PLUGIN DEFINITION
	  // ==========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this)
	      var data  = $this.data('bs.dropdown')

	      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
	      if (typeof option == 'string') data[option].call($this)
	    })
	  }

	  var old = $.fn.dropdown

	  $.fn.dropdown             = Plugin
	  $.fn.dropdown.Constructor = Dropdown


	  // DROPDOWN NO CONFLICT
	  // ====================

	  $.fn.dropdown.noConflict = function () {
	    $.fn.dropdown = old
	    return this
	  }


	  // APPLY TO STANDARD DROPDOWN ELEMENTS
	  // ===================================

	  $(document)
	    .on('click.bs.dropdown.data-api', clearMenus)
	    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
	    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
	    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
	    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

	}(jQuery);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(217)))

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
	 * Bootstrap: modal.js v3.3.6
	 * http://getbootstrap.com/javascript/#modals
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // MODAL CLASS DEFINITION
	  // ======================

	  var Modal = function (element, options) {
	    this.options             = options
	    this.$body               = $(document.body)
	    this.$element            = $(element)
	    this.$dialog             = this.$element.find('.modal-dialog')
	    this.$backdrop           = null
	    this.isShown             = null
	    this.originalBodyPad     = null
	    this.scrollbarWidth      = 0
	    this.ignoreBackdropClick = false

	    if (this.options.remote) {
	      this.$element
	        .find('.modal-content')
	        .load(this.options.remote, $.proxy(function () {
	          this.$element.trigger('loaded.bs.modal')
	        }, this))
	    }
	  }

	  Modal.VERSION  = '3.3.6'

	  Modal.TRANSITION_DURATION = 300
	  Modal.BACKDROP_TRANSITION_DURATION = 150

	  Modal.DEFAULTS = {
	    backdrop: true,
	    keyboard: true,
	    show: true
	  }

	  Modal.prototype.toggle = function (_relatedTarget) {
	    return this.isShown ? this.hide() : this.show(_relatedTarget)
	  }

	  Modal.prototype.show = function (_relatedTarget) {
	    var that = this
	    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

	    this.$element.trigger(e)

	    if (this.isShown || e.isDefaultPrevented()) return

	    this.isShown = true

	    this.checkScrollbar()
	    this.setScrollbar()
	    this.$body.addClass('modal-open')

	    this.escape()
	    this.resize()

	    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

	    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
	      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
	        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
	      })
	    })

	    this.backdrop(function () {
	      var transition = $.support.transition && that.$element.hasClass('fade')

	      if (!that.$element.parent().length) {
	        that.$element.appendTo(that.$body) // don't move modals dom position
	      }

	      that.$element
	        .show()
	        .scrollTop(0)

	      that.adjustDialog()

	      if (transition) {
	        that.$element[0].offsetWidth // force reflow
	      }

	      that.$element.addClass('in')

	      that.enforceFocus()

	      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

	      transition ?
	        that.$dialog // wait for modal to slide in
	          .one('bsTransitionEnd', function () {
	            that.$element.trigger('focus').trigger(e)
	          })
	          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
	        that.$element.trigger('focus').trigger(e)
	    })
	  }

	  Modal.prototype.hide = function (e) {
	    if (e) e.preventDefault()

	    e = $.Event('hide.bs.modal')

	    this.$element.trigger(e)

	    if (!this.isShown || e.isDefaultPrevented()) return

	    this.isShown = false

	    this.escape()
	    this.resize()

	    $(document).off('focusin.bs.modal')

	    this.$element
	      .removeClass('in')
	      .off('click.dismiss.bs.modal')
	      .off('mouseup.dismiss.bs.modal')

	    this.$dialog.off('mousedown.dismiss.bs.modal')

	    $.support.transition && this.$element.hasClass('fade') ?
	      this.$element
	        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
	        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
	      this.hideModal()
	  }

	  Modal.prototype.enforceFocus = function () {
	    $(document)
	      .off('focusin.bs.modal') // guard against infinite focus loop
	      .on('focusin.bs.modal', $.proxy(function (e) {
	        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
	          this.$element.trigger('focus')
	        }
	      }, this))
	  }

	  Modal.prototype.escape = function () {
	    if (this.isShown && this.options.keyboard) {
	      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
	        e.which == 27 && this.hide()
	      }, this))
	    } else if (!this.isShown) {
	      this.$element.off('keydown.dismiss.bs.modal')
	    }
	  }

	  Modal.prototype.resize = function () {
	    if (this.isShown) {
	      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
	    } else {
	      $(window).off('resize.bs.modal')
	    }
	  }

	  Modal.prototype.hideModal = function () {
	    var that = this
	    this.$element.hide()
	    this.backdrop(function () {
	      that.$body.removeClass('modal-open')
	      that.resetAdjustments()
	      that.resetScrollbar()
	      that.$element.trigger('hidden.bs.modal')
	    })
	  }

	  Modal.prototype.removeBackdrop = function () {
	    this.$backdrop && this.$backdrop.remove()
	    this.$backdrop = null
	  }

	  Modal.prototype.backdrop = function (callback) {
	    var that = this
	    var animate = this.$element.hasClass('fade') ? 'fade' : ''

	    if (this.isShown && this.options.backdrop) {
	      var doAnimate = $.support.transition && animate

	      this.$backdrop = $(document.createElement('div'))
	        .addClass('modal-backdrop ' + animate)
	        .appendTo(this.$body)

	      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
	        if (this.ignoreBackdropClick) {
	          this.ignoreBackdropClick = false
	          return
	        }
	        if (e.target !== e.currentTarget) return
	        this.options.backdrop == 'static'
	          ? this.$element[0].focus()
	          : this.hide()
	      }, this))

	      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

	      this.$backdrop.addClass('in')

	      if (!callback) return

	      doAnimate ?
	        this.$backdrop
	          .one('bsTransitionEnd', callback)
	          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
	        callback()

	    } else if (!this.isShown && this.$backdrop) {
	      this.$backdrop.removeClass('in')

	      var callbackRemove = function () {
	        that.removeBackdrop()
	        callback && callback()
	      }
	      $.support.transition && this.$element.hasClass('fade') ?
	        this.$backdrop
	          .one('bsTransitionEnd', callbackRemove)
	          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
	        callbackRemove()

	    } else if (callback) {
	      callback()
	    }
	  }

	  // these following methods are used to handle overflowing modals

	  Modal.prototype.handleUpdate = function () {
	    this.adjustDialog()
	  }

	  Modal.prototype.adjustDialog = function () {
	    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

	    this.$element.css({
	      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
	      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
	    })
	  }

	  Modal.prototype.resetAdjustments = function () {
	    this.$element.css({
	      paddingLeft: '',
	      paddingRight: ''
	    })
	  }

	  Modal.prototype.checkScrollbar = function () {
	    var fullWindowWidth = window.innerWidth
	    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
	      var documentElementRect = document.documentElement.getBoundingClientRect()
	      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
	    }
	    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
	    this.scrollbarWidth = this.measureScrollbar()
	  }

	  Modal.prototype.setScrollbar = function () {
	    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
	    this.originalBodyPad = document.body.style.paddingRight || ''
	    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
	  }

	  Modal.prototype.resetScrollbar = function () {
	    this.$body.css('padding-right', this.originalBodyPad)
	  }

	  Modal.prototype.measureScrollbar = function () { // thx walsh
	    var scrollDiv = document.createElement('div')
	    scrollDiv.className = 'modal-scrollbar-measure'
	    this.$body.append(scrollDiv)
	    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
	    this.$body[0].removeChild(scrollDiv)
	    return scrollbarWidth
	  }


	  // MODAL PLUGIN DEFINITION
	  // =======================

	  function Plugin(option, _relatedTarget) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.modal')
	      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

	      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
	      if (typeof option == 'string') data[option](_relatedTarget)
	      else if (options.show) data.show(_relatedTarget)
	    })
	  }

	  var old = $.fn.modal

	  $.fn.modal             = Plugin
	  $.fn.modal.Constructor = Modal


	  // MODAL NO CONFLICT
	  // =================

	  $.fn.modal.noConflict = function () {
	    $.fn.modal = old
	    return this
	  }


	  // MODAL DATA-API
	  // ==============

	  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
	    var $this   = $(this)
	    var href    = $this.attr('href')
	    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
	    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

	    if ($this.is('a')) e.preventDefault()

	    $target.one('show.bs.modal', function (showEvent) {
	      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
	      $target.one('hidden.bs.modal', function () {
	        $this.is(':visible') && $this.trigger('focus')
	      })
	    })
	    Plugin.call($target, option, this)
	  })

	}(jQuery);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(217)))

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
	 * Bootstrap: tooltip.js v3.3.6
	 * http://getbootstrap.com/javascript/#tooltip
	 * Inspired by the original jQuery.tipsy by Jason Frame
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // TOOLTIP PUBLIC CLASS DEFINITION
	  // ===============================

	  var Tooltip = function (element, options) {
	    this.type       = null
	    this.options    = null
	    this.enabled    = null
	    this.timeout    = null
	    this.hoverState = null
	    this.$element   = null
	    this.inState    = null

	    this.init('tooltip', element, options)
	  }

	  Tooltip.VERSION  = '3.3.6'

	  Tooltip.TRANSITION_DURATION = 150

	  Tooltip.DEFAULTS = {
	    animation: true,
	    placement: 'top',
	    selector: false,
	    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
	    trigger: 'hover focus',
	    title: '',
	    delay: 0,
	    html: false,
	    container: false,
	    viewport: {
	      selector: 'body',
	      padding: 0
	    }
	  }

	  Tooltip.prototype.init = function (type, element, options) {
	    this.enabled   = true
	    this.type      = type
	    this.$element  = $(element)
	    this.options   = this.getOptions(options)
	    this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
	    this.inState   = { click: false, hover: false, focus: false }

	    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
	      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
	    }

	    var triggers = this.options.trigger.split(' ')

	    for (var i = triggers.length; i--;) {
	      var trigger = triggers[i]

	      if (trigger == 'click') {
	        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
	      } else if (trigger != 'manual') {
	        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
	        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

	        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
	        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
	      }
	    }

	    this.options.selector ?
	      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
	      this.fixTitle()
	  }

	  Tooltip.prototype.getDefaults = function () {
	    return Tooltip.DEFAULTS
	  }

	  Tooltip.prototype.getOptions = function (options) {
	    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

	    if (options.delay && typeof options.delay == 'number') {
	      options.delay = {
	        show: options.delay,
	        hide: options.delay
	      }
	    }

	    return options
	  }

	  Tooltip.prototype.getDelegateOptions = function () {
	    var options  = {}
	    var defaults = this.getDefaults()

	    this._options && $.each(this._options, function (key, value) {
	      if (defaults[key] != value) options[key] = value
	    })

	    return options
	  }

	  Tooltip.prototype.enter = function (obj) {
	    var self = obj instanceof this.constructor ?
	      obj : $(obj.currentTarget).data('bs.' + this.type)

	    if (!self) {
	      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
	      $(obj.currentTarget).data('bs.' + this.type, self)
	    }

	    if (obj instanceof $.Event) {
	      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
	    }

	    if (self.tip().hasClass('in') || self.hoverState == 'in') {
	      self.hoverState = 'in'
	      return
	    }

	    clearTimeout(self.timeout)

	    self.hoverState = 'in'

	    if (!self.options.delay || !self.options.delay.show) return self.show()

	    self.timeout = setTimeout(function () {
	      if (self.hoverState == 'in') self.show()
	    }, self.options.delay.show)
	  }

	  Tooltip.prototype.isInStateTrue = function () {
	    for (var key in this.inState) {
	      if (this.inState[key]) return true
	    }

	    return false
	  }

	  Tooltip.prototype.leave = function (obj) {
	    var self = obj instanceof this.constructor ?
	      obj : $(obj.currentTarget).data('bs.' + this.type)

	    if (!self) {
	      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
	      $(obj.currentTarget).data('bs.' + this.type, self)
	    }

	    if (obj instanceof $.Event) {
	      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
	    }

	    if (self.isInStateTrue()) return

	    clearTimeout(self.timeout)

	    self.hoverState = 'out'

	    if (!self.options.delay || !self.options.delay.hide) return self.hide()

	    self.timeout = setTimeout(function () {
	      if (self.hoverState == 'out') self.hide()
	    }, self.options.delay.hide)
	  }

	  Tooltip.prototype.show = function () {
	    var e = $.Event('show.bs.' + this.type)

	    if (this.hasContent() && this.enabled) {
	      this.$element.trigger(e)

	      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
	      if (e.isDefaultPrevented() || !inDom) return
	      var that = this

	      var $tip = this.tip()

	      var tipId = this.getUID(this.type)

	      this.setContent()
	      $tip.attr('id', tipId)
	      this.$element.attr('aria-describedby', tipId)

	      if (this.options.animation) $tip.addClass('fade')

	      var placement = typeof this.options.placement == 'function' ?
	        this.options.placement.call(this, $tip[0], this.$element[0]) :
	        this.options.placement

	      var autoToken = /\s?auto?\s?/i
	      var autoPlace = autoToken.test(placement)
	      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

	      $tip
	        .detach()
	        .css({ top: 0, left: 0, display: 'block' })
	        .addClass(placement)
	        .data('bs.' + this.type, this)

	      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
	      this.$element.trigger('inserted.bs.' + this.type)

	      var pos          = this.getPosition()
	      var actualWidth  = $tip[0].offsetWidth
	      var actualHeight = $tip[0].offsetHeight

	      if (autoPlace) {
	        var orgPlacement = placement
	        var viewportDim = this.getPosition(this.$viewport)

	        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
	                    placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
	                    placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
	                    placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
	                    placement

	        $tip
	          .removeClass(orgPlacement)
	          .addClass(placement)
	      }

	      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

	      this.applyPlacement(calculatedOffset, placement)

	      var complete = function () {
	        var prevHoverState = that.hoverState
	        that.$element.trigger('shown.bs.' + that.type)
	        that.hoverState = null

	        if (prevHoverState == 'out') that.leave(that)
	      }

	      $.support.transition && this.$tip.hasClass('fade') ?
	        $tip
	          .one('bsTransitionEnd', complete)
	          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
	        complete()
	    }
	  }

	  Tooltip.prototype.applyPlacement = function (offset, placement) {
	    var $tip   = this.tip()
	    var width  = $tip[0].offsetWidth
	    var height = $tip[0].offsetHeight

	    // manually read margins because getBoundingClientRect includes difference
	    var marginTop = parseInt($tip.css('margin-top'), 10)
	    var marginLeft = parseInt($tip.css('margin-left'), 10)

	    // we must check for NaN for ie 8/9
	    if (isNaN(marginTop))  marginTop  = 0
	    if (isNaN(marginLeft)) marginLeft = 0

	    offset.top  += marginTop
	    offset.left += marginLeft

	    // $.fn.offset doesn't round pixel values
	    // so we use setOffset directly with our own function B-0
	    $.offset.setOffset($tip[0], $.extend({
	      using: function (props) {
	        $tip.css({
	          top: Math.round(props.top),
	          left: Math.round(props.left)
	        })
	      }
	    }, offset), 0)

	    $tip.addClass('in')

	    // check to see if placing tip in new offset caused the tip to resize itself
	    var actualWidth  = $tip[0].offsetWidth
	    var actualHeight = $tip[0].offsetHeight

	    if (placement == 'top' && actualHeight != height) {
	      offset.top = offset.top + height - actualHeight
	    }

	    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

	    if (delta.left) offset.left += delta.left
	    else offset.top += delta.top

	    var isVertical          = /top|bottom/.test(placement)
	    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
	    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

	    $tip.offset(offset)
	    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
	  }

	  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
	    this.arrow()
	      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
	      .css(isVertical ? 'top' : 'left', '')
	  }

	  Tooltip.prototype.setContent = function () {
	    var $tip  = this.tip()
	    var title = this.getTitle()

	    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
	    $tip.removeClass('fade in top bottom left right')
	  }

	  Tooltip.prototype.hide = function (callback) {
	    var that = this
	    var $tip = $(this.$tip)
	    var e    = $.Event('hide.bs.' + this.type)

	    function complete() {
	      if (that.hoverState != 'in') $tip.detach()
	      that.$element
	        .removeAttr('aria-describedby')
	        .trigger('hidden.bs.' + that.type)
	      callback && callback()
	    }

	    this.$element.trigger(e)

	    if (e.isDefaultPrevented()) return

	    $tip.removeClass('in')

	    $.support.transition && $tip.hasClass('fade') ?
	      $tip
	        .one('bsTransitionEnd', complete)
	        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
	      complete()

	    this.hoverState = null

	    return this
	  }

	  Tooltip.prototype.fixTitle = function () {
	    var $e = this.$element
	    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
	      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
	    }
	  }

	  Tooltip.prototype.hasContent = function () {
	    return this.getTitle()
	  }

	  Tooltip.prototype.getPosition = function ($element) {
	    $element   = $element || this.$element

	    var el     = $element[0]
	    var isBody = el.tagName == 'BODY'

	    var elRect    = el.getBoundingClientRect()
	    if (elRect.width == null) {
	      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
	      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
	    }
	    var elOffset  = isBody ? { top: 0, left: 0 } : $element.offset()
	    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
	    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

	    return $.extend({}, elRect, scroll, outerDims, elOffset)
	  }

	  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
	    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
	           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
	           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
	        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

	  }

	  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
	    var delta = { top: 0, left: 0 }
	    if (!this.$viewport) return delta

	    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
	    var viewportDimensions = this.getPosition(this.$viewport)

	    if (/right|left/.test(placement)) {
	      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
	      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
	      if (topEdgeOffset < viewportDimensions.top) { // top overflow
	        delta.top = viewportDimensions.top - topEdgeOffset
	      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
	        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
	      }
	    } else {
	      var leftEdgeOffset  = pos.left - viewportPadding
	      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
	      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
	        delta.left = viewportDimensions.left - leftEdgeOffset
	      } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
	        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
	      }
	    }

	    return delta
	  }

	  Tooltip.prototype.getTitle = function () {
	    var title
	    var $e = this.$element
	    var o  = this.options

	    title = $e.attr('data-original-title')
	      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

	    return title
	  }

	  Tooltip.prototype.getUID = function (prefix) {
	    do prefix += ~~(Math.random() * 1000000)
	    while (document.getElementById(prefix))
	    return prefix
	  }

	  Tooltip.prototype.tip = function () {
	    if (!this.$tip) {
	      this.$tip = $(this.options.template)
	      if (this.$tip.length != 1) {
	        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
	      }
	    }
	    return this.$tip
	  }

	  Tooltip.prototype.arrow = function () {
	    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
	  }

	  Tooltip.prototype.enable = function () {
	    this.enabled = true
	  }

	  Tooltip.prototype.disable = function () {
	    this.enabled = false
	  }

	  Tooltip.prototype.toggleEnabled = function () {
	    this.enabled = !this.enabled
	  }

	  Tooltip.prototype.toggle = function (e) {
	    var self = this
	    if (e) {
	      self = $(e.currentTarget).data('bs.' + this.type)
	      if (!self) {
	        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
	        $(e.currentTarget).data('bs.' + this.type, self)
	      }
	    }

	    if (e) {
	      self.inState.click = !self.inState.click
	      if (self.isInStateTrue()) self.enter(self)
	      else self.leave(self)
	    } else {
	      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
	    }
	  }

	  Tooltip.prototype.destroy = function () {
	    var that = this
	    clearTimeout(this.timeout)
	    this.hide(function () {
	      that.$element.off('.' + that.type).removeData('bs.' + that.type)
	      if (that.$tip) {
	        that.$tip.detach()
	      }
	      that.$tip = null
	      that.$arrow = null
	      that.$viewport = null
	    })
	  }


	  // TOOLTIP PLUGIN DEFINITION
	  // =========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.tooltip')
	      var options = typeof option == 'object' && option

	      if (!data && /destroy|hide/.test(option)) return
	      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
	      if (typeof option == 'string') data[option]()
	    })
	  }

	  var old = $.fn.tooltip

	  $.fn.tooltip             = Plugin
	  $.fn.tooltip.Constructor = Tooltip


	  // TOOLTIP NO CONFLICT
	  // ===================

	  $.fn.tooltip.noConflict = function () {
	    $.fn.tooltip = old
	    return this
	  }

	}(jQuery);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(217)))

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
	 * Bootstrap: popover.js v3.3.6
	 * http://getbootstrap.com/javascript/#popovers
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // POPOVER PUBLIC CLASS DEFINITION
	  // ===============================

	  var Popover = function (element, options) {
	    this.init('popover', element, options)
	  }

	  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

	  Popover.VERSION  = '3.3.6'

	  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
	    placement: 'right',
	    trigger: 'click',
	    content: '',
	    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	  })


	  // NOTE: POPOVER EXTENDS tooltip.js
	  // ================================

	  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

	  Popover.prototype.constructor = Popover

	  Popover.prototype.getDefaults = function () {
	    return Popover.DEFAULTS
	  }

	  Popover.prototype.setContent = function () {
	    var $tip    = this.tip()
	    var title   = this.getTitle()
	    var content = this.getContent()

	    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
	    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
	      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
	    ](content)

	    $tip.removeClass('fade top bottom left right in')

	    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
	    // this manually by checking the contents.
	    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
	  }

	  Popover.prototype.hasContent = function () {
	    return this.getTitle() || this.getContent()
	  }

	  Popover.prototype.getContent = function () {
	    var $e = this.$element
	    var o  = this.options

	    return $e.attr('data-content')
	      || (typeof o.content == 'function' ?
	            o.content.call($e[0]) :
	            o.content)
	  }

	  Popover.prototype.arrow = function () {
	    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
	  }


	  // POPOVER PLUGIN DEFINITION
	  // =========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.popover')
	      var options = typeof option == 'object' && option

	      if (!data && /destroy|hide/.test(option)) return
	      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
	      if (typeof option == 'string') data[option]()
	    })
	  }

	  var old = $.fn.popover

	  $.fn.popover             = Plugin
	  $.fn.popover.Constructor = Popover


	  // POPOVER NO CONFLICT
	  // ===================

	  $.fn.popover.noConflict = function () {
	    $.fn.popover = old
	    return this
	  }

	}(jQuery);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(217)))

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
	 * Bootstrap: scrollspy.js v3.3.6
	 * http://getbootstrap.com/javascript/#scrollspy
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // SCROLLSPY CLASS DEFINITION
	  // ==========================

	  function ScrollSpy(element, options) {
	    this.$body          = $(document.body)
	    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
	    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
	    this.selector       = (this.options.target || '') + ' .nav li > a'
	    this.offsets        = []
	    this.targets        = []
	    this.activeTarget   = null
	    this.scrollHeight   = 0

	    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
	    this.refresh()
	    this.process()
	  }

	  ScrollSpy.VERSION  = '3.3.6'

	  ScrollSpy.DEFAULTS = {
	    offset: 10
	  }

	  ScrollSpy.prototype.getScrollHeight = function () {
	    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
	  }

	  ScrollSpy.prototype.refresh = function () {
	    var that          = this
	    var offsetMethod  = 'offset'
	    var offsetBase    = 0

	    this.offsets      = []
	    this.targets      = []
	    this.scrollHeight = this.getScrollHeight()

	    if (!$.isWindow(this.$scrollElement[0])) {
	      offsetMethod = 'position'
	      offsetBase   = this.$scrollElement.scrollTop()
	    }

	    this.$body
	      .find(this.selector)
	      .map(function () {
	        var $el   = $(this)
	        var href  = $el.data('target') || $el.attr('href')
	        var $href = /^#./.test(href) && $(href)

	        return ($href
	          && $href.length
	          && $href.is(':visible')
	          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
	      })
	      .sort(function (a, b) { return a[0] - b[0] })
	      .each(function () {
	        that.offsets.push(this[0])
	        that.targets.push(this[1])
	      })
	  }

	  ScrollSpy.prototype.process = function () {
	    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
	    var scrollHeight = this.getScrollHeight()
	    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
	    var offsets      = this.offsets
	    var targets      = this.targets
	    var activeTarget = this.activeTarget
	    var i

	    if (this.scrollHeight != scrollHeight) {
	      this.refresh()
	    }

	    if (scrollTop >= maxScroll) {
	      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
	    }

	    if (activeTarget && scrollTop < offsets[0]) {
	      this.activeTarget = null
	      return this.clear()
	    }

	    for (i = offsets.length; i--;) {
	      activeTarget != targets[i]
	        && scrollTop >= offsets[i]
	        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
	        && this.activate(targets[i])
	    }
	  }

	  ScrollSpy.prototype.activate = function (target) {
	    this.activeTarget = target

	    this.clear()

	    var selector = this.selector +
	      '[data-target="' + target + '"],' +
	      this.selector + '[href="' + target + '"]'

	    var active = $(selector)
	      .parents('li')
	      .addClass('active')

	    if (active.parent('.dropdown-menu').length) {
	      active = active
	        .closest('li.dropdown')
	        .addClass('active')
	    }

	    active.trigger('activate.bs.scrollspy')
	  }

	  ScrollSpy.prototype.clear = function () {
	    $(this.selector)
	      .parentsUntil(this.options.target, '.active')
	      .removeClass('active')
	  }


	  // SCROLLSPY PLUGIN DEFINITION
	  // ===========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.scrollspy')
	      var options = typeof option == 'object' && option

	      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
	      if (typeof option == 'string') data[option]()
	    })
	  }

	  var old = $.fn.scrollspy

	  $.fn.scrollspy             = Plugin
	  $.fn.scrollspy.Constructor = ScrollSpy


	  // SCROLLSPY NO CONFLICT
	  // =====================

	  $.fn.scrollspy.noConflict = function () {
	    $.fn.scrollspy = old
	    return this
	  }


	  // SCROLLSPY DATA-API
	  // ==================

	  $(window).on('load.bs.scrollspy.data-api', function () {
	    $('[data-spy="scroll"]').each(function () {
	      var $spy = $(this)
	      Plugin.call($spy, $spy.data())
	    })
	  })

	}(jQuery);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(217)))

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
	 * Bootstrap: tab.js v3.3.6
	 * http://getbootstrap.com/javascript/#tabs
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // TAB CLASS DEFINITION
	  // ====================

	  var Tab = function (element) {
	    // jscs:disable requireDollarBeforejQueryAssignment
	    this.element = $(element)
	    // jscs:enable requireDollarBeforejQueryAssignment
	  }

	  Tab.VERSION = '3.3.6'

	  Tab.TRANSITION_DURATION = 150

	  Tab.prototype.show = function () {
	    var $this    = this.element
	    var $ul      = $this.closest('ul:not(.dropdown-menu)')
	    var selector = $this.data('target')

	    if (!selector) {
	      selector = $this.attr('href')
	      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
	    }

	    if ($this.parent('li').hasClass('active')) return

	    var $previous = $ul.find('.active:last a')
	    var hideEvent = $.Event('hide.bs.tab', {
	      relatedTarget: $this[0]
	    })
	    var showEvent = $.Event('show.bs.tab', {
	      relatedTarget: $previous[0]
	    })

	    $previous.trigger(hideEvent)
	    $this.trigger(showEvent)

	    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

	    var $target = $(selector)

	    this.activate($this.closest('li'), $ul)
	    this.activate($target, $target.parent(), function () {
	      $previous.trigger({
	        type: 'hidden.bs.tab',
	        relatedTarget: $this[0]
	      })
	      $this.trigger({
	        type: 'shown.bs.tab',
	        relatedTarget: $previous[0]
	      })
	    })
	  }

	  Tab.prototype.activate = function (element, container, callback) {
	    var $active    = container.find('> .active')
	    var transition = callback
	      && $.support.transition
	      && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)

	    function next() {
	      $active
	        .removeClass('active')
	        .find('> .dropdown-menu > .active')
	          .removeClass('active')
	        .end()
	        .find('[data-toggle="tab"]')
	          .attr('aria-expanded', false)

	      element
	        .addClass('active')
	        .find('[data-toggle="tab"]')
	          .attr('aria-expanded', true)

	      if (transition) {
	        element[0].offsetWidth // reflow for transition
	        element.addClass('in')
	      } else {
	        element.removeClass('fade')
	      }

	      if (element.parent('.dropdown-menu').length) {
	        element
	          .closest('li.dropdown')
	            .addClass('active')
	          .end()
	          .find('[data-toggle="tab"]')
	            .attr('aria-expanded', true)
	      }

	      callback && callback()
	    }

	    $active.length && transition ?
	      $active
	        .one('bsTransitionEnd', next)
	        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
	      next()

	    $active.removeClass('in')
	  }


	  // TAB PLUGIN DEFINITION
	  // =====================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this)
	      var data  = $this.data('bs.tab')

	      if (!data) $this.data('bs.tab', (data = new Tab(this)))
	      if (typeof option == 'string') data[option]()
	    })
	  }

	  var old = $.fn.tab

	  $.fn.tab             = Plugin
	  $.fn.tab.Constructor = Tab


	  // TAB NO CONFLICT
	  // ===============

	  $.fn.tab.noConflict = function () {
	    $.fn.tab = old
	    return this
	  }


	  // TAB DATA-API
	  // ============

	  var clickHandler = function (e) {
	    e.preventDefault()
	    Plugin.call($(this), 'show')
	  }

	  $(document)
	    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
	    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

	}(jQuery);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(217)))

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
	 * Bootstrap: affix.js v3.3.6
	 * http://getbootstrap.com/javascript/#affix
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // AFFIX CLASS DEFINITION
	  // ======================

	  var Affix = function (element, options) {
	    this.options = $.extend({}, Affix.DEFAULTS, options)

	    this.$target = $(this.options.target)
	      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
	      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

	    this.$element     = $(element)
	    this.affixed      = null
	    this.unpin        = null
	    this.pinnedOffset = null

	    this.checkPosition()
	  }

	  Affix.VERSION  = '3.3.6'

	  Affix.RESET    = 'affix affix-top affix-bottom'

	  Affix.DEFAULTS = {
	    offset: 0,
	    target: window
	  }

	  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
	    var scrollTop    = this.$target.scrollTop()
	    var position     = this.$element.offset()
	    var targetHeight = this.$target.height()

	    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

	    if (this.affixed == 'bottom') {
	      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
	      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
	    }

	    var initializing   = this.affixed == null
	    var colliderTop    = initializing ? scrollTop : position.top
	    var colliderHeight = initializing ? targetHeight : height

	    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
	    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

	    return false
	  }

	  Affix.prototype.getPinnedOffset = function () {
	    if (this.pinnedOffset) return this.pinnedOffset
	    this.$element.removeClass(Affix.RESET).addClass('affix')
	    var scrollTop = this.$target.scrollTop()
	    var position  = this.$element.offset()
	    return (this.pinnedOffset = position.top - scrollTop)
	  }

	  Affix.prototype.checkPositionWithEventLoop = function () {
	    setTimeout($.proxy(this.checkPosition, this), 1)
	  }

	  Affix.prototype.checkPosition = function () {
	    if (!this.$element.is(':visible')) return

	    var height       = this.$element.height()
	    var offset       = this.options.offset
	    var offsetTop    = offset.top
	    var offsetBottom = offset.bottom
	    var scrollHeight = Math.max($(document).height(), $(document.body).height())

	    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
	    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
	    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

	    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

	    if (this.affixed != affix) {
	      if (this.unpin != null) this.$element.css('top', '')

	      var affixType = 'affix' + (affix ? '-' + affix : '')
	      var e         = $.Event(affixType + '.bs.affix')

	      this.$element.trigger(e)

	      if (e.isDefaultPrevented()) return

	      this.affixed = affix
	      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

	      this.$element
	        .removeClass(Affix.RESET)
	        .addClass(affixType)
	        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
	    }

	    if (affix == 'bottom') {
	      this.$element.offset({
	        top: scrollHeight - height - offsetBottom
	      })
	    }
	  }


	  // AFFIX PLUGIN DEFINITION
	  // =======================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.affix')
	      var options = typeof option == 'object' && option

	      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
	      if (typeof option == 'string') data[option]()
	    })
	  }

	  var old = $.fn.affix

	  $.fn.affix             = Plugin
	  $.fn.affix.Constructor = Affix


	  // AFFIX NO CONFLICT
	  // =================

	  $.fn.affix.noConflict = function () {
	    $.fn.affix = old
	    return this
	  }


	  // AFFIX DATA-API
	  // ==============

	  $(window).on('load', function () {
	    $('[data-spy="affix"]').each(function () {
	      var $spy = $(this)
	      var data = $spy.data()

	      data.offset = data.offset || {}

	      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
	      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

	      Plugin.call($spy, data)
	    })
	  })

	}(jQuery);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(217)))

/***/ }
]);