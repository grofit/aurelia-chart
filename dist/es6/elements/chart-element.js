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
    console.log("CREATING CHART");
    var context2d = this.canvasElement.getContext("2d");
    var sanitisedData = this.convertAllDataToNumeric(this.data); // doesnt like string based numerics
    this._activeChart = new Chart(context2d)[this.type](sanitisedData, this.nativeOptions);
  };

  refreshChart = () => {
    console.log("RE-CREATING CHART");
    this._activeChart.destroy();
    this.createChart();

    // This stops the chart shrinking into oblivion
    this.canvasElement.width = this._canvasWidth;
    this.canvasElement.height = this._canvasHeight;
  };

  subscribeToChanges() {
    console.log("LISTENING FOR UPDATES");
    this._modelObserver.throttle = this.throttle || 100;
    this._modelObserver.observe(this.data, this.refreshChart);
  };

  convertAllDataToNumeric(model) {
    var sanitisedData = null;
    if(model.datasets) // Array checks
    {
      sanitisedData = {};
      sanitisedData.datasets = [];
      model.datasets.forEach(function(dataset, datasetIndex){
        sanitisedData[datasetIndex] = { data: [] };
        for(var i=0;i<dataset.data.length;i++){
          sanitisedData.data[i] = parseFloat(dataset.data[i])
        }
      });
    }
    else // Segment checks
    {
      sanitisedData = [];
      model.forEach((datapoint, datapointIndex) => {
        sanitisedData[datapointIndex] = { value: parseInt(datapoint.value) };
      });
    }
    return model;
  };

}
