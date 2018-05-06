import { Injectable } from '@angular/core';
import feed from './feed';
import { feedEventType } from './consts';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
    feed: feedEventType[];
    sortByDate: boolean = true;
    news_show: boolean = true;
    transaction_show: boolean = true;


    constructor() { }

    sortFeed(): void {
        this.feed = feed.sort((a: feedEventType, b: feedEventType) => {
            if (a.date > b.date && this.sortByDate) {
                return -1;
            }
            return 1;
        });
    }

    oldEventsFirst(): void {
        if (this.sortByDate) {
            this.sortByDate = false;
            this.sortFeed();
        }
    }

    newEventsFirst(): void {
        if (!this.sortByDate) {
            this.sortByDate = true;
            this.sortFeed();
        }
    }

    getFeed(): Observable<feedEventType[]> {
        this.sortFeed();
        return of(this.feed);
    }

    changeVisible(eventType: string, value: boolean): void {
        this.feed = this.feed.map((event) => {
            if (event.type === eventType) {
                event.visible = value;
            }
            return event;
        });
    }
}
