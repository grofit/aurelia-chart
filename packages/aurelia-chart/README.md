# Aurelia Chart

Aurelia 2 elements and attributes for [Chart.js](https://www.chartjs.org/).

## Installation

```sh
npm install aurelia-chart chart.js chartjs-adapter-date-fns chartjs-plugin-annotation date-fns
```

## Configuration

```ts
import Aurelia from 'aurelia';
import { ChartConfiguration } from 'aurelia-chart';
import { App } from './app';

Aurelia
  .register(ChartConfiguration)
  .app(App)
  .start();
```

## Usage

```html
<chart type="bar" data.bind="chartData" native-options.bind="chartOptions"></chart>

<canvas
  chart="type: line; data.bind: chartData; should-update: true; throttle: 100">
</canvas>
```

`should-update` observes nested data changes and refreshes the chart. Use `throttle` to control the refresh frequency; it defaults to 100 ms.

The package registers the Bar, Line, Scatter, and time-series Chart.js components plus the annotation plugin. Register any additional Chart.js controllers required by your application.
