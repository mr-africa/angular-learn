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
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var events_service_1 = require("../events.service");
var EventDetailComponent = /** @class */ (function () {
    function EventDetailComponent(route, eventService, location, router) {
        this.route = route;
        this.eventService = eventService;
        this.location = location;
        this.router = router;
    }
    EventDetailComponent.prototype.ngOnInit = function () {
        this.getEvent();
    };
    EventDetailComponent.prototype.getEvent = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.eventService.getEvent(id).subscribe(function (event) {
            if (event) {
                _this.event = event;
            }
            else {
                _this.router.navigate(['']);
            }
        });
    };
    EventDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-event-detail',
            templateUrl: './event-detail.component.html',
            styleUrls: ['./event-detail.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            events_service_1.EventsService,
            common_1.Location,
            router_1.Router])
    ], EventDetailComponent);
    return EventDetailComponent;
}());
exports.EventDetailComponent = EventDetailComponent;
//# sourceMappingURL=event-detail.component.js.map