# Aurelia-Chart

A simple binding to let aurelia and chartjs (2.x) come together for the greater good.

It supports the basic graph types and should work with any custom ones.

## IMPORTANT CHANGES

Since version 0.2.0 of this library it has moved over to use the newer chartjs 2.x, which means schemas
are now slightly different for certain graphs (like pies) and some of the properties have been renamed. 
So if you need to stick with the old chartjs (1.x) syntax use versions of this library < 0.2.0. Also in
the latest chartjs the type syntax is lower case now, so you no longer need to worry about caps.

## Install

### JSPM
use JSPM:

`jspm install npm:aurelia-chart`

then include the plugin in aurelia

`aurelia.use.plugin("aurelia-chart");`

### Webpack
use npm to install Aurelia-Chart
`npm install aurelia-chart --save`

then modify your `package.json` to include the Aurelia-Chart resources
```javascript
dependencies {
 ...
},
"aurelia": {
    "build": {
      "resources": [
        "aurelia-chart/elements/chart-element",
        "aurelia-chart/attributes/chart-attribute"
      ]
    }
}
```

## Example

After MANY hours of soul destroying asking of questions and finding out system.js seems to have a weird bug,
there is now a space age example available for you to see:

[View Example](https://rawgit.com/grofit/aurelia-chart/master/examples/index.html)

You can see the code and everything in the examples folder!

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

Or you can tell it to listen to observable changes: (Not working due to re-structuring of aurelia bindings atm)
```
<chart type="pie" data.bind="myData" should-update="true" throttle="100"></chart>
```

Finally there is also support for attributes directly on the canvas:
```
<canvas chart="type: pie; data.bind: myData; should-update: true; throttle: 100;"></canvas>
```

So you can have finer grained control over the element yourself if needed.

The chartjs specific options can be found here:

http://www.chartjs.org/docs/#line-chart-chart-options

http://www.chartjs.org/docs/#bar-chart-chart-options

http://www.chartjs.org/docs/#radar-chart-chart-options

http://www.chartjs.org/docs/#polar-area-chart-chart-options

http://www.chartjs.org/docs/#doughnut-pie-chart-chart-options

The available attributes are:

* **type** - The type of chart you want, i.e. Pie, Bar, Doughnut etc, make sure the caps matches or it will blow up
* **data** - The data you want to put in, should match the desired format of data in the ChartJS documentation, observables will be translated for you
* **should-update** - This option tells the binding to scan for observables in the data and refresh the chart when they change
* **throttle** - This option tells the binding to throttle updates by the desired amount, defaults to 100
* **native-options** - The options based upon the ChartJS options documented above, there are a couple of unique ones which we use
