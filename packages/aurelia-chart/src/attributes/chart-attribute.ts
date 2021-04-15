import { inject, customAttribute, bindable, bindingMode } from 'aurelia-framework';
import { ModelObserver } from '../observers/model-observer';
import { Chart, ChartOptions, ChartData, ChartConfiguration, ChartType } from 'chart.js';

@customAttribute('chart')
@inject(Element, ModelObserver)
export class ChartAttribute {
  @bindable
  type: ChartType;

  @bindable
  data: ChartData;

  @bindable
  shouldUpdate: boolean | string;

  @bindable
  throttle?: number;

  @bindable({ defaultBindingMode: bindingMode.twoWay })
  nativeOptions: ChartOptions = {};

  _activeChart: Chart;
  _isSetup = false;
  _chartData: ChartConfiguration;

  constructor(private element: HTMLCanvasElement, private _modelObserver: ModelObserver) { }

  attached() {
    this.createChart();
    this._isSetup = true;
    if (this._isObserving) {
      this.subscribeToChanges();
    }
  }

  detached() {
    if (this._isObserving) {
      this._modelObserver.unsubscribe();
    }
    this._activeChart.destroy();
    this._isSetup = false;
  }

  get _isObserving() {
    return this.shouldUpdate === true || this.shouldUpdate === 'true';
  }

  get _clonedData(): ChartData {
    return JSON.parse(JSON.stringify(this.data)) as ChartData;
  }

  createChart() {
    this._chartData = {
      type: this.type,
      data: this._clonedData,
      options: this.nativeOptions
    };

    this._activeChart = new Chart(this.element, this._chartData);
    this.nativeOptions = this._activeChart.options;
    this.refreshChart();
  }

  refreshChart = () => {
    this._chartData.data = this._clonedData;
    this._activeChart.update();
    this._activeChart.resize();
  };

  subscribeToChanges() {
    this._modelObserver.throttle = this.throttle ?? 100;
    this._modelObserver.observe(this.data, this.refreshChart);
  }
}
