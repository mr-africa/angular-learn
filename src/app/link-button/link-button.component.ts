import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-link-button',
  templateUrl: './link-button.component.html',
  styleUrls: ['./link-button.component.css', '../../styles/buttons.css']
})
export class LinkButtonComponent implements OnInit {
    @Input() link: string;
    @Input() label: string;
    @Input() symbol: string;

    constructor() { }

    ngOnInit() {
    }

}
