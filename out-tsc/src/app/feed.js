"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var consts_1 = require("./consts");
var RAW_FEED = [
    {
        date: '2018-01-13 10:20',
        title: 'kek news 1',
        description: 'ololol',
        type: consts_1.eventTypes.NEWS
    },
    {
        date: '2018-01-14 10:20',
        title: 'kek news 2',
        description: 'ololol',
        type: consts_1.eventTypes.NEWS
    },
    {
        date: '2018-01-14 10:20',
        amount: 10000,
        currency: consts_1.currencyList.RUR,
        sender: 'keko sender',
        type: consts_1.eventTypes.TRANSACTION
    },
    {
        date: '2018-01-10 10:20',
        amount: 10000,
        currency: consts_1.currencyList.USD,
        sender: 'keko sender',
        type: consts_1.eventTypes.TRANSACTION,
        is_positive: false,
        description: 'kek'
    },
];
function EventFactory(event, id) {
    if (event.type === consts_1.eventTypes.NEWS) {
        return new consts_1.NewsEvent(event, id);
    }
    else if (event.type === consts_1.eventTypes.TRANSACTION) {
        return new consts_1.TransactionEvent(event, id);
    }
}
var EventList = /** @class */ (function () {
    function EventList(raw_feed) {
        var _this = this;
        this._sortByDate = true;
        this.idCounter = 1;
        this._feed = raw_feed.map(function (x, index) { return EventFactory(x, _this.getNextIndex()); });
    }
    Object.defineProperty(EventList.prototype, "feed", {
        get: function () {
            return this._feed;
        },
        enumerable: true,
        configurable: true
    });
    EventList.prototype.getNextIndex = function () {
        return this.idCounter++;
    };
    EventList.prototype.delete = function (id) {
        this._feed = this._feed.filter(function (event) { return event.id !== id; });
    };
    EventList.prototype.sortFeedByDate = function () {
        var _this = this;
        this._feed = this._feed.sort(function (a, b) {
            if (a.date > b.date && _this._sortByDate) {
                return -1;
            }
            return 1;
        });
    };
    EventList.prototype.oldEventsFirst = function () {
        if (this._sortByDate) {
            this._sortByDate = false;
            this.sortFeedByDate();
        }
    };
    EventList.prototype.newEventsFirst = function () {
        if (!this._sortByDate) {
            this._sortByDate = true;
            this.sortFeedByDate();
        }
    };
    EventList.prototype.getEvent = function (id) {
        return this.feed.find(function (event) { return event.id === id; });
    };
    EventList.prototype.changeEventVisible = function (eventType, value) {
        this._feed.forEach(function (event) {
            if (event.type === eventType) {
                event.visible = value;
            }
        });
    };
    EventList.prototype.addEvent = function (event, eventType) {
        var newEvent;
        if (eventType === consts_1.eventTypes.NEWS) {
            newEvent = new consts_1.NewsEvent(event, this.getNextIndex());
        }
        else if (eventType === consts_1.eventTypes.TRANSACTION) {
            newEvent = new consts_1.TransactionEvent(event, this.getNextIndex());
        }
        this._feed.splice(0, 0, newEvent);
    };
    return EventList;
}());
exports.EventList = EventList;
var feed = new EventList(RAW_FEED);
exports.feed = feed;
//# sourceMappingURL=feed.js.map