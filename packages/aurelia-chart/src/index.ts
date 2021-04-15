import { ModelObserver } from './observers/model-observer';
import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export function configure(aurelia: FrameworkConfiguration) {
  aurelia.globalResources([
    PLATFORM.moduleName('./elements/chart-element'),
    PLATFORM.moduleName('./attributes/chart-attribute')
  ]);
  aurelia.container.registerTransient(ModelObserver);
}
