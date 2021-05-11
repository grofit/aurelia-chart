import { inject, customAttribute, bindable, bindingMode } from 'aurelia-framework';
import { ModelObserver } from '../observers/model-observer';
import { Chart, ChartOptions, ChartData, ChartConfiguration, ChartType } from 'chart.js';

@customAttribute('chart')
@inject(Element, ModelObserver)
export class ChartAttribute {
  constructor(private element: HTMLCanvasElement, private modelObserver: ModelObserver) { }

  activeChart?: Chart;
  private chartData: ChartConfiguration;

  @bindable
  type: ChartType;
  typeChanged() {
    this.chartData.type = this.type;
    if (this.isObserving) {
      this.refreshChart();
      this.modelObserver.unsubscribe();
      this.subscribeToChanges();
    }
  }

  @bindable
  data: ChartData;
  dataChanged() {
    this.chartData.data = this.data;
    if (this.isObserving) {
      this.refreshChart();
      this.modelObserver.unsubscribe();
      this.subscribeToChanges();
    }
  }

  @bindable
  shouldUpdate: boolean | string;

  private get isObserving() {
    return this.shouldUpdate === true || this.shouldUpdate === 'true';
  }

  @bindable
  throttle?: number;

  @bindable({ defaultBindingMode: bindingMode.twoWay })
  nativeOptions: ChartOptions = {};

  bind() {
    // prevent initial changed handlers call
  }

  attached() {
    this.chartData = {
      type: this.type,
      data: this.data,
      options: this.nativeOptions
    };

    this.activeChart = new Chart(this.element, this.chartData);
    this.nativeOptions = this.activeChart.options;
    this.refreshChart();

    if (this.isObserving) {
      this.subscribeToChanges();
    }
  }

  detached() {
    if (this.isObserving) {
      this.modelObserver.unsubscribe();
    }

    this.activeChart?.destroy();
    this.activeChart = undefined;
  }

  refreshChart = () => {
    if (this.activeChart) {
      this.activeChart.update();
      this.activeChart.resize();
    }
  };

  subscribeToChanges() {
    this.modelObserver.throttle = this.throttle ?? 100;
    this.modelObserver.observe(this.data, this.refreshChart);
  }
}
