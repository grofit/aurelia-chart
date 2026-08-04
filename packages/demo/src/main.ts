import Aurelia from 'aurelia';
import { ChartConfiguration } from 'aurelia-chart';
import {
  Chart, LineController, LineElement, PointElement, LinearScale, Title, DoughnutController, PieController, CategoryScale, ArcElement,
  Legend
} from 'chart.js';
import { App } from './app';

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, DoughnutController, PieController, CategoryScale, ArcElement, Legend);

Aurelia
  .register(ChartConfiguration)
  .app(App)
  .start();
