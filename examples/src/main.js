export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin('aurelia-chart');

    aurelia.start().then(a => a.setRoot('src/app'));
}