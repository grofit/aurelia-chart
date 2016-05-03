import {BindingEngine, inject} from 'aurelia-framework';

@inject(BindingEngine)
export class ModelObserver
{
    throttle = 100;

    _throttleTimeout = 0;
    _activeSubscriptions = [];

    constructor(bindingEngine, observerLocator)
    {
        this.bindingEngine = bindingEngine;
        this.observerLocator = observerLocator;
    }

    observe = (model, onChange) =>
    {
        var subscriptions = [];
        this._getAllSubscriptions(model, subscriptions);

        var throttledHandler = (args) => {
            if(this.throttle <= 0) { return onChange(); }

            if(!this._throttleTimeout) {
                this._throttleTimeout = setTimeout(() => {
                    this._throttleTimeout = null;
                    onChange();
                }, this.throttle);
            }
        };

        for(var i = 0; i < subscriptions.length; i++)
        {
            let outstandingSubscription = subscriptions[i](throttledHandler);
            this._activeSubscriptions.push(outstandingSubscription);
        }
    }

    unsubscribe = () => {
        for(var i = 0; i < this._activeSubscriptions.length; i++)
        { this._activeSubscriptions[i].dispose(); }

        this._activeSubscriptions = [];
    }

    _getObjectType(obj) {
        if ((obj) && (typeof (obj) === "object") && (obj.constructor == (new Date).constructor)) return "date";
        return typeof obj;
    }
    
    _getAllSubscriptions(model, subscriptions)
    {
        if(Array.isArray(model)){
            let subscription = this.bindingEngine.collectionObserver(model).subscribe;
            subscriptions.push(subscription);
        }

        for (var property in model)
        {
            var typeOfData = this._getObjectType(model[property]);
            switch(typeOfData)
            {
                case "object":
                { this._getAllSubscriptions(model[property], subscriptions); }
                break;
                case "array":
                {
                    var underlyingArray = model[property]();
                    underlyingArray.forEach((entry, index) => { this._getAllSubscriptions(underlyingArray[index], subscriptions); });

                    let arraySubscription = this.bindingEngine.propertyObserver(model, property).subscribe;
                    if(arraySubscription)
                    { subscriptions.push(arraySubscription); }
                }
                break;

                default:
                {
                    let subscription = this.bindingEngine.propertyObserver(model, property).subscribe;
                    if(subscription)
                    { subscriptions.push(subscription); }
                }
                break;
            }
        }
    }
}