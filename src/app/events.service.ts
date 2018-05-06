import { Injectable } from '@angular/core';
import feed from './feed';
import { feedEventType } from './consts';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
    sortByDate: boolean = true;
    feed: feedEventType[];

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
}
