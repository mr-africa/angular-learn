import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';
import { EventsService } from '../events.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { currencyList } from '../consts';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css', '../../styles/buttons.css', '../../styles/forms.css']
})
export class AddTransactionComponent implements OnInit {
    AddTransactionForm: FormGroup;
    objectKeys = Object.keys;
    curencyList = currencyList;
    is_positive:boolean;
    title:string;
    symbol:string;

    constructor(
        private route: ActivatedRoute,
        private eventService: EventsService,
        private location: Location,
        private router: Router
    ) { }

    ngOnInit() {
        this.AddTransactionForm = new FormGroup({
            amount: new FormControl(null, [
                Validators.required,
                // Validators.
            ]),
            currency: new FormControl(null, [
                Validators.required,
            ]),
            sender: new FormControl(null, [
                Validators.required,
            ]),
            is_positive: new FormControl(null, []),
            description: new FormControl(null, []),
        });
        this.getStatus();
    }
    onSubmit() {
        const transaction = Object.assign({}, this.AddTransactionForm.value);
        transaction.is_positive = this.is_positive;
        this.eventService.addTransaction(transaction);
        this.router.navigate(['']);
    }

    getStatus(): void {
        const transactionType = this.route.snapshot.paramMap.get('type');
        if (transactionType === 'positive') {
            this.is_positive = true;
            this.title = 'Добавить приход'
        } else if (transactionType === 'negative') {
            this.is_positive = false;
            this.title = 'Добавить расход'
            this.symbol = '-';
        } else {
            this.router.navigate(['']);
        }
    }

}
