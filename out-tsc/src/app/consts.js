"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var eventTypes;
(function (eventTypes) {
    eventTypes["NEWS"] = "news";
    eventTypes["TRANSACTION"] = "transaction";
})(eventTypes || (eventTypes = {}));
exports.eventTypes = eventTypes;
;
var currencyList = { USD: 'USD', RUR: 'RUR', EUR: 'EUR' };
exports.currencyList = currencyList;
var FeedEvent = /** @class */ (function () {
    function FeedEvent(date, id) {
        this.visible = true;
        if (date) {
            this.date = new Date(date);
        }
        else {
            this.date = new Date();
        }
        this.id = id;
    }
    FeedEvent.prototype.isNews = function () {
        return this.type === eventTypes.NEWS;
    };
    FeedEvent.prototype.isTransaction = function () {
        return this.type === eventTypes.TRANSACTION;
    };
    FeedEvent.prototype.dateOutput = function () {
        return this.date.toLocaleString();
    };
    return FeedEvent;
}());
var NewsEvent = /** @class */ (function (_super) {
    __extends(NewsEvent, _super);
    function NewsEvent(event, id) {
        var _this = _super.call(this, event.date, id) || this;
        _this.isViewed = false;
        _this.type = eventTypes.NEWS;
        _this.title = event.title;
        _this.description = event.description;
        return _this;
    }
    return NewsEvent;
}(FeedEvent));
exports.NewsEvent = NewsEvent;
var TransactionEvent = /** @class */ (function (_super) {
    __extends(TransactionEvent, _super);
    function TransactionEvent(event, id) {
        var _this = _super.call(this, event.date, id) || this;
        _this.type = eventTypes.TRANSACTION;
        _this._amount = event.amount;
        _this.currency = event.currency;
        _this.sender = event.sender;
        _this.is_positive = event.is_positive;
        _this.description = event.description;
        return _this;
    }
    Object.defineProperty(TransactionEvent.prototype, "amount", {
        get: function () {
            return (this._amount / 100).toFixed(2);
        },
        enumerable: true,
        configurable: true
    });
    return TransactionEvent;
}(FeedEvent));
exports.TransactionEvent = TransactionEvent;
//# sourceMappingURL=consts.js.map