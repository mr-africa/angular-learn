"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var feed_1 = require("./feed");
var consts_1 = require("./consts");
var rxjs_1 = require("rxjs");
var EventsService = /** @class */ (function () {
    function EventsService() {
        this.news_show = true;
        this.transaction_show = true;
        this.eventList = feed_1.feed;
        this.eventList.sortFeedByDate();
    }
    EventsService.prototype.oldEventsFirst = function () {
        this.eventList.oldEventsFirst();
    };
    EventsService.prototype.newEventsFirst = function () {
        this.eventList.newEventsFirst();
    };
    EventsService.prototype.getFeed = function () {
        return rxjs_1.of(this.eventList.feed);
    };
    EventsService.prototype.changeVisible = function (eventType, value) {
        this.eventList.changeEventVisible(eventType, value);
    };
    EventsService.prototype.getEvent = function (id) {
        return rxjs_1.of(this.eventList.getEvent(id));
    };
    EventsService.prototype.delete = function (id) {
        this.eventList.delete(id);
    };
    EventsService.prototype.addNews = function (news) {
        this.eventList.addEvent(news, consts_1.eventTypes.NEWS);
    };
    EventsService.prototype.addTransaction = function (transaction) {
        this.eventList.addEvent(transaction, consts_1.eventTypes.TRANSACTION);
    };
    EventsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], EventsService);
    return EventsService;
}());
exports.EventsService = EventsService;
//# sourceMappingURL=events.service.js.map