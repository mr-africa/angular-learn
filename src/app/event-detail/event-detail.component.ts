import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
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
        private location: Location,
        private router: Router
    ) { }

    ngOnInit() {
        this.getEvent();
    }

    getEvent(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        const event = this.eventService.getEvent(id);
        if (event) {
            this.event = event;
        } else {
            this.router.navigate(['']);
        }
    }

}
