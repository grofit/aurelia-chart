// eslint-disable-next-line import/no-unassigned-import
import 'aurelia-bootstrapper';
import { Aurelia, PLATFORM } from 'aurelia-framework';
import {
  Chart, LineController, LineElement, PointElement, LinearScale, Title, DoughnutController, PieController, CategoryScale, ArcElement,
  Legend
} from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, DoughnutController, PieController, CategoryScale, ArcElement, Legend);

export async function configure(aurelia: Aurelia): Promise<void> {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin(PLATFORM.moduleName('aurelia-chart'));

  await aurelia.start();
  await aurelia.setRoot(PLATFORM.moduleName('app'));
}
