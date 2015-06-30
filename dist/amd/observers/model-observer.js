define(["exports", "aurelia-framework"], function (exports, _aureliaFramework) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    var ModelObserver = (function () {
        function ModelObserver(observerLocator) {
            _classCallCheck(this, _ModelObserver);

            this.throttle = 100;
            this._throttleTimeout = 0;

            this.observerLocator = observerLocator;
        }

        var _ModelObserver = ModelObserver;

        _createClass(_ModelObserver, [{
            key: "observe",
            value: function observe(model, onChange) {
                var subscriptions = [];
                this._getAllSubscriptions(model, subscriptions);

                function throttledHandler() {
                    console.log("THROTTLING BEGUN");
                    if (this.throttle > 0) {
                        if (!this._throttleTimeout) {
                            this._throttleTimeout = setTimeout(function () {
                                this._throttleTimeout = null;
                                onChange();
                                console.log("FIRING CHANGE");
                            }, this.throttle);
                        }
                    } else {
                        onChange();
                    }
                }

                console.log("GOT " + subscriptions.length + " SUBS");
                for (var i = 0; i < subscriptions.length; i++) {
                    subscriptions[i].subscribe(throttledHandler);
                }
            }
        }, {
            key: "_getObjectType",
            value: function _getObjectType(obj) {
                if (obj && typeof obj === "object" && obj.constructor == new Date().constructor) return "date";
                return typeof obj;
            }
        }, {
            key: "_getAllSubscriptions",
            value: function _getAllSubscriptions(model, subscriptions) {
                var _this = this;

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
                                    _this._getAllSubscriptions(underlyingArray[index], subscriptions);
                                });
                            }
                            break;

                        default:
                            {
                                var propertyDescriptor = Object.getOwnPropertyDescriptor(model, property);
                                if (!propertyDescriptor.get) {
                                    var subscription = this.observerLocator.getObserver(model, property);
                                    console.log("SUB: ", subscription);
                                    subscriptions.push(subscription);
                                }
                            }
                            break;
                    }
                }
            }
        }]);

        ModelObserver = (0, _aureliaFramework.inject)(_aureliaFramework.ObserverLocator)(ModelObserver) || ModelObserver;
        return ModelObserver;
    })();

    exports.ModelObserver = ModelObserver;
});