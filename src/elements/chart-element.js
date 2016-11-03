import {inject, customElement, useView, bindable, bindingMode} from 'aurelia-framework'
import {ModelObserver} from "../observers/model-observer"
import Chart from "chart.js"

@customElement('chart')
@inject(ModelObserver)
@useView("./chart-element.html")
export class ChartElement {
  @bindable type;
  @bindable data;
  @bindable shouldUpdate;
  @bindable throttle;
  @bindable({defaultBindingMode: bindingMode.twoWay}) nativeOptions = {};

  @bindable canvasElement;

  _activeChart;
  _modelObserver;
  _isSetup = false;
  _chartData;

  constructor(modelObserver) {
    this._modelObserver = modelObserver;
  }

  attached() {
    this.createChart();
    this._isSetup = true;

    if(this._isObserving)
    { this.subscribeToChanges(); }
  }

  detached() {
    if(this._isObserving)
    { this._modelObserver.unsubscribe(); }

    this._activeChart.destroy();
    this._isSetup = false;
  }

  propertyChanged = (propertyName, newValue, oldValue) => {
    if(this._isSetup && this._isObserving)
    {
      this.refreshChart();
      this._modelObserver.unsubscribe();
      this.subscribeToChanges();
    }
  }

  get _isObserving() {
    return this.shouldUpdate == true || this.shouldUpdate == "true";
  }

  get _clonedData() {
    return JSON.parse(JSON.stringify(this.data));
  }

  createChart() {
    this._chartData = {
      type: this.type,
      data: this._clonedData,
      options: this.nativeOptions
    };

    this._activeChart = new Chart(this.canvasElement, this._chartData);
    this.nativeOptions = this._activeChart.options;
    this.refreshChart();
  };

  refreshChart = () => {
    this._chartData.data = this._clonedData;
    this._activeChart.update();
    this._activeChart.resize();
  };

  subscribeToChanges() {
    this._modelObserver.throttle = this.throttle || 100;
    this._modelObserver.observe(this.data.datasets, this.refreshChart);
  };
}
