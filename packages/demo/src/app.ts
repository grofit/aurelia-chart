import { ChartData } from 'chart.js';

export class App {
  constructor() {
    this.resetPieData();
    this.resetLineData();
  }

  DynamicDoughnutData: ChartData;
  SimpleLineData: ChartData;

  resetPieData() {
    this.DynamicDoughnutData = {
      labels: ['Red', 'Green', 'Yellow'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ]
        }]
    };
  }

  resetLineData() {
    this.SimpleLineData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Healthy People',
          backgroundColor: 'rgba(220,220,220,0.2)',
          borderColor: 'rgba(220,220,220,1)',
          pointBackgroundColor: 'rgba(220,220,220,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          data: [65, 59, 80, 81, 56, 55, 40],
          cubicInterpolationMode: 'default',
          tension: 0.4
        },
        {
          label: 'Ill People',
          backgroundColor: 'rgba(151,187,205,0.2)',
          borderColor: 'rgba(151,187,205,1)',
          pointBackgroundColor: 'rgba(151,187,205,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(151,187,205,1)',
          data: [28, 48, 40, 19, 86, 27, 90],
          cubicInterpolationMode: 'default',
          tension: 0.4
        }
      ]
    };
  }

  addEntry() {
    this.DynamicDoughnutData.labels?.push('New Colour');
    this.DynamicDoughnutData.datasets![0].data?.push(50);
    (this.DynamicDoughnutData.datasets![0].backgroundColor as string[]).push('#B4FD5C');
  }

}
