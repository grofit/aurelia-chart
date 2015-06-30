import {GravatarUrlGenerator} from "./generator/gravatar-url-generator"

export function configure(aurelia) {
    aurelia.container.registerInstance(GravatarUrlGenerator, new GravatarUrlGenerator());
    aurelia.globalizeResources("./elements/gravatar-element");
}