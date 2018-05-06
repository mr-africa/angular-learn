import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private eventService: EventsService,
        private location: Location,
        private router: Router
    ) { }

    ngOnInit() {
    }

}
