import { Component, OnInit, Input } from '@angular/core';
import { NEWS_EVENT_TYPE, TRANSACTION_EVENT_TYPE } from '../consts';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
    @Input() event;

    constructor() { }

    ngOnInit() {}

}
