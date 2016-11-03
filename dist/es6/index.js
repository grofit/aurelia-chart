import {ModelObserver} from "./observers/model-observer";

export function configure(aurelia) {
    aurelia.globalResources(
        "./elements/chart-element",
        "./attributes/chart-attribute"
    );

    aurelia.container.registerTransient(ModelObserver)
}
