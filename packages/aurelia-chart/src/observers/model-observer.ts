import { IObserverLocator, resolve, transient } from 'aurelia';

type Subscribable = { subscribe(subscriber: ChangeSubscriber): void; unsubscribe(subscriber: ChangeSubscriber): void };

class ChangeSubscriber {
  constructor(private onChange: () => void) { }

  handleChange() {
    this.onChange();
  }

  handleCollectionChange() {
    this.onChange();
  }
}

@transient()
export class ModelObserver {
  throttle = 100;

  private throttleTimeout?: ReturnType<typeof setTimeout>;
  private activeSubscriptions: { observer: Subscribable; subscriber: ChangeSubscriber }[] = [];
  private observerLocator = resolve(IObserverLocator);

  observe = (model: unknown, onChange: () => void) => {
    const subscriptions: Subscribable[] = [];
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

    const subscriber = new ChangeSubscriber(throttledHandler);
    for (let i = 0; i < subscriptions.length; i++) {
      subscriptions[i].subscribe(subscriber);
      this.activeSubscriptions.push({ observer: subscriptions[i], subscriber });
    }
  };

  unsubscribe = () => {
    for (let i = 0; i < this.activeSubscriptions.length; i++) {
      const { observer, subscriber } = this.activeSubscriptions[i];
      observer.unsubscribe(subscriber);
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

  private getAllSubscriptions(model: any, subscriptions: Subscribable[]) {
    if (!model) {
      return;
    }

    if (model instanceof Array) {
      const subscription = this.observerLocator.getArrayObserver(model);
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
          const subscription = this.observerLocator.getObserver(model, property);
          subscriptions.push(subscription);
          break;
        }
      }
    }
  }
}
