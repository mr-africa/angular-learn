import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-event',
  templateUrl: './news-event.component.html',
  styleUrls: ['./news-event.component.css']
})
export class NewsEventComponent implements OnInit {
    @Input() news;

    constructor() { }

    ngOnInit() {
    }


}
