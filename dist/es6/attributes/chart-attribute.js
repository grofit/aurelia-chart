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
  @bindable nativeOptions = {};

  _activeChart;
  _modelObserver;
  _isSetup = false;

  constructor(element, modelObserver) {
    this.element = element;
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

    console.log("ATToptions", chartData);
    console.log("ATTcanvas", this.element);

    this._activeChart = new Chart(this.element, chartData);
  };

  refreshChart = () => {
    this._activeChart.update();
  };

  subscribeToChanges() {
    this._modelObserver.throttle = this.throttle || 100;
    this._modelObserver.observe(this.data, this.refreshChart);
  };

}
