import {ObserverLocator, inject} from 'aurelia-framework';

@inject(ObserverLocator)
export class ModelObserver
{
    throttle = 100;

    _throttleTimeout = 0;

    constructor(observerLocator)
    {
        this.observerLocator = observerLocator;
    }

    observe(model, onChange)
    {
        var subscriptions = [];
        _getAllSubscriptions(model, subscriptions);

        function throttledHandler(change) {
            if(this.throttle > 0) {
                if(!this._throttleTimeout) {
                    this._throttleTimeout = setTimeout(function() {
                        this._throttleTimeout = null;
                        onChange();
                    }, this.throttle);
                }
            }
            else
            { onChange(); }
        }

        for(var i = 0; i < subscriptions.length; i++)
        { subscriptions[i].subscribe(throttledHandler); }
    }

    _getObjectType(obj) {
        if ((obj) && (typeof (obj) === "object") && (obj.constructor == (new Date).constructor)) return "date";
        return typeof obj;
    }

    _getAllSubscriptions(model, subscriptions)
    {
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
                }
                break;

                default:
                {
                    let propertyDescriptor = Object.getOwnPropertyDescriptor(model, property)
                    if(!propertyDescriptor.get)
                    {
                        let subscription = this.observerLocator.getObserver(model, property);
                        subscriptions.push(subscription);
                    }
                }
                break;
            }
        }
    }
}