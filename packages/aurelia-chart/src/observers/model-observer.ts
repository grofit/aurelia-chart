import { BindingEngine, inject, Disposable, CollectionObserver } from 'aurelia-framework';

@inject(BindingEngine)
export class ModelObserver {
  throttle = 100;

  _throttleTimeout?: ReturnType<typeof setTimeout>;
  _activeSubscriptions: Disposable[] = [];

  constructor(private bindingEngine: BindingEngine) { }

  observe = (model: unknown, onChange: () => void) => {
    const subscriptions: CollectionObserver['subscribe'][] = [];
    this._getAllSubscriptions(model, subscriptions);

    const throttledHandler = () => {
      if (this.throttle <= 0) {
        return onChange();
      }

      if (!this._throttleTimeout) {
        this._throttleTimeout = setTimeout(() => {
          this._throttleTimeout = undefined;
          onChange();
        }, this.throttle);
      }
    };

    for (let i = 0; i < subscriptions.length; i++) {
      const outstandingSubscription = subscriptions[i](throttledHandler);
      this._activeSubscriptions.push(outstandingSubscription);
    }
  };

  unsubscribe = () => {
    for (let i = 0; i < this._activeSubscriptions.length; i++) {
      this._activeSubscriptions[i].dispose();
    }

    this._activeSubscriptions = [];
  };

  _getObjectType(obj: unknown) {
    if (obj instanceof Date) {
      return 'date';
    } else if (obj instanceof Array) {
      // return 'array';
    }
    return typeof obj;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _getAllSubscriptions(model: any, subscriptions: CollectionObserver['subscribe'][]) {
    if (model instanceof Array) {
      const subscription = this.bindingEngine.collectionObserver(model).subscribe;
      subscriptions.push(subscription);
    }

    for (const property in model) {
      const typeOfData = this._getObjectType(model[property]);
      switch (typeOfData) {
        case 'object':
          this._getAllSubscriptions(model[property], subscriptions);
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
