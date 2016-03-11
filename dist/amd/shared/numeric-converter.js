define(["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var NumericConverter = (function () {
    function NumericConverter() {
      _classCallCheck(this, NumericConverter);
    }

    _createClass(NumericConverter, [{
      key: "convertAllDataToNumeric",
      value: function convertAllDataToNumeric(model) {
        var sanitisedData = null;
        if (model.datasets) {
            sanitisedData = {};
            sanitisedData.datasets = [];
            model.datasets.forEach(function (dataset, datasetIndex) {
              sanitisedData[datasetIndex] = { data: [] };
              for (var i = 0; i < dataset.data.length; i++) {
                sanitisedData[datasetIndex].data[i] = parseFloat(dataset.data[i]);
              }
            });
          } else {
            sanitisedData = [];
            model.forEach(function (datapoint, datapointIndex) {
              sanitisedData[datapointIndex] = { value: parseInt(datapoint.value) };
            });
          }
        return model;
      }
    }]);

    return NumericConverter;
  })();

  exports.NumericConverter = NumericConverter;
});