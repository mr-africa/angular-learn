import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-filter-by-date',
  templateUrl: './filter-by-date.component.html',
  styleUrls: ['./filter-by-date.component.css']
})
export class FilterByDateComponent implements OnInit {

    constructor(public eventService: EventsService) { }

    ngOnInit() {
    }
}
