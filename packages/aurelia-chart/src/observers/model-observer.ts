import { BindingEngine, inject, Disposable, CollectionObserver } from 'aurelia-framework';

@inject(BindingEngine)
export class ModelObserver {
  throttle = 100;

  private throttleTimeout?: ReturnType<typeof setTimeout>;
  private activeSubscriptions: Disposable[] = [];

  constructor(private bindingEngine: BindingEngine) { }

  observe = (model: unknown, onChange: () => void) => {
    const subscriptions: CollectionObserver['subscribe'][] = [];
    this.getAllSubscriptions(model, subscriptions);

    const throttledHandler = () => {
      if (this.throttle <= 0) {
        return onChange();
      }

      if (!this.throttleTimeout) {
        this.throttleTimeout = setTimeout(() => {
          this.throttleTimeout = undefined;
          onChange();
        }, this.throttle);
      }
    };

    for (let i = 0; i < subscriptions.length; i++) {
      const outstandingSubscription = subscriptions[i](throttledHandler);
      this.activeSubscriptions.push(outstandingSubscription);
    }
  };

  unsubscribe = () => {
    for (let i = 0; i < this.activeSubscriptions.length; i++) {
      this.activeSubscriptions[i].dispose();
    }

    this.activeSubscriptions = [];
  };

  private getObjectType(obj: unknown) {
    if (obj instanceof Date) {
      return 'date';
    } else if (obj instanceof Array) {
      // return 'array';
    }
    return typeof obj;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private getAllSubscriptions(model: any, subscriptions: CollectionObserver['subscribe'][]) {
    if (model instanceof Array) {
      const subscription = this.bindingEngine.collectionObserver(model).subscribe;
      subscriptions.push(subscription);
    }

    for (const property in model) {
      const typeOfData = this.getObjectType(model[property]);
      switch (typeOfData) {
        case 'object':
          this.getAllSubscriptions(model[property], subscriptions);
          break;
        // case 'array': {
        //   const underlyingArray = model[property]() as unknown[];
        //   underlyingArray.forEach((_, index) => this._getAllSubscriptions(underlyingArray[index], subscriptions));

        //   const arraySubscription = this.bindingEngine.propertyObserver(model, property).subscribe;
        //   if (arraySubscription) {
        //     subscriptions.push(arraySubscription);
        //   }
        //   break;
        // }
        default: {
          const subscription = this.bindingEngine.propertyObserver(model, property).subscribe;
          if (subscription) {
            subscriptions.push(subscription);
          }
          break;
        }
      }
    }
  }
}
