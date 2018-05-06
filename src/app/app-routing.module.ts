import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { MainPageComponent } from './main-page/main-page.component';


const routes: Routes = [
    { path: '', component: MainPageComponent },
    { path: ':id', component: EventDetailComponent },
];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
