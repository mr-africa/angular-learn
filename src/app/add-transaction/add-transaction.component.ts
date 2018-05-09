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
    }
    onSubmit() {
        let transaction = Object.assign({}, this.AddTransactionForm.value);
        this.eventService.addTransaction(transaction);
        this.router.navigate(['']);
    }

}
