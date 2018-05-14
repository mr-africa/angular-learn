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
var router_1 = require("@angular/router");
var TransactionDetailComponent = /** @class */ (function () {
    function TransactionDetailComponent(eventService, router) {
        this.eventService = eventService;
        this.router = router;
    }
    TransactionDetailComponent.prototype.ngOnInit = function () {
    };
    TransactionDetailComponent.prototype.delete = function () {
        this.eventService.delete(this.transaction.id);
        this.router.navigate(['']);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], TransactionDetailComponent.prototype, "transaction", void 0);
    TransactionDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-transaction-detail',
            templateUrl: './transaction-detail.component.html',
            styleUrls: ['./transaction-detail.component.css']
        }),
        __metadata("design:paramtypes", [events_service_1.EventsService,
            router_1.Router])
    ], TransactionDetailComponent);
    return TransactionDetailComponent;
}());
exports.TransactionDetailComponent = TransactionDetailComponent;
//# sourceMappingURL=transaction-detail.component.js.map