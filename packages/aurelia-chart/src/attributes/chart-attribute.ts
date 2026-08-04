import { BindingMode, bindable, customAttribute, resolve } from 'aurelia';
import { ModelObserver } from '../observers/model-observer';
import { Chart, ChartOptions, ChartData, ChartConfiguration, ChartType } from 'chart.js';

@customAttribute('chart')
export class ChartAttribute {
  private element = resolve(Element) as HTMLCanvasElement;
  private modelObserver = resolve(ModelObserver);

  activeChart?: Chart;
  private chartData: ChartConfiguration;

  @bindable
  type: ChartType;
  typeChanged() {
    if (!this.chartData) {
      return;
    }
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
    if (!this.chartData) {
      return;
    }
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

  @bindable({ mode: BindingMode.twoWay })
  nativeOptions: ChartOptions = {};

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

  detaching() {
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
