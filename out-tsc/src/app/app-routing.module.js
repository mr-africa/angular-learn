"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var event_detail_component_1 = require("./event-detail/event-detail.component");
var main_page_component_1 = require("./main-page/main-page.component");
var add_news_component_1 = require("./add-news/add-news.component");
var add_transaction_component_1 = require("./add-transaction/add-transaction.component");
var routes = [
    { path: '', component: main_page_component_1.MainPageComponent },
    { path: 'add-news', component: add_news_component_1.AddNewsComponent },
    { path: 'add-transaction', component: add_transaction_component_1.AddTransactionComponent },
    { path: ':id', component: event_detail_component_1.EventDetailComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            exports: [router_1.RouterModule],
            imports: [router_1.RouterModule.forRoot(routes)],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map