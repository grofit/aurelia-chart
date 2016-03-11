import {inject, customElement, useView, bindable} from 'aurelia-framework'
import {ModelObserver} from "../observers/model-observer"
import Chart from "chartjs"

@customElement('chart')
@inject(ModelObserver)
@useView("./chart-element.html")
export class ChartElement {
  @bindable type;
  @bindable data;
  @bindable shouldUpdate;
  @bindable throttle;
  @bindable nativeOptions;

  @bindable canvasElement;

  _activeChart;
  _canvasWidth;
  _canvasHeight;
  _modelObserver;

  constructor(modelObserver) {
    console.log("CREATED");
    this._modelObserver = modelObserver;
  }

  attached() {
    this._canvasWidth = this.canvasElement.width;
    this._canvasHeight = this.canvasElement.height;

    this.createChart();

    if(this.shouldUpdate)
    { this.subscribeToChanges(); }
  }

  createChart() {
    var context2d = this.canvasElement.getContext("2d");
    this.convertAllDataToNumeric(this.data); // doesnt like string based numerics
    this._activeChart = new Chart(context2d)[this.type](this.data, this.nativeOptions);
  };

  refreshChart = () => {
    this._activeChart.destroy();

    // This stops the chart shrinking into oblivion
    this.canvasElement.width = this._canvasWidth;
    this.canvasElement.height = this._canvasHeight;
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
