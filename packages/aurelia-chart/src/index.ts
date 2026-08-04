import { IContainer } from 'aurelia';
import {
  Chart, BarController, LinearScale, BarElement, LineController, LineElement, CategoryScale, PointElement, TimeScale, Title,
  ScatterController, Filler, Tooltip, Legend
} from 'chart.js';
import 'chartjs-adapter-date-fns';
import { ChartElement } from './elements/chart-element';
import { ChartAttribute } from './attributes/chart-attribute';

// import ChartPluginDataLabels from 'chartjs-plugin-datalabels';
import ChartPluginAnnotation from 'chartjs-plugin-annotation';

Chart.register(BarController, BarElement, LineController, LineElement, LinearScale, CategoryScale, PointElement, TimeScale, Title,
  ScatterController, Filler, Tooltip, ChartPluginAnnotation, Legend);

export const ChartConfiguration = {
  register(container: IContainer): IContainer {
    return container.register(ChartElement, ChartAttribute);
  }
};

export { ChartElement } from './elements/chart-element';
export { ChartAttribute } from './attributes/chart-attribute';
