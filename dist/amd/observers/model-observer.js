define(["exports", "aurelia-framework"], function (exports, _aureliaFramework) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    var ModelObserver = (function () {
        function ModelObserver(bindingEngine) {
            var _this = this;

            _classCallCheck(this, _ModelObserver);

            this.throttle = 100;
            this._throttleTimeout = 0;

            this.observe = function (model, onChange) {
                var subscriptions = [];
                _this._getAllSubscriptions(model, subscriptions);

                var throttledHandler = function throttledHandler(args) {
                    console.log("STARTING THROTTLE", args);
                    if (_this.throttle <= 0) {
                        return onChange();
                    }

                    if (!_this._throttleTimeout) {
                        _this._throttleTimeout = setTimeout(function () {
                            _this._throttleTimeout = null;
                            console.log("Throttle Ended");
                            onChange();
                        }, _this.throttle);
                    }
                };

                console.log("LOOPING SUBS");
                for (var i = 0; i < subscriptions.length; i++) {
                    console.log("Linking Sub to throttle", subscriptions[i]);
                    subscriptions[i](throttledHandler);
                }
            };

            this.bindingEngine = bindingEngine;
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
});