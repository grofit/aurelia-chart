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

`ChartConfiguration` registers the `<chart>` custom element, the `chart` custom attribute, and the model observer used for dynamic updates. The package registers the Bar, Line, Scatter, and time-series Chart.js components plus the annotation plugin. Register any additional Chart.js controllers required by your application.

## Quirks

So there is a lot of magic behind the scenes to allow for observable hook-ins, there are a few issues
which require a bit of advance warning.

* It is advised you set a throttle when you use `should-update`, and a graph will only update if `should-update` is true

It is a bit more resource intensive than we would like dynamically updating the data in the charts, it is not
super meltdown but it can slow things down if you are changing a lot of data in a short space of time. So it is
recommended to put a throttle on for at least 100 or higher to make sure you are not refreshing too much.

## Usage
The element expects a type element describing what type of chart you want and the data you wish to expose:
```
<chart type="bar" data.bind="myData"></chart>
```

Or it can be called with a options if you require more control over the chart:
```
<chart type="pie" data.bind="myData" native-options.bind="{ segmentShowStroke: true, segmentStrokeColor: '#fff', segmentStrokeWidth: 2 }"></chart>
```

Or you can tell it to listen to observable changes:
```
<chart type="pie" data.bind="myData" should-update="true" throttle="100"></chart>
```

Finally there is also support for attributes directly on the canvas:
```
<canvas chart="type: pie; data.bind: myData; should-update: true; throttle: 100;"></canvas>
```

So you can have finer grained control over the element yourself if needed.

Chart.js configuration options are documented in the [Chart.js documentation](https://www.chartjs.org/docs/latest/).

The available attributes are:

* **type** - The Chart.js chart type, such as `bar`, `line`, or `scatter`
* **data** - The data you want to put in, should match the desired format of data in the ChartJS documentation, observables will be translated for you
* **should-update** - This option tells the binding to scan for observables in the data and refresh the chart when they change
* **throttle** - This option tells the binding to throttle updates by the desired amount, defaults to 100
* **native-options** - The options based upon the ChartJS options documented above, there are a couple of unique ones which we use

## Development

```sh
npm install
npm run build
npm run lint
npm start
```

`npm start` runs the Aurelia 2 demo with Vite.
