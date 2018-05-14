import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-transaction-event',
  templateUrl: './transaction-event.component.html',
  styleUrls: ['./transaction-event.component.css', '../../styles/transaction.css']
})
export class TransactionEventComponent implements OnInit {
    @Input() transaction;

    constructor() { }

    ngOnInit() {
    }

}
