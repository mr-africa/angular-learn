import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';

const routes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'add-news', component: AddNewsComponent },
    { path: 'add-transaction/:type', component: AddTransactionComponent },
    { path: 'event/:id', component: EventDetailComponent },
];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
