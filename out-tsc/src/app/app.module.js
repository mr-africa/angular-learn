"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var event_list_component_1 = require("./event-list/event-list.component");
var event_component_1 = require("./event/event.component");
var news_event_component_1 = require("./news-event/news-event.component");
var transaction_event_component_1 = require("./transaction-event/transaction-event.component");
var filters_component_1 = require("./filters/filters.component");
var filter_by_date_component_1 = require("./filter-by-date/filter-by-date.component");
var filter_by_type_component_1 = require("./filter-by-type/filter-by-type.component");
var news_detail_component_1 = require("./news-detail/news-detail.component");
var transaction_detail_component_1 = require("./transaction-detail/transaction-detail.component");
var add_event_component_1 = require("./add-event/add-event.component");
var add_news_component_1 = require("./add-news/add-news.component");
var add_transaction_component_1 = require("./add-transaction/add-transaction.component");
var app_routing_module_1 = require(".//app-routing.module");
var main_page_component_1 = require("./main-page/main-page.component");
var event_detail_component_1 = require("./event-detail/event-detail.component");
var keys_pipe_1 = require("./keys.pipe");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                event_list_component_1.EventListComponent,
                event_component_1.EventComponent,
                news_event_component_1.NewsEventComponent,
                transaction_event_component_1.TransactionEventComponent,
                filters_component_1.FiltersComponent,
                filter_by_date_component_1.FilterByDateComponent,
                filter_by_type_component_1.FilterByTypeComponent,
                news_detail_component_1.NewsDetailComponent,
                transaction_detail_component_1.TransactionDetailComponent,
                add_event_component_1.AddEventComponent,
                add_news_component_1.AddNewsComponent,
                add_transaction_component_1.AddTransactionComponent,
                main_page_component_1.MainPageComponent,
                event_detail_component_1.EventDetailComponent,
                keys_pipe_1.KeysPipe
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.ReactiveFormsModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map