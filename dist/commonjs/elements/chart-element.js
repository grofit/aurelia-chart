"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === "function") { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError("The decorator for method " + descriptor.key + " is of the invalid type " + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

var _aureliaFramework = require('aurelia-framework');

var _observersModelObserver = require("../observers/model-observer");

var _sharedNumericConverter = require("../shared/numeric-converter");

var _chartjs = require("chartjs");

var _chartjs2 = _interopRequireDefault(_chartjs);

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
    initializer: null,
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
      if (_this._isSetup && _this.shouldUpdate) {
        _this.refreshChart();
        _this._modelObserver.unsubscribe();
        _this.subscribeToChanges();
      }
    };

    this.refreshChart = function () {
      _this._activeChart.destroy();
      _this.createChart();

      _this.canvasElement.width = _this._canvasWidth;
      _this.canvasElement.height = _this._canvasHeight;
    };

    this._modelObserver = modelObserver;
    this._numericConverter = new _sharedNumericConverter.NumericConverter();
  }

  _createDecoratedClass(ChartElement, [{
    key: "attached",
    value: function attached() {
      this._canvasWidth = this.canvasElement.width;
      this._canvasHeight = this.canvasElement.height;

      this.createChart();
      this._isSetup = true;

      if (this.shouldUpdate) {
        this.subscribeToChanges();
      }
    }
  }, {
    key: "detached",
    value: function detached() {
      if (this.shouldUpdate) {
        this._modelObserver.unsubscribe();
      }

      this._isSetup = false;
    }
  }, {
    key: "createChart",
    value: function createChart() {
      var context2d = this.canvasElement.getContext("2d");
      var sanitisedData = this._numericConverter.convertAllDataToNumeric(this.data);
      this._activeChart = new _chartjs2["default"](context2d)[this.type](sanitisedData, this.nativeOptions);
    }
  }, {
    key: "subscribeToChanges",
    value: function subscribeToChanges() {
      this._modelObserver.throttle = this.throttle || 100;
      this._modelObserver.observe(this.data, this.refreshChart);
    }
  }], null, _instanceInitializers);

  var _ChartElement = ChartElement;
  ChartElement = (0, _aureliaFramework.useView)("./chart-element.html")(ChartElement) || ChartElement;
  ChartElement = (0, _aureliaFramework.inject)(_observersModelObserver.ModelObserver)(ChartElement) || ChartElement;
  ChartElement = (0, _aureliaFramework.customElement)('chart')(ChartElement) || ChartElement;
  return ChartElement;
})();

exports.ChartElement = ChartElement;