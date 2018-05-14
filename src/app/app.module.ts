import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventComponent } from './event/event.component';
import { NewsEventComponent } from './news-event/news-event.component';
import { TransactionEventComponent } from './transaction-event/transaction-event.component';
import { FilterByDateComponent } from './filter-by-date/filter-by-date.component';
import { FilterByTypeComponent } from './filter-by-type/filter-by-type.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { AddEventComponent } from './add-event/add-event.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { AppRoutingModule } from './/app-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { KeysPipe } from './keys.pipe';
import { InnerPageHeaderComponent } from './inner-page-header/inner-page-header.component';
import { LinkButtonComponent } from './link-button/link-button.component';
import { MainPageHeaderComponent } from './main-page-header/main-page-header.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventComponent,
    NewsEventComponent,
    TransactionEventComponent,
    FilterByDateComponent,
    FilterByTypeComponent,
    NewsDetailComponent,
    TransactionDetailComponent,
    AddEventComponent,
    AddNewsComponent,
    AddTransactionComponent,
    MainPageComponent,
    EventDetailComponent,
    KeysPipe,
    InnerPageHeaderComponent,
    LinkButtonComponent,
    MainPageHeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
