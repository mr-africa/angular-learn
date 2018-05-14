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
var forms_1 = require("@angular/forms");
var consts_1 = require("../consts");
var AddTransactionComponent = /** @class */ (function () {
    function AddTransactionComponent(route, eventService, location, router) {
        this.route = route;
        this.eventService = eventService;
        this.location = location;
        this.router = router;
        this.objectKeys = Object.keys;
        this.curencyList = consts_1.currencyList;
    }
    AddTransactionComponent.prototype.ngOnInit = function () {
        this.AddTransactionForm = new forms_1.FormGroup({
            amount: new forms_1.FormControl(null, [
                forms_1.Validators.required,
            ]),
            currency: new forms_1.FormControl(null, [
                forms_1.Validators.required,
            ]),
            sender: new forms_1.FormControl(null, [
                forms_1.Validators.required,
            ]),
            is_positive: new forms_1.FormControl(null, []),
            description: new forms_1.FormControl(null, []),
        });
    };
    AddTransactionComponent.prototype.onSubmit = function () {
        var transaction = Object.assign({}, this.AddTransactionForm.value);
        this.eventService.addTransaction(transaction);
        this.router.navigate(['']);
    };
    AddTransactionComponent = __decorate([
        core_1.Component({
            selector: 'app-add-transaction',
            templateUrl: './add-transaction.component.html',
            styleUrls: ['./add-transaction.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            events_service_1.EventsService,
            common_1.Location,
            router_1.Router])
    ], AddTransactionComponent);
    return AddTransactionComponent;
}());
exports.AddTransactionComponent = AddTransactionComponent;
//# sourceMappingURL=add-transaction.component.js.map