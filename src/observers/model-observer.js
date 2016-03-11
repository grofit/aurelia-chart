import {BindingEngine, inject} from 'aurelia-framework';

@inject(BindingEngine)
export class ModelObserver
{
    throttle = 100;

    _throttleTimeout = 0;

    constructor(bindingEngine)
    {
        this.bindingEngine = bindingEngine;
    }

    observe = (model, onChange) =>
    {
        var subscriptions = [];
        this._getAllSubscriptions(model, subscriptions);

        var throttledHandler = (args) => {
            console.log("STARTING THROTTLE", args);
            if(this.throttle <= 0) { return onChange(); }

            if(!this._throttleTimeout) {
                this._throttleTimeout = setTimeout(() => {
                    this._throttleTimeout = null;
                    console.log("Throttle Ended");
                    onChange();
                }, this.throttle);
            }
        };

        console.log("LOOPING SUBS");
        for(var i = 0; i < subscriptions.length; i++)
        {
            console.log("Linking Sub to throttle", subscriptions[i]);
            subscriptions[i](throttledHandler);
        }
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
                    let subscription = this.bindingEngine.propertyObserver(model, property).subscribe;
                    if(subscription)
                    {
                        subscriptions.push(subscription);
                    }
                }
                break;
            }
        }
    }
}