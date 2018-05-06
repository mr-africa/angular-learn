import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private eventService: EventsService,
        private location: Location,
        private router: Router
    ) { }

    ngOnInit() {
    }

}
