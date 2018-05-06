import { Injectable } from '@angular/core';
import { EventList, feed } from './feed';
import { feedEventType } from './consts';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
    eventList: EventList

    news_show: boolean = true;
    transaction_show: boolean = true;

    constructor() {
        this.eventList = feed;
        this.eventList.sortFeedByDate();
    }

    oldEventsFirst(): void {
        this.eventList.oldEventsFirst();
    }

    newEventsFirst(): void {
        this.eventList.newEventsFirst();
    }

    getFeed(): Observable<feedEventType[]> {
        return of(this.eventList.feed);
    }

    changeVisible(eventType: string, value: boolean): void {
        this.eventList.changeEventVisible(eventType, value);
    }

    getEvent(id: number): Observable<feedEventType> {
        return of(this.eventList.getEvent(id));
    }

    delete(id: number): void {
        this.eventList.delete(id);
    }
}
