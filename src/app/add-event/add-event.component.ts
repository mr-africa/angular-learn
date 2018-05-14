import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css', '../../styles/buttons.css'],
})
export class AddEventComponent implements OnInit {
    showButtons: boolean = false;

    constructor() { }

    ngOnInit() {
    }

    showActions() {
        this.showButtons = true;
    }
    hideActions() {
        this.showButtons = false;
    }

}
