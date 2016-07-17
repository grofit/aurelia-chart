/*eslint-disable no-var,no-unused-vars*/
var Promise = require('bluebird').config({longStackTraces: false, warnings: false}); // Promise polyfill for IE11

import { bootstrap } from 'aurelia-bootstrapper-webpack';
import Chart from 'chart.js';

import 'bootstrap';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import '../styles/styles.css';

bootstrap(function(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-chart');

    aurelia.start().then(() => aurelia.setRoot('app', document.body));
});
