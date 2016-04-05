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
            if(this.throttle <= 0) { return onChange(); }

            if(!this._throttleTimeout) {
                this._throttleTimeout = setTimeout(() => {
                    this._throttleTimeout = null;
                    onChange();
                }, this.throttle);
            }
        };

        for(var i = 0; i < subscriptions.length; i++)
        { subscriptions[i](throttledHandler); }
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
            console.log("type of Data", typeOfData, property);
            switch(typeOfData)
            {
                case "object":
                { this._getAllSubscriptions(model[property], subscriptions); }
                break;
                case "array":
                {
                    console.log("found an array");
                    var underlyingArray = model[property]();
                    underlyingArray.forEach((entry, index) => { this._getAllSubscriptions(underlyingArray[index], subscriptions); });
                    let arraySubscription = this.bindingEngine.propertyObserver(model, property).subscribe;
                    console.log("array sub", arraySubscription);
                    if(arraySubscription)
                    {
                        console.log("pushing array sub");
                        subscriptions.push(arraySubscription);
                    }
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