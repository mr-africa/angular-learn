import { Component, OnInit } from '@angular/core';
import feed from '../feed';
import { feedEventType } from '../consts';

@Component({
  selector:  'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
    feed: feedEventType[];

    constructor() { }

    sortedFeed() {
        return feed.sort((a: feedEventType, b: feedEventType) => {
            if (a.date > b.date) {
                return -1;
            }
            return 1;
        });
    }

    ngOnInit() {
        this.feed = this.sortedFeed();
    }

}
