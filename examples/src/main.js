export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin('aurelia-chart', (settings) => {
            settings.lock = true;
        });

    aurelia.start().then(a => a.setRoot('src/app'));
}