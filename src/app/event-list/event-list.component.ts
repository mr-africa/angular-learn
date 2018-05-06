import { Component, OnInit } from '@angular/core';
import { feedEventType } from '../consts';
import { EventsService } from '../events.service';

@Component({
  selector:  'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
    feed: feedEventType[];

    constructor(private eventService: EventsService) { }

    getFeed(): void {
        this.eventService.getFeed().subscribe(feed => this.feed = feed);
    }

    ngOnInit() {
        this.getFeed();
    }

}
