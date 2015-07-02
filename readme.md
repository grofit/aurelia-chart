# Aurelia-Chart

A simple binding to let aurelia and chartjs come together for the greater good.

It supports the basic graph types and should work with any custom ones.

One major reason why this is a good idea is because this way you do not need your view model
knowing about your DOM elements, as the binding takes care of that, so you just expose
the meaningful stuff.

## Install

use JSPM:

`jspm install github:grofit/aurelia-chart`

then include the plugin in aurelia

`aurelia.use.plugin("grofit/aurelia-chart");`

## Quirks

So there is a lot of magic behind the scenes to allow for observable hookins, there are a few issues
which require a bit of advance warning.

* If you are going to dynamically upate your data set a width/height on your canvas

This is because ChartJS seems to freak out when its destroyed and recreated and will otherwise shrink
into oblivion, we manually cache the desired width and height to stop this happening

* Do not use textual data for values

ChartJS can only handle numeric data, and we try to account for this when you receive input via knockout bindings
as by default ko treats all input values as a string, ChartJS dislikes this, so we have to go through the generated
data and manually replace textual instances of numbers to actual numbers.

* It is advised you set a throttle when you use `should-update`, and a graph will only update if `should-update` is true

It is a bit more resource intensive than we would like dynamically updating the data in the charts, it is not
super meltdown but it can slow things down if you are changing a lot of data in a short space of time. So it is
recommended to put a throttle on for at least 100 or higher to make sure you are not refreshing too much.

* Make sure the type matches the caps of the desired type

If you want a Pie chart make sure you do `type: 'Pie'` not `type: 'pie'` as it will not recognise the method and
will fall over. There was an initial fix to allow you to put in whatever case you wanted but then we realised
`PolarArea` would not work as it would end up as `Polararea` so we opted to leave that out for you to manage.

## Usage
The element expects a type element describing what type of chart you want and the data you wish to expose:
```
<chart type="Bar" Data.bind="myData" }"></chart>
```

Or it can be called with a options if you require more control over the chart:
```
<chart type="Pie" data.bind="myData" native-options.bind="{ segmentShowStroke: true, segmentStrokeColor: '#fff', segmentStrokeWidth: 2 } }"></chart>
```

Or you can tell it to listen to observable changes: (Not working due to re-structuring of aurelia bindings atm)
```
<chart type="Pie" data.bind="myData" should-update="true" throttle="100" }"></chart>
```

Finally there is also support for attributes directly on the canvas:
```
<canvas chart="type: Pie; data.bind: myData; should-update: true; throttle: 100;"></canvas>
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
* **should-update** - This option tells the binding to scan for observables in the data and refresh the chart when they change (NOT WORKING CURRENTLY)
* **throttle** - This option tells the binding to throttle updates by the desired amount, defaults to 100
* **native-options** - The options based upon the ChartJS options documented above, there are a couple of unique ones which we use
