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
var events_service_1 = require("../events.service");
var EventListComponent = /** @class */ (function () {
    function EventListComponent(eventService) {
        this.eventService = eventService;
    }
    EventListComponent.prototype.getFeed = function () {
        var _this = this;
        this.eventService.getFeed().subscribe(function (feed) { return _this.feed = feed; });
    };
    EventListComponent.prototype.ngOnInit = function () {
        this.getFeed();
    };
    EventListComponent = __decorate([
        core_1.Component({
            selector: 'app-event-list',
            templateUrl: './event-list.component.html',
            styleUrls: ['./event-list.component.css']
        }),
        __metadata("design:paramtypes", [events_service_1.EventsService])
    ], EventListComponent);
    return EventListComponent;
}());
exports.EventListComponent = EventListComponent;
//# sourceMappingURL=event-list.component.js.map