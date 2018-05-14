import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-filter-by-type',
  templateUrl: './filter-by-type.component.html',
  styleUrls: ['./filter-by-type.component.css', '../../styles/filters.css']
})
export class FilterByTypeComponent implements OnInit {

    constructor(public eventService: EventsService) { }

    ngOnInit() {
    }

}
