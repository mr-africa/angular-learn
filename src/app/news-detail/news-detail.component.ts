import { Component, OnInit, Input } from '@angular/core';
import { Router} from '@angular/router';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css', '../../styles/buttons.css']
})
export class NewsDetailComponent implements OnInit {
    @Input() news;

    constructor(
        private eventService: EventsService,
        private router: Router
    ) { }

    ngOnInit() {
    }

    readNews(): void {
        this.eventService.readNews(this.news.id);
        this.router.navigate(['']);
    }

}
