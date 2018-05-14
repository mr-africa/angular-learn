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
var FilterByTypeComponent = /** @class */ (function () {
    function FilterByTypeComponent(eventService) {
        this.eventService = eventService;
    }
    FilterByTypeComponent.prototype.ngOnInit = function () {
    };
    FilterByTypeComponent = __decorate([
        core_1.Component({
            selector: 'app-filter-by-type',
            templateUrl: './filter-by-type.component.html',
            styleUrls: ['./filter-by-type.component.css']
        }),
        __metadata("design:paramtypes", [events_service_1.EventsService])
    ], FilterByTypeComponent);
    return FilterByTypeComponent;
}());
exports.FilterByTypeComponent = FilterByTypeComponent;
//# sourceMappingURL=filter-by-type.component.js.map