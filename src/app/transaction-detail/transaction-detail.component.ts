import { Component, OnInit, Input } from '@angular/core';
import { EventsService } from '../events.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css', '../../styles/transaction.css', '../../styles/buttons.css']
})
export class TransactionDetailComponent implements OnInit {
    @Input() transaction;

    constructor(
        private eventService: EventsService,
        private router: Router
    ) { }

    ngOnInit() {
    }

    delete() {
        this.eventService.delete(this.transaction.id);
        this.router.navigate(['']);
    }

}
