import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EventsService } from '../events.service';
import { feedEventType } from '../consts';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
    event: feedEventType;

    constructor(
        private route: ActivatedRoute,
        private eventService: EventsService,
        private location: Location
    ) { }

    ngOnInit() {
        this.getEvent();
    }

    getEvent(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.eventService.getEvent(id)
            .subscribe(event => this.event = event);
    }

}
