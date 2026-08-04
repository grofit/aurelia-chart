import { BindingMode, bindable, computed, customAttribute, resolve, watch } from 'aurelia';
import { Chart, ChartOptions, ChartData, ChartConfiguration, ChartType } from 'chart.js';

@customAttribute('chart')
export class ChartAttribute {
  private element = resolve(Element) as HTMLCanvasElement;
  activeChart?: Chart;
  private chartData: ChartConfiguration;
  private refreshTimeout?: ReturnType<typeof setTimeout>;

  @bindable
  type: ChartType;
  typeChanged() {
    if (!this.chartData) {
      return;
    }
    this.chartData.type = this.type;
    if (this.isObserving) {
      this.refreshChart();
    }
  }

  @bindable
  data: ChartData = { datasets: [] };
  dataChanged() {
    if (!this.chartData) {
      return;
    }
    this.chartData.data = this.data;
  }

  @bindable
  shouldUpdate: boolean | string;

  private get isObserving() {
    return this.shouldUpdate === true || this.shouldUpdate === 'true';
  }

  @computed({ deps: ['data'], deep: true })
  get observedData(): ChartData | undefined {
    return this.data == null ? undefined : { ...this.data };
  }

  @watch('observedData')
  protected observedDataChanged() {
    if (this.isObserving) {
      this.scheduleRefresh();
    }
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
  }

  detaching() {
    if (this.refreshTimeout !== undefined) {
      clearTimeout(this.refreshTimeout);
      this.refreshTimeout = undefined;
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

  private scheduleRefresh() {
    const throttle = this.throttle ?? 100;
    if (throttle <= 0) {
      this.refreshChart();
      return;
    }

    if (this.refreshTimeout === undefined) {
      this.refreshTimeout = setTimeout(() => {
        this.refreshTimeout = undefined;
        if (this.isObserving) {
          this.refreshChart();
        }
      }, throttle);
    }
  }
}
