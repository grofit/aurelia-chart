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
  @bindable nativeOptions = {};

  @bindable canvasElement;

  _activeChart;
  _modelObserver;
  _isSetup = false;

  constructor(modelObserver) {
    this._modelObserver = modelObserver;
  }

  attached() {
    this.createChart();
    this._isSetup = true;

    if(this.shouldUpdate == true)
    { this.subscribeToChanges(); }
  }

  detached() {
    if(this.shouldUpdate == true)
    { this._modelObserver.unsubscribe(); }

    this._activeChart.destroy();

    this._isSetup = false;
  }

  propertyChanged = (propertyName, newValue, oldValue) => {
    if(this._isSetup && this.shouldUpdate == true)
    {
      this.refreshChart();
      this._modelObserver.unsubscribe();
      this.subscribeToChanges();
    }
  }

  createChart() {
    var chartData = {
      type: this.type,
      data: JSON.parse(JSON.stringify(this.data)),
      options: this.nativeOptions
    };

    console.log("options", chartData);
    console.log("canvas", this.canvasElement);
    this._activeChart = new Chart(this.canvasElement, chartData);
  };

  refreshChart = () => {
    console.log("refreshing");
    this._activeChart.update();
  };

  subscribeToChanges() {
    console.log("data", this.data);
    this._modelObserver.throttle = this.throttle || 100;
    this._modelObserver.observe(this.data, this.refreshChart);
  };
}
