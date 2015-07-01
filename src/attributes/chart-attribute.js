import {inject, customAttribute, useView, bindable} from 'aurelia-framework'
import {ModelObserver} from "../observers/model-observer"
import Chart from "chartjs"

@customAttribute('chart')
@inject(Element, ModelObserver)
export class ChartAttribute {
  @bindable type;
  @bindable data;
  @bindable shouldUpdate;
  @bindable throttle;
  @bindable nativeOptions;

  _activeChart;
  _canvasWidth;
  _canvasHeight;
  _modelObserver;

  constructor(element, modelObserver) {
    this.element = element;
    this._modelObserver = modelObserver;
  }

  attached() {
    this._canvasWidth = this.element.width;
    this._canvasHeight = this.element.height;

    this.createChart();

    if(this.shouldUpdate)
    { this.subscribeToChanges(); }
  }

  createChart() {
    var context2d = this.element.getContext("2d");
    this.convertAllDataToNumeric(this.data); // doesnt like string based numerics
    this._activeChart = new Chart(context2d)[this.type](this.data, this.nativeOptions);
  };

  refreshChart = () => {
    this._activeChart.destroy();

    // This stops the chart shrinking into oblivion
    this.element.width = this._canvasWidth;
    this.element.height = this._canvasHeight;
  };

  subscribeToChanges() {
    this._modelObserver.throttle = this.throttle || 100;
    this._modelObserver.observe(this.data, () => this.refreshChart);
  };

  convertAllDataToNumeric(model) {
    if(model.datasets) // Array checks
    {
      model.datasets.forEach(function(dataset){
        for(var i=0;i<dataset.data.length;i++){
          dataset.data[i] = parseFloat(dataset.data[i]);
        }
      });
    }
    else // Segment checks
    {
      model.forEach((datapoint) => {
        datapoint.value = parseInt(datapoint.value);
      });
    }
  };

}
